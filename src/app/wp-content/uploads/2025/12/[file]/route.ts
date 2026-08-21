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
 * Legg til flere ansatte som er på det offentlige teamet (team-data.ts)
 * ved å utvide LEGACY_NAME_TO_SLUG. Ansatte som ikke skal vises på
 * "Om oss"-siden, men som trenger en fungerende vCard-QR-kode, legges
 * i LEGACY_ONLY_CONTACTS i stedet.
 */
const LEGACY_NAME_TO_SLUG: Record<string, string> = {
  eirik: "eirik-justra",
  samy: "samy-adolfsen",
};

const LEGACY_ONLY_CONTACTS: Record<
  string,
  { name: string; role: string; phone: string; email: string }
> = {
  tobias: {
    name: "Tobias Ødegaard",
    role: "Elektromontør",
    phone: "+4797271916",
    email: "tobias@northinstallasjon.no",
  },
  audun: {
    name: "Audun Vagleng",
    role: "Elektromontør",
    phone: "+4740511451",
    email: "audun@northinstallasjon.no",
  },
};

function generateLegacyVCard(contact: {
  name: string;
  role: string;
  phone: string;
  email: string;
}): string {
  const [first, ...rest] = contact.name.split(" ");
  const last = rest.join(" ");
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${last};${first};;;`,
    `FN:${contact.name}`,
    "ORG:North Installasjon AS",
    `TITLE:${contact.role}`,
    `TEL;TYPE=WORK,VOICE:${contact.phone}`,
    `EMAIL;TYPE=WORK:${contact.email}`,
    "END:VCARD",
  ].join("\r\n");
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;
  const legacyName = file.replace(/\.vcf$/i, "").toLowerCase();

  const slug = LEGACY_NAME_TO_SLUG[legacyName];
  const member = slug ? teamMembers.find((m) => m.slug === slug) : undefined;
  const legacyOnly = LEGACY_ONLY_CONTACTS[legacyName];

  const vcard = member
    ? generateVCard(member)
    : legacyOnly
      ? generateLegacyVCard(legacyOnly)
      : null;

  if (!vcard) {
    return new Response("Fant ikke kontakt", { status: 404 });
  }

  return new Response(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${legacyName}.vcf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
