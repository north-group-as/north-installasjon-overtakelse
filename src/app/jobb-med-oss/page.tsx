import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { jobBenefits, jobRoles } from "@/lib/jobb-med-oss-data";
import { companyValues } from "@/lib/team-data";
import ApplicationForm from "./ApplicationForm";
import {
  Send,
  MessageCircle,
  UserCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jobb med oss",
  description:
    "Bli en del av North Installasjon. Vi søker elektrikere, serviceteknikere, prosjektledere og lærlinger til faste stillinger.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/jobb-med-oss",
  },
};

const applicationSteps = [
  {
    number: "01",
    title: "Send søknad",
    description:
      "Fyll ut skjemaet under og last opp CV-en din.",
    icon: Send,
  },
  {
    number: "02",
    title: "Bli-kjent-prat",
    description: "Vi inviterer deg til en uformell samtale for å bli kjent.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Referanser og tilbud",
    description:
      "Vi sjekker referanser og sender deg et konkret jobbtilbud.",
    icon: UserCheck,
  },
  {
    number: "04",
    title: "Velkommen om bord",
    description:
      "Du starter med en grundig onboarding og fast plass i teamet.",
    icon: Rocket,
  },
];

export default function JobbMedOssPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/north-team-tegninger-byggeplass.webp"
          alt="North Installasjon-teamet i faglig diskusjon på byggeplass"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
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
            Jobb med oss
          </h1>
          <p className="text-white/60 max-w-lg text-lg leading-relaxed">
            Vi bygger et sterkt team av fagfolk som vil gjøre en forskjell. Hos
            North Installasjon får du en fast arbeidsplass med gode kolleger,
            spennende prosjekter og rom for utvikling.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Hvorfor North
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
              Det vi tilbyr deg
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobBenefits.map((benefit) => {
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

      {/* Roles we're looking for */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Stillinger
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
              Hvem vi ser etter
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {jobRoles.map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-navy-dark mb-2">
                  {role.title}
                </h3>
                <p className="text-sm text-navy-dark/70 leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture / Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Kulturen vår
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
                Slik er det å jobbe hos oss
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                <p>
                  North Installasjon er en del av North Group og leverer
                  elektrotjenester til alle formål. Vi er et team som verdsetter
                  godt håndverk, åpen kommunikasjon og gjensidig respekt.
                </p>
                <p>
                  Hos oss er det kort vei fra idé til handling. Vi tror på at de
                  beste løsningene kommer når folk trives, og derfor jobber vi
                  aktivt for at alle skal ha det bra på jobb, hver eneste dag.
                </p>
              </div>

              <div className="mt-10 space-y-5">
                {companyValues.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div key={value.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-navy-dark/5 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-teal-accent" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-navy-dark">
                          {value.title}
                        </h3>
                        <p className="text-sm text-navy-dark/70 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/team-arbeidsmiljo.webp"
                alt="Arbeidsmiljø hos North Installasjon"
                width={640}
                height={800}
                className="absolute inset-0 w-full h-full object-cover"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application process */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Søknadsprosessen
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
              Fire enkle steg
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {applicationSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white mx-auto flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6 text-teal-accent" />
                  </div>
                  <span className="text-xs font-bold text-teal-accent uppercase tracking-wider">
                    Steg {step.number}
                  </span>
                  <h3 className="text-base font-bold text-navy-dark mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-navy-dark/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="soknad" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Søknad
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
              Klar for å ta neste steg?
            </h2>
          </div>
          <ApplicationForm />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Har du spørsmål?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Ta gjerne kontakt for en uforpliktende prat om muligheter hos North
            Installasjon.
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
