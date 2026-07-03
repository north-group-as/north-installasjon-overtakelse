import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business-data";
import {
  FileCheck,
  Building,
  Users,
  Zap,
  MessageCircle,
  Search,
  Wrench,
  Award,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Elektriker borettslag og sameie Oslo",
  description:
    "Elektriker for borettslag og sameier i Oslo. Serviceavtaler, oppgradering av fellesanlegg, elbilladere i garasje og internkontroll elektro. Ring oss.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/tjenester/borettslag-og-sameie",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Elektriker for borettslag og sameie",
  description:
    "Serviceavtaler og elektrikerarbeid for borettslag og sameier i Oslo-området.",
  provider: {
    "@type": "ElectricalContractor",
    name: "North Installasjon AS",
    url: "https://www.northinstallasjon.no",
    telephone: "+4774999333",
  },
  areaServed: { "@type": "City", name: "Oslo-området" },
  serviceType: "Borettslaginstallasjon",
};

const steps = [
  {
    number: "01",
    title: "Dialog",
    description:
      "Vi tar en samtale med styret eller vaktmester for å forstå behovet.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Befaring",
    description:
      "Grundig gjennomgang av anlegget med skriftlig tilstandsrapport.",
    icon: Search,
  },
  {
    number: "03",
    title: "Utførelse",
    description:
      "Arbeidet planlegges med hensyn til beboere og gjennomføres effektivt.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Dokumentasjon",
    description:
      "Komplett dokumentasjon og forslag til serviceavtale for videre vedlikehold.",
    icon: Award,
  },
];

const features = [
  {
    icon: FileCheck,
    title: "Serviceavtaler",
    description:
      "Forutsigbare kostnader og fast kontaktperson for borettslaget.",
  },
  {
    icon: Building,
    title: "Fellesanlegg",
    description:
      "Erfaring med store fellesanlegg: sikringsskap, stigeledninger og hovedtavler.",
  },
  {
    icon: Users,
    title: "Alle ledd",
    description:
      "Vi hjelper vaktmester, styre og enkeltbeboere med sine behov.",
  },
  {
    icon: Zap,
    title: "Beredskap",
    description: "Rask respons ved akutte feil i fellesanlegg.",
  },
];

export default function BorettslagOgSameiePage() {
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
              { "@type": "ListItem", position: 3, name: "Borettslag og sameie", item: `${BUSINESS.siteUrl}/tjenester/borettslag-og-sameie` },
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
                name: "Hvem er ansvarlig for det elektriske anlegget i et borettslag?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Borettslaget (ved styret) er ansvarlig for fellesanlegget: stigeledninger, felles sikringsskap og elektrisk utstyr i fellesarealer. Den enkelte beboer er ansvarlig for el-anlegget inne i sin egen leilighet, fra og med leilighetens inntakskurs.",
                },
              },
              {
                "@type": "Question",
                name: "Hva er internkontroll elektro i et borettslag?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Internkontroll elektro er en systematisk gjennomgang av det elektriske fellesanlegget etter NS 3901 og Internkontrollforskriften. Styret har plikt til å gjennomføre internkontroll for å dokumentere at anlegget er trygt og i forskriftsmessig stand. Vi utfører internkontroll og leverer en rapport med prioriterte tiltak.",
                },
              },
              {
                "@type": "Question",
                name: "Hva koster en serviceavtale for borettslag?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En serviceavtale for borettslag prises individuelt basert på antall enheter, anleggets tilstand og ønsket servicenivå. Typisk inneholder den jevnlig tilstandskontroll, prioritert beredskap ved akutte feil og fast kontaktperson. Kontakt oss for et uforpliktende tilbud.",
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
                Tjeneste
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                Borettslag og sameie
              </h1>
              <p className="text-white/60 max-w-lg text-lg leading-relaxed">
                Komplekse elektriske anlegg krever en partner du kan stole på,
                enten du er vaktmester, styreleder eller beboer.
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/project-constructioncity.webp"
                  alt="Moderne boligkompleks med profesjonell belysning"
                  width={800}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center" }}
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
                Trygghet og forutsigbarhet for alle
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>
                  Borettslag og sameier har ofte sammensatte og komplekse
                  elektriske anlegg. Enten du er vaktmester, styreleder eller
                  beboer, kan vi løse dine utfordringer, fra enkle
                  reparasjoner til full oppgradering av fellesanlegget.
                </p>
                <p>
                  Med en serviceavtale kan vi samarbeide for å gi trygghet og
                  forutsigbarhet til alle i ditt borettslag. Faste kostnader,
                  fast kontaktperson og prioritert responstid ved akutte
                  hendelser.
                </p>
                <p>
                  Vi tilbyr serviceavtaler til konkurransedyktige priser og tar
                  på oss enkeltoppdrag for både vaktmestere, styret og beboere.
                  Alt arbeid dokumenteres og leveres med samsvarserklæring.
                </p>
                <p>
                  Våre elektrikere har bred erfaring med å jobbe i bebodde
                  bygg, der hensyn til beboerne er like viktig som selve
                  arbeidet. Vi koordinerer alltid tidspunkt for arbeidet med
                  styret eller vaktmester, og varsler beboerne i god tid.
                  Både oppussing av fellesarealer og enkeltinstallasjoner i
                  leiligheter utføres med minst mulig forstyrrelse.
                </p>
                <p>
                  Vi bidrar også med rådgivning rundt energieffektivisering,
                  for eksempel LED-oppgradering av felles belysning,
                  elbillading i garasjeanlegg og smarte styringssystemer som
                  reduserer strømforbruket. Dette kan gi betydelige
                  besparelser for borettslaget over tid.
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
                    "Serviceavtaler for borettslag og sameier",
                    "Oppgradering av fellesanlegg og sikringsskap",
                    "Installasjon av elbilladere i garasjeanlegg",
                    "Belysning i fellesarealer og uteområder",
                    "Feilsøking og akutt beredskap",
                    "Rådgivning til styre og vaktmester",
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
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/borettslag-bad-resultat.webp"
                    alt="Moderne bad med downlights installert av North Installasjon"
                    width={600}
                    height={800}
                    className="absolute inset-0 w-full h-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    quality={85}
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/borettslag-belysning.webp"
                    alt="Pendellamper over spisebord, belysningsinstallasjon"
                    width={600}
                    height={800}
                    className="absolute inset-0 w-full h-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    quality={85}
                  />
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
              Fra dialog til dokumentasjon
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

      {/* Internkontroll */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
                Internkontroll elektro for styret
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>
                  Borettslagets styre har plikt til å gjennomføre internkontroll
                  av det elektriske fellesanlegget etter{" "}
                  <strong className="text-navy-dark">NS 3901 og Internkontrollforskriften</strong>.
                  Målet er å dokumentere at anlegget er trygt, i forskriftsmessig
                  stand og at avvik følges opp.
                </p>
                <p>
                  North Installasjon utfører internkontroll el for borettslag og
                  sameier i Oslo-området. Vi gjennomgår fellesanlegget systematisk,
                  rapporterer avvik med prioritering og anbefaler tiltak. Rapporten
                  kan brukes som grunnlag for vedlikeholdsplan og budsjettarbeid.
                </p>
                <p>
                  En serviceavtale kombinert med jevnlig internkontroll gir
                  borettslaget forutsigbare kostnader, fast kontaktperson og
                  trygghet for at anlegget alltid er i orden.
                </p>
              </div>
            </div>
            <div className="bg-navy-dark rounded-2xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-white mb-6">
                Internkontroll inneholder
              </h3>
              <ul className="space-y-4">
                {[
                  "Visuell kontroll av fellessikringsskap og tavler",
                  "Gjennomgang av el-dokumentasjon og samsvarserklæringer",
                  "Vurdering av kapasitet og lastfordeling",
                  "Sjekk av belysning og nødlys i fellesarealer",
                  "Rapport med avviksliste og prioriterte tiltak",
                  "Oppfølging av tidligere anbefalte tiltak",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-white/70">
                    <FileCheck className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Trenger borettslaget elektriker?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Vi tilbyr serviceavtaler til konkurransedyktige priser og tar på oss enkeltoppdrag.
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
