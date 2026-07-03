import type { LucideIcon } from "lucide-react";
import {
  Award,
  GraduationCap,
  Users,
  Banknote,
  Wrench,
  Clock,
} from "lucide-react";

export interface JobBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface JobRole {
  title: string;
  description: string;
}

export const jobBenefits: JobBenefit[] = [
  {
    icon: Award,
    title: "Fast stilling",
    description:
      "Trygg og forutsigbar jobb med fast ansettelse direkte hos North Installasjon.",
  },
  {
    icon: GraduationCap,
    title: "Faglig utvikling",
    description:
      "Vi investerer i kursing og sertifisering slik at du kan vokse som fagperson.",
  },
  {
    icon: Users,
    title: "Godt arbeidsmiljø",
    description:
      "Et team som ser deg, med lav terskel for å si ifra og en kultur bygget på respekt.",
  },
  {
    icon: Banknote,
    title: "Konkurransedyktig lønn",
    description:
      "Vi tilbyr gode lønnsvilkår, pensjon og forsikring fra dag én.",
  },
  {
    icon: Wrench,
    title: "Moderne utstyr",
    description:
      "Du får tilgang til oppdatert verktøy og utstyr slik at du kan gjøre jobben effektivt.",
  },
  {
    icon: Clock,
    title: "Fleksibilitet",
    description:
      "Vi tilpasser oss hverdagen din med fleksible løsninger der det er mulig.",
  },
];

export const jobRoles: JobRole[] = [
  {
    title: "Elektriker",
    description:
      "Erfaren elektriker med fagbrev som trives med varierte oppdrag innen installasjon og service.",
  },
  {
    title: "Servicetekniker",
    description:
      "Selvstendig tekniker som håndterer feilsøking, reparasjon og vedlikehold hos kunder.",
  },
  {
    title: "Prosjektleder",
    description:
      "Organisert leder som styrer elektroentrepriser fra planlegging til ferdigstillelse.",
  },
  {
    title: "Lærling",
    description:
      "Motivert lærling som ønsker å ta fagbrev i et støttende og lærerikt miljø.",
  },
];
