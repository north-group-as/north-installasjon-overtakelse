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
