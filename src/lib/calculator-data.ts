// ---------------------------------------------------------------------------
// North Installasjon — Priskalkulator: Data & typer
// ---------------------------------------------------------------------------

// Pricing constants
export const MARKUP = 1.2; // 20% materialpaaslag
export const VAT = 1.25; // 25% MVA

export const PRICES = {
  charger: { "zaptec-go": 4650, "zaptec-go2": 7149, "easee": 4599 } as Record<string, number>,
  callout: 485,
  hourly: 915,
  risk: 0.012,
  gjennomboring: 750,
  spotAlfaEco: 499,
  dimmerSP: 1299,
  borehullTillegg: 129,
  // Sikringsskap
  panGrunnpris: 8009, // inkl. 5 sikringer + OV
  panEkstraPerSikring: 500,
  panGratisSikringer: 5,
  // Enkel jobb
  stikkBytteEnTilEn: 1999,
  dimmerENK: 1400,
  termostatFirst: 3150,
  termostatExtra: 1250,
  fotocelle: 1400,
  stikk: 850,
  lysbryter: 1400,
  // Opplegg til
  oppleggPunkt: 1450,
  oppleggEkstraMeter: 100,
  // Varmematte
  varmeBaseBetong: 800,
  varmeBaseAnnet: 650,
} as const;

// ---------------------------------------------------------------------------
// Service types
// ---------------------------------------------------------------------------

export type ServiceId = "elbillader" | "spotter" | "sikringsskap" | "enkel" | "opplegg" | "varmematte";

export const SERVICE_TYPES: {
  id: ServiceId;
  label: string;
  description: string;
  icon: string;
}[] = [
  {
    id: "elbillader",
    label: "Elbillader",
    description: "Installasjon av hjemmelader",
    icon: "Zap",
  },
  {
    id: "spotter",
    label: "Spotter",
    description: "1 til 1 bytte av downlights",
    icon: "Lightbulb",
  },
  {
    id: "sikringsskap",
    label: "Sikringsskap",
    description: "Oppgradering av eksisterende sikringskap",
    icon: "Shield",
  },
  {
    id: "enkel",
    label: "Enkel jobb",
    description: "Bytte av dimmer, bryter, stikk m.m.",
    icon: "Wrench",
  },
  {
    id: "opplegg",
    label: "Opplegg til",
    description: "Nye elektriske punkter i rom",
    icon: "Cable",
  },
  {
    id: "varmematte",
    label: "Varmematte",
    description: "Varmekabel eller varmematte",
    icon: "Thermometer",
  },
];

// ---------------------------------------------------------------------------
// Enkel services (5 tjenester med stegvis rabatt)
// ---------------------------------------------------------------------------

export interface EnkelService {
  id: string;
  label: string;
  basePrice: number;
  extraPrice: number;
  category: string;
}

export const ENKEL_SERVICES: EnkelService[] = [
  { id: "stikk-bytte", label: "Stikkontakt bytte 1-til-1", basePrice: 1999, extraPrice: 850, category: "Stikkontakt" },
  { id: "dimmer", label: "Dimmer", basePrice: 1400, extraPrice: 1000, category: "Belysning" },
  { id: "termostat", label: "Termostat", basePrice: 3150, extraPrice: 1250, category: "Varme" },
  { id: "fotocelle", label: "Fotocelle", basePrice: 1400, extraPrice: 750, category: "Belysning" },
  { id: "lysbryter", label: "Lysbryter", basePrice: 1400, extraPrice: 750, category: "Belysning" },
];

// ---------------------------------------------------------------------------
// Charger descriptions (elbillader info)
// ---------------------------------------------------------------------------

export const CHARGER_DESCRIPTIONS: Record<string, string> = {
  "zaptec-go": "Kompakt hjemmelader med 22 kW kapasitet. Dynamisk lastbalansering, app-styring og energimåling. Enkel å installere.",
  "zaptec-go2": "Neste generasjon hjemmelader med integrert 4G, Bluetooth og WiFi. 22 kW, OCPP-støtte, dynamisk lastbalansering og avansert app-styring.",
  "easee": "Smart hjemmelader med 22 kW kapasitet. Innebygd WiFi, lastbalansering og app-styring. Kompakt design.",
};

// ---------------------------------------------------------------------------
// Charger price ranges (ca-priser inkl. mva for privatkunder)
// ---------------------------------------------------------------------------

export const CHARGER_PRICE_RANGES: Record<string, string> = {
  "zaptec-go": "ca. 12 000 - 18 000 kr",
  "zaptec-go2": "ca. 16 000 - 22 000 kr",
  "easee": "ca. 12 000 - 18 000 kr",
};

// ---------------------------------------------------------------------------
// Image upload categories per service
// ---------------------------------------------------------------------------

export const IMAGE_CATEGORIES: Record<ServiceId, { label: string; required?: boolean }[]> = {
  elbillader: [
    { label: "Sikringsskap" },
    { label: "Kursfortegnelse" },
    { label: "Føringsvei (fra sikringsskap til ladepunkt)" },
    { label: "Der laderen skal monteres" },
  ],
  spotter: [
    { label: "Eksisterende spotter" },
    { label: "Basen/festemekanismen (valgfritt)" },
  ],
  sikringsskap: [
    { label: "Sikringsskap" },
    { label: "Kursfortegnelse" },
  ],
  enkel: [
    { label: "Bilde av jobben" },
  ],
  opplegg: [
    { label: "Rommet der opplegg skal legges" },
    { label: "Eksisterende anlegg (valgfritt)" },
  ],
  varmematte: [
    { label: "Rommet" },
    { label: "Eksisterende gulv/underlag" },
  ],
};

// ---------------------------------------------------------------------------
// Cross-sell
// ---------------------------------------------------------------------------

export interface CrossSellItem {
  id: string;
  name: string;
  price: number;
}

export const CROSS_SELL_ITEMS: Partial<Record<ServiceId, CrossSellItem[]>> = {
  elbillader: [
    { id: "cs-ov-hus", name: "Overspenningsvern hele huset", price: 1899 },
    { id: "cs-elkontroll", name: "Elkontroll bolig", price: 1990 },
  ],
  sikringsskap: [
    { id: "cs-ev-klar", name: "Elbillader-klargjøring", price: 2490 },
    { id: "cs-ov", name: "Overspenningsvern", price: 1899 },
  ],
  spotter: [
    { id: "cs-dimmer", name: "LED dimmer", price: 1299 },
    { id: "cs-utelampe", name: "Installere utelampe", price: 2390 },
  ],
};

// ---------------------------------------------------------------------------
// Display names
// ---------------------------------------------------------------------------

export const CHARGER_NAMES: Record<string, string> = {
  "zaptec-go": "Zaptec Go",
  "zaptec-go2": "Zaptec Go 2",
  easee: "Easee",
};

// ---------------------------------------------------------------------------
// State types
// ---------------------------------------------------------------------------

export interface EVConfig {
  charger: string;
  placement: "husvegg" | "garasje-tilknyttet" | "garasje-frittstaaende" | "ladestolpe";
  nettType: "it" | "tn" | "unknown";
  images: Record<string, File[]>;
}

export interface SPConfig {
  spotColor: "hvit" | "svart";
  count: number;
  dimmer: boolean;
  dimmerCount: number;
  roomType: "standard" | "vatrom";
  mountType: "eksisterende-hull" | "nye-hull";
  images: Record<string, File[]>;
}

export interface PANConfig {
  faseType: "tofase" | "trefase";
  fuseCount: number;
  images: Record<string, File[]>;
}

export interface ENKConfig {
  serviceType: string;
  quantity: number;
  preferredFrom: string;
  preferredTo: string;
  images: Record<string, File[]>;
}

export interface OPLConfig {
  anleggType: "aapent" | "skjult";
  antallPunkter: number;
  meterPerPunkt: number;
  images: Record<string, File[]>;
}

export interface VARMConfig {
  romStorrelse: number;
  romType: string;
  harHindringer: boolean;
  underlag: "betong" | "annet";
  images: Record<string, File[]>;
}

export interface PriceLine {
  label: string;
  val: number;
}

export interface PriceRangeResult {
  lines: PriceLine[];
  minIncVat: number;
  maxIncVat: number;
}

export interface CalculatorState {
  step: 1 | 2 | 3;
  service: ServiceId | null;
  evConfig: EVConfig;
  spConfig: SPConfig;
  panConfig: PANConfig;
  enkConfig: ENKConfig;
  oplConfig: OPLConfig;
  varmConfig: VARMConfig;
  crossSell: Record<string, boolean>;
  northTrygg: boolean;
}

export const INITIAL_STATE: CalculatorState = {
  step: 1,
  service: null,
  evConfig: {
    charger: "zaptec-go",
    placement: "husvegg",
    nettType: "unknown",
    images: {},
  },
  spConfig: {
    spotColor: "hvit",
    count: 10,
    dimmer: false,
    dimmerCount: 1,
    roomType: "standard",
    mountType: "eksisterende-hull",
    images: {},
  },
  panConfig: {
    faseType: "trefase",
    fuseCount: 5,
    images: {},
  },
  enkConfig: {
    serviceType: "stikk-bytte",
    quantity: 1,
    preferredFrom: "",
    preferredTo: "",
    images: {},
  },
  oplConfig: {
    anleggType: "skjult",
    antallPunkter: 1,
    meterPerPunkt: 5,
    images: {},
  },
  varmConfig: {
    romStorrelse: 5,
    romType: "bad",
    harHindringer: false,
    underlag: "betong",
    images: {},
  },
  crossSell: {},
  northTrygg: false,
};
