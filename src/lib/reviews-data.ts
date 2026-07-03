export interface Review {
  name: string;
  locationSlug: string | null;
  locationLabel: string;
  rating: number;
  serviceType: string;
  text: string;
  erfaring?: string;
  date: string;
  image?: string;
  source: string;
}

const reviews: Review[] = [
  {
    name: "Maria Selnes",
    locationSlug: "oslo",
    locationLabel: "Privatkunde, Oslo",
    rating: 5,
    serviceType: "Kjøkkenlampe og smarthus",
    text: "Fikk montert ny kjøkkenlampe og smarte dimmere med styringssystem. Ønsket bedre belysning og en enklere løsning for hverdagen, og det ble akkurat som jeg ville ha det. Veldig fornøyd med resultatet.",
    erfaring:
      "Det velges ofte dimmere og smarthusløsninger som ikke er kompatible med hverandre eller eksisterende anlegg, noe som kan gi dårlig funksjon eller ustabil styring.",
    date: "2025-11-10",
    image: "/images/reviews/kjokkenlampe-pendler.webp",
    source: "Google",
  },
  {
    name: "Martin Skår",
    locationSlug: null,
    locationLabel: "Privatkunde",
    rating: 5,
    serviceType: "Elektrikerarbeid",
    text: "Profesjonelt og effektivt elektrikerarbeid. God kommunikasjon hele veien, og høy kvalitet på det som ble gjort. Anbefales.",
    erfaring:
      "Mange velger de rimeligste løsningene, men dette går ofte utover både kvalitet, driftssikkerhet og levetid.",
    date: "2025-10-22",
    source: "Google",
  },
  {
    name: "A Vag Le",
    locationSlug: null,
    locationLabel: "Privatkunde",
    rating: 5,
    serviceType: "Elektrikerarbeid",
    text: "Trengte hjelp med noen mindre elektrikerjobber. Alt ble gjennomført punktlig, ryddig og i henhold til kravene. Fint å ha fagfolk som tar selv små jobber seriøst.",
    erfaring:
      "Mindre jobber utføres ofte uten fagfolk, noe som kan føre til skjulte feil og potensielle sikkerhetsutfordringer over tid.",
    date: "2025-09-15",
    source: "Google",
  },
  {
    name: "Mid",
    locationSlug: null,
    locationLabel: "Privatkunde",
    rating: 5,
    serviceType: "Feilsøking",
    text: "Hadde et elektrisk problem jeg ikke klarte å finne ut av selv. Elektrikeren var grundig med feilsøkingen, fant årsaken raskt og fikset det på en kostnadseffektiv måte. Veldig bra service.",
    erfaring:
      "Det er vanlig at komponenter byttes uten tilstrekkelig feilsøking først, noe som ofte fører til unødvendige kostnader uten å løse det faktiske problemet.",
    date: "2025-08-20",
    source: "Google",
  },
  {
    name: "Hanne Jensen",
    locationSlug: null,
    locationLabel: "Privatkunde",
    rating: 5,
    serviceType: "Hytteinstallasjon",
    text: "Fikk satt opp komplett elektrisk anlegg på hytta. Alt ble gjort med fokus på sikkerhet, riktig kapasitet og gjeldende forskrifter. Trygt og godt utført.",
    erfaring:
      "Hytteanlegg blir ofte underdimensjonert, spesielt med tanke på moderne behov som elbillading og økt strømforbruk.",
    date: "2025-07-15",
    source: "Google",
  },
  {
    name: "Frida Isabell Maxe",
    locationSlug: null,
    locationLabel: "Privatkunde",
    rating: 5,
    serviceType: "Elbillader",
    text: "Fikk montert elbillader hjemme. Riktig dimensjonering og sikker installasjon tilpasset boligens kapasitet. Rask og ryddig jobb, alt fungerer som det skal.",
    erfaring:
      "Mange installasjoner mangler egen kurs eller tilstrekkelig overspenningsvern, noe som kan gi både sikkerhets- og funksjonsutfordringer.",
    date: "2025-06-30",
    image: "/images/reviews/zaptec-elbillader.webp",
    source: "Google",
  },
  {
    name: "Erland Agersborg Røhme",
    locationSlug: "oslo",
    locationLabel: "Privatkunde, Oslo",
    rating: 5,
    serviceType: "Termostat",
    text: "Hadde en defekt termostat som måtte byttes. Fikk en moderne og stabil løsning med mye bedre temperaturkontroll enn den gamle. Merker stor forskjell i komforten.",
    erfaring:
      "Det velges ofte feil type termostat i forhold til gulv- eller varmesystem, noe som gir dårlig regulering og komfort.",
    date: "2025-10-05",
    image: "/images/reviews/termostat-bad.webp",
    source: "Google",
  },
  {
    name: "Nils Erik Øyan",
    locationSlug: "lillestrom",
    locationLabel: "Privatkunde, Lillestrøm",
    rating: 5,
    serviceType: "Jordfeil",
    text: "Fikk avvik fra Elvia om jordfeil i anlegget. Elektrikeren lokaliserte feilen og utbedret alt slik at anlegget nå er i henhold til kravene. Rask respons og grundig jobb.",
    erfaring:
      "Jordfeil blir ofte ignorert eller utsatt, selv om det kan innebære betydelig brann- og sikkerhetsrisiko.",
    date: "2025-09-20",
    source: "Google",
  },
  {
    name: "Jan Magne Lauritzen",
    locationSlug: "oslo",
    locationLabel: "Privatkunde, Oslo",
    rating: 5,
    serviceType: "Termostat",
    text: "Fikk byttet tre termostater til moderne løsninger med bedre styring og energieffektivitet. Enkelt å bruke og mye bedre regulering enn de gamle.",
    erfaring:
      "Feil kobling eller feil type termostat kan føre til skade på både kurs og utstyr.",
    date: "2025-08-10",
    source: "Google",
  },
  {
    name: "Monica Sørlle",
    locationSlug: "oslo",
    locationLabel: "Privatkunde, Oslo",
    rating: 5,
    serviceType: "LED-belysning",
    text: "Byttet fra halogen til LED-spotter. Mye bedre lyskvalitet og merkbart lavere strømforbruk. Veldig fornøyd med oppgraderingen.",
    erfaring:
      "Eldre dimmere er ofte ikke kompatible med LED, noe som gir flimring eller redusert levetid på belysningen.",
    date: "2025-07-25",
    image: "/images/reviews/bad-downlights-speil.webp",
    source: "Google",
  },
  {
    name: "Elling Hauge-Iversen",
    locationSlug: "oslo",
    locationLabel: "Privatkunde, Oslo",
    rating: 5,
    serviceType: "Downlights",
    text: "Fikk montert downlights og dimmere i trepanel. Alt ble gjort med skjult anlegg og fokus på sikker varmehåndtering. Resultatet ble flott, og jeg føler meg trygg på at det er gjort riktig.",
    erfaring:
      "Feil montering i treverk kan føre til varmeutvikling og økt risiko over tid.",
    date: "2025-09-01",
    image: "/images/reviews/spisestue-downlights.webp",
    source: "Google",
  },
  {
    name: "Anders DG Holteberg",
    locationSlug: "ski",
    locationLabel: "Privatkunde, Langhus",
    rating: 5,
    serviceType: "Brytere og termostat",
    text: "Fikk byttet slitte brytere og termostat til moderne løsninger. Fungerer mye bedre nå, og alt ble sjekket skikkelig under overflaten også. Grundig og bra jobb.",
    erfaring:
      "Det er vanlig å kun bytte synlige deler som deksel, uten å utbedre underliggende tekniske feil.",
    date: "2025-06-15",
    image: "/images/reviews/bryter-dimmer-smart.webp",
    source: "Google",
  },
  {
    name: "Rasmus Tømmerås Vik",
    locationSlug: "baerum",
    locationLabel: "Privatkunde, Sandvika",
    rating: 5,
    serviceType: "Sikringsskap",
    text: "Fikk oppgradert fra gammelt skrusikringsskap til moderne automatskap. Stor forbedring i både sikkerhet og kapasitet. Hele jobben ble gjort ryddig og effektivt.",
    erfaring:
      "Eldre sikringsskap gir ofte begrenset kapasitet og dårligere sikkerhet sammenlignet med moderne løsninger.",
    date: "2025-08-28",
    image: "/images/reviews/sikringsskap-automater.webp",
    source: "Google",
  },
  {
    name: "Henrik Heiberg",
    locationSlug: "ski",
    locationLabel: "Privatkunde, Ski",
    rating: 5,
    serviceType: "Spotter og dimmere",
    text: "Fikk oppgradert belysningen med nye spotter og dimmere. Mye bedre lysstyring og komfort i rommene nå. Veldig fornøyd med jobben.",
    erfaring:
      "Feil type dimmer fører ofte til flimring og ustabil belysning.",
    date: "2025-07-10",
    image: "/images/reviews/dimmere-vegg.webp",
    source: "Google",
  },
  {
    name: "Bjørn Thon",
    locationSlug: "drammen",
    locationLabel: "Privatkunde, Drammen",
    rating: 4,
    serviceType: "Sikringsskap",
    text: "Fikk utvidet anlegget med nye kurser og flere uttak. Dekker behovet mye bedre nå. Grei jobb, men tok litt lenger tid enn forventet.",
    erfaring:
      "For få kurser i boligen fører ofte til overbelastning og begrenset bruk av elektriske apparater.",
    date: "2025-05-20",
    source: "Google",
  },
  {
    name: "Geir Christian Stirling",
    locationSlug: "oslo",
    locationLabel: "Privatkunde, Oslo",
    rating: 5,
    serviceType: "Kurser og stikkontakter",
    text: "Fikk oppgradert kjøkkenet med nye kurser og stikkontakter for å håndtere alt det moderne utstyret. Endelig nok kapasitet uten at sikringen ryker. Veldig fornøyd.",
    erfaring:
      "Mange kjøkken er lagt opp med for få kurser, noe som ikke dekker dagens behov.",
    date: "2025-06-01",
    source: "Google",
  },
  {
    name: "Mirdit Zagragja",
    locationSlug: "oslo",
    locationLabel: "Privatkunde, Oslo",
    rating: 5,
    serviceType: "Sikringsskap",
    text: "Fikk oppgradert sikringsskapet med flere kurser og bedre kapasitet. Føler meg tryggere nå, og alt er tilrettelagt for fremtidig behov. Ryddig og profesjonell jobb.",
    erfaring:
      "Anlegg oppgraderes ofte ikke i takt med økt strømforbruk, noe som gir kapasitetsutfordringer.",
    date: "2025-04-15",
    source: "Google",
  },
];

// Prioritized order for featured reviews: images first, with specific top 3
const featuredOrder: string[] = [
  "Maria Selnes",
  "Elling Hauge-Iversen",
  "Rasmus Tømmerås Vik",
];

export function getReviewsByLocation(slug: string): Review[] {
  return reviews.filter((r) => r.locationSlug === slug);
}

export function getFeaturedReviews(count: number): Review[] {
  const prioritized = featuredOrder
    .map((name) => reviews.find((r) => r.name === name))
    .filter((r): r is Review => r !== undefined);

  const remainingWithImages = reviews.filter(
    (r) => r.image && !featuredOrder.includes(r.name)
  );

  const remainingWithoutImages = reviews.filter(
    (r) => !r.image && !featuredOrder.includes(r.name)
  );

  const ordered = [...prioritized, ...remainingWithImages, ...remainingWithoutImages];
  return ordered.slice(0, count);
}

export function getAllReviews(): Review[] {
  return reviews;
}
