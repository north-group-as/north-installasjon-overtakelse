import type { LucideIcon } from "lucide-react";
import { ShieldCheck, TrendingUp, Handshake } from "lucide-react";

export interface TeamMember {
  name: string;
  slug: string;
  role: string;
  image: string;
  email: string;
  phone: string;
  bio: string;
}

export interface CompanyValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Kristoffer Holand",
    slug: "kristoffer-holand",
    role: "Daglig leder",
    image: "/images/team/kristoffer-holand.webp",
    email: "kristoffer@northgroup.no",
    phone: "+47 928 16 581",
    bio: "Kristoffer er gründer og leder av North Gruppen. Han har bakgrunn som elektriker, men har senere ledet selskaper i ulike bransjer. Han er utdannet innen personalledelse med spesialisering i rekruttering. Kristoffer er kjent for sitt gode humør og en uformell tone. Han trives med lange samtaler og deler gjerne engasjerte \"foredrag\" om temaer som interesserer ham.\n\nPå fritiden er han en ivrig klatrer og friluftsmann som mener at en aktiv kropp styrker sinnet.",
  },
  {
    name: "Øystein Bjerkholt",
    slug: "oystein-bjerkholt",
    role: "Faglig ansvarlig",
    image: "/images/team/oystein-bjerkholt.webp",
    email: "oystein@northinstallasjon.no",
    phone: "+47 929 32 220",
    bio: "Øystein Bjerkholt er faglig ansvarlig i North Installasjon. Han er utdannet elkraftingeniør fra Fagskolen i Oslo og har installatørutdanning fra Energi Norge. Med over ti års erfaring fra olje- og energibransjen og flere år som serviceingeniør og prosjektleder, sikrer Øystein at alle leveranser holder høy faglig standard og følger gjeldende regelverk.",
  },
  {
    name: "Eirik Sælør",
    slug: "eirik-saelor",
    role: "Avdelingsleder",
    image: "/images/team/eirik-saelor.webp",
    email: "eirik@northinstallasjon.no",
    phone: "+47 960 07 127",
    bio: "Eirik Sælør, vår ekstraordinære leder med mange år som profesjonell wrestler i utlandet. Han bringer enestående utholdenhet, effektivitet og teamånd til vårt team. Eirik løser komplekse problemer med letthet og inspirerer oss alle til suksess. Hans lidenskap for mennesker og utfordringer gir ham en unik tilnærming til arbeidet.",
  },
  {
    name: "Ivo Myhre",
    slug: "ivo-myhre",
    role: "Salgsansvarlig",
    image: "/images/team/ivo-myhre.webp",
    email: "ivo@northgroup.no",
    phone: "+47 940 85 473",
    bio: "Ivo er kundeansvarlig og partner i North Group. Han har bakgrunn i samfunnsøkonomi og bred erfaring fra rekrutteringsbransjen. Ivo er opptatt av god struktur i enhver prosess, ser det store bildet, og vet hva som skal til for å komme i mål. Han har flere års erfaring med utvikling av kunder og medarbeidere og opptatt av å finne den beste løsningen. Kunder og ansatte som forholder seg til Ivo vet at de blir ivaretatt på en profesjonell måte.\n\nPå fritiden er Ivo et friluftsmenneske og fiskeentusiast som elsker all natur i vårt langstrakte land. I tillegg er han en ivrig discgolfspiller og tar gjerne en utfordring på strak arm.",
  },
  {
    name: "Samy Adolfsen",
    slug: "samy-adolfsen",
    role: "Driftskoordinator",
    image: "/images/team/samy-adolfsen.webp",
    email: "logistikk@northgroup.no",
    phone: "+47 929 22 050",
    bio: "Som driftskoordinator i North Group har Samy ansvar for å sikre at logistikken for oss og våre kunder flyter effektivt. Dette inkluderer blant annet behov for bolig, arbeidsklær, verktøy og annet logistikkrelatert utstyr. Samy har et operativt og løsningsorientert fokus, og jobber tett med alle ledd i organisasjonen for å sikre god flyt i leveranser og behov. Han har en bakgrunn fra internasjonal idrett, hvor han har tilegnet seg verdifull erfaring med presisjon, struktur og raske beslutningsprosesser.",
  },
  {
    name: "Katarzyna Kubacka",
    slug: "katarzyna-kubacka",
    role: "Økonomikonsulent",
    image: "/images/team/katarzyna-kubacka.webp",
    email: "regnskap@northgroup.no",
    phone: "+47 467 06 767",
    bio: "Katarzyna Kubacka er økonomikonsulent i North Group, med ansvar for regnskapsføring, lønn, fakturering og økonomisk rapportering. Hun har en mastergrad i juss og er i sluttfasen av autorisasjonsløpet som statsautorisert regnskapsfører, med utdanning fra Handelshøyskolen BI. Med en solid kombinasjon av juridisk innsikt og regnskapsfaglig kompetanse har Katarzyna et sterkt fokus på regelverksetterlevelse, nøyaktig rapportering og kvalitetssikring av økonomiske prosesser.\n\nKatarzyna er kjent for sitt gode humør, positive innstilling og omtanke for kollegaene.",
  },
  {
    name: "Faraz Ahmed",
    slug: "faraz-ahmed",
    role: "Elektrokoordinator",
    image: "/images/team/faraz-ahmed.webp",
    email: "faraz@northinstallasjon.no",
    phone: "+47 929 34 220",
    bio: "Faraz har startet som elektrokoordinator hos North Installasjon og har fagbrev innen elektrofaget. Med en solid faglig grunnmur og stor interesse for kvalitet og struktur, går han inn i rollen med høy motivasjon og et tydelig ønske om å utvikle seg videre. Faraz er detaljorientert og beskriver seg selv som en perfeksjonist, noe som gjenspeiles i måten han jobber på. Han er opptatt av orden, god planlegging og at arbeidet som leveres holder høy standard.",
  },
  {
    name: "Milena Vasic",
    slug: "milena-vasic",
    role: "Rekrutteringsansvarlig",
    image: "/images/team/milena-vasic.webp",
    email: "milena@northinstallasjon.no",
    phone: "+47 929 57 226",
    bio: "Milena er rekrutteringsansvarlig i North og har en solid akademisk og praktisk bakgrunn innen HR, markedsføring og internasjonal forretningsdrift. Hun har en bachelorgrad i ledelse med spesialisering i HR og markedsføring, samt en mastergrad i International Business og økonomi. Gjennom sin karriere har Milena utviklet sterk kompetanse innen rekruttering og talentutvikling, med et skarpt blikk for både kundens behov og kandidatens potensial. Hennes erfaring fra service- og administrasjonsroller gir henne et helhetlig perspektiv og en løsningsorientert tilnærming i arbeidet.\n\nTidligere har Milena vært profesjonell volleyballspiller og trener, erfaringer som har formet henne som en lagspiller med høy grad av disiplin og målbevissthet.",
  },
];

export const companyValues: CompanyValue[] = [
  {
    icon: ShieldCheck,
    title: "Pålitelighet",
    description:
      "Vi møter opp når vi sier, og leverer det vi lover. Ingen overraskelser, bare solid håndverk.",
  },
  {
    icon: TrendingUp,
    title: "Fremdrift",
    description:
      "Vi holder tempo uten å gå på kompromiss med kvaliteten. Effektiv gjennomføring er standarden vår.",
  },
  {
    icon: Handshake,
    title: "Lojalitet",
    description:
      "Vi er lojale mot kundene, kollegaene og faget vårt. Langsiktige relasjoner betyr alt for oss.",
  },
];
