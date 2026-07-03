import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Home,
  UserCheck,
  Briefcase,
  Handshake,
} from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Trygg arbeidsgiver",
    description:
      "Gode vilkår, ryddige kontrakter og en arbeidsgiver som bryr seg om deg.",
  },
  {
    icon: Home,
    title: "Hjelp med bolig",
    description:
      "Vi hjelper med bolig og praktiske forhold, slik at du kan fokusere på jobben.",
  },
  {
    icon: UserCheck,
    title: "Fast kontaktperson",
    description:
      "Du får en fast kontaktperson hos oss som følger deg opp hele veien.",
  },
  {
    icon: Briefcase,
    title: "Spennende prosjekter",
    description:
      "Fra små serviceoppdrag til store entrepriser. Vi finner prosjekter som passer deg.",
  },
  {
    icon: Handshake,
    title: "Seriøse samarbeidspartnere",
    description:
      "Vi samarbeider med etablerte aktører i bransjen for trygge og gode arbeidsforhold.",
  },
];

export const recmanUrl = "https://apply.recman.no/job_post.php?id=378213";
