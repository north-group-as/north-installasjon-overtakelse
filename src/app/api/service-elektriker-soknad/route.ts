import { NextResponse } from "next/server";
import {
  createServiceApplicationItem,
  uploadCvToApplication,
  type ServiceApplicationData,
} from "@/lib/integrations/monday-service-application";
import { sendServiceApplicationFallbackEmail } from "@/lib/integrations/resend-service-application";

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel" }, { status: 400 });
  }

  // Honeypot: hvis botfelt er fylt ut, returner 200 uten å behandle
  const honeypot = formData.get("_website") as string;
  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const phone = (formData.get("phone") as string) || "";
  const message = (formData.get("message") as string) || "";

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Mangler påkrevde felt: navn, e-post, telefon" },
      { status: 400 }
    );
  }

  const cvEntry = formData.get("cv");
  if (!(cvEntry instanceof File) || cvEntry.size === 0) {
    return NextResponse.json({ error: "CV mangler" }, { status: 400 });
  }
  const cv = {
    filename: cvEntry.name,
    content: Buffer.from(await cvEntry.arrayBuffer()),
  };

  const applicationData: ServiceApplicationData = {
    name,
    email,
    phone,
    message: message || undefined,
  };

  // Prøv å opprette søknaden i Monday. Hvis det feiler, skal søknaden
  // likevel ikke gå tapt - fall tilbake til e-post.
  try {
    const itemId = await createServiceApplicationItem(applicationData);
    try {
      await uploadCvToApplication(itemId, cv);
    } catch (err) {
      console.error("[service-elektriker-soknad] CV-opplasting feilet:", err);
      // Selve søknaden er allerede opprettet i Monday, så vi sender ikke
      // fallback-e-post for dette alene - men CV-en må ettersendes manuelt.
      try {
        await sendServiceApplicationFallbackEmail(applicationData, cv);
      } catch (emailErr) {
        console.error(
          "[service-elektriker-soknad] Fallback-e-post for CV feilet også:",
          emailErr
        );
      }
    }
  } catch (err) {
    console.error("[service-elektriker-soknad] Monday-feil:", err);
    try {
      await sendServiceApplicationFallbackEmail(applicationData, cv);
    } catch (emailErr) {
      console.error("[service-elektriker-soknad] Fallback-e-post feilet også:", emailErr);
      // Begge veier feilet - gi brukeren beskjed om å ta kontakt direkte
      // i stedet for å late som alt gikk bra.
      return NextResponse.json(
        {
          error:
            "Vi klarte ikke å motta søknaden akkurat nå. Send den heller direkte til lowrens@northinstallasjon.no.",
        },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ success: true });
}
