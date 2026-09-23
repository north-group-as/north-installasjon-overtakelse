import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ApplicationForm from "./ApplicationForm";
import {
  jobIntro,
  aboutRole,
  requirements,
  offers,
  roleHighlights,
} from "@/lib/service-elektriker-data";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviceelektriker søkes",
  description:
    "North Installasjon søker serviceelektriker til service og feilsøking hos private og bedriftskunder i Oslo-området. Søk stillingen i dag.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/serviceelektriker",
  },
};

export default function ServiceElektrikerPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="/images/north-team-ute-kontorbygg.webp"
          alt="To serviceelektrikere fra North Installasjon utenfor et næringsbygg"
          width={1200}
          height={1600}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 20%" }}
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-navy-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <p className="text-teal-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Ledig stilling
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Vi søker serviceelektriker
          </h1>
          <p className="text-white/70 max-w-xl text-lg leading-relaxed">
            {jobIntro}
          </p>
        </div>
      </section>

      {/* Om stillingen */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Om stillingen
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
                En variert arbeidshverdag
              </h2>
              <div className="space-y-4 text-navy-dark/60 text-[15px] leading-relaxed">
                {aboutRole.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="bg-navy-dark rounded-2xl p-8 space-y-5">
              {roleHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-teal-accent" />
                    </div>
                    <p className="text-white/85 text-[15px] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}

              <div className="pt-5 border-t border-white/10">
                <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Hva vi ser etter
                </p>
                <ul className="space-y-3">
                  {requirements.map((req) => (
                    <li key={req.text} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green shrink-0 mt-0.5" />
                      <span className="text-white/85 text-[15px] leading-relaxed">
                        {req.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hva vi tilbyr */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Hva vi tilbyr
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
              Derfor bør du jobbe hos oss
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {offers.map((offer) => {
              const Icon = offer.icon;
              return (
                <div key={offer.title} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-navy-dark mx-auto flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-teal-accent" />
                  </div>
                  <h3 className="text-base font-bold text-navy-dark mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-navy-dark/70 leading-relaxed max-w-xs mx-auto">
                    {offer.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Søknadsskjema */}
      <section id="soknad" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Søknad
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
              Klar for å bli vår neste serviceelektriker?
            </h2>
          </div>
          <ApplicationForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
