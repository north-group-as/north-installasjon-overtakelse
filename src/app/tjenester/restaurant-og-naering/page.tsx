import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business-data";
import {
  Clock,
  Store,
  Zap,
  Handshake,
  Phone,
  Search,
  Wrench,
  Award,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurant og næring",
  description:
    "Elektriker for restauranter og næringsbedrifter i Oslo-området. Vi sikrer lite nedetid, rask respons og bred erfaring med storkjøkken, butikk og kontorlokaler.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/tjenester/restaurant-og-naering",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Elektriker for restaurant og næring",
  description:
    "Elektriker for restauranter og næringsbedrifter i Oslo-området. Lite nedetid og bred bransjekunnskap.",
  provider: {
    "@type": "ElectricalContractor",
    name: "North Installasjon AS",
    url: "https://www.northinstallasjon.no",
    telephone: "+4774999333",
  },
  areaServed: { "@type": "City", name: "Oslo-området" },
  serviceType: "Næringsinstallasjon",
};

const steps = [
  {
    number: "01",
    title: "Henvendelse",
    description:
      "Ta kontakt. Vi er tilgjengelige for både akutte og planlagte oppdrag.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Vurdering",
    description:
      "Vi kartlegger behovet og finner den beste løsningen for din bedrift.",
    icon: Search,
  },
  {
    number: "03",
    title: "Utførelse",
    description:
      "Arbeidet utføres med fokus på minimal nedetid for din virksomhet.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Oppfølging",
    description:
      "Ferdigattest og mulighet for serviceavtale med fast responstid.",
    icon: Award,
  },
];

const features = [
  {
    icon: Clock,
    title: "Minimal nedetid",
    description:
      "Vi planlegger arbeidet rundt dine åpningstider for å minimere forstyrrelser.",
  },
  {
    icon: Store,
    title: "Bred erfaring",
    description:
      "Fra restaurantkjøkken til butikklokaler, vi kjenner utfordringene.",
  },
  {
    icon: Zap,
    title: "Rask respons",
    description:
      "Akutte problemer? Vi prioriterer næringskunder med serviceavtale.",
  },
  {
    icon: Handshake,
    title: "Faglig trygghet",
    description:
      "Svært faglig oppdatert installatør som sikrer kvalitet og etterlevelse av forskriftene.",
  },
];

export default function RestaurantOgNaeringPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Hjem", item: BUSINESS.siteUrl },
              { "@type": "ListItem", position: 2, name: "Tjenester", item: `${BUSINESS.siteUrl}/tjenester` },
              { "@type": "ListItem", position: 3, name: "Restaurant og næring", item: `${BUSINESS.siteUrl}/tjenester/restaurant-og-naering` },
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
                Tjeneste
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                Restaurant og næring
              </h1>
              <p className="text-white/60 max-w-lg text-lg leading-relaxed">
                Driver du en restaurant eller en annen næringsbedrift? Vi sørger
                for lite nedetid og at alt fungerer som det skal.
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/north-team-planlegging-naering.webp"
                  alt="North Installasjon team gjennomgår planer på næringslokale"
                  width={800}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center 25%" }}
                  priority
                  sizes="(max-width: 1024px) 100vw, 640px"
                  quality={85}
                />
            </div>
          </div>
        </div>
      </div>

      {/* Content / About the service */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
                Elektriker som forstår din bransje
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>
                  Restauranter og næringsbedrifter er avhengige av pålitelige
                  elektriske anlegg. Et strømbortfall i et restaurantkjøkken kan
                  bety tapte inntekter, økte kostnader og misfornøyde gjester.
                  Derfor prioriterer vi alltid minimal nedetid og rask respons.
                </p>
                <p>
                  Vi har bred erfaring med alt fra storkjøkkenutstyr og
                  ventilasjonsanlegg til belysning og lysdesign for
                  butikklokaler. Enten det gjelder kassasystemer,
                  kjøleanlegg eller klimastyring, finner vi løsningen som
                  passer din virksomhet.
                </p>
                <p>
                  Uansett om du har et stort prosjekt eller et lite problem, kan
                  vi hjelpe deg. Vi tilbyr også serviceavtaler med fast
                  responstid, slik at du alltid vet at hjelpen er nær.
                </p>
                <p>
                  Våre elektrikere har erfaring fra en rekke bransjer, inkludert
                  servering, detaljhandel, kontor og lager. Vi forstår at
                  hverdagen din er avhengig av at alt fungerer, og vi tilpasser
                  arbeidstidene våre etter dine åpningstider. Dermed unngår du
                  tapte inntekter på grunn av tekniske problemer eller
                  planlagt vedlikehold.
                </p>
                <p>
                  Vi bidrar også med løpende rådgivning om energieffektive
                  tiltak, for eksempel LED-belysning, smarte styringssystemer
                  og oppgradering av eldre elektriske anlegg. Med en
                  serviceavtale får du en fast kontaktperson som kjenner ditt
                  lokale, og som kan reagere raskt når behovet oppstår.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-navy-dark rounded-2xl p-8 md:p-10 mb-8">
                <h3 className="text-lg font-bold text-white mb-6">
                  Dette er inkludert
                </h3>
                <ul className="space-y-4">
                  {[
                    "Feilsøking og akutt reparasjon",
                    "Installasjon av storkjøkkenutstyr",
                    "Belysning og lysdesign for butikk",
                    "Ventilasjon og klimaanlegg",
                    "Serviceavtaler med rask responstid",
                    "Dokumentasjon og samsvarserklæring",
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
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/north-team-diskusjon-naering.webp"
                  alt="North Installasjon elektrikere diskuterer installasjonsplan"
                  width={800}
                  height={600}
                  className="absolute inset-0 w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
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
              Fra henvendelse til ferdig løsning
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
                    <div className="w-10 h-10 rounded-xl bg-teal-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-teal-accent" />
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

      {/* Features / Benefits */}
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
                  <div className="w-14 h-14 rounded-2xl bg-navy-dark mx-auto flex items-center justify-center mb-5">
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
            Trenger du elektriker for din bedrift?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Vi er tilgjengelige for både akutte og planlagte oppdrag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Kontakt oss
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
