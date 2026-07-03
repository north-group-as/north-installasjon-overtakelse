import { BUSINESS } from "./business-data";

export interface Location {
  slug: string;
  name: string;
  county: string;
  geo: { lat: string; lng: string };
  description: string;
  localInfo: string;
  neighborhoods: string[];
  services: string[];
  parentSlug?: string;
  buildingTypes?: string;
  focusServices?: { title: string; description: string }[];
  caseAngle?: string;
  localHook?: string;
  faq?: { question: string; answer: string }[];
}

export const locations: Location[] = [
  {
    slug: "oslo",
    name: "Oslo",
    county: "Oslo",
    geo: { lat: "59.9139", lng: "10.7522" },
    description:
      "Elektriker i Oslo — North Installasjon leverer profesjonelle elektrikertjenester til private og bedrifter i hele Oslo. Fra elbillader og sikringsskap til næringsinstallasjoner.",
    localInfo:
      "Oslo er Norges hovedstad og største by. Vi betjener alle bydeler, fra Nordstrand og Østensjø i sør til Nordre Aker og Bjerke i nord. Som autorisert elektroinstallatør kjenner vi Oslos bygningsreglement og lokale forhold godt.",
    neighborhoods: [
      "Frogner",
      "Grünerløkka",
      "St. Hanshaugen",
      "Nordstrand",
      "Bjerke",
      "Østensjø",
      "Sagene",
      "Alna",
    ],
    services: [
      "Elbillader-installasjon",
      "Sikringsskap og el-tavle",
      "Service og feilsøking",
      "Næringsbygg elektro",
      "Elkontroll bolig",
    ],
  },
  {
    slug: "baerum",
    name: "Bærum",
    county: "Viken",
    geo: { lat: "59.8945", lng: "10.5296" },
    description:
      "Elektriker i Bærum — North Installasjon utfører elektrikerarbeid i hele Bærum kommune. Elbillader, sikringsskap, boliginstallasjon og næringsbygg.",
    localInfo:
      "Bærum er en av Norges mest folkerike kommuner vest for Oslo. Vi betjener Sandvika, Lysaker, Bekkestua, Stabekk, Høvik og omliggende områder. Mange eneboliger og rekkehus i Bærum er fra 60- og 70-tallet, og vi har stor erfaring med modernisering av eldre el-anlegg.",
    neighborhoods: [
      "Sandvika",
      "Lysaker",
      "Bekkestua",
      "Stabekk",
      "Høvik",
      "Østerås",
      "Jar",
      "Eiksmarka",
    ],
    services: [
      "Elbillader-installasjon",
      "Oppgradering av gammelt el-anlegg",
      "Sikringsskap og el-tavle",
      "Service og feilsøking",
      "Smarthus-installasjon",
    ],
  },
  {
    slug: "asker",
    name: "Asker",
    county: "Viken",
    geo: { lat: "59.8333", lng: "10.4333" },
    description:
      "Elektriker i Asker — North Installasjon tilbyr elektrikertjenester i Asker kommune. Vi hjelper med elbillader, el-tavle, boliginstallasjon og næringsprosjekter. Vi har bred erfaring med oppgradering av eldre el-anlegg i eneboliger og rekkehus, installasjon av smarthus-løsninger og dimbar belysning. Enten du trenger en enkel feilsøking eller et komplett el-prosjekt for et nybygg, har vi kompetansen som trengs. Vi bistår også sameier og borettslag med fellesprosjekter som elbilladere og oppgradering av felles el-tavler.",
    localInfo:
      "Asker kommune strekker seg fra fjorden i nord til marka i sør. Vi dekker Asker sentrum, Heggedal, Dikemark, Holmen og omkringliggende strøk. Asker har en variert bygningsmasse med eldre eneboliger fra 50- og 60-tallet, rekkehus fra 70-tallet og moderne leilighetsprosjekter nær togstasjonen. Mange av de eldre boligene har fortsatt skrusikringer og toledersystem uten jording, noe som krever oppgradering for å møte dagens forskriftskrav. Som autorisert installatør kjenner vi godt til de lokale kravene for elektroinstallasjon i Asker. Kommunen har også et voksende næringsliv med kontorbygg og butikker langs Billingstadsletta og i Asker sentrum der pålitelig nærings-el er etterspurt.",
    neighborhoods: [
      "Asker sentrum",
      "Heggedal",
      "Dikemark",
      "Holmen",
      "Slemmestad",
      "Vettre",
    ],
    services: [
      "Elbillader-installasjon",
      "Boliginstallasjon",
      "Sikringsskap",
      "Service og feilsøking",
      "Elkontroll",
    ],
  },
  {
    slug: "lillestrom",
    name: "Lillestrøm",
    county: "Viken",
    geo: { lat: "59.9556", lng: "11.0511" },
    description:
      "Elektriker i Lillestrøm — North Installasjon leverer elektrikertjenester i Lillestrøm og hele Romerike. Elbillader, boliginstallasjon, næringsbygg og service.",
    localInfo:
      "Lillestrøm er den største byen på Romerike og en av de raskest voksende kommunene i Norge. Vi betjener Lillestrøm sentrum, Kjeller, Strømmen, Løvenstad og Skedsmokorset. Stor utbygging av nye boliger og næringsbygg gir mye arbeid for autoriserte elektrikere i området.",
    neighborhoods: [
      "Lillestrøm sentrum",
      "Kjeller",
      "Strømmen",
      "Skedsmokorset",
      "Løvenstad",
      "Skjetten",
    ],
    services: [
      "Elbillader-installasjon",
      "Næringsbygg elektro",
      "Boliginstallasjon",
      "Sikringsskap",
      "Service og feilsøking",
    ],
  },
  {
    slug: "lorenskog",
    name: "Lørenskog",
    county: "Viken",
    geo: { lat: "59.9181", lng: "10.9608" },
    description:
      "Elektriker i Lørenskog — North Installasjon utfører elektrikerarbeid i Lørenskog kommune. Vi hjelper med elbillader, sikringsskap, boliginstallasjon og næringsbygg. Vi har god erfaring med både moderne nybygg og eldre boliger som trenger oppgradering av el-anlegget. Fra komfyrvakt og jordfeilvern til komplette smarthus-installasjoner, bistår vi med det meste innen elektroinstallasjon. Vi samarbeider med sameier og utbyggere i hele kommunen.",
    localInfo:
      "Lørenskog er en by- og tettstedskommune øst for Oslo med mye ny utbygging. Vi kjenner lokale forhold godt, fra eldre boliger i Lørenskog sentrum til nye leilighetsprosjekter på Skårer og Robsrud. Kommunen har hatt en betydelig utbygging de siste årene, spesielt rundt Lørenskog stasjon og i tilknytning til kjøpesentre som Metro-senteret. Disse nybyggene har moderne el-anlegg, men beboerne trenger likevel ofte tilpasninger som ladepunkter, ekstra stikkontakter og belysning på terrasser. Samtidig har Lørenskog en betydelig andel eneboliger og rekkehus fra 70- og 80-tallet der sikringsskapet gjerne trenger en oppgradering. Vi har god erfaring med begge bygningstyper og tilpasser løsningen til ditt behov.",
    neighborhoods: [
      "Lørenskog sentrum",
      "Skårer",
      "Robsrud",
      "Fjellhamar",
      "Visperud",
    ],
    services: [
      "Elbillader-installasjon",
      "Boliginstallasjon",
      "Næringsbygg elektro",
      "Sikringsskap",
      "Service og feilsøking",
    ],
  },
  {
    slug: "ski",
    name: "Ski",
    county: "Viken",
    geo: { lat: "59.7189", lng: "10.8344" },
    description:
      "Elektriker i Ski — North Installasjon leverer profesjonell elektroinstallasjon i Ski og Nordre Follo. Elbillader, boliginstallasjon, næring og service.",
    localInfo:
      "Ski er kommunesenteret i Nordre Follo og knutepunkt for Follo-regionen. Vi dekker Ski, Kolbotn, Oppegård og Langhus. Mange nye utbyggingsprosjekter og et voksende næringsliv gjør elektrikertjenester etterspurt i hele Follo-regionen.",
    neighborhoods: [
      "Ski sentrum",
      "Kolbotn",
      "Oppegård",
      "Langhus",
      "Vevelstad",
    ],
    services: [
      "Elbillader-installasjon",
      "Boliginstallasjon",
      "Elkontroll",
      "Sikringsskap",
      "Service og feilsøking",
    ],
  },
  {
    slug: "moss",
    name: "Moss",
    county: "Viken",
    geo: { lat: "59.4336", lng: "10.6598" },
    description:
      "Elektriker i Moss — North Installasjon tilbyr elektrikertjenester i Moss og Østfold-regionen. Elbillader, boliginstallasjon, næring og servicearbeid. Vi utfører alt fra enkle serviceoppdrag til større installasjonsprosjekter i boliger, leiligheter og næringsbygg. Våre elektrikere har god kunnskap om lokale forhold og forskriftskrav i Moss kommune, og vi bistår gjerne med befaring og prisestimat før du bestemmer deg.",
    localInfo:
      "Moss er Østfolds største by og har et aktivt næringsliv og mange boligprosjekter. Vi betjener Moss sentrum, Jeløy, Rygge og omliggende områder. Byen har en variert bygningsmasse med eldre trehusbebyggelse i sentrum, rekkehus og blokker fra 60- til 80-tallet og moderne leilighetsprosjekter nær stasjonen. Mange eldre boliger i Moss har behov for oppgradering av sikringsskapet, og med den økende interessen for elbillading og varmepumper er kapasitetsutvidelse etterspurt. Næringslivet i Moss-regionen er også i vekst, og kontorbygg og butikker trenger jevnlig elektrisk vedlikehold og oppgradering. Kontakt oss for et uforpliktende prisestimat på elektrikerarbeid i Moss.",
    neighborhoods: [
      "Moss sentrum",
      "Jeløy",
      "Rygge",
      "Kambo",
      "Dillingøy",
    ],
    services: [
      "Elbillader-installasjon",
      "Boliginstallasjon",
      "Næringsbygg elektro",
      "Sikringsskap",
      "Service og feilsøking",
    ],
  },
  {
    slug: "as",
    name: "Ås",
    county: "Viken",
    geo: { lat: "59.6647", lng: "10.7897" },
    description:
      "Elektriker i Ås — North Installasjon utfører elektrikerarbeid i Ås kommune. Elbillader, boliginstallasjon, studentboliger og næringsbygg. Vi har bred erfaring med både privatboliger, studentboliger og kontorbygg i området. Fra enkle serviceoppdrag og elkontroll til større installasjonsprosjekter, bistår vi med pålitelig og forskriftsmessig utført arbeid. Vi kjenner Ås-området godt og tilpasser oss lokale forhold og byggeforskrifter.",
    localInfo:
      "Ås er kjent for NMBU (Norges miljø- og biovitenskapelige universitet) og har et aktivt studentmiljø. Vi betjener Ås sentrum, Kroer og omkringliggende grender. Kommunen har en blanding av eneboliger og rekkehus fra 60- til 80-tallet, studentboliger tilknyttet universitetet og en økende andel moderne leilighetsprosjekter nær Ås stasjon. Mange av de eldre boligene har behov for oppgradering av el-anlegget, spesielt sikringsskap med skrusikringer som bør byttes til automatsikringer med jordfeilvern. Med god forbindelse til Oslo via Østfoldbanen har Ås vokst som pendlerkommune, noe som har gitt økt etterspørsel etter ladepunkter og smarthus-løsninger. God erfaring med både privatboliger og næringsbygg i Ås-området.",
    neighborhoods: [
      "Ås sentrum",
      "Kroer",
      "Korsegården",
      "Nordby",
    ],
    services: [
      "Elbillader-installasjon",
      "Boliginstallasjon",
      "Elkontroll",
      "Sikringsskap",
      "Næringsbygg elektro",
    ],
  },

  // ---------------------
  // Oslo bydeler
  // ---------------------
  {
    slug: "frogner",
    name: "Frogner",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.9180", lng: "10.7060" },
    buildingTypes:
      "Murgårder fra 1890-1930, ambassader, store leiligheter med høy takhøyde",
    description:
      "Elektriker på Frogner i Oslo. North Installasjon har bred erfaring med elektrikerarbeid i murgårder og eldre bygårder på Frogner. Vi oppgraderer sikringsskap, legger skjulte kabler og installerer moderne jordfeilvern tilpasset bygningenes historiske karakter. Enten du bor i en romslig leilighet ved Bygdøy allé eller i en villa på Elisenberg, sørger vi for at det elektriske anlegget ditt er trygt og oppfyller dagens forskriftskrav. Vi samarbeider tett med borettslag og sameier i bydelen for å planlegge fellesprosjekter som elbilladere i bakgårder og oppgradering av felles el-tavler.",
    localInfo:
      "Frogner er en av Oslos eldste og mest ettertraktede bydeler, med et bredt utvalg av murgårder bygget mellom 1890 og 1930. Mange av disse bygningene har det opprinnelige elektriske anlegget, noe som betyr at sikringsskapet ofte er utdatert og ikke dimensjonert for moderne strømforbruk. Bydelen har også en høy andel ambassader og representasjonsboliger, der kravene til pålitelighet og estetikk i el-installasjonen er spesielt strenge. Takhøyder på tre meter eller mer gir utfordringer ved montering av lysarmaturer og nedforinger, men også muligheter for spektakulær belysning. North Installasjon kjenner Frogners bygningsstruktur og har erfaring med å jobbe tett på Byantikvaren der det er påkrevd.",
    localHook:
      "Frogner er et av Oslos mest etablerte boligområder, der mange bygårder er over hundre år gamle. Det elektriske anlegget i disse byggene var dimensjonert for en helt annen tid, med langt færre strømpunkter og lavere kapasitet enn det moderne husstander krever. Induksjonstopper, varmepumper, elbilladere og hjemmekontor presser gamle sikringsskap til grensen. Å oppgradere det elektriske anlegget i en murgård krever en elektriker som forstår de spesielle utfordringene: skjult kabling gjennom tykke murvegger, hensyn til stukkaturer og listverk, og samarbeid med andre håndverkere under rehabilitering. North Installasjon har nettopp denne kompetansen.",
    focusServices: [
      {
        title: "Oppgradering sikringsskap i murgårder",
        description:
          "Vi bytter ut gamle skrusikringer med automatsikringer og installerer påbudt jordfeilvern. I eldre murgårder er det ofte begrenset plass i sikringsskapet, så vi prosjekterer nye tavler som gir rom for fremtidig utvidelse. Arbeidet gjøres med minimal synlig kabelføring.",
      },
      {
        title: "Skjult ledningsnett",
        description:
          "I leiligheter med stukkatur, rosetter og originale listverk er det viktig å legge kabler skjult. Vi bruker eksisterende kanaler i veggene og freses kun der det er nødvendig, alltid i samarbeid med eventuell antikvarisk rådgiver.",
      },
      {
        title: "Jordfeilvern og personsikkerhet",
        description:
          "Forskriftene krever jordfeilvern på alle kurser i boliger. I eldre anlegg med toledersystem uten jording kan dette kreve ekstra tiltak. Vi kartlegger anlegget og anbefaler den tryggeste løsningen for din bolig.",
      },
      {
        title: "Lyssetting i store leiligheter",
        description:
          "Med takhøyder over tre meter og store vindusflater har Frogner-leiligheter et enormt potensial for stemningsfull belysning. Vi prosjekterer og installerer dimbare lysløsninger, pendelbelysning og integrert LED-belysning tilpasset rommenes proporsjoner.",
      },
    ],
    caseAngle:
      "Oppgradering av sikringsskap og skjult kabling i murgård på Frogner",
    faq: [
      {
        question:
          "Hva koster det å oppgradere sikringsskapet i en gammel murgård på Frogner?",
        answer:
          "Prisen avhenger av antall kurser og tilstanden på det eksisterende anlegget. For en typisk tre-roms leilighet i en Frogner-murgård ligger kostnaden normalt mellom 25 000 og 50 000 kroner for nytt sikringsskap med automatsikringer og jordfeilvern. Vi kommer gjerne på befaring og gir deg et uforpliktende prisestimat basert på din konkrete situasjon.",
      },
      {
        question:
          "Hvilke regler gjelder for elektrisk arbeid i vernede bygninger på Frogner?",
        answer:
          "Dersom bygningen er fredet eller har antikvarisk verdi, må arbeidet utføres slik at originale detaljer bevares. Byantikvaren kan stille krav til hvordan kabler føres og hvor synlig installasjon skal plasseres. Vi har erfaring med å finne løsninger som tilfredsstiller både el-forskriftene og antikvariske hensyn, og vi bistår gjerne med søknader der det er nødvendig.",
      },
      {
        question:
          "Kan jeg installere elbillader i bakgården til sameiet mitt på Frogner?",
        answer:
          "Ja, men det krever vedtak i sameiet og en kapasitetsvurdering av byggets hovedinntak. Mange eldre bygårder har begrenset inngangseffekt, så det kan være nødvendig med en utvidelse hos nettselskapet. Vi hjelper sameier med å prosjektere ladeanlegg med lastbalansering, slik at flere beboere kan lade uten å overbelaste anlegget.",
      },
      {
        question:
          "Hvor lang tid tar det å skifte sikringsskap i en leilighet på Frogner?",
        answer:
          "For en standard leilighet med seks til ti kurser tar selve byttet av sikringsskap vanligvis én arbeidsdag. Dersom det er behov for å trekke nye kabler eller utvide antall kurser, kan arbeidet strekke seg over to til tre dager. Vi avtaler alltid tidsplan på forhånd og rydder etter oss.",
      },
    ],
    neighborhoods: [
      "Bygdøy allé",
      "Frognerparken",
      "Majorstuen",
      "Elisenberg",
      "Uranienborg",
    ],
    services: [
      "Sikringsskap og el-tavle",
      "Skjult kabelføring",
      "Jordfeilvern",
      "Belysning og lysstyring",
      "Elbillader-installasjon",
      "Elkontroll bolig",
    ],
  },
  {
    slug: "grunerlokka",
    name: "Grünerløkka",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.9225", lng: "10.7617" },
    buildingTypes: "Murgårder fra 1850-1900, nybygg langs Akerselva",
    description:
      "Elektriker på Grünerløkka i Oslo. North Installasjon utfører elektrikerarbeid tilpasset Løkkas unike bygningsmasse. Vi hjelper borettslag med oppgradering av gamle el-anlegg, installerer komfyrvakt og jordfeilvern, og legger til rette for elbillading i sameier med begrenset parkeringskapasitet. Bydelen har også et stort antall serveringssteder og butikker som trenger pålitelig nærings-el. Vi jobber effektivt i trange bygårder og sørger for at arbeidet forstyrrer naboene minst mulig.",
    localInfo:
      "Grünerløkka er Oslos tettest befolkede bydel, med en blanding av murgårder fra andre halvdel av 1800-tallet og moderne nybygg langs Akerselva. Bydelen har en ung befolkning og et levende uteliv med kafeer, restauranter og butikker som stiller høye krav til det elektriske anlegget. Mange borettslag på Løkka sliter med underdimensjonerte sikringsskap og manglende jordfeilvern, og det er et stort behov for systematisk oppgradering. Samtidig har nybyggene langs elva moderne el-anlegg der behovet i stedet handler om tilpasning til hjemmekontor og ladepunkter.",
    localHook:
      "Grünerløkka er Oslos mest folksomme bydel, der trange bakgårder og smale trappeoppganger preger hverdagen for håndverkere. Bygårdene er blant de eldste i byen, og mange leiligheter har fortsatt det opprinnelige toledersystemet uten jording. Når nye beboere flytter inn med induksjonstopp, oppvaskmaskin og tørketrommel, blir det raskt tydelig at anlegget ikke holder mål. I tillegg har bydelen en tett konsentrasjon av serveringssteder som trenger trefase-tilkobling, ventilasjon og belysning som tåler daglig slitasje. North Installasjon kjenner disse utfordringene og jobber raskt og ryddig i trange omgivelser.",
    focusServices: [
      {
        title: "El-sjekk ved overtakelse",
        description:
          "Når du kjøper leilighet på Grünerløkka, bør du få en grundig gjennomgang av det elektriske anlegget før overtakelse. Vi sjekker sikringsskapets tilstand, måler isolasjonsmotstand og dokumenterer eventuelle avvik. Rapporten gir deg trygghet og kan brukes som forhandlingskort.",
      },
      {
        title: "Sikringsskap i borettslag",
        description:
          "Mange borettslag på Løkka planlegger samlet oppgradering av sikringsskap for å sikre beboerne og redusere brannrisikoen. Vi tilbyr pakkepriser for borettslag og koordinerer arbeidet slik at hver leilighet har strøm igjen samme dag.",
      },
      {
        title: "Ladepunkt for sameier",
        description:
          "Med begrenset parkering i bakgårder og garasjeanlegg er lastbalansering helt nødvendig for elbillading på Grünerløkka. Vi prosjekterer og installerer ladeanlegg med smart styring, slik at strømkapasiteten fordeles rettferdig mellom beboerne.",
      },
      {
        title: "El-tilpasning næringslokaler",
        description:
          "Kafeer, restauranter og butikker på Grünerløkka trenger ofte utvidet strømkapasitet, ny belysning eller tilpasset ventilasjonsstyring. Vi hjelper næringsdrivende med alt fra prosjektering til ferdigstillelse, og vi sørger for at arbeidet går raskt slik at driftsstansen blir kortest mulig.",
      },
    ],
    caseAngle:
      "Samlet sikringsskapbytte for borettslag med 40 leiligheter på Grünerløkka",
    faq: [
      {
        question:
          "Bør jeg bestille el-sjekk når jeg kjøper leilighet på Grünerløkka?",
        answer:
          "Absolutt. Mange leiligheter på Løkka har el-anlegg fra byggeåret, altså 1860-1900-tallet, som aldri er blitt fullstendig oppgradert. En el-sjekk avdekker manglende jording, dårlig isolasjon og overbelastede kurser. Rapporten gir deg oversikt over nødvendige tiltak og kan gi grunnlag for prisforhandling med selger.",
      },
      {
        question:
          "Hvordan fungerer elbillading i et sameie med felles parkeringskjeller?",
        answer:
          "Vi installerer et sentralt ladeanlegg med lastbalansering som fordeler tilgjengelig strømkapasitet dynamisk mellom laderne. Hver ladeplass får sin egen måler slik at kostnadene fordeles rettferdig. Systemet kan bygges ut trinnvis etter hvert som flere beboere skaffer elbil, uten at hovedsikringen må oppgraderes umiddelbart.",
      },
      {
        question:
          "Hva koster det å oppgradere det elektriske anlegget i en kafé på Grünerløkka?",
        answer:
          "Kostnaden varierer stort avhengig av lokalet og behovene. En enkel utvidelse med ekstra kurser og ny belysning kan ligge på 30 000-60 000 kroner, mens en full omlegging med trefase og ventilasjonsstyring fort kan komme på 100 000 kroner eller mer. Vi gir alltid et detaljert tilbud etter befaring.",
      },
    ],
    neighborhoods: [
      "Thorvald Meyers gate",
      "Markveien",
      "Birkelunden",
      "Sofienberg",
      "Rodeløkka",
    ],
    services: [
      "El-sjekk og tilstandsrapport",
      "Sikringsskap og el-tavle",
      "Elbillader med lastbalansering",
      "Næringsel og belysning",
      "Jordfeilvern",
      "Komfyrvakt",
    ],
  },
  {
    slug: "majorstuen",
    name: "Majorstuen",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.9290", lng: "10.7140" },
    buildingTypes: "Murgårder, 50-tallsblokker, noen nyere bygg",
    description:
      "Elektriker på Majorstuen i Oslo. North Installasjon tilbyr skreddersydde elektrikertjenester på Majorstuen og i nærområdene Fagerborg, Bogstadveien og Smestad. Vi er spesialister på smarthus-installasjon, moderne lysstyring og oppgradering av el-anlegg i mellomkrigsleiligheter. Mange boligeiere på Majorstuen investerer i totalrenovering, og vi bistår med alt fra prosjektering av nytt el-opplegg til ferdig installasjon av dimbar belysning, terrassevarme og USB-ladestasjoner.",
    localInfo:
      "Majorstuen er et populært boligområde sentralt i Oslo, med en blanding av murgårder fra tidlig 1900-tall, etterkrigsblokker fra 1950-tallet og enkeltstående nyere bygg. Bydelen tiltrekker seg barnefamilier og profesjonelle som ønsker god plass og sentral beliggenhet. Bogstadveien er Oslos lengste handlegate, og næringslokalene langs denne gaten har jevnlig behov for elektrisk vedlikehold og oppgradering. Boligene på Fagerborg og rundt Smestad har ofte større areal enn snittet i Oslo, noe som gir rom for mer avanserte el-løsninger.",
    localHook:
      "Majorstuen er et av Oslos mest populære oppussingsområder. Familier som kjøper leiligheter fra mellomkrigstiden ønsker å beholde den opprinnelige sjamen, men med moderne komfort. Det betyr nytt el-anlegg med skjulte kabler, dimbar belysning i alle rom, gulvvarme på bad og gjerne smarthus-styring fra telefonen. Samtidig har 50-tallsblokkene på Smestad og Adamstuen egne utfordringer: anleggene var gode da de ble bygget, men kapasiteten rekker ikke for dagens forbruk. North Installasjon hjelper boligeiere på Majorstuen med å finne den rette balansen mellom gammelt preg og ny teknologi.",
    focusServices: [
      {
        title: "Smarthus-installasjon",
        description:
          "Vi installerer smarthus-løsninger tilpasset eksisterende bygningsmasse. Fra enkel appstyrt belysning til fullintegrerte KNX-systemer der du styrer lys, varme, solskjerming og sikkerhet fra én flate. Vi anbefaler systemer som fungerer pålitelig over tid, uten abonnementskostnader.",
      },
      {
        title: "Lysstyring og dimming",
        description:
          "Riktig belysning forandrer opplevelsen av et rom. Vi prosjekterer lysskjemaer med soner og scener, installerer dimmere og integrerer belysningen med eventuelt smarthus-system. Spesielt i leiligheter med høy takhøyde gir dette et dramatisk bedre resultat enn standard taklys.",
      },
      {
        title: "El-oppgradering mellomkrigsleiligheter",
        description:
          "Leiligheter fra 1920- og 1930-tallet har gjerne for få stikkontakter og kurser til moderne behov. Vi utvider el-anlegget med nye kurser, bytter sikringsskap og legger jording der det mangler. Arbeidet planlegges slik at de opprinnelige veggene og detaljene skades minst mulig.",
      },
      {
        title: "Terrassevarme og utendørs-el",
        description:
          "Mange leiligheter og rekkehus på Majorstuen har terrasser og balkonger der varmekabler eller infrarøde varmepaneler forlenger sesongen. Vi installerer utendørs stikkontakter, terrassevarme og belysning som tåler norsk vær.",
      },
    ],
    caseAngle:
      "Totalrenovering av el-anlegg i mellomkrigsleilighet på Fagerborg",
    faq: [
      {
        question:
          "Hva koster smarthus-installasjon i en leilighet på Majorstuen?",
        answer:
          "En enkel smarthus-pakke med styring av belysning i stue, kjøkken og soverom starter rundt 15 000-30 000 kroner inkludert utstyr og installasjon. Et fullstendig KNX-system med styring av lys, varme og persienner i en stor leilighet kan komme på 80 000-150 000 kroner. Vi anbefaler å starte enkelt og bygge ut etter hvert.",
      },
      {
        question:
          "Kan jeg beholde de gamle lysbryterhøydene når jeg oppgraderer el-anlegget?",
        answer:
          "Ja, vi tilpasser oss boligens stil. I mange mellomkrigsleiligheter sitter brytere og stikkontakter på andre høyder enn dagens standard. Dersom du ønsker å beholde det opprinnelige uttrykket, monterer vi nye brytere i eksisterende høyder og kan bruke retro-design på brytere og deksler.",
      },
      {
        question:
          "Trenger jeg å oppgradere sikringsskapet i en 50-tallsblokk på Smestad?",
        answer:
          "Sannsynligvis. De fleste sikringsskap fra 1950-tallet har skrusikringer og mangler jordfeilvern. Med moderne apparater som induksjonstopp, varmepumpe og elbillader er kapasiteten ofte for lav. En oppgradering til automatsikringer med jordfeilvern koster typisk 20 000-40 000 kroner og gir deg et tryggere og mer fleksibelt anlegg.",
      },
    ],
    neighborhoods: [
      "Fagerborg",
      "Bogstadveien",
      "Smestad",
      "Adamstuen",
      "Bislett",
    ],
    services: [
      "Smarthus-installasjon",
      "Lysstyring og dimming",
      "Sikringsskap og el-tavle",
      "Terrassevarme",
      "Elbillader-installasjon",
      "Service og feilsøking",
    ],
  },
  {
    slug: "nordstrand",
    name: "Nordstrand",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.8650", lng: "10.7960" },
    buildingTypes: "Eneboliger fra 1930-1970, rekkehus",
    description:
      "Elektriker på Nordstrand i Oslo. North Installasjon betjener boligeiere på Nordstrand med alt fra elbillader i garasje og carport til utendørsbelysning, varmekabel i innkjørsel og kapasitetsutvidelse for varmepumpe. Nordstrand er et villaområde der mange hus trenger modernisering av det elektriske anlegget. Vi utfører grundige befaringer, gir klare prisestimater og gjennomfører arbeidet effektivt med minimal forstyrrelse for familien din.",
    localInfo:
      "Nordstrand er en villaforstad i sørøstre Oslo, med eneboliger og rekkehus hovedsakelig bygget mellom 1930 og 1970. Bydelen har et rolig, familievennlig preg med nærhet til marka og sjøen. Mange boliger har gjennomgått oppussing de siste årene, men det elektriske anlegget er ofte det siste som oppgraderes. Hus fra denne perioden har typisk 32 ampere hovedsikring og et begrenset antall kurser, noe som ikke holder for moderne forbruk med varmepumpe, elbillader og induksjonstopp. North Installasjon har lang erfaring med eneboligprosjekter på Nordstrand og kjenner de vanligste utfordringene i denne typen bygningsmasse.",
    localHook:
      "Nordstrand er et av Oslos mest ettertraktede villaområder, der solide eneboliger fra mellomkrigstiden og etterkrigstiden gir familier god plass. Men med alderen følger elektriske utfordringer. Sikringsskapet i kjelleren har kanskje skrusikringer fra byggeåret, garasjen mangler stikkontakt for elbilladeren, og den nye varmepumpen krever mer effekt enn hovedsikringen tillater. Å oppgradere el-anlegget i en enebolig er en investering som øker både trygghet, komfort og boligverdi. North Installasjon gjør denne prosessen enkel og oversiktlig for deg som boligeier.",
    focusServices: [
      {
        title: "Elbillader i garasje og carport",
        description:
          "Vi installerer elbilladere i garasjer, carporter og på utendørs veggfeste. På Nordstrand er det vanlig med frittstående garasjer som kan trenge ny strømtilførsel fra hovedtavla. Vi dimensjonerer kabelen riktig og sørger for at laderen fungerer optimalt med boligens øvrige strømforbruk.",
      },
      {
        title: "Utendørsbelysning hage og inngangsparti",
        description:
          "God utendørsbelysning øker både trygghet og trivsel. Vi installerer vegglamper, pullertlys langs gangveier, spotbelysning mot fasade og automatisk styring med skumringsbryter eller bevegelsessensor. Alt kabling graves ned eller føres skjult langs fasaden.",
      },
      {
        title: "Varmekabel i innkjørsel",
        description:
          "Bratte innkjørsler på Nordstrand kan bli glatte og farlige om vinteren. Varmekabel i asfalt eller belegningsstein holder innkjørselen fri for is og snø. Vi dimensjonerer anlegget etter innkjørselens areal og helning, og kobler det til automatisk styring med fukt- og temperatursensor.",
      },
      {
        title: "Kapasitetsutvidelse for varmepumpe",
        description:
          "Mange eneboliger på Nordstrand har installert eller planlegger luft-til-vann-varmepumpe. Disse krever ofte en egen kurs med tilstrekkelig sikringsstørrelse og i noen tilfeller oppgradering av hovedsikringen. Vi sørger for at den elektriske infrastrukturen er klar før varmepumpe-montøren kommer.",
      },
    ],
    caseAngle:
      "Komplett el-oppgradering av enebolig fra 1958 på Nordstrand med elbillader og varmekabel",
    faq: [
      {
        question:
          "Kan jeg installere elbillader i en frittstående garasje på Nordstrand?",
        answer:
          "Ja, men det krever ofte at det legges ny kabel fra husets sikringsskap til garasjen. Avstanden og kabeltypen påvirker kostnaden. For en typisk frittstående garasje 15-20 meter fra huset bør du regne med 15 000-25 000 kroner for kabel, graving og installasjon av laderen, i tillegg til selve laderen.",
      },
      {
        question:
          "Hva koster varmekabel i innkjørselen min?",
        answer:
          "Prisen avhenger av arealet og om innkjørselen allerede har strømtilførsel i nærheten. For en typisk innkjørsel på 20-30 kvadratmeter koster selve varmekabelen og styringen rundt 25 000-45 000 kroner. I tillegg kommer eventuelt gravearbeid og asfaltering. Vi gir presise estimater etter befaring.",
      },
      {
        question:
          "Bør jeg oppgradere hovedsikringen i eneboligen min på Nordstrand?",
        answer:
          "Dersom du har 32 ampere hovedsikring og planlegger elbillader, varmepumpe eller induksjonstopp, er svaret som regel ja. Oppgradering til 40 eller 50 ampere gir deg nok kapasitet til moderne forbruk. Hovedsikringen endres i samarbeid med nettselskapet, og vi håndterer søknadsprosessen for deg.",
      },
    ],
    neighborhoods: [
      "Bekkelaget",
      "Ljan",
      "Holtet",
      "Nordstrandshøgda",
      "Sæter",
    ],
    services: [
      "Elbillader-installasjon",
      "Utendørsbelysning",
      "Varmekabel innkjørsel",
      "Sikringsskap og el-tavle",
      "Kapasitetsutvidelse",
      "Service og feilsøking",
    ],
  },
  {
    slug: "gamle-oslo",
    name: "Gamle Oslo",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.9060", lng: "10.7740" },
    buildingTypes:
      "Blanding av murgårder (1890-1910), kommunale bygg, nybygg (Sørenga, Bjørvika)",
    description:
      "Elektriker i Gamle Oslo. North Installasjon utfører elektrikerarbeid i hele Gamle Oslo, fra de eldste murgårdene på Tøyen og Grønland til nybyggene på Sørenga og i Bjørvika. Vi har erfaring med å oppgradere kommunale leilighetskomplekser, installere elbilladere i nye sameier og tilpasse el-anlegg for restauranter og serveringssteder i bydelen. Uansett om bygningen er fra 1895 eller 2020, leverer vi arbeid som er forskriftsmessig, varig og ryddig utført.",
    localInfo:
      "Gamle Oslo er en bydel med enorm variasjon i bygningsmassen. Tøyen, Grønland og Kampen har murgårder fra 1890-1910, mange med kommunale eiere og varierende vedlikeholdsstatus. Vålerenga har en blanding av trehusbebyggelse og nyere blokker. Sørenga og Bjørvika representerer den nye bydelen med moderne leilighetsbygg der el-anlegget er helt nytt, men hvor beboerne likevel trenger tilpasninger som hjemmekontor-opplegg, ekstra belysning og ladeanlegg. Bydelen har også et rikt utvalg av restauranter, barer og dagligvarebutikker som stiller krav til pålitelig nærings-el.",
    localHook:
      "Gamle Oslo spenner fra murgårder med over hundre års historie til Norges mest moderne boligprosjekter ved fjorden. Denne kontrasten stiller helt ulike krav til elektrikeren. I de eldre bygårdene handler det om sikkerhet: utskifting av utdaterte sikringsskap, installasjon av jordfeilvern og komfyrvakt, og oppgradering av underdimensjonerte kurser. I nybyggene handler det om tilpasning og komfort: flere stikkontakter på hjemmekontoret, ladepunkt i garasjen og belysning som skaper den stemningen du ønsker. North Installasjon behersker begge verdener og tilpasser løsningen til din bygning og dine behov.",
    focusServices: [
      {
        title: "El-sjekk i eldre bygg",
        description:
          "Vi gjennomfører grundige el-sjekker i eldre bygårder og dokumenterer tilstanden i en rapport du kan bruke som grunnlag for vedlikeholdsplan eller forsikringskrav. Sjekken avdekker farlige avvik som manglende jording, skadet isolasjon og overbelastede kurser.",
      },
      {
        title: "Oppgradering kommunale leiligheter",
        description:
          "Kommunale boligselskap i Gamle Oslo gjennomfører jevnlig vedlikeholdsprogrammer der el-anlegget oppgraderes. Vi har kapasitet til å håndtere store prosjekter med mange enheter og koordinerer arbeidet slik at beboerne opplever minst mulig ulempe.",
      },
      {
        title: "Elbillader i nybygg-sameier",
        description:
          "Nye sameier på Sørenga og i Bjørvika har ofte klargjort for elbillading, men selve laderen og tilkoblingen må installeres. Vi kobler til ladeboksen, setter opp brukertilgang og integrerer med sameiets lastbalanseringssystem.",
      },
      {
        title: "Næringsel for serveringssteder",
        description:
          "Restauranter og kafeer trenger kraftig strømforsyning til kjøkken, kjøl, ventilasjon og belysning. Vi prosjekterer og installerer nærings-el som tåler daglig drift, og vi sørger for at arbeidet tilfredsstiller brannforskriftene og matmyndighetenes krav til elektrisk utstyr i nærhet av matproduksjon.",
      },
    ],
    caseAngle:
      "Systematisk oppgradering av el-anlegg i kommunalt boligkompleks på Tøyen",
    faq: [
      {
        question:
          "Er det trygt å bo i en gammel murgård på Tøyen uten å oppgradere el-anlegget?",
        answer:
          "Det kommer an på tilstanden. Mange eldre anlegg fungerer, men mangler jordfeilvern og har isolasjon som er nedbrutt over tid. Vi anbefaler en el-sjekk som avdekker eventuell brannfare og gir deg en prioritert liste over tiltak. De mest kritiske punktene, som jordfeilvern og utskifting av smeltede kabler, bør utbedres raskt.",
      },
      {
        question:
          "Kan jeg bestille elektriker til elbilladertilkobling i et nybygg på Sørenga?",
        answer:
          "Ja. Selv om bygget er nytt og infrastrukturen er på plass, krever selve ladertilkoblingen en autorisert installatør. Vi kobler til laderen, tester anlegget og sørger for at alt er dokumentert. Vanligvis tar dette to til fire timer, avhengig av ladebokstype og kabelføring.",
      },
      {
        question:
          "Hva trenger restauranten min av elektrisk kapasitet i Gamle Oslo?",
        answer:
          "En typisk restaurant trenger trefase strømforsyning med 63-125 ampere hovedsikring, avhengig av kjøkkenutstyr og ventilasjon. Vi beregner effektbehovet basert på utstyret ditt og sørger for at strømforsyningen dekker både nåværende og fremtidig behov. Vi bistår også med å kontakte nettselskapet om kapasitetsutvidelse.",
      },
    ],
    neighborhoods: [
      "Tøyen",
      "Grønland",
      "Sørenga",
      "Bjørvika",
      "Kampen",
      "Vålerenga",
    ],
    services: [
      "El-sjekk og tilstandsrapport",
      "Sikringsskap og el-tavle",
      "Elbillader-installasjon",
      "Næringsel",
      "Jordfeilvern og komfyrvakt",
      "Service og feilsøking",
    ],
  },
  {
    slug: "ullern",
    name: "Ullern",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.9270", lng: "10.6470" },
    buildingTypes: "Eneboliger, villaer, noe nybygg",
    description:
      "Elektriker på Ullern i Oslo. North Installasjon leverer premium elektrikertjenester til boligeiere på Ullern. Vi tar totalentreprise for el i nybygg og tilbygg, installerer avanserte smarthus-systemer med KNX, prosjekterer solcelleanlegg og utfører el-prosjektering ved påbygg. Ullern er et område der boligeierne investerer i kvalitet, og vi sørger for at det elektriske anlegget matcher boligens standard i alle henseender.",
    localInfo:
      "Ullern er en av Oslos mest eksklusive bydeler, med store villaer, eneboliger og noen nyere leilighetskomplekser. Bydelen ligger vest i Oslo med nærhet til Sognsvann og marka. Mange eiendommer på Ullern er verdifulle og godt vedlikeholdt, og boligeierne forventer høy kvalitet i alle håndverkstjenester. El-prosjektene her er gjerne større og mer komplekse enn i sentrale bydeler: det kan handle om totalrenovering av en villa med fullt KNX-anlegg, installasjon av solceller på et nybygg, eller prosjektering av el for et tilbygg med separat leilighet.",
    localHook:
      "Ullern er Oslos premium villastrøk, der boligene er store og ambisjonene høye. Her planlegges el-anlegg ikke bare for å oppfylle minstekrav, men for å gi maksimal komfort og fremtidssikring. Smarthus med KNX-protokoll, solceller på taket, elbillader med dynamisk lastbalansering i dobbeltgarasjen og gjennomtenkt belysning i hage og fasade er standard forventning. North Installasjon har prosjektlederkompetanse for slike oppdrag og samarbeider sømløst med arkitekter, byggmestere og andre fagfolk for å levere et helhetlig resultat.",
    focusServices: [
      {
        title: "Totalentreprise el nybygg og tilbygg",
        description:
          "Vi påtar oss totalansvaret for all elektroinstallasjon i nybygg og tilbygg. Det inkluderer prosjektering, innkjøp av materiell, installasjon, testing og ferdigattest. Du får én kontaktperson som koordinerer med øvrige entreprenører, og du slipper å forholde deg til flere underleverandører.",
      },
      {
        title: "Smarthus med KNX",
        description:
          "KNX er den ledende standarden for smarthus i premium-segmentet. Vi prosjekterer og programmerer KNX-anlegg der du styrer belysning, varme, persienner, ventilasjon og sikkerhet fra én app eller et veggpanel. Systemet er åpent og leverandøruavhengig, slik at du ikke er låst til ett merke.",
      },
      {
        title: "Solcelleanlegg",
        description:
          "Med store takflater og god solinnstråling er mange villaer på Ullern ideelle for solceller. Vi prosjekterer anlegget, håndterer søknad om tilknytning til strømnettet og installerer paneler, vekselretter og eventuelt batteri. Et typisk anlegg på en enebolig produserer 8 000-12 000 kWh årlig.",
      },
      {
        title: "El-prosjektering ved påbygg",
        description:
          "Når du bygger på en ekstra etasje eller en separat utleiedel, trenger du el-prosjektering som dekker nye kurser, underfordeling og eventuelt ny innmatingskabel. Vi lager komplette el-tegninger og arbeidsbeskrivelser som grunnlag for byggesøknad og utførelse.",
      },
    ],
    caseAngle:
      "Fullverdig KNX smarthus-installasjon i nyoppført villa på Ullern",
    faq: [
      {
        question:
          "Hva koster et KNX smarthus-anlegg i en villa på Ullern?",
        answer:
          "Et komplett KNX-anlegg i en villa på 250-350 kvadratmeter ligger typisk mellom 200 000 og 500 000 kroner, avhengig av hvor mange funksjoner du ønsker styrt. Grunnpakken med lys og varme er rimeligere, mens full integrering med persienner, ventilasjon, multirom og sikkerhet er i øvre sjikt. Vi gir detaljert spesifikasjon og pris etter en gjennomgang av dine ønsker.",
      },
      {
        question:
          "Lønner det seg med solceller på Ullern?",
        answer:
          "Ja, for de fleste villaer med sørvendt eller vest/østvendt tak. Med dagens strømpriser og Enovas støtteordninger tjener du typisk inn investeringen på 8-12 år. Et anlegg på 10 kWp koster rundt 150 000-200 000 kroner ferdig installert, og produserer strøm i 25-30 år med minimalt vedlikehold.",
      },
      {
        question:
          "Kan North Installasjon prosjektere el for et tilbygg som skal ha egen utleiedel?",
        answer:
          "Ja, vi prosjekterer el-anlegg for tilbygg og utleiedeler med separat måler og sikringsskap. Vi lager tegninger som tilfredsstiller kravene i plan- og bygningsloven og koordinerer med øvrige rådgivere. El-prosjekteringen inngår som en del av byggesøknaden.",
      },
    ],
    neighborhoods: [
      "Smestad",
      "Montebello",
      "Lilleaker",
      "Bestum",
      "Huseby",
    ],
    services: [
      "Totalentreprise el",
      "Smarthus og KNX",
      "Solcelleanlegg",
      "El-prosjektering",
      "Elbillader-installasjon",
      "Belysning hage og fasade",
    ],
  },
  {
    slug: "sagene",
    name: "Sagene",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.9340", lng: "10.7520" },
    buildingTypes:
      "Arbeiderleiligheter fra tidlig 1900-tall, nybygg langs Akerselva",
    description:
      "Elektriker på Sagene i Oslo. North Installasjon utfører elektrikerarbeid i hele Sagene bydel, fra de karakteristiske arbeiderleilighetene på Torshov og Bjølsen til nye boligprosjekter langs Akerselva. Vi oppgraderer el-anlegg i forbindelse med oppussing, installerer komfyrvakt og jordfeilvern, og setter opp elbilladere i nybygg-garasjer. Sagene er en bydel i rask forandring, og vi tilpasser løsningene til både gammelt og nytt.",
    localInfo:
      "Sagene er en bydel nordvest i Oslo som har gjennomgått stor forvandling de siste tiårene. Området var opprinnelig industripreget med fabrikker langs Akerselva og arbeiderleiligheter i enkle murgårder. I dag er fabrikkene omgjort til leiligheter og kontorer, og bydelen tiltrekker seg unge familier og førstegangskjøpere. Leilighetene på Torshov og Bjølsen er ofte små og har el-anlegg som ikke er dimensjonert for moderne bruk. Nybyggene langs elva, derimot, har moderne infrastruktur der utfordringen heller er å tilpasse standardløsningen til beboernes individuelle behov.",
    localHook:
      "Sagene er en bydel der gammel arbeiderhistorie møter ny urban utvikling. Murgårdene fra tidlig 1900-tall ble bygget for en annen tid, med én lyskurs og kanskje én stikkontaktkurs per leilighet. Når dagens beboere installerer oppvaskmaskin, tørketrommel, induksjonstopp og hjemmekontor, går sikringene. Samtidig reises det nye boligblokker langs Akerselva der el-anlegget er tilrettelagt for elbillading og fiberbasert smarthus, men der beboerne likevel trenger hjelp med tilpasninger. North Installasjon er til stede i hele dette spennet og sørger for trygge, forskriftsmessige løsninger uansett bygningens alder.",
    focusServices: [
      {
        title: "El-sjekk ved oppussing",
        description:
          "Når du pusser opp en leilighet på Sagene, bør el-anlegget sjekkes og eventuelt oppgraderes samtidig. Vi kartlegger eksisterende anlegg, identifiserer mangler og foreslår utbedringer som passer budsjettet. Å ta el-jobben under oppussingen er langt billigere enn å gjøre det i etterkant.",
      },
      {
        title: "Elbillader i nybygg-garasjer",
        description:
          "Nybyggene langs Akerselva har ofte garasjeanlegg med klargjøring for elbillading. Vi installerer ladeboksen, kobler den til styringssystemet og sørger for at du kan begynne å lade med én gang. Vi samarbeider med sameiets styre for å velge løsning som fungerer for alle beboere.",
      },
      {
        title: "Komfyrvakt",
        description:
          "Komfyrvakt er påbudt i nye installasjoner og sterkt anbefalt i eldre boliger. Flere forsikringsselskaper gir rabatt på innboforsikringen dersom komfyrvakt er installert. Vi monterer komfyrvakt som passer din komfyrtype og kobler den til sikringsskapet.",
      },
    ],
    caseAngle:
      "Oppgradering av el-anlegg i forbindelse med totalrenovering av arbeiderleilighet på Torshov",
    faq: [
      {
        question:
          "Hva bør jeg gjøre med el-anlegget når jeg pusser opp på Torshov?",
        answer:
          "Start med en el-sjekk som kartlegger tilstanden. Dersom anlegget har toledersystem uten jording, bør du legge nye kabler med jord til alle rom. Bytt sikringsskapet til automatsikringer med jordfeilvern, og legg ekstra kurser til kjøkken og bad. Å gjøre dette under oppussingen sparer deg for betydelige kostnader sammenlignet med å åpne veggene på nytt senere.",
      },
      {
        question:
          "Hvor mye koster det å installere komfyrvakt?",
        answer:
          "Komfyrvakt koster vanligvis mellom 3 000 og 6 000 kroner ferdig installert, avhengig av type og om det er behov for ekstra kabling. Prisen inkluderer sensor, styreenhet og tilkobling til sikringsskapet. Det er en rimelig investering som gir økt brannsikkerhet og potensielt lavere forsikringspremie.",
      },
      {
        question:
          "Kan jeg få elbillader i det nye sameiet mitt langs Akerselva?",
        answer:
          "Ja. De fleste nybygg langs Akerselva har infrastruktur for elbillading klar i garasjen. Du trenger en autorisert installatør for å koble til selve ladeboksen og registrere den i sameiets styringssystem. Vi ordner dette raskt og sørger for at laderen er driftsklar på en til to dager.",
      },
    ],
    neighborhoods: [
      "Torshov",
      "Bjølsen",
      "Ila",
      "Sandaker",
      "Myren",
    ],
    services: [
      "El-sjekk og oppgradering",
      "Komfyrvakt",
      "Jordfeilvern",
      "Elbillader-installasjon",
      "Sikringsskap og el-tavle",
      "Service og feilsøking",
    ],
  },
  {
    slug: "st-hanshaugen",
    name: "St. Hanshaugen",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.9260", lng: "10.7380" },
    buildingTypes: "Murgårder fra 1880-1910, noen innfyllprosjekter",
    description:
      "Elektriker på St. Hanshaugen i Oslo. North Installasjon er spesialister på elektrikerarbeid i jugend-murgårder og eldre bygårder på St. Hanshaugen. Vi utvider sikringsskap med for få kurser, installerer jordfeilvern, legger til rette for elbillading i bakgårdsparkering og oppgraderer stikkontakter i leiligheter der det elektriske anlegget ikke holder tritt med moderne forbruk. Bydelen har mange leiligheter med originale detaljer, og vi jobber varsomt for å bevare bydelens karakter.",
    localInfo:
      "St. Hanshaugen er en sentral bydel i Oslo med vakre murgårder fra 1880-1910, mange i jugendstil med rike fasadedetaljer. Bydelen har fått navn etter parken St. Hanshaugen, som er et populært rekreasjonsområde. Leilighetene er ettertraktede, men mange har el-anlegg som er underdimensjonerte for dagens behov. Med bare tre-fire kurser i sikringsskapet og stikkontakter plassert etter 1890-tallets logikk, er det vanlig at beboere må bruke skjøteledninger og fordelingsblokker. Dette øker brannrisikoen og reduserer komforten. North Installasjon hjelper beboere på St. Hanshaugen med å modernisere el-anlegget uten å ødelegge det historiske preget.",
    localHook:
      "St. Hanshaugen er kjent for sine jugend-murgårder med høye vinduer, stukkatur og vakre trappeoppganger. Men bak fasaden skjuler det seg ofte et elektrisk anlegg som ble dimensjonert for glødelamper og et strykejern. Dagens beboere har induksjonstopp, oppvaskmaskin, hjemmekontor med to skjermer og kanskje en el-sykkel som skal lades. Resultatet er at sikringene ryker og fordelingsblokkene overbelastes. En grundig oppgradering av el-anlegget forvandler hverdagen: nok stikkontakter der du trenger dem, lys uten flimring og trygghet for at anlegget tåler belastningen. North Installasjon gjør denne oppgraderingen på St. Hanshaugen med respekt for bygningens sjel.",
    focusServices: [
      {
        title: "Utvidelse av sikringsskap",
        description:
          "Mange sikringsskap på St. Hanshaugen har bare fire til seks kurser. Vi utvider med nye kurser for kjøkken, bad, hjemmekontor og vaskerom, og bytter til automatsikringer med jordfeilvern. Der plassen er begrenset, monterer vi nytt, større skap og fører kablene ryddig inn.",
      },
      {
        title: "Lading i bakgårdsparkering",
        description:
          "Bakgårdene på St. Hanshaugen har ofte noen få parkeringsplasser som disponeres av beboerne. Vi installerer ladebokser med lastbalansering slik at strømkapasiteten fordeles rettferdig, og vi hjelper sameiet med å finne en løsning som fungerer både teknisk og økonomisk.",
      },
      {
        title: "Oppgradering stikkontakter og jordfeilvern",
        description:
          "I eldre leiligheter er stikkontaktene gjerne av typen uten jording, og de sitter på feil steder i forhold til dagens møblering. Vi bytter til moderne kontakter med jording, plasserer dem der du faktisk trenger dem, og installerer jordfeilvern som beskytter mot strømgjennomgang.",
      },
    ],
    caseAngle:
      "Utvidelse av sikringsskap og oppgradering av stikkontakter i jugend-leilighet på St. Hanshaugen",
    faq: [
      {
        question:
          "Hvor mange kurser trenger jeg i leiligheten min på St. Hanshaugen?",
        answer:
          "Som tommelregel bør en moderne leilighet ha minst én kurs per rom, pluss separate kurser for komfyr, oppvaskmaskin, vaskemaskin og tørketrommel. En typisk tre-roms leilighet bør ha 10-14 kurser. Mange eldre leiligheter på St. Hanshaugen har bare fire til seks, noe som er utilstrekkelig for dagens forbruk.",
      },
      {
        question:
          "Kan jeg lade elbil i bakgården til bygården min?",
        answer:
          "Ja, men det krever samtykke fra sameiet og en vurdering av byggets strømkapasitet. Vi bistår med å utrede mulighetene, presentere forslag for sameiemøtet og installere ladeanlegg med individuell måling og lastbalansering. Flere sameier på St. Hanshaugen har allerede gjennomført dette.",
      },
      {
        question:
          "Er det farlig med gamle stikkontakter uten jording?",
        answer:
          "Kontakter uten jording er ikke nødvendigvis farlige i seg selv, men de gir dårligere beskyttelse mot strømgjennomgang. Kombinert med manglende jordfeilvern øker risikoen for elektrisk støt, spesielt på bad og kjøkken. Vi anbefaler å oppgradere til jordede kontakter og installere jordfeilvern for å sikre familien din.",
      },
      {
        question:
          "Hvordan unngår dere å skade stukkaturen når dere legger nye kabler?",
        answer:
          "Vi bruker eksisterende kabelkanaler og rørføringer der det er mulig. Når vi må frese, gjør vi det i diskrete områder som bak lister eller i hjørner. I samarbeid med deg velger vi kabelruter som minimerer inngrep i veggflater med stukkatur. Etter fresing sparkles og males det, slik at resultatet er usynlig.",
      },
    ],
    neighborhoods: [
      "Bislett",
      "Pilestredet",
      "Thereses gate",
      "Geitmyrsveien",
      "Colletts gate",
    ],
    services: [
      "Sikringsskap og el-tavle",
      "Stikkontakter og brytere",
      "Jordfeilvern",
      "Elbillader-installasjon",
      "Belysning",
      "Service og feilsøking",
    ],
  },
  {
    slug: "lambertseter",
    name: "Lambertseter",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.8680", lng: "10.8120" },
    buildingTypes: "Drabantby-blokker fra 1950-1970, rekkehus",
    description:
      "Elektriker på Lambertseter i Oslo. North Installasjon betjener borettslag og sameier på Lambertseter, Bøler, Manglerud og Oppsal. Vi oppgraderer sikringsskap i etterkrigsblokker, installerer komfyrvakt som oppfyller forsikringskravene, og prosjekterer elbilladeanlegg med lastbalansering for sameier med felles parkeringsanlegg. Drabantbyen har tydelige, gjennomgående utfordringer, og vi har standardiserte løsninger som holder kostnadene nede for det enkelte borettslag.",
    localInfo:
      "Lambertseter var Norges første drabantby, bygget på 1950- og 1960-tallet som et svar på boligmangelen etter krigen. Blokkene ble bygget raskt og funksjonelt, med el-anlegg dimensjonert for den tidens behov. Nå, 60-70 år senere, er mange av disse anleggene modne for utskifting. Bydelen har store borettslag med hundrevis av enheter, noe som gjør fellestiltak både nødvendig og kostnadseffektivt. Rekkehusene i randsonen har lignende utfordringer som eneboligene på Nordstrand. North Installasjon har gjennomført flere store borettslagsprosjekter i dette området og kjenner bygningsmassen godt.",
    localHook:
      "Drabantbyene på Lambertseter, Bøler og Manglerud ble bygget i en tid da en norsk husholdning brukte en brøkdel av strømmen vi bruker i dag. Sikringsskapene har gjerne 20-25 ampere hovedsikring og fire til seks kurser med skrusikringer. Det holder ikke når moderne familier har varmepumpe, induksjonstopp, elbil og hjemmekontor. I tillegg krever forsikringsselskapene i økende grad komfyrvakt for å opprettholde full dekning. For borettslag med mange like leiligheter er det smart å gjennomføre oppgraderingen samlet: det gir bedre priser per enhet og sikrer at hele bygget får samme sikkerhetsnivå. North Installasjon har spesialisert seg på nettopp slike prosjekter.",
    focusServices: [
      {
        title: "Sikringsskap i blokker",
        description:
          "Vi bytter sikringsskap i alle leiligheter i et borettslag som del av et koordinert prosjekt. Hver leilighet får nytt skap med automatsikringer og jordfeilvern, tilpasset leilighetens størrelse og forbruk. Arbeidet planlegges slik at strømløs tid begrenses til noen timer per leilighet.",
      },
      {
        title: "Komfyrvakt (forsikringskrav)",
        description:
          "Stadig flere forsikringsselskap krever komfyrvakt for å gi full erstatning ved komfyrbrann. Vi installerer komfyrvakt som passer alle vanlige komfyrtyper, inkludert induksjonstopper. I et borettslag kan vi montere komfyrvakt i alle enheter på en effektiv runde.",
      },
      {
        title: "Elbillader med lastbalansering for sameier",
        description:
          "Store sameier på Lambertseter har gjerne fellesgarasjer eller parkeringsplasser i kjeller. Vi prosjekterer ladeanlegg med dynamisk lastbalansering som utnytter tilgjengelig kapasitet optimalt. Systemet kan starte med noen få ladere og bygges ut etter hvert som behovet øker.",
      },
    ],
    caseAngle:
      "Samlet sikringsskapbytte og komfyrvaktinstallasjon i borettslag med 80 enheter på Lambertseter",
    faq: [
      {
        question:
          "Hva koster det å bytte sikringsskap i alle leilighetene i borettslaget vårt?",
        answer:
          "Ved samlet bytte i et borettslag med 40-80 enheter ligger prisen typisk på 15 000-25 000 kroner per leilighet, avhengig av antall kurser og om det er behov for ekstra kabling. Samlet gjennomføring gir betydelig rabatt sammenlignet med enkeltbestillinger. Vi gir et fast tilbud basert på befaring av noen referanseleiligheter.",
      },
      {
        question:
          "Krever forsikringsselskapet mitt komfyrvakt?",
        answer:
          "Flere store forsikringsselskap, deriblant Gjensidige og If, gir rabatt på innboforsikringen eller stiller krav om komfyrvakt for full erstatning ved komfyrrelatert brann. Sjekk vilkårene i din forsikringsavtale. Uansett er komfyrvakt en rimelig investering i brannsikkerhet som vi sterkt anbefaler.",
      },
      {
        question:
          "Hvordan fungerer lastbalansering for elbilladere i sameiet vårt?",
        answer:
          "Lastbalansering betyr at et sentralt styringssystem fordeler tilgjengelig strømkapasitet mellom alle aktive ladere i sanntid. Når få biler lader, får hver lader full effekt. Når mange lader samtidig, reduseres effekten per lader slik at hovedsikringen ikke overbelastes. Systemet er helautomatisk og krever ingen innsats fra beboerne.",
      },
    ],
    neighborhoods: [
      "Bøler",
      "Manglerud",
      "Ryen",
      "Godlia",
      "Oppsal",
    ],
    services: [
      "Sikringsskap i borettslag",
      "Komfyrvakt",
      "Elbillader med lastbalansering",
      "Jordfeilvern",
      "Elkontroll",
      "Service og feilsøking",
    ],
  },
  {
    slug: "nydalen",
    name: "Nydalen",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.9490", lng: "10.7650" },
    buildingTypes: "Nybygg-leiligheter fra 2000-2020, noe næring",
    description:
      "Elektriker i Nydalen i Oslo. North Installasjon utfører elektrikerarbeid i Nydalen og nærområdene Storo, Grefsen og Kjelsås. Vi tilpasser el-anlegg i nye leiligheter til hjemmekontor og moderne livsstil, installerer ladeanlegg i sameier og leverer nærings-el for kontorer og butikker i området. Nydalen er en ung bydel med en stor andel nye bygg, og vi har kompetansen til å jobbe med moderne el-systemer og digital infrastruktur.",
    localInfo:
      "Nydalen har utviklet seg fra et industriområde til en moderne bydel med tusenvis av nye leiligheter, kontorer og handelsvirksomheter. Boligene er bygget mellom 2000 og 2020, med relativt nye el-anlegg. Likevel opplever mange beboere at standardoppsettet ikke dekker deres behov: hjemmekontoret mangler nok stikkontakter, baderommet trenger varmekabler, og elbilladeren i garasjen er ikke installert selv om infrastrukturen ligger klar. Næringslokalene i området, fra kontorer til treningssentre, har også jevnlig behov for el-tilpasninger. North Installasjon kjenner bygningene i Nydalen og kan jobbe effektivt innenfor garantiperioder og sameieregler.",
    localHook:
      "Nydalen er Oslos nye bydel, bygget opp fra grunnen de siste to tiårene. Her bor det en ung, profesjonell befolkning som jobber mye hjemmefra og stiller krav til digital infrastruktur. Leilighetene er moderne, men standardoppsettet fra utbygger dekker ikke alltid behovet. Når hjemmekontoret krever dobbel skjerm, ekstern skjermbelysning og en egen kontorkurs, eller når du vil ha smart belysning i stuen og varmekabler i entreen, trenger du en elektriker som forstår moderne bygg. North Installasjon utfører tilpasninger i nybygg uten å utløse garantiproblemer, og vi samarbeider med sameienes tekniske forvaltere for å sikre at alt gjøres korrekt.",
    focusServices: [
      {
        title: "El-tilpasning nye leiligheter",
        description:
          "Vi installerer ekstra stikkontakter, kursutvidelser og spesialtilpasninger i nye leiligheter. Alt arbeid dokumenteres og utføres i henhold til byggets standarder, slik at du ikke risikerer å miste garantien fra utbygger. Vanlige ønsker er ekstra kurs til hjemmekontor, USB-kontakter i kjøkken og oppgradering av baderomsbelysning.",
      },
      {
        title: "Hjemmekontor-oppsett",
        description:
          "Et dedikert hjemmekontor trenger egen kurs med tilstrekkelig kapasitet for PC, skjermer, skriver og belysning. Vi legger også nettverksuttak om ønskelig, og installerer kontakter i riktig høyde og posisjon for ergonomisk kabelhåndtering.",
      },
      {
        title: "Ladeanlegg i nye sameier",
        description:
          "Mange sameier i Nydalen har klargjort infrastruktur for elbillading, men mangler selve laderen og tilkoblingen. Vi installerer ladebokser, konfigurerer lastbalansering og setter opp brukeradministrasjon slik at hver beboer betaler for sitt eget forbruk.",
      },
      {
        title: "Nærings-el for kontorer",
        description:
          "Kontorlokaler i Nydalen trenger ofte tilpasninger når nye leietakere flytter inn: ekstra kurser for serverrom, belysningsstyring for åpent landskap og nødstrømstilkobling for kritisk utstyr. Vi utfører rask og ryddig installasjon som minimerer nedetid for virksomheten.",
      },
    ],
    caseAngle:
      "Hjemmekontor-tilpasning og ladeboks-installasjon i nytt sameie i Nydalen",
    faq: [
      {
        question:
          "Mister jeg garantien fra utbygger hvis jeg gjør endringer i el-anlegget?",
        answer:
          "Ikke dersom arbeidet utføres av en autorisert installatør i henhold til gjeldende forskrifter. Vi dokumenterer alt arbeid og leverer samsvarserklæring som viser at installasjonen er forskriftsmessig. Vi anbefaler likevel å informere sameiets tekniske forvalter om endringer.",
      },
      {
        question:
          "Hva koster det å sette opp et ordentlig hjemmekontor med egen kurs?",
        answer:
          "En dedikert hjemmekontorkurs med fire til seks stikkontakter og eventuelt nettverksuttak koster vanligvis mellom 5 000 og 12 000 kroner, avhengig av kabelveien fra sikringsskapet og omfanget av arbeidet. I nye leiligheter er kabelvegene gjerne tilrettelagt, noe som holder kostnadene nede.",
      },
      {
        question:
          "Kan jeg installere smarte lyspærer selv, eller trenger jeg elektriker?",
        answer:
          "Smarte lyspærer som skrus inn i eksisterende fatninger kan du installere selv. Men dersom du ønsker smarte brytere, dimmere eller innfelte LED-spotter med drivere, bør en autorisert elektriker utføre arbeidet. Vi sikrer at dimmere og drivere er kompatible, og at installasjonen er brannsikker.",
      },
    ],
    neighborhoods: [
      "Storo",
      "Grefsen",
      "Kjelsås",
      "Sandaker",
      "Tåsen",
    ],
    services: [
      "El-tilpasning nybygg",
      "Hjemmekontor-oppsett",
      "Elbillader-installasjon",
      "Nærings-el",
      "Belysning og dimming",
      "Service og feilsøking",
    ],
  },

  {
    slug: "bislett",
    name: "Bislett",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.9252", lng: "10.7282" },
    buildingTypes: "Murgårder fra 1900-1930, noen rekkehus og blokker",
    description:
      "Elektriker på Bislett i Oslo. North Installasjon leverer elektrikertjenester til boligeiere og næringsdrivende i Bislett-området. Vi oppgraderer sikringsskap i murgårder, installerer jordfeilvern, og hjelper sameier med elbilladere i trange bakgårder. Bydelen har mange restauranter og treningssentre langs Ring 2 og Hegdehaugsveien som trenger pålitelig nærings-el. Vi kjenner Bisletts kompakte bystruktur og leverer effektivt arbeid med minimal forstyrrelse.",
    localInfo:
      "Bislett er kjent for Bislett stadion og det levende næringsmiljøet langs Hegdehaugsveien og Thereses gate. Bydelen har en kompakt urban struktur med murgårder fra 1900-1930-tallet, mange av dem med borettslag som eier bygningene. El-anleggene i disse byggene er gjerne fra 1960- og 1970-tallets oppgradering, noe som betyr at de nærmer seg slutten av sin levetid. Mange borettslagsstyrer på Bislett planlegger nå systematisk utskifting av sikringsskap, og North Installasjon tilbyr pakkepriser for slike prosjekter.",
    localHook:
      "Bislett er en bydel i konstant aktivitet, preget av kafeer, treningssentre og butikker som holder åpent til sent. For næringslokalene er strømpålitelighet kritisk, og et gammelt el-anlegg er ikke noe å gamble med. For beboerne i murgårdene er hverdagen preget av trange fellesarealer og bakgårder som gjør det krevende å installere elbilladere. North Installasjon løser begge utfordringer: vi prosjekterer lastbalanserte ladeanlegg i bakgårder med begrenset kapasitet, og vi oppgraderer sikringsskap i blokker med minimal nedetid.",
    focusServices: [
      {
        title: "Sikringsskap i borettslagsbygg",
        description:
          "Vi koordinerer samlet utskifting av sikringsskap i borettslagsbygg med mange enheter. Hver leilighet får nytt skap med automatsikringer og jordfeilvern. Arbeidet planlegges slik at strømbrudd per leilighet begrenses til noen timer, og vi rydder grundig etter oss i fellesarealene.",
      },
      {
        title: "Elbillader i trange bakgårder",
        description:
          "Bakgårdene på Bislett er ofte trange med begrenset parkeringskapasitet. Vi prosjekterer ladeanlegg med dynamisk lastbalansering som utnytter tilgjengelig kapasitet, og monterer ladere diskret langs vegger og i kjellere uten å fortrenge parkering.",
      },
      {
        title: "Nærings-el for treningssentre og kafeer",
        description:
          "Treningssentre langs Ring 2 og kafeer i Hegdehaugsveien krever robust strømforsyning. Vi dimensjonerer og installerer nærings-el som tåler kontinuerlig høy belastning, med separate kurser for ventilasjon, kjøling og belysning.",
      },
    ],
    caseAngle:
      "Samlet sikringsskapbytte og elbilladeanlegg for borettslag på Bislett",
    faq: [
      {
        question: "Hva koster det å oppgradere sikringsskapet i en Bislett-leilighet?",
        answer:
          "For en typisk to- til tre-roms leilighet i en Bislett-murgård koster oppgradering av sikringsskapet fra 20 000 til 40 000 kroner, avhengig av antall kurser og kabelstatus. Ved samlet borettslagsprosjekt med mange enheter gir vi pakkepriser som reduserer kostnad per leilighet betraktelig.",
      },
      {
        question: "Kan sameiet vårt på Bislett få elbilladere i bakgården?",
        answer:
          "Ja, selv med trang bakgård er det mulig. Vi vurderer tilgjengelig strømkapasitet og prosjekterer et lastbalansert ladeanlegg som passer forholdene. Vi hjelper også sameiet med søknad til nettselskapet dersom kapasitetsutvidelse er nødvendig.",
      },
      {
        question: "Tilbyr dere nødstrøm-løsninger for næringsvirksomheter på Bislett?",
        answer:
          "Ja. For serveringssteder og treningssentre som ikke tåler strømbrudd kan vi installere UPS-løsninger for kritisk utstyr som kassasystem, kjøl og alarmsystem. Vi vurderer behovet og anbefaler riktig kapasitet basert på virksomhetens krav.",
      },
    ],
    neighborhoods: ["Hegdehaugsveien", "Thereses gate", "Ring 2", "Bislett stadion", "Adamstuen"],
    services: [
      "Sikringsskap i borettslag",
      "Elbillader med lastbalansering",
      "Nærings-el",
      "Jordfeilvern",
      "Service og feilsøking",
      "Komfyrvakt",
    ],
  },
  {
    slug: "bygdoy",
    name: "Bygdøy",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.9030", lng: "10.6860" },
    buildingTypes: "Store villaer og eneboliger fra 1920-1970, ambassader",
    description:
      "Elektriker på Bygdøy i Oslo. North Installasjon betjener villaeierne og representasjonsboligene på Bygdøy med premium elektrikertjenester. Vi prosjekterer komplette el-anlegg for store villaer, installerer KNX smarthus-løsninger, solcelleanlegg og avanserte utendørssystemer. Bygdøy er Oslos mest eksklusive halvøy, og vi leverer arbeid som matcher eiendommenes standard. Vi har erfaring med ambassader, fritidsboliger og store eneboliger der kravene til pålitelighet og estetikk er absolutte.",
    localInfo:
      "Bygdøy er en halvøy vest i Oslo kjent for sine store villaer, Kongsgården og de nasjonale museene. Bydelen er en av Oslos mest eksklusive boligområder, med eiendommer som ofte selges for titalls millioner kroner. Bygningene er gjerne store og godt vedlikeholdt, men mange av dem er fra mellomkrigstiden og har elektriske anlegg som ikke lenger er dimensjonert for moderne komfort. Uteområdene er store, og utendørsbelysning, varmekabel i innkjørsel og elbilladere i dobbeltgarasjer er standardønsker. Ambassader og representasjonsboliger stiller ekstra krav til sikkerhet og redundans i strømforsyningen.",
    localHook:
      "Bygdøy er der store verdier møter høye krav. Villaene på Bygdøy halvøy er unike eiendommer der el-anlegget bør matche eiendommens karakter og verdi. Enten du planlegger full renovering av en mellomkrigsvilla, ønsker å integrere solceller og batterilager, eller trenger et KNX-system som gir deg full kontroll over lys, varme og persienner, sørger North Installasjon for at resultatet holder det høye nivået Bygdøy er kjent for. Vi samarbeider med arkitekter og byggeledere for en sømløs prosess.",
    focusServices: [
      {
        title: "Totalentreprise el for store villaer",
        description:
          "Vi tar totalansvar for all elektroinstallasjon i store villaer og eneboliger på Bygdøy. Fra prosjektering og søknad til ferdigattest leverer vi et komplett el-anlegg med kursoppsett, belysning, smarthus-integrasjon og utendørs-el. En kontaktperson koordinerer hele prosessen.",
      },
      {
        title: "Solcelle- og batterianlegg",
        description:
          "Med store takflater og sørvendt beliggenhet er mange Bygdøy-villaer ideelle for solceller. Vi prosjekterer anlegget, håndterer nettilknytning og installerer eventuelt batteri for selvforsyning. Et vel dimensjonert anlegg kan dekke 40-60 % av husholdningens strømbehov.",
      },
      {
        title: "Utendørs el og hagebelysning",
        description:
          "Bygdøy-villaene har gjerne store hager med behov for profesjonell utendørsbelysning, varmekabel i innkjørsel og elbilladere i garasje. Vi designer belysningsplaner som framhever hagens arkitektur og installerer løsninger med automatisk styring via skumringsbryter og bevegelsessensor.",
      },
    ],
    caseAngle:
      "KNX smarthus-installasjon og solcelleanlegg i stor villa på Bygdøy",
    faq: [
      {
        question: "Hva koster et komplett el-prosjekt for en stor Bygdøy-villa?",
        answer:
          "For en villa på 300-500 kvadratmeter med smarthus-integrasjon, utendørs-el og elbilladere varierer kostnaden fra 400 000 til godt over 1 million kroner, avhengig av ambisjonsnivå. Vi gir alltid detaljert spesifikasjon og fast pris etter befaring og prosjektgjennomgang.",
      },
      {
        question: "Kan North Installasjon jobbe med ambassader og representasjonsboliger?",
        answer:
          "Ja. Vi har erfaring med installasjoner i ambassader og representasjonsboliger der kravene til dokumentasjon, sikkerhet og diskresjon er høye. Vi tilpasser oss de spesielle sikkerhetsprotokollene som ambassadepersonell og eiendomsforvaltere krever.",
      },
      {
        question: "Lønner det seg med solceller på Bygdøy?",
        answer:
          "For de fleste villaer på Bygdøy med tilstrekkelig takflate er svaret ja. Med gode strømpriser og Enovas støtteordninger er tilbakebetalingstiden typisk 8-12 år. Et anlegg på 15-20 kWp på en stor villa produserer 13 000-18 000 kWh per år og kan dekke en stor del av forbruket.",
      },
    ],
    neighborhoods: ["Bygdøy halvøy", "Huk", "Kongsgården", "Oscarshall", "Frognerkilen"],
    services: [
      "Totalentreprise el",
      "Smarthus og KNX",
      "Solcelleanlegg",
      "Utendørsbelysning",
      "Elbillader-installasjon",
      "El-prosjektering",
    ],
  },
  {
    slug: "roa",
    name: "Røa",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.9450", lng: "10.6580" },
    buildingTypes: "Eneboliger og rekkehus fra 1950-1980",
    description:
      "Elektriker på Røa i Oslo. North Installasjon utfører elektrikerarbeid for boligeiere på Røa, Vinderen, Hovseter og Vestre Aker. Vi oppgraderer el-anlegg i etterkrigsboliger, installerer elbilladere, monterer varmekabel i innkjørsel og bidrar med kapasitetsutvidelse for varmepumper. Røa er et populært barnefamilieområde med solid boligmasse der mange hus nå er modne for en elektrisk modernisering.",
    localInfo:
      "Røa er en vestlig bydel i Oslo med eneboliger og rekkehus bygget hovedsakelig på 1950- og 1960-tallet. Bydelen er populær blant barnefamilier som søker rolige omgivelser med god kollektivtilknytning via T-banen. Husene er robuste og godt bygget, men el-anleggene er fra byggeåret og dimensjonert for en annen tid. En typisk enebolig på Røa har 32 ampere hovedsikring, skrusikringer og ingen jordfeilvern, noe som ikke holder for dagens husholdning med varmepumpe, induksjonstopp og elbilladere.",
    localHook:
      "Røa er det klassiske Oslo-vest-villastrøket der generasjoner av barnefamilier har funnet sitt hjem. Husene ble bygget solid og for å vare, men el-anlegget henger etter i tid. Med elbil i garasjen, varmepumpe i kjelleren og hjemmekontor i andre etasje presses gamle sikringsskap til grensen daglig. En elektrisk modernisering av eneboligen på Røa er ikke bare mer komfortabelt: det øker også boligens verdi og gjør den tryggere for familien. North Installasjon gjennomfører denne moderniseringen raskt og oversiktlig.",
    focusServices: [
      {
        title: "Sikringsskap og kapasitetsutvidelse",
        description:
          "Vi bytter gamle sikringsskap til moderne automatsikringer og jordfeilvern, og oppgraderer hovedsikringen der det er behov. For eneboliger med varmepumpe og elbillader anbefaler vi som regel oppgradering fra 32 til 40 eller 50 ampere for å håndtere toppbelastningen.",
      },
      {
        title: "Elbillader i garasje og carport",
        description:
          "Mange eneboliger på Røa har garasje eller carport koblet til husets el-anlegg. Vi installerer elbilladeren, legger kabel fra sikringsskapet og sørger for riktig dimensjonering. Dersom garasjen er fristilt, legger vi ny kabel med riktig tverrsnitt.",
      },
      {
        title: "Varmekabel i innkjørsel og trapp",
        description:
          "Bratte innkjørsler og steintrapper kan bli farlige om vinteren. Vi installerer varmekabel med automatisk fukt- og temperaturstyring som holder overflaten fri for is uten unødvendig energibruk.",
      },
    ],
    caseAngle:
      "Modernisering av el-anlegg i enebolig fra 1963 på Røa med elbillader og varmepumpe",
    faq: [
      {
        question: "Hva koster det å oppgradere el-anlegget i en enebolig på Røa?",
        answer:
          "En typisk oppgradering av sikringsskap med automatsikringer, jordfeilvern og en til to nye kurser koster 25 000-50 000 kroner. Dersom du samtidig legger kabel til garasje for elbillader og installerer laderen, kommer det på ytterligere 15 000-25 000 kroner. Vi gir alltid fast pris etter befaring.",
      },
      {
        question: "Trenger jeg søke om noe for å oppgradere hovedsikringen?",
        answer:
          "Oppgradering av hovedsikringen skjer i samarbeid med nettselskapet (Elvia i Oslo). Vi håndterer kontakten med nettselskapet og søknadsprosessen på dine vegne. Normalt går dette raskt, men det kan ta noen uker å få ny sikringsstørrelse på plass.",
      },
      {
        question: "Kan North Installasjon komme raskt dersom vi har strømproblem på Røa?",
        answer:
          "Ja, vi prioriterer feilsøking og akutte oppdrag for boligeiere i Oslo-området, inkludert Røa. Ring oss og beskriv problemet, så finner vi et tidspunkt som passer raskt. For akutte feil som gjør boligen ubeboelig forsøker vi å rykke ut samme dag.",
      },
    ],
    neighborhoods: ["Vinderen", "Hovseter", "Røabanen", "Risløkka", "Bogstad"],
    services: [
      "Sikringsskap og el-tavle",
      "Kapasitetsutvidelse",
      "Elbillader-installasjon",
      "Varmekabel innkjørsel",
      "Service og feilsøking",
      "Utendørsbelysning",
    ],
  },
  {
    slug: "nordre-aker",
    name: "Nordre Aker",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.9540", lng: "10.7390" },
    buildingTypes: "Villaer og eneboliger fra 1920-1960, noen boligblokker",
    description:
      "Elektriker i Nordre Aker i Oslo. North Installasjon betjener boligeiere i Nordre Aker, fra Ullevål Hageby og Tåsen til Grefsen og Kjelsås. Vi moderniserer el-anlegg i mellomkrigsvillaer, installerer elbilladere, prosjekterer solcelleanlegg og utfører service og feilsøking på kort varsel. Nordre Aker er et etablert og godt vedlikeholdt boligområde, og vi leverer elektrikerarbeid som matcher boligenes høye standard.",
    localInfo:
      "Nordre Aker strekker seg fra Ullevål sykehus i sør til Grefsenkollen i nord. Bydelen har en variert bygningsmasse med villaer i Ullevål Hageby fra 1920-tallet, rekkehus og blokker på Tåsen fra 1950-1960-tallet, og nyere leilighetsprosjekter langs T-banen. Ullevål Hageby er en av Norges flotteste hagebyer, og de historiske trebygningene der krever spesiell omtanke ved el-arbeid. Ellers er det vanlige eneboligutfordringer: underdimensjonerte sikringsskap, behov for elbilladere og kapasitetsutvidelse for varmepumpe.",
    localHook:
      "Nordre Aker er en bydel med stolthet for eiendomshistorie og høye krav til håndverkere. I Ullevål Hageby er husene fredet i kategori, og el-arbeid krever forsiktighet og kompetanse med eldre bygningsmasse. På Tåsen og Grefsen handler det mer om praktisk modernisering: nye elbilladere, byttet sikringsskap og kanskje solceller på det store sørvendte taket. North Installasjon har kompetansen for begge scenarioer og leverer arbeid du kan være stolt av i tiår fremover.",
    focusServices: [
      {
        title: "El-arbeid i fredede og vernede boliger",
        description:
          "Ullevål Hageby har bevaringsverdige bygninger der el-arbeid krever spesiell forsiktighet. Vi kjenner kravene fra Byantikvaren og utfører kabling og installasjon med respekt for det opprinnelige byggverket. Minst mulig synlig inngripen er alltid målet.",
      },
      {
        title: "Solcelleanlegg på sørvendte tak",
        description:
          "Mange eneboliger i Nordre Aker har sørvendte takflater som er godt egnet for solceller. Vi prosjekterer anlegget, koordinerer nettilknytning og installerer ferdig system med vekselretter og eventuelt batteri. Et anlegg på 10-15 kWp produserer 9 000-13 000 kWh per år.",
      },
      {
        title: "Elbillader for eneboliger og rekkehus",
        description:
          "Vi installerer elbilladere i garasjer, carporter og på utendørs veggfeste i Nordre Aker. Der garasjen er fristilt, legger vi ny jordkabel fra husets sikringsskap. Vi anbefaler ladetilgang på minst 11 kW for effektiv hjemmelading.",
      },
    ],
    caseAngle:
      "Restaurering av el-anlegg i fredet hagebolig på Ullevål Hageby med moderne tilpasninger",
    faq: [
      {
        question: "Kan jeg installere elbillader i et fredet hus på Ullevål Hageby?",
        answer:
          "Ja, men du bør avklare med Byantikvaren dersom fasaden endres. Inne i garasjen eller på baksiden av huset er det vanligvis uproblematisk. Vi vurderer den beste kabelruten og sørger for at installasjonen er diskret og i tråd med bevaringshensyn.",
      },
      {
        question: "Hva koster solceller på en enebolig i Nordre Aker?",
        answer:
          "Et solcelleanlegg på 10 kWp koster typisk 130 000-180 000 kroner inkludert installasjon. Med Enovas støtteordning og dagens strømpriser er tilbakebetalingstiden 8-11 år. Vi tar oss av søknad til Enova og nettselskapet.",
      },
      {
        question: "Tilbyr dere service og feilsøking på kort varsel i Nordre Aker?",
        answer:
          "Ja. Vi forsøker å tilby time innen to til tre dager for serviceoppdrag. Ved akutte feil som gjør boligen ubeboelig, kontakter du oss umiddelbart, og vi forsøker å rykke ut samme dag.",
      },
    ],
    neighborhoods: ["Ullevål Hageby", "Tåsen", "Grefsen", "Kjelsås", "Disen"],
    services: [
      "El-arbeid vernede bygg",
      "Solcelleanlegg",
      "Elbillader-installasjon",
      "Sikringsskap og el-tavle",
      "Service og feilsøking",
      "Kapasitetsutvidelse",
    ],
  },
  {
    slug: "ostensjo",
    name: "Østensjø",
    county: "Oslo",
    parentSlug: "oslo",
    geo: { lat: "59.8820", lng: "10.8310" },
    buildingTypes: "Drabantby-blokker og rekkehus fra 1960-1980",
    description:
      "Elektriker i Østensjø i Oslo. North Installasjon utfører elektrikerarbeid i Østensjø bydel, inkludert Oppsal, Bøler, Karlsrud og Skullerud. Vi oppgraderer sikringsskap i drabantby-boliger, installerer elbilladere i borettslag med parkeringsanlegg og monterer komfyrvakt i henhold til forsikringskrav. Bydelen har store borettslag med et koordinert oppgraderingsbehov, og vi tilbyr pakkepriser for borettslag som vil løfte sikkerheten for alle beboere på én gang.",
    localInfo:
      "Østensjø er en østlig bydel i Oslo bygget ut på 1960- og 1970-tallet som en del av Oslos drabantbyplan. Store borettslag som Oppsal Borettslag og Bøler Borettslag dominerer bildet, med hundrevis av like leiligheter og fellesanlegg som trenger oppgradering. Rekkehusene langs Østensjøvannet representerer en annen boligtype med egne utfordringer knyttet til elbillader og eneboligelektro. Bydelen har nærhet til Østmarka og er populær blant barnefamilier som setter pris på lave boligpriser og gode rekreasjonsforhold.",
    localHook:
      "Østensjø er der drabantbyens store borettslag møter behovet for modernisering. Sikringskapene fra 1960-tallet er på overtid, og borettslag som venter med oppgraderingen risikerer enten en elektrikerregning på akutt-nivå eller en brann som skyldes overbelastet gammelt anlegg. For borettslag med mange like leiligheter er det klart kostnadsbesparende å gjøre jobben samlet. North Installasjon har gjennomført slike prosjekter og kjenner prosessen fra planlegging og tilbudsgjeving til koordinert gjennomføring og sluttdokumentasjon.",
    focusServices: [
      {
        title: "Samlet sikringsskapbytte for borettslag",
        description:
          "Vi koordinerer samlet utskifting av sikringsskap i alle leiligheter i et borettslag. Hver leilighet får nytt skap med automatsikringer og jordfeilvern, tilpasset leilighetens størrelse og forbruk. Arbeidet gjennomføres effektivt med minimal nedetid per leilighet.",
      },
      {
        title: "Elbilladere i felles garasjeanlegg",
        description:
          "Store borettslag i Østensjø har gjerne underjordiske garasjer med potensial for mange ladeplasser. Vi prosjekterer anlegget med dynamisk lastbalansering slik at sameiets eksisterende strømkapasitet utnyttes optimalt, og vi setter opp individuell måling per plass.",
      },
      {
        title: "Komfyrvakt og brannforebygging",
        description:
          "Komfyrvakt er sterkt anbefalt i alle boliger og kreves av stadig flere forsikringsselskaper. I borettslag kan vi installere komfyrvakt i alle enheter som del av ett koordinert prosjekt, noe som gir betydelige rabatter per leilighet sammenlignet med enkeltbestillinger.",
      },
    ],
    caseAngle:
      "Komplett sikrings-kapbytte og ladeanlegg for stort borettslag i Østensjø",
    faq: [
      {
        question: "Hvordan kommer vi i gang med el-oppgradering i borettslaget vårt på Østensjø?",
        answer:
          "Ta kontakt med oss for en innledende samtale. Vi besøker et utvalg referanseleiligheter for å kartlegge tilstanden, og gir deretter et fast tilbud for hele borettslaget. Tilbudet kan presenteres for styret og settes opp til vedtak på sameiermøte. Vi bistår gjerne med presentasjon.",
      },
      {
        question: "Kan North Installasjon prosjektere ladeanlegg for 50+ biler i garasjekjelleren vår?",
        answer:
          "Ja, dette er en av våre spesialkompetanser. Vi prosjekterer ladeanlegg med dynamisk lastbalansering som utnytter tilgjengelig effekt optimalt. Systemet skaleres trinnvis, slik at dere starter med et rimelig antall ladere og bygger ut etter hvert som behovet øker.",
      },
      {
        question: "Hva er forskjellen på jordfeilvern og automatsikringer?",
        answer:
          "Automatsikringer beskytter mot overbelastning og kortslutning i kablene. Jordfeilvern beskytter mot strømgjennomgang i mennesker og dyr ved jordfeil i apparater. Begge deler er nødvendige i et moderne el-anlegg og er påbudt i nye installasjoner. Eldre anlegg mangler ofte jordfeilvern, noe som er en sikkerhetsrisiko.",
      },
    ],
    neighborhoods: ["Oppsal", "Karlsrud", "Skullerud", "Høyenhall", "Rustad"],
    services: [
      "Sikringsskap i borettslag",
      "Elbillader med lastbalansering",
      "Komfyrvakt",
      "Jordfeilvern",
      "Elkontroll",
      "Service og feilsøking",
    ],
  },

  // ---------------------
  // Nye kommuner
  // ---------------------
  {
    slug: "drammen",
    name: "Drammen",
    county: "Buskerud",
    geo: { lat: "59.7441", lng: "10.2045" },
    description:
      "Elektriker i Drammen. North Installasjon tilbyr profesjonelle elektrikertjenester i Drammen og omegn. Vi hjelper privatpersoner og bedrifter med elbillader, sikringsskap, boliginstallasjon, næringsbygg og servicearbeid. Drammen er en by i vekst med et bredt spekter av boliger og næringseiendommer, og vi dekker alt fra sentrum til Konnerud og Mjøndalen.",
    localInfo:
      "Drammen er den største byen i Buskerud og et viktig knutepunkt langs Drammenselva. Byen har gjennomgått en imponerende transformasjon de siste årene, med nye boligprosjekter langs elvebredden og oppgradering av eldre sentrumskvartaler. Bragernes og Strømsø har murgårder og eldre trehusbebyggelse med el-anlegg som trenger modernisering, mens Gulskogen og Konnerud har villaer og rekkehus fra etterkrigstiden. Mjøndalen ble en del av Drammen kommune i 2020 og tilfører ytterligere variasjon i bygningsmassen. North Installasjon betjener hele kommunen og har god kjennskap til lokale forhold og reguleringsplaner.",
    neighborhoods: [
      "Bragernes",
      "Strømsø",
      "Gulskogen",
      "Åssiden",
      "Konnerud",
      "Mjøndalen",
    ],
    services: [
      "Elbillader-installasjon",
      "Sikringsskap og el-tavle",
      "Boliginstallasjon",
      "Næringsbygg elektro",
      "Service og feilsøking",
      "Elkontroll",
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}

export function getChildLocations(parentSlug: string): Location[] {
  return locations.filter((l) => l.parentSlug === parentSlug);
}

export const SITE_URL = BUSINESS.siteUrl;
