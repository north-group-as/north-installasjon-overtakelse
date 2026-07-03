import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { benefits, recmanUrl } from "@/lib/careers-data";
import {
  Send,
  MessageCircle,
  Search,
  Rocket,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Karriere og ledige stillinger",
  description:
    "Bli en del av North Installasjon. Se ledige stillinger og søk jobb som elektriker i Oslo-området. Vi tilbyr gode betingelser og spennende prosjekter.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/karriere",
  },
};

const applicationSteps = [
  {
    number: "01",
    title: "Send søknad",
    description: "Du sender inn en kort søknad eller CV.",
    icon: Send,
  },
  {
    number: "02",
    title: "Vi tar kontakt",
    description: "Vi ringer deg for en uformell prat.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Vi finner prosjekt",
    description: "Vi finner et prosjekt som passer deg og din kompetanse.",
    icon: Search,
  },
  {
    number: "04",
    title: "Oppstart",
    description: "Du får kontrakt, oppstart og oppfølging fra dag én.",
    icon: Rocket,
  },
];

const qualifications = [
  "Fagbrev innen elektro eller automasjon",
  "Erfaring fra installasjon, service eller prosjektarbeid",
  "Selvstendig og løsningsorientert",
  "Gode samarbeidsevner og stå-på-vilje",
  "Snakker norsk eller engelsk",
];

export default function KarrierePage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/hero-elektriker.webp"
          alt="Elektriker på jobb"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-navy-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <p className="text-teal-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Karriere
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Bli en del av North
          </h1>
          <p className="text-white/60 max-w-lg text-lg leading-relaxed">
            Vi matcher dyktige elektrikere med gode prosjekter over hele
            landet. Trivsel, trygghet og ryddige forhold betyr alt for oss.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-navy-dark/70 max-w-2xl text-[15px] leading-relaxed mx-auto text-center mb-16">
            North Installasjon vokser raskt, og vi trenger dyktige elektrikere med fagbrev
            og erfaring fra installasjon eller service. Hos oss får du konkurransedyktige
            betingelser, varierte prosjekter og en arbeidsplass der du blir sett og fulgt opp.
            Vi tror på ryddige forhold, god oppfølging og at de beste resultatene kommer
            når folk trives på jobb.
          </p>

          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Hva du får hos oss
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
              Hvorfor jobbe hos oss?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-navy-dark mx-auto flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-teal-accent" />
                  </div>
                  <h3 className="text-base font-bold text-navy-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-navy-dark/70 leading-relaxed max-w-xs mx-auto">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we look for */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Hvem vi ser etter
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
                Er dette deg?
              </h2>
              <ul className="space-y-4">
                {qualifications.map((q) => (
                  <li
                    key={q}
                    className="flex items-center gap-3 text-[15px] text-navy-dark/70"
                  >
                    <span className="w-2 h-2 rounded-full bg-green shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            {/* Application process */}
            <div>
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Slik fungerer det
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
                Søknadsprosessen
              </h2>
              <div className="space-y-6">
                {applicationSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.number} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-5 h-5 text-teal-accent" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-navy-dark">
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
          </div>
        </div>
      </section>

      {/* CTA to Recman */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Ledige stillinger
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
            Klar for å søke?
          </h2>
          <p className="text-navy-dark/70 text-[15px] leading-relaxed mb-10 max-w-lg mx-auto">
            Vi har løpende behov for elektrikere til spennende prosjekter.
            Se våre ledige stillinger og send inn søknaden din.
          </p>
          <a
            href={recmanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
          >
            Se ledige stillinger
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Finner du ikke din stilling?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Send oss en åpen søknad. Vi er alltid interessert i å høre fra
            dyktige fagfolk.
          </p>
          <a
            href="/kontakt"
            className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
          >
            Kontakt oss
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
