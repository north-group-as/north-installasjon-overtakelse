import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { BUSINESS } from "@/lib/business-data";
import {
  Building2,
  ClipboardList,
  ShieldCheck,
  Users,
  Search,
  FileText,
  Wrench,
  Award,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Elektriker for bedrift og næring Oslo",
  description:
    "Elektriker for bedrifter i Oslo. Entrepriseleveranser, prosjektering og HMS-godkjent el-dokumentasjon for næringsbygg, kontorer og industribygg.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/tjenester/bedrift",
  },
};

const steps = [
  {
    number: "01",
    title: "Kartlegging",
    description:
      "Vi setter oss inn i prosjektet og forstår behovet.",
    icon: Search,
  },
  {
    number: "02",
    title: "Tilbud",
    description:
      "Du får et detaljert tilbud med klar pris og tidsplan.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Utførelse",
    description:
      "Erfarne elektrikere gjør jobben effektivt og dokumentert.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Overlevering",
    description:
      "Komplett dokumentasjon og ferdigmelding etter forskriftene.",
    icon: Award,
  },
];

const features = [
  {
    icon: Building2,
    title: "Entrepriseerfaring",
    description:
      "Erfaring fra store og krevende prosjekter med stram fremdrift.",
  },
  {
    icon: ClipboardList,
    title: "Struktur",
    description:
      "Dokumentasjon og rapportering i alle ledd. Ingen løse tråder.",
  },
  {
    icon: ShieldCheck,
    title: "Faglig trygghet",
    description:
      "Svært faglig oppdatert installatør som sikrer kvalitet og etterlevelse.",
  },
  {
    icon: Users,
    title: "Dedikerte team",
    description:
      "Vi setter sammen det beste teamet for ditt prosjekt.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Elektriker for bedrift",
  description:
    "Entrepriseleveranser, prosjektering og koordinering for næringsbygg og store prosjekter i Oslo-området.",
  provider: {
    "@type": "ElectricalContractor",
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
  },
  areaServed: { "@type": "City", name: BUSINESS.serviceArea },
  serviceType: "Elektroentreprise",
};

export default function BedriftPage() {
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
              { "@type": "ListItem", position: 3, name: "Elektriker for bedrift", item: `${BUSINESS.siteUrl}/tjenester/bedrift` },
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
                Elektriker for din bedrift
              </h1>
              <p className="text-white/60 max-w-lg text-lg leading-relaxed">
                Vi vet hvor viktig det er å finne en elektriker som forstår din
                bransje og ditt behov.
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/north-team-ute-kontorbygg.webp"
                  alt="North Installasjon-elektrikere foran næringsbygg"
                  width={800}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center 35%" }}
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
                Løsninger vi er stolte av
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>
                  North Installasjon leverer entrepriseleveranser der
                  presisjon, samarbeid og fremdrift er avgjørende. Vi har
                  erfaring fra krevende næringsprosjekter og vet hva som
                  kreves for å levere på tid og budsjett — uten overraskelser.
                </p>
                <p>
                  Vi tar ansvar for hele leveransen, fra prosjektering og
                  koordinering til utførelse og HMS-godkjent dokumentasjon.
                  Alle installasjoner leveres med samsvarserklæring, el-tegninger
                  og ferdigattest etter FEL (Forskrift om elektriske lavspenningsanlegg).
                </p>
                <p>
                  Våre elektrikere har bred erfaring med kontorbygg, restauranter,
                  næringslokaler og industrielle miljøer. Vi bidrar med
                  energieffektiv belysning, moderne styringssystemer, trefase
                  installasjoner og oppgradering av eldre el-anlegg.
                </p>
                <p>
                  Vi har samarbeidet med <strong className="text-navy-dark">Gardermoen Elektro,
                  Sentrum Elektriske og Laukas</strong> — bedrifter som stiller
                  høye krav til kvalitet og leveringspresisjon. Vi tilbyr også
                  serviceavtaler for løpende vedlikehold, slik at det elektriske
                  anlegget fungerer optimalt og HMS-dokumentasjonen alltid er
                  à jour.
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
                    "Entrepriseleveranser og totalentrepriser",
                    "Prosjektering og el-tegninger",
                    "HMS-godkjent dokumentasjon og samsvarserklæring",
                    "Koordinering med øvrige entreprenører",
                    "Serviceavtaler for næringsbygg",
                    "Tilpassede løsninger for din bransje",
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
                  src="/images/north-team-planlegging-naering.webp"
                  alt="North-teamet gjennomgår planer på byggeplass"
                  width={800}
                  height={600}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center 25%" }}
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
              Fra kartlegging til overlevering
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
                <div
                  key={feature.title}
                  className="text-center"
                >
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
            Stort eller lite prosjekt?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Vi leverer på det vi sier. Kontakt oss for en uforpliktende samtale.
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
