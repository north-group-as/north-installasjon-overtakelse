import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business-data";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description:
    "Les personvernerklæringen til North Installasjon AS. Vi beskytter dine personopplysninger i tråd med GDPR og norsk personvernlovgivning.",
  keywords: ["personvern", "privacy policy", "GDPR", "personopplysninger"],
  alternates: {
    canonical: "https://www.northinstallasjon.no/personvern",
  },
};

const privacyPolicyJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Personvernerklæring — Privacy Policy",
  alternateName: "Privacy Policy",
  url: "https://www.northinstallasjon.no/personvern",
  inLanguage: "nb-NO",
  description:
    "Personvernerklæring for North Installasjon. Slik behandler vi personopplysninger i tråd med GDPR.",
  dateModified: "2026-03-01",
  about: {
    "@type": "Thing",
    name: "Privacy Policy",
  },
  publisher: {
    "@type": "Organization",
    name: "North Installasjon",
    url: "https://www.northinstallasjon.no",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: "https://www.northinstallasjon.no" },
      { "@type": "ListItem", position: 2, name: "Personvern", item: "https://www.northinstallasjon.no/personvern" },
    ],
  },
};

const sections = [
  {
    title: "1. Behandlingsansvarlig",
    content: [
      `${BUSINESS.name}, organisasjonsnummer 927 424 636, er behandlingsansvarlig for personopplysninger som samles inn via northinstallasjon.no.`,
      `Adresse: ${BUSINESS.address.street}, ${BUSINESS.address.postalCode} ${BUSINESS.address.city}.`,
      `Kontakt: ${BUSINESS.email} / ${BUSINESS.phoneDisplay}.`,
    ],
  },
  {
    title: "2. Hvilke opplysninger samler vi inn",
    content: [
      "Vi samler inn opplysninger du selv oppgir via kontaktskjemaer på nettsiden: navn, telefonnummer, e-postadresse og beskrivelse av oppdraget.",
      "I tillegg samler vi inn aggregert besøksstatistikk gjennom analyseverktøyet Vercel Analytics.",
      
    ],
  },
  {
    title: "3. Formål med behandlingen",
    content: [
      "Kontaktopplysninger brukes til å besvare henvendelser, gi pristilbud og følge opp avtaler om elektrikerarbeid.",
      "Teknisk informasjon brukes til å forbedre nettsiden, analysere trafikk og sikre stabil drift.",
    ],
  },
  {
    title: "4. Rettslig grunnlag",
    content: [
      "Behandling av kontaktopplysninger for å besvare henvendelser og gi tilbud skjer med grunnlag i GDPR artikkel 6(1)(b), som er nødvendig for å oppfylle en avtale eller gjennomføre tiltak før avtaleinngåelse.",
      "Behandling av teknisk informasjon og analyseverktøy skjer med grunnlag i GDPR artikkel 6(1)(f), berettiget interesse, for å forbedre våre tjenester og nettsiden.",
    ],
  },
  {
    title: "5. Informasjonskapsler (cookies)",
    content: [
      "Nettsiden bruker nødvendige informasjonskapsler for at siden skal fungere korrekt.",
      "Analyseverktøyet Vercel Analytics setter ikke egne sporingskapsler og samler kun aggregert, anonymisert statistikk.",
    ],
  },
  {
    title: "6. Deling med tredjeparter",
    content: [
      "Vi deler ikke personopplysninger med tredjeparter for markedsføringsformål.",
      "Opplysninger kan deles med tekniske underleverandører som er nødvendige for drift av nettsiden (hosting, analyseverktøy, chatbot). Disse behandler data kun etter våre instrukser og i henhold til databehandleravtale.",
    ],
  },
  {
    title: "7. Lagringstid",
    content: [
      "Kontaktopplysninger fra skjemaer lagres så lenge det er nødvendig for å følge opp henvendelsen, og slettes senest 12 måneder etter siste kontakt, med mindre det foreligger en aktiv kundeforhold.",
      "Teknisk informasjon og analysedata lagres i anonymisert form i inntil 26 måneder.",
    ],
  },
  {
    title: "8. Dine rettigheter",
    content: [
      "Du har rett til innsyn i hvilke personopplysninger vi har lagret om deg.",
      "Du har rett til å kreve retting av uriktige opplysninger.",
      "Du har rett til å kreve sletting av dine personopplysninger, med mindre vi har en lovpålagt plikt til å oppbevare dem.",
      "Du har rett til dataportabilitet, det vil si å få utlevert dine opplysninger i et maskinlesbart format.",
      "Du har rett til å klage til Datatilsynet dersom du mener vi behandler personopplysninger i strid med regelverket.",
    ],
  },
  {
    title: "9. Sikkerhet",
    content: [
      "Vi har iverksatt tekniske og organisatoriske tiltak for å beskytte dine personopplysninger mot uautorisert tilgang, tap eller ødeleggelse.",
      "Nettsiden benytter HTTPS-kryptering for all dataoverføring.",
    ],
  },
  {
    title: "10. Endringer",
    content: [
      "Vi kan oppdatere denne personvernerklæringen ved behov. Endringer publiseres på denne siden med oppdatert dato.",
    ],
  },
];

export default function PersonvernPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicyJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-teal-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Juridisk
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Personvernerklæring
          </h1>
          <p className="text-white/70 max-w-lg mx-auto text-lg leading-relaxed">
            Sist oppdatert: mars 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-navy-dark mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[15px] text-navy-dark/60 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact box */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-xl font-bold text-navy-dark mb-3">
            Spørsmål om personvern?
          </h2>
          <p className="text-navy-dark/70 text-[15px] mb-6">
            Ta kontakt med oss dersom du har spørsmål om hvordan vi behandler dine personopplysninger.
          </p>
          <a
            href={BUSINESS.emailHref}
            className="bg-navy-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors hover:bg-navy text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            {BUSINESS.email}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
