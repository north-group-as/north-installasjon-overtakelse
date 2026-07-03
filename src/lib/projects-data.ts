export interface Project {
  slug: string;
  title: string;
  type: "bolig" | "naering" | "offentlig";
  typeLabel: string;
  description: string;
  longDescription: string;
  longDescription2?: string;
  longDescription3?: string;
  longDescription4?: string;
  image: string;
  kunde: string;
  partner?: string;
  scope: string;
  year: string;
  location: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "nye-regjeringskvartalet",
    title: "Nye Regjeringskvartalet",
    type: "offentlig",
    typeLabel: "Offentlig",
    description:
      "Et av Norges viktigste byggeprosjekter i moderne tid. Komplett elektroinstallasjon i Oslo i samarbeid med Lefdal Installasjon.",
    longDescription:
      "North Installasjon er stolt deltaker i byggingen av Nye Regjeringskvartalet, et av Norges mest prestisjefylte byggeprosjekter. I samarbeid med Lefdal Installasjon bidrar vi med elektroinstallasjon til dette historiske prosjektet. Arbeidet stiller høye krav til kvalitet, sikkerhet og koordinering med mange faggrupper.",
    longDescription2:
      "Nye Regjeringskvartalet er strategisk plassert i Oslos regjeringskvartal, med utfordrende logistikk og strenge sikkerhetskrav. Prosjektet innebærer kompleks koordinering mellom flere bygg, tekniske fag og entreprenører. Som deltaker i dette prosjektet bidro vi med erfarne elektrikere som har jobbet tett med prosjektledelsen for å sikre fremdrift og kvalitet i alle faser av utbyggingen. Den sentrale beliggenheten i Oslo gjør at logistikk og tilkomstplanlegging er avgjørende for å holde tidsplanen.",
    longDescription3:
      "Prosjektet har gitt oss verdifull erfaring med store offentlige byggeprosjekter der tverrfaglig samarbeid er avgjørende. Elektroinstallasjonen omfatter alt fra grunnleggende strømforsyningsanlegg til avanserte styringssystemer. Det høye sikkerhetsnivået stiller ekstra krav til dokumentasjon, kvalitetssikring og godt samarbeid mellom alle involverte parter. Fremdriften i prosjektet har vært avhengig av at alle fag leverer i riktig rekkefølge, noe som krever tett dialog og god planlegging på tvers av teamene.",
    longDescription4:
      "Nye Regjeringskvartalet representerer fremtidens måte å bygge på, med stort fokus på bærekraft og energieffektivitet. De tekniske installasjonene er designet for lavt energiforbruk og høy driftssikkerhet over lang tid. Vår deltakelse i prosjektet har styrket vår kompetanse innen store offentlige byggeprosjekter, og vi er stolte av å bidra til et signalbygg som vil prege Oslo i generasjoner fremover. Samarbeidet med Lefdal Installasjon har vært en viktig faktor for å oppnå de høye kvalitetskravene som stilles.",
    image: "/images/project-regjeringskvartalet.webp",
    kunde: "Statsbygg",
    partner: "Lefdal Installasjon",
    scope: "Elektroinstallasjon",
    year: "2024-2025",
    location: "Oslo",
    highlights: [
      "Et av Norges viktigste byggeprosjekter",
      "Samarbeid med Lefdal Installasjon",
      "Høye krav til sikkerhet og kvalitet",
      "Kompleks koordinering med mange faggrupper",
    ],
  },
  {
    slug: "private-elektrikerjobber",
    title: "Private elektrikerjobber",
    type: "bolig",
    typeLabel: "Bolig",
    description:
      "Elektroinstallasjon for private boliger, fra nybygg til oppgradering av eksisterende anlegg, elbilladere og smarthusløsninger.",
    longDescription:
      "North Installasjon utfører et bredt spekter av private elektrikerjobber. Vi bistår med alt fra komplett elektrisk anlegg i nybygg til oppgradering av sikringsskap, montering av elbilladere og installasjon av smarthusløsninger. Alle oppdrag utføres av fagutdannede elektrikere med fokus på sikkerhet og kvalitet. Vi dekker hele Oslo-området og tilpasser oss kundens tidsplan.",
    longDescription2:
      "Mange boligeiere i Oslo-området har behov for å oppgradere eldre elektriske anlegg som ikke lenger oppfyller dagens krav. Vi bistår med sikringsskapsoppgradering, utskifting av gammelt ledningsnett og tilpasning av anlegg til moderne forbruk. I tillegg ser vi en økende etterspørsel etter elbilladere, der vi hjelper kundene med å finne den beste løsningen for sin bolig og sitt ladebehov. Rådgivning og tilbud er alltid uforpliktende. Vi kartlegger behovet grundig før vi foreslår en løsning som passer både boligen og budsjettet.",
    longDescription3:
      "Smarthusløsninger blir stadig mer populært, og vi har god erfaring med å installere alt fra enkle lysstyringssystemer til avanserte smarthusoppsett som gir bedre komfort, energieffektivitet og sikkerhet. Vi legger stor vekt på å forstå kundens behov og gi råd som gjør at det elektriske anlegget fungerer optimalt i hverdagen. Alle prosjekter dokumenteres i henhold til gjeldende forskrifter.",
    longDescription4:
      "Sikkerhet er alltid det viktigste i våre private prosjekter. Gamle sikringsskap med skrusikringer, slitte kabler og utdaterte jordingsanlegg utgjør en reell brannrisiko, og vi oppfordrer boligeiere til å ta en gjennomgang av det elektriske anlegget med jevne mellomrom. Våre elektrikere har lang erfaring med boliger i Oslo-området, fra klassiske bygårder til moderne eneboliger, og tilpasser alltid løsningen til byggets alder og forutsetninger.",
    image: "/images/north-elektriker-arbeid-inne.webp",
    kunde: "Private kunder",
    scope: "Elektroinstallasjon og oppgradering",
    year: "2023-2025",
    location: "Oslo-området",
    highlights: [
      "Nybygg og totalrehabilitering",
      "Sikringsskapsoppgradering",
      "Elbilladerinstallasjon",
      "Smarthus og belysning",
    ],
  },
  {
    slug: "construction-city",
    title: "Construction City",
    type: "naering",
    typeLabel: "Næring",
    description:
      "Komplett elektroinstallasjon for Construction City, et moderne næringsbygg som samler byggebransjen under ett tak i Oslo.",
    longDescription:
      "Construction City er et moderne næringsbygg som samler byggebransjen under ett tak. North Installasjon bidro med elektroinstallasjon til dette innovative prosjektet, som stiller høye krav til tekniske løsninger og energieffektivitet. Bygget har en sentral plassering i Oslo og er utformet for å være et knutepunkt for hele byggenæringen.",
    longDescription2:
      "Bygget er utviklet for å huse aktører innen bygg- og anleggsbransjen, med kontorer, møterom og fellesarealer som krever fleksible og pålitelige elektriske installasjoner. Vi samarbeidet med entreprenører og tekniske rådgivere for å sikre at alle elektriske systemer oppfylte prosjektets høye standarder. Det moderne bygget inneholder avanserte tekniske løsninger som krever presis planlegging og koordinering. Kontorarealene er designet for å være fleksible, noe som stiller krav til at de elektriske installasjonene kan tilpasses ulike leietakere og bruksområder over tid. Samspillet mellom de ulike fagene har vært avgjørende for å oppnå et godt sluttresultat.",
    longDescription3:
      "Energieffektivitet har vært et sentralt tema gjennom hele prosjektet. Løsningene vi bidro med inkluderer energieffektive belysningsanlegg og styringssystemer som reduserer energiforbruket samtidig som de sikrer et godt arbeidsmiljø. Som deltaker i prosjektet var vi med på å levere tekniske installasjoner som møter dagens krav til bærekraft og fremtidens behov for fleksibilitet.",
    longDescription4:
      "Construction City er bygget med tanke på fremtiden. Bygget oppfyller strenge miljøkrav og er sertifisert etter anerkjente bærekraftsstandarder. De elektriske installasjonene er dimensjonert for å håndtere økt kapasitet etter hvert som teknologien utvikles, blant annet for å støtte lading av elektriske kjøretøy og fremtidige energiløsninger. Vår erfaring med dette prosjektet har styrket vår kompetanse innen bærekraftige næringsbygg med avanserte tekniske krav.",
    image: "/images/project-constructioncity.webp",
    kunde: "Construction City",
    scope: "Komplett elektroinstallasjon",
    year: "2024",
    location: "Oslo",
    highlights: [
      "Moderne næringsbygg for byggebransjen",
      "Energieffektive løsninger",
      "Avanserte tekniske installasjoner",
      "Høy kvalitetsstandard",
    ],
  },
  {
    slug: "sno-lorenskog",
    title: "Snø Lørenskog",
    type: "naering",
    typeLabel: "Næring",
    description:
      "Spesialtilpasset elektroinstallasjon for Snø Lørenskog, Norges innendørs skianlegg med unike krav til kulde og energieffektivitet.",
    longDescription:
      "Snø i Lørenskog er Norges innendørs skianlegg, et unikt prosjekt som krevde spesialtilpassede elektriske løsninger for drift i lave temperaturer. North Installasjon bidro med elektroinstallasjon til dette innovative anlegget, som er et av de mest teknisk krevende byggeprosjektene i norsk byggebransje.",
    longDescription2:
      "Anlegget byr på helt spesielle utfordringer. Skihallene krever stabil drift ved konstante temperaturer under frysepunktet, mens øvrige arealer som resepsjon, garderober og serveringsområder holder vanlig romtemperatur. Dette stiller store krav til at de elektriske installasjonene fungerer pålitelig under ekstreme forhold, med utstyr og komponenter som tåler kulde og fuktighet over tid. Temperaturskillene mellom ulike soner i bygget gjør at kabelføringer og tilkoblinger må være spesielt godt beskyttet mot kondens og fuktinntrenging.",
    longDescription3:
      "Som deltaker i dette unike prosjektet samarbeidet vi med entreprenører og tekniske leverandører for å sikre robuste og energieffektive elektriske systemer. Prosjektet har gitt oss verdifull erfaring med spesialtilpassede installasjoner som krever grundig planlegging og tilpasning til svært ulike driftsforhold innenfor ett og samme bygg. Løsningene understøtter både sikkerhet, driftsstabilitet og lavt energiforbruk.",
    longDescription4:
      "Snø Lørenskog er et av de mest teknisk krevende prosjektene vi har deltatt i. Anlegget krever kontinuerlig pålitelig drift av alle elektriske systemer, fra belysning og ventilasjon til avanserte kjøleanlegg som opprettholder skiforholdene. Dette gir oss verdifull erfaring med installasjoner der driftsstabilitet er helt avgjørende, og der utstyret må fungere under forhold som er langt utenfor det vanlige i norsk byggebransje. Samarbeidet har styrket vår evne til å levere robuste løsninger under krevende forhold.",
    image: "/images/project-sno-lorenskog.webp",
    kunde: "Snø AS",
    scope: "Elektroinstallasjon",
    year: "2023-2024",
    location: "Lørenskog",
    highlights: [
      "Unikt innendørs skianlegg",
      "Spesialtilpassede løsninger for kulde",
      "Kompleks teknisk installasjon",
      "Innovativt prosjekt",
    ],
  },
  {
    slug: "service-naeringslokaler",
    title: "Service næringslokaler",
    type: "naering",
    typeLabel: "Næring",
    description:
      "Årlig service og vedlikehold av elektriske anlegg for restaurantkjede i Oslo-området, med fast kontaktperson og rask responstid.",
    longDescription:
      "North Installasjon har serviceavtale med en større restaurantkjede i Oslo-området. Vi utfører årlig kontroll og vedlikehold av alle elektriske anlegg, inkludert storkjøkkenutstyr, ventilasjon og belysning. Fast kontaktperson og rask responstid ved akutte feil sikrer trygg og stabil drift. Avtalen dekker alle kjedens lokasjoner i Oslo-regionen.",
    longDescription2:
      "I restaurantbransjen er det avgjørende at de elektriske anleggene fungerer til enhver tid. Et strømbrudd eller en feil på storkjøkkenutstyret kan føre til store økonomiske tap og dårlige gjesteopplevelser. Gjennom vår serviceavtale bistår vi med forebyggende vedlikehold som reduserer risikoen for uforutsette driftsstanser. Vi gjennomfører regelmessige kontroller av sikringsskap, varmtvannsberedere, ventilasjonssystemer og belysningsanlegg. Ved behov skifter vi ut slitte komponenter før de forårsaker driftsavbrudd.",
    longDescription3:
      "Dokumentasjon og samsvar med gjeldende forskrifter er en viktig del av leveransen. Alle kontroller og vedlikeholdsarbeider dokumenteres grundig, slik at kunden alltid har oppdatert dokumentasjon tilgjengelig. Ved akutte feil stiller vi opp raskt med kvalifiserte fagfolk. Den tette relasjonen med kunden gir oss god kjennskap til de ulike lokalene og deres elektriske systemer, noe som gjør oss i stand til å løse problemer effektivt.",
    longDescription4:
      "Langsiktige serviceavtaler gir store fordeler for begge parter. Vi bygger opp kjennskap til kundens lokaler, systemer og utfordringer over tid, noe som gjør oss i stand til å gi bedre råd og utføre arbeid raskere. For kunden betyr det forutsigbare kostnader, redusert risiko for driftsstans og trygghet om at det elektriske anlegget er ivaretatt av fagfolk. Vi tilbyr lignende serviceavtaler til andre næringskunder som ønsker en pålitelig samarbeidspartner for vedlikehold av sine elektriske installasjoner.",
    image: "/images/project-service-naering.webp",
    kunde: "Nordnorsk Restaurantkjede",
    scope: "Serviceavtale og vedlikehold",
    year: "2023-2024",
    location: "Oslo-området",
    highlights: [
      "Årlig kontroll av alle elektriske anlegg",
      "Vedlikehold av storkjøkkenutstyr",
      "Akutt feilretting med kort responstid",
      "Dokumentasjon etter gjeldende forskrifter",
    ],
  },
];
