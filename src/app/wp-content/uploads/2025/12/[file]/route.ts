import { teamMembers } from "@/lib/team-data";
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
 * Legg til flere ansatte ved å utvide LEGACY_NAME_TO_SLUG under.
 */
const LEGACY_NAME_TO_SLUG: Record<string, string> = {
  eirik: "eirik-justra",
  samy: "samy-adolfsen",
  // tobias: "tobias-...",  // venter på at Tobias legges til i team-data.ts
  // audun: "audun-...",    // venter på at Audun legges til i team-data.ts
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;
  const legacyName = file.replace(/\.vcf$/i, "").toLowerCase();
  const slug = LEGACY_NAME_TO_SLUG[legacyName];
  const member = slug ? teamMembers.find((m) => m.slug === slug) : undefined;

  if (!member) {
    return new Response("Fant ikke kontakt", { status: 404 });
  }

  return new Response(generateVCard(member), {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${legacyName}.vcf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
