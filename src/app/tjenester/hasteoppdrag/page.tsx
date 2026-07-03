import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business-data";
import {
  Phone,
  AlertCircle,
  Clock,
  BadgeCheck,
  ArrowRight,
  Zap,
  ShieldCheck,
  CheckCircle,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hasteoppdrag Elektriker Oslo",
  description:
    "Hastende elektriker i Oslo. North Installasjon tar hasteoppdrag med rask respons. Kontakt oss for umiddelbar hjelp. Vi prioriterer akutte oppdrag.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/tjenester/hasteoppdrag",
  },
};

const steps = [
  {
    number: "01",
    title: "Kontakt",
    description:
      "Ring eller send melding om hastende behov. Vi prioriterer henvendelsen din.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Vi rykker ut",
    description:
      "En elektriker kommer så snart som mulig for å løse problemet.",
    icon: Clock,
  },
  {
    number: "03",
    title: "Feilsøking",
    description:
      "Vi identifiserer problemet raskt og forklarer hva som må gjøres.",
    icon: AlertCircle,
  },
  {
    number: "04",
    title: "Løsning",
    description:
      "Arbeidet utføres effektivt med fokus på å minimere skade og nedetid.",
    icon: CheckCircle,
  },
];

const features = [
  {
    icon: Zap,
    title: "Rask respons",
    description:
      "Vi setter din henvendelse først og rykker ut så snart som mulig.",
  },
  {
    icon: Clock,
    title: "Fleksibel tid",
    description:
      "Vi tilpasser oss din tidsplan, også kvelder og helger ved behov.",
  },
  {
    icon: ShieldCheck,
    title: "Trygt arbeid",
    description:
      "Selv i hastverk setter vi sikkerhet først. Ingen kompromisser.",
  },
  {
    icon: Wrench,
    title: "Profesjonelt",
    description:
      "Autoriserte elektrikere med erfaring fra alle typer oppdrag.",
  },
];

export default function HasteoppdragPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Hasteoppdrag Elektriker Oslo",
            description:
              "Hastende elektriker i Oslo med rask respons. North Installasjon tar hasteoppdrag og prioriteter din henvendelse.",
            provider: {
              "@type": "ElectricalContractor",
              name: BUSINESS.name,
              url: BUSINESS.siteUrl,
              telephone: BUSINESS.phone,
            },
            areaServed: { "@type": "City", name: BUSINESS.serviceArea },
            serviceType: "Hasteoppdrag Elektriker",
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
                name: "Hasteoppdrag",
                item: `${BUSINESS.siteUrl}/tjenester/hasteoppdrag`,
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
                Hasteoppdrag
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                Hastende Elektriker Oslo
              </h1>
              <p className="text-white/60 max-w-lg text-lg leading-relaxed">
                Trenger du en elektriker raskt? Vi tar hasteoppdrag med umiddelbar
                respons.
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/hasteoppdrag-parkert-north-bil-verktoy.webp"
                  alt="North Installasjon elektrikerbil parkert ved hasteoppdrag i Oslo"
                  width={800}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center center" }}
                  priority
                  sizes="(max-width: 1024px) 100vw, 640px"
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
                Vi setter fart på
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>
                  Noen ganger kan det ikke vente. Enten det er et kritisk
                  anlegg som har sluttet å fungere, en akutt situasjon som
                  krever umiddelbar handling, eller et prosjekt med stramme
                  frister, kan du stole på at vi stiller opp.
                </p>
                <p>
                  Hos North Installasjon tar vi hasteoppdrag på alvor. Vi
                  forstår at hvert minutt med nedetid kan koste deg tid og
                  penger. Derfor gjør vi vårt beste for å rykke ut så snart
                  som mulig.
                </p>
                <p>
                  Våre autoriserte elektrikere har erfaring med alle typer
                  oppdrag, fra enkle reparasjoner til komplekse installasjoner.
                  Selv når det haster, går vi aldri på kompromiss med
                  kvaliteten eller sikkerheten.
                </p>
              </div>
            </div>

            <div className="bg-navy-dark rounded-2xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-white mb-6">
                Eksempler på hasteoppdrag
              </h3>
              <ul className="space-y-4">
                {[
                  "Strømbrudd som påvirker driften",
                  "Kortslutning eller sikring som går gjentatte ganger",
                  "Feil på kritiske anlegg eller produksjonsutstyr",
                  "Skader etter vannlekkasje eller andre uhell",
                  "Tidskritiske prosjekter med stramme frister",
                  "Akutt belysning eller sikkerhetsutstyr som er nødvendig",
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
              Fra henvendelse til løsning
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
              Hvorfor velge oss for hasteoppdrag?
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
            Har du et hasteoppdrag?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Ta kontakt nå så tar vi affære umiddelbart. Vi tar kontakt så snart
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
