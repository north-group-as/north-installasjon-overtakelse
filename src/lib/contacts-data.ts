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
    role: "Montør",
    phone: "+4797271916",
    email: "tobias@northinstallasjon.no",
  },
  "audun-vagleng": {
    name: "Audun Wasmuth Vagleng",
    role: "Montør",
    phone: "+4740511451",
    email: "audun@northinstallasjon.no",
  },
  "kristian-welle": {
    name: "Kristian Welle",
    role: "Montør",
    phone: "+4799085037",
    email: "kristian@northinstallasjon.no",
  },
  "hector-chirinos": {
    name: "Hector Chirinos",
    role: "Montør",
    phone: "+4797291249",
    email: "hector@northinstallasjon.no",
  },
  "lowrens-rosinelli": {
    name: "Lowrens Rosinelli",
    role: "Serviceleder",
    phone: "+4794014708",
    email: "lowrens@northinstallasjon.no",
  },
};

export function findContactBySlug(slug: string): VCardContact | undefined {
  const member = teamMembers.find((m) => m.slug === slug);
  return member ?? NON_PUBLIC_CONTACTS[slug];
}
