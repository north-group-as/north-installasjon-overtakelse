import { NextResponse } from "next/server";
import { createMondayItem, uploadFilesToMondayItem, type LeadSource } from "@/lib/integrations/monday";
import { sendFileEmail, type FileAttachment } from "@/lib/integrations/resend";

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Ugyldig forespørsel" },
      { status: 400 }
    );
  }

  // Honeypot: hvis botfelt er fylt ut, returner 200 uten å behandle
  const honeypot = formData.get("_website") as string;
  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  const source = formData.get("source") as LeadSource;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const address = (formData.get("address") as string) || "";
  const addressLat = formData.get("addressLat")
    ? Number(formData.get("addressLat"))
    : undefined;
  const addressLng = formData.get("addressLng")
    ? Number(formData.get("addressLng"))
    : undefined;

  if (!source || !name || !phone || !email) {
    return NextResponse.json(
      { error: "Mangler påkrevde felt: source, name, phone, email" },
      { status: 400 }
    );
  }

  // Bygg melding med eventuell tidsperiode
  let message = (formData.get("message") as string) || "";
  const preferredFrom = formData.get("preferred_from") as string;
  const preferredTo = formData.get("preferred_to") as string;
  if (preferredFrom || preferredTo) {
    const period = [preferredFrom, preferredTo].filter(Boolean).join(" – ");
    message = message
      ? `${message}\n\nØnsket tidsperiode: ${period}`
      : `Ønsket tidsperiode: ${period}`;
  }

  const leadData = {
    source,
    name,
    phone,
    email,
    address: address || undefined,
    addressPlaceId: (formData.get("addressPlaceId") as string) || undefined,
    addressLat: Number.isFinite(addressLat) ? addressLat : undefined,
    addressLng: Number.isFinite(addressLng) ? addressLng : undefined,
    message: message || undefined,
    service: (formData.get("service") as string) || undefined,
    estimate: formData.get("estimate")
      ? Number(formData.get("estimate"))
      : undefined,
    haster: formData.get("haster") === "true",
  };

  // Hent filer fra FormData
  const attachments: FileAttachment[] = [];
  const fileEntries = formData.getAll("files");
  for (const entry of fileEntries) {
    if (entry instanceof File && entry.size > 0) {
      const buffer = Buffer.from(await entry.arrayBuffer());
      attachments.push({ filename: entry.name, content: buffer });
    }
  }

  // Opprett kort i Monday.com
  let mondayItemId = "";
  try {
    mondayItemId = await createMondayItem(leadData);
  } catch (err) {
    console.error("[submit-lead] Monday-feil:", err);
    return NextResponse.json(
      { error: "Feil ved oppretting av lead i Monday" },
      { status: 500 }
    );
  }

  // Last opp filer til Monday-kortet (ikke kritisk)
  if (mondayItemId && attachments.length > 0) {
    try {
      await uploadFilesToMondayItem(mondayItemId, attachments);
    } catch (err) {
      console.error("[submit-lead] Monday filopplasting-feil:", err);
    }
  }

  // Send filer på e-post (ikke kritisk - logger feil men feiler ikke requesten)
  if (attachments.length > 0) {
    try {
      await sendFileEmail(leadData, attachments);
    } catch (err) {
      console.error("[submit-lead] E-postfeil:", err);
    }
  }

  return NextResponse.json({ success: true });
}
