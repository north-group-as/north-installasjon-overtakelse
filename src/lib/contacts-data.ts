import { teamMembers } from "./team-data";
import type { VCardContact } from "./vcard";

/**
 * Ansatte som trenger fungerende vCard/QR for visittkort, men som ikke
 * skal vises på "Om oss"-siden. Slug følger samme mønster som
 * team-data.ts (fornavn-etternavn).
 */
const NON_PUBLIC_CONTACTS: Record<string, VCardContact> = {
  "tobias-odegaard": {
    name: "Tobias Ødegaard",
    role: "Elektromontør",
    phone: "+4797271916",
    email: "tobias@northinstallasjon.no",
  },
  "audun-vagleng": {
    name: "Audun Vagleng",
    role: "Elektromontør",
    phone: "+4740511451",
    email: "audun@northinstallasjon.no",
  },
};

export function findContactBySlug(slug: string): VCardContact | undefined {
  const member = teamMembers.find((m) => m.slug === slug);
  return member ?? NON_PUBLIC_CONTACTS[slug];
}
