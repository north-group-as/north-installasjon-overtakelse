import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business-data";
import {
  Building2,
  FileText,
  Wrench,
  Award,
  BadgeCheck,
  ArrowRight,
  ClipboardCheck,
  Users,
  Ruler,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Elektriker Nybygg Oslo",
  description:
    "Elektriker for nybygg i Oslo. North Installasjon leverer komplette elektriske installasjoner for nybygg og større byggeprosjekter.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/tjenester/nybygg",
  },
};

const steps = [
  {
    number: "01",
    title: "Prosjektering",
    description:
      "Vi deltar i tidlig planlegging og dimensjonerer det elektriske anlegget.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Tilbud",
    description:
      "Du mottar et detaljert tilbud med alle kostnader og leveranser.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Installasjon",
    description:
      "Autoriserte elektrikere utfører installasjonen etter plan og spesifikasjoner.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Ferdigattest",
    description:
      "Du mottar full dokumentasjon og ferdigattest for hele anlegget.",
    icon: Award,
  },
];

const features = [
  {
    icon: Building2,
    title: "Nybygg og tilbygg",
    description:
      "Komplette elektriske installasjoner for alle typer nybygg og utvidelser.",
  },
  {
    icon: ClipboardCheck,
    title: "Profesjonell planlegging",
    description:
      "Vi samarbeider med arkitekter og entreprenører fra tidlig fase.",
  },
  {
    icon: Users,
    title: "Erfarne fagfolk",
    description:
      "Team med lang erfaring fra store byggeprosjekter i Oslo-området.",
  },
  {
    icon: BadgeCheck,
    title: "Godkjent anlegg",
    description:
      "Alle installasjoner er dimensjonert og dokumentert etter gjeldende forskrifter.",
  },
];

export default function NybyggPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Installasjon Nybygg Oslo",
            description:
              "Elektriker for nybygg i Oslo. North Installasjon leverer komplette elektriske installasjoner for nybygg og større byggeprosjekter.",
            provider: {
              "@type": "ElectricalContractor",
              name: BUSINESS.name,
              url: BUSINESS.siteUrl,
              telephone: BUSINESS.phone,
            },
            areaServed: { "@type": "City", name: BUSINESS.serviceArea },
            serviceType: "Elektrisk installasjon nybygg",
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
                name: "Nybygg",
                item: `${BUSINESS.siteUrl}/tjenester/nybygg`,
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
                Nybygg
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                Installasjon Nybygg Oslo
              </h1>
              <p className="text-white/60 max-w-lg text-lg leading-relaxed">
                Komplette elektriske installasjoner for nybygg og større
                byggeprosjekter.
              </p>
              <p className="text-teal-accent text-sm font-medium max-w-lg mt-4 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Etter NEK 399:2026:</strong> Hver bolig skal ha eget
                  tilknytningsskap dimensjonert for høyere feilstrømmer. Vi
                  prosjekterer alle nye anlegg etter gjeldende standard.
                </span>
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/north-team-ute-kontorbygg.webp"
                alt="Elektriker for nybygg i Oslo"
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

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
                Elektriske installasjoner for nybygg
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>
                  North Installasjon leverer komplette elektriske installasjoner
                  for alle typer nybygg. Enten det gjelder eneboliger,
                  rekkehus, borettslag, næringsbygg eller større
                  byggeprosjekter, har vi kompetansen og kapasiteten til å
                  levere.
                </p>
                <p>
                  Vi deltar i prosjekteringen fra tidlig fase, slik at det
                  elektriske anlegget blir optimalisert for byggets behov. Vi
                  samarbeider tett med arkitekter, entreprenører og andre
                  fagfolk for å sikre en smidig prosess.
                </p>
                <p>
                  Våre autoriserte elektrikere utfører alt fra kabeltrekking
                  til montering av utstyr. Vi dimensjonerer anlegget for
                  fremtidige behov og sørger for at alt er dokumentert og
                  klart for godkjenning.
                </p>
                <p>
                  Et nybygg er en mulighet til å gjøre det riktig fra starten.
                  Vi bidrar med rådgivning rundt energieffektive valg, som
                  LED-belysning, smarthus-løsninger og klargjøring for
                  elbillading. Ved å tenke langsiktig kan du spare betydelig
                  på strømkostnadene i årene som kommer.
                </p>
                <p>
                  Våre team jobber tett med byggeplassledelsen for å sikre at
                  fremdriftsplanen overholdes. Vi vet at forsinkelser i ett
                  fag kan påvirke hele prosjektet, derfor prioriterer vi
                  punktlighet og god kommunikasjon med alle involverte
                  parter. Fra råbygg til ferdig overlevering følger vi
                  prosjektet tett.
                </p>
              </div>
            </div>

            <div className="bg-navy-dark rounded-2xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-white mb-6">
                Hva inngår i en nybygg-installasjon?
              </h3>
              <ul className="space-y-4">
                {[
                  "Planlegging og prosjektering av elektrisk anlegg",
                  "Kabeltrekking og rørføring",
                  "Installasjon av sikringsskap og kursopplegg",
                  "Montering av stikkontakter, brytere og belysning",
                  "Tilkobling av hvitevarer og fastmontert utstyr",
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
              Fra planlegging til ferdig anlegg
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
              Hvorfor velge oss for ditt nybygg?
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
            Skal du bygge nytt?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Ta kontakt tidlig i planleggingsfasen. Vi bidrar gjerne med
            prosjektering og kompetanse.
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