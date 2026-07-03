import type { TeamMember } from "./team-data";

export function generateVCard(member: TeamMember): string {
  const [first, ...rest] = member.name.split(" ");
  const last = rest.join(" ");
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${last};${first};;;`,
    `FN:${member.name}`,
    "ORG:North Installasjon AS",
    `TITLE:${member.role}`,
    `TEL;TYPE=WORK,VOICE:${member.phone.replace(/\s/g, "")}`,
    `EMAIL;TYPE=WORK:${member.email}`,
    "END:VCARD",
  ].join("\r\n");
}
