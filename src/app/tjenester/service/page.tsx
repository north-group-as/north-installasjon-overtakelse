import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business-data";
import {
  Zap,
  ShieldCheck,
  Banknote,
  BadgeCheck,
  Phone,
  MapPin,
  Wrench,
  Award,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Service og feilsøking",
  description:
    "Profesjonell feilsøking og servicearbeid for bedrifter og private i Oslo-området. Oppgradering av anlegg, el-tavler og kursopplegg.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/tjenester/service",
  },
};

const steps = [
  {
    number: "01",
    title: "Kontakt",
    description:
      "Ring eller send melding. Vi avtaler tid som passer deg.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Befaring",
    description:
      "Vi kommer og vurderer jobben på stedet. Uforpliktende.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Utførelse",
    description:
      "Autoriserte elektrikere utfører arbeidet raskt og ryddig.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Ferdigmelding",
    description:
      "Du mottar dokumentasjon og ferdigattest etter gjeldende forskrifter.",
    icon: Award,
  },
];

const features = [
  {
    icon: Zap,
    title: "Rask og fagmessig",
    description:
      "Fra enkel feilsøking til komplekse anlegg. Vi løser oppdraget effektivt og ryddig.",
  },
  {
    icon: ShieldCheck,
    title: "Vi holder det vi lover",
    description:
      "Vi møter opp når vi sier og leverer arbeid vi er stolte av. Hver gang.",
  },
  {
    icon: Banknote,
    title: "Konkurransedyktige priser",
    description:
      "Du får et klart tilbud før vi starter. En pris du blir fornøyd med.",
  },
  {
    icon: BadgeCheck,
    title: "Autorisert",
    description:
      "Alt arbeid utføres av autoriserte elektrikere etter NEK 400.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Service og feilsøking",
  description:
    "Profesjonell feilsøking og servicearbeid for bedrifter og private i Oslo-området.",
  provider: {
    "@type": "ElectricalContractor",
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
  },
  areaServed: { "@type": "City", name: BUSINESS.serviceArea },
  serviceType: "Elektroservice",
};

export default function ServicePage() {
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
              { "@type": "ListItem", position: 3, name: "Service og feilsøking", item: `${BUSINESS.siteUrl}/tjenester/service` },
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
                Service og feilsøking
              </h1>
              <p className="text-white/60 max-w-lg text-lg leading-relaxed">
                Vi tar på oss både små og store serviceoppdrag for bedrifter og
                private i Oslo-området.
              </p>
              <p className="text-teal-accent text-sm font-medium max-w-lg mt-4 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Etter NEK 399:2026:</strong> Nye tilknytningsskap må
                  dimensjoneres for høyere feilstrømmer. Vi prosjekterer og
                  leverer i henhold til gjeldende standard.
                </span>
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/service-sikringsskap.webp"
                  alt="Elektriker utfører servicearbeid"
                  width={800}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover object-center"
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
                Elektrikere med yrkesstolthet
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>
                  Hos North Installasjon brenner vi for faget. Vi er
                  håndtverkere som bryr oss om resultatet, fra den minste
                  feilsøkingen til de mest komplekse anleggene. Når du
                  kontakter oss, får du en elektriker som tar arbeidet
                  personlig.
                </p>
                <p>
                  Vi tar på oss både små og store serviceoppdrag for bedrifter
                  og private i hele Oslo-området. Enten det gjelder en enkel
                  feilsøking, oppgradering av el-tavle eller installasjon av
                  ny belysning, vi stiller med riktig kompetanse og utstyr.
                </p>
                <p>
                  Pålitelighet, fremdrift og kvalitet er verdiene som driver
                  oss. Vi møter opp når vi sier, holder det vi lover, og
                  leverer arbeid vi er stolte av. Hver gang.
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
                    "Feilsøking av alle typer elektriske anlegg",
                    "Oppgradering av eksisterende anlegg",
                    "Oppgradering av el-tavler og kursopplegg",
                    "Installasjon av ladestasjoner og belysning",
                    "Serviceavtaler og vedlikehold",
                    "Dokumentasjon og ferdigattest",
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
                  src="/images/north-elektriker-arbeid-inne.webp"
                  alt="Elektriker fra North Installasjon arbeider med installasjon"
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
              Fra henvendelse til ferdig jobb
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
            Trenger du en elektriker?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Ta kontakt for en uforpliktende vurdering. Vi stiller med riktig kompetanse og rydder opp.
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
