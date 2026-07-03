import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business-data";
import {
  Phone,
  Clock,
  BadgeCheck,
  AlertTriangle,
  Shield,
  Zap,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Akutt elektriker Oslo 24/7",
  description:
    "Trenger du akutt elektriker i Oslo? North Installasjon har elektrikervakt og rykker ut raskt. Ring oss ved strømbrudd, kortslutning eller akutte feil.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/tjenester/dognvakt",
  },
};

const steps = [
  {
    number: "01",
    title: "Ring oss",
    description:
      "Ta kontakt på telefon for raskest mulig respons. Vi prioriterer akutte henvendelser.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Vi lytter",
    description:
      "Beskriv problemet så godt du kan. Vi veileder deg i mellomtiden.",
    icon: Clock,
  },
  {
    number: "03",
    title: "Vi rykker ut",
    description:
      "For akutte oppdrag sender vi en elektriker så snart som mulig.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Problemet løses",
    description:
      "Elektrikeren løser problemet og gir deg dokumentasjon på arbeidet.",
    icon: BadgeCheck,
  },
];

const features = [
  {
    icon: Clock,
    title: "Prioritert respons",
    description:
      "Akutte henvendelser prioriteres og vi rykker ut så snart som mulig.",
  },
  {
    icon: AlertTriangle,
    title: "Akutt hjelp",
    description:
      "Rask respons på akutte oppdrag som krever umiddelbar handling.",
  },
  {
    icon: Shield,
    title: "Trygg håndtering",
    description:
      "Vi håndterer alt fra strømbrudd til kritiske feil på en trygg måte.",
  },
  {
    icon: Calendar,
    title: "Fleksibel planlegging",
    description:
      "For ikke-akutte oppdrag avtaler vi tid som passer deg.",
  },
];

export default function DognvaktPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Døgnvakt Elektriker Oslo",
            description:
              "Akutt elektriker i Oslo. North Installasjon prioriterer hasteoppdrag og rykker ut så snart som mulig.",
            provider: {
              "@type": "ElectricalContractor",
              name: BUSINESS.name,
              url: BUSINESS.siteUrl,
              telephone: BUSINESS.phone,
            },
            areaServed: { "@type": "City", name: BUSINESS.serviceArea },
            serviceType: "Døgnvakt Elektriker",
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
                name: "Døgnvakt",
                item: `${BUSINESS.siteUrl}/tjenester/dognvakt`,
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
                Døgnvakt
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                Akutt elektriker Oslo
              </h1>
              <p className="text-white/60 max-w-lg text-lg leading-relaxed">
                Trenger du elektriker raskt? Vi prioriterer akutte oppdrag og
                rykker ut så snart som mulig.
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/dognvakt-north-bil-brandet.webp"
                  alt="North Installasjon elektrikerbil på vei til døgnvakt i Oslo"
                  width={800}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center center" }}
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
                Akutt elektriker — vi rykker ut raskt
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>
                  Elektriske problemer kan oppstå når som helst og kan ikke
                  alltid vente til neste virkedag. North Installasjon har
                  <strong className="text-navy-dark"> elektrikervakt</strong> og
                  prioriterer akutte oppdrag for både private og bedrifter i hele
                  Oslo-området.
                </p>
                <p>
                  Vi rykker ut ved strømbrudd, kortslutning, gnistdannelse og
                  andre kritiske situasjoner. Ring oss, beskriv problemet, og vi
                  sender en autorisert elektriker til deg så snart vi kan.
                  Startpris for akuttoppdrag begynner fra <strong className="text-navy-dark">3 500 kr inkl. mva.</strong>
                </p>
                <p>
                  For å trygge deg mens du venter: dersom det luker svidd,
                  gnistrer eller sikringene stadig ryker, skru av strømmen på
                  anlegget og ring oss umiddelbart. Ikke forsøk å reparere
                  elektrisk utstyr selv.
                </p>
                <p>
                  For ikke-akutte feil og planlagte oppdrag tilbyr vi raskt
                  tidsvindu — vi forsøker å komme til deg innen to til tre
                  virkedager.
                </p>
              </div>
            </div>

            <div className="bg-navy-dark rounded-2xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-white mb-6">
                Når kan du trenge døgnvakt?
              </h3>
              <ul className="space-y-4">
                {[
                  "Strømbrudd eller totalt strømtap",
                  "Kortslutning eller gnistdannelse",
                  "Oversvømmelse med fare for elektrisk støt",
                  "kritisk utstyr som har sluttet å fungere",
                  "Akutt belysning som er nødvendig av sikkerhetshensyn",
                  "Problemer med røykvarslere eller alarmanlegg",
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
              Fra samtal til løsning
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
              Hvorfor velge vår døgnvakt?
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
            Trenger du hjelp nå?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Ring oss direkte for akutt hjelp. Vi prioriterer henvendelsen
            din og tar kontakt så snart som mulig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneHref}
              className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
