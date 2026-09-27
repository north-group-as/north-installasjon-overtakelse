import type { LucideIcon } from "lucide-react";
import {
  Wrench,
  Users,
  Car,
  Banknote,
  MessageCircle,
  Zap,
  Glasses,
  ShieldCheck,
  GraduationCap,
  Plane,
} from "lucide-react";

export interface RequirementItem {
  text: string;
}

export interface OfferItem {
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

export interface FutureFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Hero
export const heroLabel = "Vi søker servicemontører i Oslo";
export const heroHeadline = ["Du jobber med strøm.", "Men hva gir deg energi?"];
export const heroSubtext =
  "Vi bygger fremtidens elektrikerhverdag – med smartere verktøy, mer støtte, frihet under ansvar og folk som spiller deg god.";

export const jobIntro =
  "North Installasjon er en del av North Group og leverer elektrotjenester til private, bedrifter og borettslag i Oslo-området. Vi søker nå en serviceelektriker som vil bli en del av teamet vårt og ta del i en variert arbeidshverdag med service og feilsøking hos våre kunder.";

export const aboutRole = [
  "Som serviceelektriker hos oss får du serviceoppdrag hos både private og bedriftskunder, fra feilsøking og utbedringer til mindre installasjoner og vedlikehold.",
  "Du får bil og utstyr fra bedriften, og en arbeidshverdag som varierer fra dag til dag. Du jobber selvstendig ute hos kunder, med et helt team i ryggen når du trenger støtte eller faglige avklaringer.",
];

// "Gleder du deg til mandag?" statement
export const mondayStatementLines = [
  "Gleder du deg til mandag?",
  "Til oppgavene?",
  "Kollegaene?",
  "Til og med sjefen?",
  "Det vil vi at du skal.",
];

// Fremtidens elektrikerhverdag
export const futureFeatures: FutureFeature[] = [
  {
    icon: Wrench,
    title: "Smartere verktøy",
    description: "Teknologi skal gjøre jobben enklere, ikke mer komplisert.",
  },
  {
    icon: Glasses,
    title: "Smartbriller & digital support",
    description:
      "Få hjelp og faglig støtte ute på oppdrag, uten at noen nødvendigvis må kjøre ut til deg.",
  },
  {
    icon: ShieldCheck,
    title: "Frihet under ansvar",
    description: "Du får tillit og påvirkning på hvordan du løser arbeidshverdagen din.",
  },
  {
    icon: Users,
    title: "Et lag i ryggen",
    description: "Du jobber selvstendig, men aldri alene.",
  },
];

// Troverdighet - korte, konkrete statements
export const cultureStatements = [
  "Korte beslutningsveier betyr at du faktisk får tak i den som kan ta beslutningen.",
  "Frihet under ansvar betyr at vi stoler på at fagfolk kan faget sitt.",
  "Et lag i ryggen betyr at du ikke skal bruke halve dagen på å stå alene med et problem.",
];

// Hverdagen din - prioriterte fordeler (featured = større kort)
export const offers: OfferItem[] = [
  {
    icon: Car,
    title: "Egen servicebil",
    description: "Utstyret du trenger for å gjøre jobben effektivt.",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "Frihet under ansvar",
    description: "Påvirkning på egen arbeidshverdag.",
    featured: true,
  },
  {
    icon: Users,
    title: "Tilgjengelige ledere",
    description: "Kort vei fra spørsmål til beslutning.",
    featured: true,
  },
  {
    icon: Banknote,
    title: "Konkurransedyktige betingelser",
    description: "Ordentlige vilkår som gjenspeiler kompetanse og erfaring.",
    featured: true,
  },
  {
    icon: Zap,
    title: "Varierte oppdrag",
    description: "Service og feilsøking hos private og profesjonelle kunder.",
  },
  {
    icon: Wrench,
    title: "Moderne verktøy",
    description: "Vi utforsker teknologi som kan gjøre jobben enklere.",
  },
  {
    icon: MessageCircle,
    title: "Gode kolleger",
    description: "Et lag som hjelper hverandre.",
  },
  {
    icon: Wrench,
    title: "Fast stilling",
    description: "En seriøs arbeidsgiver og ordnede arbeidsforhold.",
  },
  {
    icon: GraduationCap,
    title: "Faglig utvikling",
    description: "Mulighet til å utvikle deg videre.",
  },
  {
    icon: Plane,
    title: "Reiseoppdrag",
    description: "Mulighet for deg som ønsker det.",
  },
];

export const requirements: RequirementItem[] = [
  { text: "Fagbrev som elektriker (Gr. L)" },
  { text: "Førerkort klasse B" },
  { text: "Gode norskkunnskaper, muntlig og skriftlig" },
];

export const niceToHave = "Erfaring fra service og feilsøking";

export const traits = [
  "Du liker kundekontakt.",
  "Du finner løsninger.",
  "Du tar ansvar.",
  "Du kan jobbe selvstendig.",
  "Du setter samtidig pris på å ha et lag rundt deg.",
];

export const roleHighlights = [
  { icon: Zap, text: "Service og feilsøking hos private og bedrifter" },
  { icon: Car, text: "Bil og utstyr fra bedriften" },
];

export interface TeamPhoto {
  src: string;
  alt: string;
}

export const teamPhotos: TeamPhoto[] = [
  {
    src: "/images/north-team-showroom-gruppe.webp",
    alt: "Tre elektrikere fra North Installasjon foran en bil i et showroom",
  },
  {
    src: "/images/north-team-montering-showroom.webp",
    alt: "Elektrikere fra North Installasjon monterer belysning fra en lift i et showroom",
  },
  {
    src: "/images/north-elektriker-hovedtavle.webp",
    alt: "Elektriker fra North Installasjon jobber ved et hovedfordelingsskap i et teknisk rom",
  },
  {
    src: "/images/about-team-byggeplass.webp",
    alt: "To elektrikere fra North Installasjon ved servicebilen på en byggeplass",
  },
  {
    src: "/images/north-team-befaring-byggeplass.webp",
    alt: "Elektriker fra North Installasjon forklarer løsninger til byggherre på befaring",
  },
  {
    src: "/images/team-arbeidsmiljo.webp",
    alt: "Smilende elektriker fra North Installasjon gir tommel opp i en ferdig leilighet",
  },
  {
    src: "/images/north-team-planlegging-naering.webp",
    alt: "Elektriker fra North Installasjon går gjennom tegninger med to håndverkere",
  },
  {
    src: "/images/north-elektriker-arbeid-inne.webp",
    alt: "Elektriker fra North Installasjon jobber med installasjon i et rom under oppussing",
  },
  {
    src: "/images/north-team-diskusjon-naering.webp",
    alt: "Elektrikere fra North Installasjon diskuterer løsninger på et næringsbygg",
  },
];
