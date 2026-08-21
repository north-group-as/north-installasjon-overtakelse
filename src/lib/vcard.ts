import { BUSINESS } from "./business-data";

export interface VCardContact {
  name: string;
  role: string;
  phone: string;
  email: string;
}

export function generateVCard(member: VCardContact): string {
  const [first, ...rest] = member.name.split(" ");
  const last = rest.join(" ");
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${last};${first};;;`,
    `FN:${member.name}`,
    "ORG:North Installasjon AS",
    `TITLE:${member.role}`,
    `TEL;VOICE:${member.phone.replace(/\s/g, "")}`,
    `EMAIL:${member.email}`,
    `URL:${BUSINESS.siteUrl}`,
    `ADR:;;${BUSINESS.address.street};${BUSINESS.address.city};${BUSINESS.address.region};${BUSINESS.address.postalCode};${BUSINESS.address.country}`,
    "END:VCARD",
  ].join("\r\n");
}
