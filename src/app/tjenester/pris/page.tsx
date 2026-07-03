import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business-data";
import {
  Phone,
  Calculator,
  BadgeCheck,
  Banknote,
  FileText,
  ArrowRight,
  Clock,
  CheckCircle,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pris elektriker Oslo 2026",
  description:
    "Hva koster en elektriker i Oslo? Se veiledende timepris (849–1 100 kr/t), priseksempler på vanlige jobber og hvordan vi setter pris.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/tjenester/pris",
  },
};

const steps = [
  {
    number: "01",
    title: "Beskriv oppdraget",
    description:
      "Fortell oss hva du trenger hjelp med. Jo mer detaljert, desto bedre tilbud.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Vi vurderer",
    description:
      "Basert på beskrivelsen gir vi deg en forventet prisramme.",
    icon: Calculator,
  },
  {
    number: "03",
    title: "Befaring",
    description:
      "For større oppdrag kommer vi på befaring for å gi nøyaktig pris.",
    icon: Clock,
  },
  {
    number: "04",
    title: "Du bestemmer",
    description:
      "Du mottar et endelig tilbud og avgjør om du vil gå videre.",
    icon: CheckCircle,
  },
];

const features = [
  {
    icon: Banknote,
    title: "Konkurransedyktige priser",
    description:
      "Vi holder prisene konkurransedyktige uten å gå på kompromiss med kvaliteten.",
  },
  {
    icon: Scale,
    title: "Ingen skjulte kostnader",
    description:
      "Du får et detaljert tilbud med alle kostnader oppført. Ingen overraskelser.",
  },
  {
    icon: BadgeCheck,
    title: "Autorisert arbeid",
    description:
      "Alt arbeid utføres av autoriserte elektrikere med dokumentert kvalitet.",
  },
  {
    icon: FileText,
    title: " Dokumentasjon",
    description:
      "Du mottar ferdigattest og full dokumentasjon for alt arbeid som er utført.",
  },
];

export default function PrisPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Pris Elektriker Oslo",
            description:
              "Priser på elektrikertjenester i Oslo. North Installasjon tilbyr konkurransedyktige priser uten skjulte kostnader.",
            provider: {
              "@type": "ElectricalContractor",
              name: BUSINESS.name,
              url: BUSINESS.siteUrl,
              telephone: BUSINESS.phone,
            },
            areaServed: { "@type": "City", name: BUSINESS.serviceArea },
            serviceType: "Elektrikertjenester",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Hjem",
                item: BUSINESS.siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Tjenester",
                item: `${BUSINESS.siteUrl}/tjenester`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Pris",
                item: `${BUSINESS.siteUrl}/tjenester/pris`,
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Hva koster en elektriker i Oslo per time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Timeprisen for elektriker i Oslo ligger typisk mellom 849 og 1 100 kroner inkl. mva. for privatkunder på dagtid (mandag–fredag 07–16). For kveld og helg gjelder tillegg på 40–60 %. Bedrifter betaler som regel 950–1 300 kr/t.",
                },
              },
              {
                "@type": "Question",
                name: "Hva koster det å installere elbillader hjemme?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Installasjon av elbillader i enebolig koster typisk 8 000–18 000 kroner inkl. mva., avhengig av kabelveien fra sikringsskapet og valg av ladeboks. For borettslag og sameier med lastbalansering er prisen høyere per anlegg, men lavere per plass ved samlede prosjekter.",
                },
              },
              {
                "@type": "Question",
                name: "Hva koster et nytt sikringsskap?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bytte av sikringsskap i en leilighet med 6–10 kurser koster typisk 20 000–40 000 kroner inkl. mva. og materiale. Prisen avhenger av antall kurser, kabelstatus og om det er behov for ekstra kabling. Vi gir alltid fast pris etter befaring.",
                },
              },
            ],
          }),
        }}
      />
      {/* Header with split layout */}
      <div className="bg-navy-dark">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Priser
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                Pris Elektriker Oslo
              </h1>
              <p className="text-white/60 max-w-lg text-lg leading-relaxed">
                Konkurransedyktige priser uten skjulte kostnader. Få tilbud før
                vi starter.
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/kalkulator-hero.webp"
                  alt="Priser på elektrikertjenester i Oslo"
                  width={800}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center 40%" }}
                  priority
                  sizes="(max-width: 1024px) 100vw, 640px"
                  quality={85}
                />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
                Hva koster en elektriker i Oslo?
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>
                  Timeprisen for elektriker i Oslo ligger typisk mellom
                  <strong className="text-navy-dark"> 849 og 1 100 kroner inkl. mva.</strong> for privatkunder på dagtid
                  (mandag–fredag 07–16). For bedriftskunder, kveldstid og
                  helg gjelder egne satser. Alle priser oppgis inkludert mva.
                  hvis ikke annet er avtalt.
                </p>
                <p>
                  For mange vanlige oppdrag tilbyr vi fastpris, slik at du
                  vet nøyaktig hva du betaler uavhengig av tidsbruk.
                  Fastpris beregnes etter standard materialkostnader og
                  estimert arbeidstid på forhånd — ingen overraskelser.
                </p>
                <p>
                  Hos North Installasjon tror vi på full transparens. Du får
                  alltid et detaljert tilbud med alle kostnader spesifisert
                  før arbeidet starter. Svar på tilbud er uforpliktende.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-navy-dark mb-4">Veiledende fastpriser</h3>
                <div className="space-y-3">
                  {[
                    { job: "Bytte sikringsskap (6–10 kurser)", pris: "20 000–40 000 kr" },
                    { job: "Elbillader installasjon enebolig", pris: "8 000–18 000 kr" },
                    { job: "Ny stikkontakt (inkl. kurs)", pris: "3 000–6 000 kr" },
                    { job: "Komfyrvakt montering", pris: "3 000–6 000 kr" },
                    { job: "El-sjekk/tilstandsrapport bolig", pris: "3 500–6 000 kr" },
                    { job: "Oppgradering varmekabel bad", pris: "8 000–18 000 kr" },
                  ].map(({ job, pris }) => (
                    <div key={job} className="flex justify-between items-center py-2 border-b border-navy-dark/10 text-[14px]">
                      <span className="text-navy-dark/70">{job}</span>
                      <span className="font-semibold text-navy-dark whitespace-nowrap ml-4">{pris}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-navy-dark/40 mt-3">Prisene er veiledende inkl. mva. Endelig pris fastsettes etter befaring.</p>
              </div>
            </div>

            <div className="bg-navy-dark rounded-2xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-white mb-6">
                Hva påvirker prisen?
              </h3>
              <ul className="space-y-4">
                {[
                  "Oppdragets størrelse og kompleksitet",
                  "Materialer og merkevare (f.eks. ladeboks-modell)",
                  "Tilgjengelighet og arbeidsforhold",
                  "Eventuell feilsøking som kreves",
                  "Tid på døgnet (dag/kveld/helg)",
                  "Nettselskapet-søknad ved kapasitetsutvidelse",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-white/70"
                  >
                    <BadgeCheck className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-sm font-bold text-white mb-4">Timepriser (veiledende)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white/60">
                    <span>Privat, dagtid (man–fre)</span>
                    <span className="text-white font-medium">849–1 100 kr/t</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Bedrift, dagtid</span>
                    <span className="text-white font-medium">950–1 300 kr/t</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Kveld og helg</span>
                    <span className="text-white font-medium">+40–60 % tillegg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-navy-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Slik fungerer det
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Fra henvendelse til pris
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="bg-white rounded-2xl p-8 h-full shadow-sm">
                    <span className="text-4xl font-extrabold text-teal-accent/25 block mb-4">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-teal-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-teal-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-navy-dark/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Fordeler
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
              Hvorfor velge oss?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-teal-accent/10 mx-auto flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-teal-accent" />
                  </div>
                  <h3 className="text-base font-bold text-navy-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-navy-dark/70 leading-relaxed max-w-xs mx-auto">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Få pris på ditt oppdrag
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Kontakt oss for et uforpliktende tilbud. Vi tar kontakt så snart
            som mulig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Kontakt oss
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/kalkulator"
              className="border-2 border-navy-dark text-navy-dark font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-navy-dark hover:text-white text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Bruk priskalkulatoren
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
