export interface Course {
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  price?: number;
  priceNote?: string;
  type: "digital" | "fysisk";
  url?: string;
  duration?: string;
  language?: string;
  certificate: string;
  targetAudience: string[];
  learningOutcomes: string[];
  /**
   * Manuelt kuraterte slugs til 2-3 andre kurs som passer tematisk.
   * Brukes i «Relaterte kurs»-seksjonen for å styrke intern lenking mellom
   * `/kurs/*`-sidene. SEO-audit 2026-06-15: 8 av 9 orphan pages.
   */
  relatedSlugs?: string[];
}

export const digitalCourses: Course[] = [
  {
    title: "FSE Lavspenning med førstehjelp",
    slug: "fse-lavspenning-med-forstehjelp",
    description:
      "Obligatorisk sikkerhetsopplæring for elektrofagarbeidere. Dekker FSE-forskriftene, lavspenningsarbeid og førstehjelp ved strømulykker.",
    fullDescription:
      "Obligatorisk sikkerhetsopplæring for alle som jobber med elektriske anlegg. Kurset kombinerer FSE-forskriftene med praktisk førstehjelp, og gir deg kompetansen du trenger for å jobbe trygt med lavspenningsinstallasjoner. Kurset avsluttes med en interaktiv Kahoot-quiz som dekker hele pensumet.",
    price: 699,
    priceNote: "ekskl. mva",
    type: "digital",
    url: "https://northkurs.no/kurs/fse-lavspenning-med-forstehjelp/",
    duration: "2 timer undervisning",
    language: "Norsk, engelsk, polsk",
    certificate: "Digitalt kursbevis ved bestått kurs",
    targetAudience: [
      "Elektrikere og energimontører",
      "Lærlinger og elektrostudenter",
      "Vedlikeholdspersonell innen elektro",
      "Arbeidstakere nær elektriske installasjoner",
    ],
    learningOutcomes: [
      "FSE-forskriftene og ditt ansvar",
      "Elektrisk strøm og sikre arbeidsmetoder",
      "Førstehjelp ved strømulykker",
      "Risikovurdering og sikkerhetstiltak",
    ],
    relatedSlugs: ["fse-instruert-personell", "forstehjelp"],
  },
  {
    title: "Liftkurs",
    slug: "liftkurs",
    description:
      "Sertifisert opplæring i sikker bruk av personløftere og lift. Selvstudium med teori, sikkerhetsprosedyrer og avsluttende eksamen.",
    fullDescription:
      "Sertifisert opplæring som gir deg kompetanse til å operere personløftere og arbeidsplattformer trygt. Kurset dekker både teori og praksis, inkludert juridisk rammeverk, ulike liftklasser, sikkerhetsprosedyrer og førstehjelp ved fallskader. Du avslutter med eksamen og mottar kompetansebevis.",
    price: 1749,
    priceNote: "ekskl. mva",
    type: "digital",
    url: "https://northkurs.no/kurs/liftkurs/",
    duration: "Selvstudium",
    language: "Norsk",
    certificate:
      "Kompetansebevis ved bestått eksamen. Tilfredsstiller lovpålagte krav for liftbruk.",
    targetAudience: [
      "Bygge- og anleggsarbeidere",
      "Installatører og montører",
      "Vedlikeholdspersonell",
      "Alle som opererer personløftere profesjonelt",
    ],
    learningOutcomes: [
      "Juridisk rammeverk og sikkerhetskrav",
      "Personløftere og ulike klasser",
      "Sikkerhetsprosedyrer for å forebygge ulykker",
      "Førstehjelp ved fallrelaterte skader",
      "Praktisk liftoperasjon",
    ],
    relatedSlugs: ["fallsikringskurs", "fse-instruert-personell"],
  },
  {
    title: "Førstehjelp",
    slug: "forstehjelp",
    description:
      "Grunnleggende førstehjelpskurs på nett. Lær ABC-regelen, hjerte-lungeredning (HLR) og praktisk bruk av automatisk hjertestarter (AED).",
    fullDescription:
      "Grunnleggende førstehjelpskurs som gir deg kunnskapen til å handle riktig i akutte nødssituasjoner. Du lærer ABC-regelen, hjerte-lungeredning (HLR), behandling av sirkulasjonssvikt og bruk av automatisk ekstern hjertestarter (AED). Kurset er utviklet av fageksperter og følger gjeldende retningslinjer.",
    price: 490,
    priceNote: "ekskl. mva",
    type: "digital",
    url: "https://northkurs.no/kurs/forstehjelp/",
    duration: "Selvstudium",
    language: "Norsk",
    certificate: "Kursbevis ved fullført kurs",
    targetAudience: [
      "Alle ansatte i bedrifter",
      "HMS-ansvarlige",
      "Privatpersoner som ønsker førstehjelpskompetanse",
    ],
    learningOutcomes: [
      "ABC-regelen for akutte situasjoner",
      "Hjerte-lungeredning (HLR)",
      "Behandling av sirkulasjonssvikt",
      "Bruk av automatisk ekstern hjertestarter (AED)",
      "Livreddende førstehjelp i praksis",
    ],
    relatedSlugs: ["fse-lavspenning-med-forstehjelp", "hms-kurs-for-ledere"],
  },
  {
    title: "HMS-kurs for ledere",
    slug: "hms-kurs-for-ledere",
    description:
      "Lovpålagt HMS-opplæring for ledere og arbeidsgivere. Dekker arbeidsmiljøloven, risikovurdering og systematisk HMS-arbeid med internkontroll.",
    fullDescription:
      "Lovpålagt HMS-opplæring for ledere og arbeidsgivere. Kurset gir deg kunnskap om arbeidsmiljøloven, dine rettigheter og plikter som leder, risikovurdering, arbeidstidsbestemmelser og systematisk HMS-arbeid med internkontroll. Kurset er delt i fire moduler med avsluttende eksamen.",
    price: 1250,
    priceNote: "ekskl. mva",
    type: "digital",
    url: "https://northkurs.no/kurs/hms-kurs-for-ledere/",
    duration: "90 minutter",
    language: "Norsk",
    certificate: "Sertifisert kursbevis ved bestått eksamen",
    targetAudience: [
      "Daglige ledere og avdelingsledere",
      "Arbeidsgivere og styremedlemmer",
      "HMS-ansvarlige",
      "Ledere på alle nivåer",
    ],
    learningOutcomes: [
      "Prinsipper og plikter etter arbeidsmiljøloven",
      "Risikofaktorer på arbeidsplassen",
      "Kommunikasjon om HMS-spørsmål",
      "Arbeidstid og inkluderende arbeidsliv",
      "Systematisk HMS-arbeid og internkontroll",
    ],
    relatedSlugs: ["forstehjelp", "grunnleggende-brannvern"],
  },
];

export const physicalCourses: Course[] = [
  {
    title: "Fallsikringskurs",
    slug: "fallsikringskurs",
    description:
      "Praktisk opplæring i fallsikring og arbeid i høyden. Heldagskurs som dekker fallsikringsutstyr, regelverk og NS 9610-sertifisering.",
    fullDescription:
      "Heldagskurs som kombinerer teori og praktiske øvelser for alle som jobber i høyden. Du lærer om fallsikringssystemer, riktig bruk og vedlikehold av utstyr (seler, liner, ankerpunkter), fareidentifikasjon og gjeldende regelverk inkludert NS 9610. Kurset skreddersys til din bransje og dine arbeidsforhold.",
    type: "fysisk",
    priceNote: "Kontakt oss for pris",
    duration: "Heldagskurs (08:30-16:00)",
    language: "Norsk",
    certificate:
      "Sertifikat ved fullført kurs. Gyldig i hele Norge og tilfredsstiller krav til dokumentert opplæring.",
    targetAudience: [
      "Bygningsarbeidere på stillas og plattformer",
      "Installatører og vedlikeholdsteknikere",
      "Bedrifter som trenger dokumentert opplæring for arbeid i høyden",
    ],
    learningOutcomes: [
      "Fallsikringssystemer: forebygging vs. fangsystemer",
      "Riktig bruk og vedlikehold av seler, liner og ankerpunkter",
      "Fareidentifikasjon og risikovurdering",
      "Gjeldende regelverk inkludert NS 9610",
      "Førstehjelp ved fallskader",
    ],
    relatedSlugs: ["liftkurs", "varme-arbeider"],
  },
  {
    title: "Varme arbeider",
    slug: "varme-arbeider",
    description:
      "Sertifiseringskurs for sveising, lodding, skjæring og sliping. Oppfyller forsikringsbransjens krav. Sertifikat gyldig i 5 år i hele Norden.",
    fullDescription:
      "Kurset oppfyller forsikringsbransjens krav og gir nordisk sertifisering for varme arbeider. Du lærer å utføre sveising, skjæring, lodding og sliping trygt, med fokus på brannforebygging og sikkerhetstiltak før, under og etter arbeid. Kurset inkluderer praktisk slokkøøvelse.",
    type: "fysisk",
    priceNote: "Kontakt oss for pris",
    duration: "Teori + praktisk øvelse",
    language: "Norsk, engelsk",
    certificate:
      "Sertifikat gyldig i 5 år i hele Norden. Oppfyller forsikringsbransjens krav.",
    targetAudience: [
      "Sveisere og mekanikere",
      "Rørleggere og installatører",
      "Alle som utfører arbeid med åpen flamme eller gnistdannende utstyr",
    ],
    learningOutcomes: [
      "Varme arbeider som brannårsak",
      "Brannteori og brannslokking",
      "SJA (sikker jobb-analyse)",
      "Førstehjelp ved brannskader",
      "Relevante lover, forskrifter og regler",
      "Sikkerhetstiltak før, under og etter arbeid",
      "Praktisk slokkøøvelse",
    ],
    relatedSlugs: ["grunnleggende-brannvern", "fallsikringskurs"],
  },
  {
    title: "Grunnleggende brannvern",
    slug: "grunnleggende-brannvern",
    description:
      "Opplæring i brannforebygging, slokkeutstyr og evakuering. 3-timers kurs med praktisk slokkøøvelse. Oppfyller brannforebyggingsforskriften.",
    fullDescription:
      "Kurset gir grunnleggende brannforebyggende kompetanse i henhold til brannforebyggingsforskriften (kapittel 3, 12 C-D). Du lærer om brannårsaker, forebygging, evakuering, branncelleinndeling, røykfarer og ulike slokkemidler. Inkluderer praktisk slokkøøvelse med skumapparat. Kurset tar ca. 3 timer totalt.",
    type: "fysisk",
    priceNote: "Kontakt oss for pris",
    duration: "Ca. 3 timer (2 timer teori + 1 time praksis)",
    language: "Norsk, engelsk",
    certificate:
      "Sertifikat ved fullført kurs. Oppfyller krav i brannforebyggingsforskriften.",
    targetAudience: [
      "Ansatte i bedrifter",
      "Privatpersoner",
      "Arbeidstakere i bygg med særskilt brannrisiko",
    ],
    learningOutcomes: [
      "Brannårsaker og brannutvikling",
      "Brannforebyggende tiltak",
      "Evakueringsprosedyrer",
      "Branncelleinndeling og røykfarer",
      "Ulike slokkemidler og riktig bruk",
      "Praktisk slokkøøvelse med skumapparat",
    ],
    relatedSlugs: ["varme-arbeider", "hms-kurs-for-ledere"],
  },
  {
    title: "FSE, Instruert personell",
    slug: "fse-instruert-personell",
    description:
      "Sertifiseringskurs for vaktmestere og driftspersonell som utfører enkle vedlikeholdsoppgaver på elektriske anlegg under tilsyn. Følger FEK.",
    fullDescription:
      "Instruert personell er de eneste i en bedrift uten elektrofagbrev som kan utføre enkle vedlikeholdsoppgaver på det elektriske anlegget. Kurset gir nødvendig kompetanse i henhold til FEK (Forskrift om elektroforetak), og dekker roller, arbeidsplanlegging, risikovurdering, sikkerhetsbarrierer og elektrofaglige grunnbegreper. Inkluderer praktisk førstehjelpsdel.",
    type: "fysisk",
    priceNote: "Kontakt oss for pris",
    duration: "Teori + praktisk førstehjelp",
    language: "Norsk",
    certificate: "Kursbevis ved fullført kurs",
    targetAudience: [
      "Driftspersonell i bygg og industri",
      "Vaktmestere og vedlikeholdsansvarlige",
      "Ansatte som jobber nær elektriske installasjoner",
    ],
    learningOutcomes: [
      "Roller og definisjoner i elektroarbeid",
      "Arbeidsplanlegging og metoder",
      "Risikovurdering for elektriske anlegg",
      "Sikkerhetsbarrierer og praktiske tilnærminger",
      "Grunnleggende elektrofag",
      "Kvalifikasjonskrav for instruert personell",
      "Praktisk førstehjelp ved strøm- og fallskader",
    ],
    relatedSlugs: ["fse-lavspenning-med-forstehjelp", "forstehjelp"],
  },
];

export function getAllCourses(): Course[] {
  return [...digitalCourses, ...physicalCourses];
}

export function getCourseBySlug(slug: string): Course | undefined {
  return getAllCourses().find((c) => c.slug === slug);
}
