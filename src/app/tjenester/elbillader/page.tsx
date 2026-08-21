import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { BUSINESS } from "@/lib/business-data";
import Footer from "@/components/layout/Footer";
import {
  Car,
  Building2,
  BadgeCheck,
  Banknote,
  ClipboardCheck,
  FileText,
  Wrench,
  Award,
  ArrowRight,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Elbillader Oslo",
  description:
    "Installer elbillader hjemme i Oslo med autorisert elektriker. Vi monterer Easee, Zaptec og Schneider for bolig, borettslag og bedrift.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/tjenester/elbillader",
  },
};

const steps = [
  {
    number: "01",
    title: "Befaring",
    description:
      "Vi kommer hjem til deg og vurderer el-anlegget, plassering og kapasitet. Gratis og uforpliktende.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Tilbud",
    description:
      "Du får et detaljert tilbud med tydelig pris. Ingen overraskelser eller skjulte kostnader.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Installasjon",
    description:
      "Autoriserte elektrikere utfører installasjonen raskt og ryddig etter gjeldende forskrifter.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Ferdigattest",
    description:
      "Du mottar ferdigattest og full dokumentasjon. Alt er klart til bruk.",
    icon: Award,
  },
];

const features = [
  {
    icon: Car,
    title: "Alle bilmerker",
    description:
      "Vi installerer ladere fra alle ledende produsenter som passer til din bil.",
  },
  {
    icon: Building2,
    title: "Bolig & borettslag",
    description:
      "Løsninger for eneboliger, leiligheter, garasjeanlegg og parkeringshus.",
  },
  {
    icon: Banknote,
    title: "Konkurransedyktige priser",
    description:
      "Du får et klart tilbud før vi starter. Ingen uforutsette tillegg.",
  },
  {
    icon: BadgeCheck,
    title: "Autorisert installasjon",
    description:
      "Alt arbeid utføres av autoriserte elektrikere i henhold til NEK 400.",
  },
];

export default function ElbilladerPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Elbillader-installasjon",
            description: "Profesjonell installasjon av elbillader for bolig, borettslag og bedrift i Oslo-området. Tydelig pris og autorisert arbeid.",
            provider: { "@type": "ElectricalContractor", name: BUSINESS.name, url: BUSINESS.siteUrl, telephone: BUSINESS.phone },
            areaServed: { "@type": "City", name: BUSINESS.serviceArea },
            serviceType: "Elbillader-installasjon",
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
              { "@type": "ListItem", position: 1, name: "Hjem", item: BUSINESS.siteUrl },
              { "@type": "ListItem", position: 2, name: "Tjenester", item: `${BUSINESS.siteUrl}/tjenester` },
              { "@type": "ListItem", position: 3, name: "Elbillader-installasjon", item: `${BUSINESS.siteUrl}/tjenester/elbillader` },
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
                Elbillader-installasjon
              </h1>
              <p className="text-white/60 max-w-lg text-lg leading-relaxed">
                Profesjonell installasjon av elbillader for bolig, borettslag og
                bedrift i Oslo-området.
              </p>
              <p className="text-teal-accent text-sm font-medium max-w-lg mt-4 flex items-start gap-2">
                <Calendar className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Fra 1. juli 2026:</strong> Ny NEK 400:2026 gjør det
                  enklere å prosjektere elbillader i frittliggende garasje —
                  uten å være bundet av eksisterende forbrukerkurs.
                </span>
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/elbillader-hero.webp"
                  alt="Zaptec elbillader montert på vegg"
                  width={800}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center 30%" }}
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
                Lad hjemme - trygt og effektivt
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>
                  Med en dedikert elbillader hjemme lader du raskere, tryggere
                  og billigere enn ved offentlige stasjoner. Bilen er klar
                  hver morgen uten ekstra stopp.
                </p>
                <p>
                  Vi installerer ladere fra <strong className="text-navy-dark">Easee, Zaptec og Schneider</strong> —
                  de ledende merkene i Norge. Alle installasjoner utføres av
                  autoriserte elektrikere etter NEK 400 og leveres med
                  ferdigattest og samsvarserklæring.
                </p>
                <p>
                  For borettslag og sameier prosjekterer vi lastbalanserte
                  ladeanlegg der strømkapasiteten fordeles automatisk mellom
                  alle ladere. Systemet skaleres trinnvis og gir individuell
                  måling per plass — rettferdig og fremtidssikret.
                </p>
              </div>
            </div>

            <div className="bg-navy-dark rounded-2xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-white mb-6">
                Dette er inkludert
              </h3>
              <ul className="space-y-4">
                {[
                  "Gratis befaring og rådgivning",
                  "Tydelig pris uten skjulte kostnader",
                  "Installasjon av lader og kabling",
                  "Oppsett og konfigurering av lader",
                  "Ferdigattest og samsvarserklæring",
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
              Fra henvendelse til ferdig lader
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
            Klar for elbillader?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Send oss en henvendelse, så tar vi kontakt raskt med et
            uforpliktende tilbud.
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
