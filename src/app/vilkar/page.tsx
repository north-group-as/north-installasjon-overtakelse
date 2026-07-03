import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business-data";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Vilkår og betingelser",
  description:
    "Les vilkår og betingelser for kurs og tjenester fra North Installasjon AS. Dekker bestilling, betaling, avbestilling og reklamasjon.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/vilkar",
  },
};

const sections = [
  {
    title: "1. Generelt",
    content: [
      `Disse vilkårene gjelder for kjøp av kurs og tjenester levert av ${BUSINESS.name}, organisasjonsnummer 925 415 538.`,
      "Ved å kjøpe eller delta på kurs fra North Installasjon aksepterer du disse vilkårene.",
    ],
  },
  {
    title: "2. Kurspåmelding og betaling",
    content: [
      "Alle priser er oppgitt i norske kroner (NOK) eksklusiv merverdiavgift med mindre annet er spesifisert.",
      "Betaling skjer ved påmelding via vår kursplattform. Faktura kan avtales for bedriftskunder.",
      "Tilgang til digitale kurs gis umiddelbart etter bekreftet betaling.",
    ],
  },
  {
    title: "3. Avbestilling og refusjon",
    content: [
      "For digitale kurs: Avbestilling er mulig innen 14 dager etter kjøp, forutsatt at kurset ikke er påbegynt.",
      "For fysiske kurs: Avbestilling må skje senest 14 dager før kursstart. Ved senere avbestilling belastes full kursavgift.",
      "Refusjon gis kun ved uløste tekniske problemer som hindrer gjennomføring av digitale kurs.",
    ],
  },
  {
    title: "4. Digital kursplattform",
    content: [
      "Digitale kurs leveres via vår nettbaserte plattform og kan gjennomføres på PC, nettbrett og mobil.",
      "Brukernavn og passord er personlig og skal ikke deles med andre.",
      "North Installasjon er ikke ansvarlig for tekniske problemer forårsaket av brukerens utstyr eller internettforbindelse.",
    ],
  },
  {
    title: "5. Praktisk opplæring",
    content: [
      "Kurs med praktisk komponent krever at deltakeren organiserer den praktiske delen med en sertifisert instruktør.",
      "North Installasjon formidler kontakt med godkjente instruktører på forespørsel.",
      "Deltakeren er selv ansvarlig for å overholde krav til personlig verneutstyr under praktisk opplæring.",
    ],
  },
  {
    title: "6. Ansvar og begrensninger",
    content: [
      "North Installasjon er ikke ansvarlig for indirekte tap, følgeskader eller tapt fortjeneste som følge av bruk av våre kurs.",
      "Kursinnholdet er ment som opplæring og erstatter ikke arbeidsgivers ansvar for opplæring etter arbeidsmiljøloven.",
      "North Installasjon forbeholder seg retten til å oppdatere kursinnhold for å reflektere gjeldende lover og forskrifter.",
    ],
  },
  {
    title: "7. Opphavsrett",
    content: [
      "Alt kursmateriell, inkludert tekst, bilder, videoer og oppgaver, er beskyttet av åndsverkloven.",
      "Kopiering, distribusjon eller videresalg av kursmateriell er strengt forbudt uten skriftlig samtykke.",
    ],
  },
  {
    title: "8. Endringer i vilkår",
    content: [
      "North Installasjon forbeholder seg retten til å endre disse vilkårene. Endringer trer i kraft ved publisering på denne siden.",
      "For allerede kjøpte kurs gjelder vilkårene som var gjeldende på kjøpstidspunktet.",
    ],
  },
];

export default function VilkarPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-teal-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Juridisk
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Vilkår og betingelser
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
            Spørsmål om vilkårene?
          </h2>
          <p className="text-navy-dark/70 text-[15px] mb-6">
            Ta kontakt med oss dersom du har spørsmål om vilkår og betingelser.
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
