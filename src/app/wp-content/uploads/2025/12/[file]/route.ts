import { findContactBySlug } from "@/lib/contacts-data";
import { generateVCard } from "@/lib/vcard";

/**
 * Gjenskaper den gamle WordPress-adressen for visittkort-QR-koder som
 * allerede er trykket opp og distribuert:
 * northinstallasjon.no/wp-content/uploads/2025/12/<navn>.vcf
 *
 * Krever i tillegg en bypass-regel i Vercel Firewall for stien
 * /wp-content/uploads/2025/12/*, siden Vercel som standard blokkerer
 * /wp-content/-forespørsler (kjent WordPress-angrepsmønster).
 *
 * Nye visittkort bør heller bruke /kontakt/<slug>/qr, som koder
 * vCard-innholdet direkte inn i QR-bildet. Denne ruten er kun for de
 * QR-kodene som allerede er trykket opp.
 */
const LEGACY_NAME_TO_SLUG: Record<string, string> = {
  eirik: "eirik-justra",
  samy: "samy-adolfsen",
  tobias: "tobias-odegaard",
  audun: "audun-vagleng",
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;
  const legacyName = file.replace(/\.vcf$/i, "").toLowerCase();
  const slug = LEGACY_NAME_TO_SLUG[legacyName];
  const contact = slug ? findContactBySlug(slug) : undefined;

  if (!contact) {
    return new Response("Fant ikke kontakt", { status: 404 });
  }

  return new Response(generateVCard(contact), {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${legacyName}.vcf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
