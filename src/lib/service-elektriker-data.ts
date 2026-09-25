import type { LucideIcon } from "lucide-react";
import { Wrench, Users, Car, Banknote, MessageCircle, Zap } from "lucide-react";

export interface RequirementItem {
  text: string;
}

export interface OfferItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const jobIntro =
  "North Installasjon er en del av North Group og leverer elektrotjenester til private, bedrifter og borettslag i Oslo-området. Vi søker nå en serviceelektriker som vil bli en del av teamet vårt og ta del i en variert arbeidshverdag med service og feilsøking hos våre kunder.";

export const aboutRole = [
  "Som serviceelektriker hos oss får du serviceoppdrag hos både private og bedriftskunder, fra feilsøking og utbedringer til mindre installasjoner og vedlikehold.",
  "Du får bil og utstyr fra bedriften, og en arbeidshverdag som varierer fra dag til dag. Du jobber selvstendig ute hos kunder, med et helt team i ryggen når du trenger støtte eller faglige avklaringer.",
];

export const requirements: RequirementItem[] = [
  { text: "Fagbrev som elektriker" },
  { text: "Gjerne erfaring med service og feilsøking" },
  { text: "Førerkort klasse B" },
  { text: "Selvstendig og kundevennlig" },
];

export const offers: OfferItem[] = [
  {
    icon: Banknote,
    title: "Konkurransedyktig lønn",
    description: "Gode lønnsvilkår som gjenspeiler kompetansen din.",
  },
  {
    icon: Users,
    title: "Gode kolleger",
    description: "Et team som stiller opp for hverandre og deler kunnskap.",
  },
  {
    icon: Wrench,
    title: "Fast stilling",
    description: "Trygg og forutsigbar jobb med fast ansettelse.",
  },
  {
    icon: MessageCircle,
    title: "Kort vei fra søknad til svar",
    description: "Vi svarer raskt, og du slipper å vente lenge på tilbakemelding.",
  },
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
