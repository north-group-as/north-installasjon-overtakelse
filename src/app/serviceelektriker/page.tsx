import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import ApplicationForm from "./ApplicationForm";
import TeamSlider from "./TeamSlider";
import InterestModalProvider from "./InterestModalProvider";
import OpenInterestButton from "./OpenInterestButton";
import StickyApplyCta from "./StickyApplyCta";
import ElectricPattern from "./ElectricPattern";
import {
  heroLabel,
  heroHeadline,
  heroSubtext,
  mondayStatementLines,
  futureFeatures,
  cultureStatements,
  offers,
  requirements,
  niceToHave,
  traits,
  teamPhotos,
} from "@/lib/service-elektriker-data";
import { CheckCircle2, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business-data";

export const metadata: Metadata = {
  title: "Serviceelektriker søkes",
  description:
    "North Installasjon søker serviceelektriker til service og feilsøking hos private og bedriftskunder i Oslo-området. Søk stillingen i dag.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/serviceelektriker",
  },
};

export default function ServiceElektrikerPage() {
  const featuredOffers = offers.filter((o) => o.featured);
  const otherOffers = offers.filter((o) => !o.featured);

  return (
    <InterestModalProvider>
      <main className="bg-white pb-20 md:pb-0">
        <Navbar />

        {/* Hero */}
        <section className="bg-navy-dark md:pt-[72px] border-b-4 border-green">
          <div className="pb-2 md:pb-3">
            <Image
              src="/images/north-banner-service-bygg.webp"
              alt="North Installasjon: Hva gir deg energi? Vi søker fremtidsrettede servicemontører i Oslo"
              width={2000}
              height={586}
              className="w-full h-auto"
              priority
              sizes="100vw"
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-9 pb-12 md:pt-12 md:pb-16 border-t border-white/40">
            <p className="text-teal-accent text-xs md:text-sm font-semibold uppercase tracking-[0.22em] mb-4">
              {heroLabel}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-5 max-w-3xl">
              {heroHeadline[0]}
              <br />
              <span className="text-teal-accent">{heroHeadline[1]}</span>
            </h1>
            <p className="text-white/80 max-w-xl text-base md:text-lg leading-relaxed mb-8">
              {heroSubtext}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <OpenInterestButton className="inline-flex items-center justify-center bg-green text-navy-dark font-bold px-8 py-4 rounded-xl hover:bg-green-dark transition-colors text-[15px] uppercase tracking-wide cursor-pointer">
                Jeg er nysgjerrig
              </OpenInterestButton>
              <a
                href="#hvordan-vi-jobber"
                className="inline-flex items-center justify-center border-2 border-white/25 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-[15px] uppercase tracking-wide"
              >
                Se hvordan vi jobber
              </a>
            </div>
            <p className="mt-4 text-white/50 text-xs uppercase tracking-wider">
              Uforpliktende &middot; Tar under 1 minutt
            </p>
          </div>
        </section>

        {/* Grått overgangselement mellom banner og neste seksjon */}
        <div className="relative h-10 md:h-14 bg-gray-50 overflow-hidden">
          <ElectricPattern />
        </div>

        {/* Gleder du deg til mandag? */}
        <section className="bg-navy-dark py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-5 md:space-y-7">
            {mondayStatementLines.map((line, i) => {
              const isLast = i === mondayStatementLines.length - 1;
              return (
                <FadeIn key={line} delay={i * 0.15}>
                  {isLast && <div className="h-0.5 w-16 bg-green mx-auto mb-10" />}
                  <p
                    className={
                      isLast
                        ? "font-extrabold tracking-tight text-teal-accent text-3xl md:text-5xl"
                        : "font-extrabold tracking-tight text-white text-2xl md:text-4xl"
                    }
                  >
                    {line}
                  </p>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* Fremtidens elektrikerhverdag */}
        <section id="hvordan-vi-jobber" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeIn>
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Fremtidens elektrikerhverdag
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-4 max-w-2xl">
                Faget er det samme.
                <br />
                <span className="text-navy-dark/50">Måten vi jobber på utvikler seg.</span>
              </h2>
              <p className="text-navy-dark/60 text-[15px] leading-relaxed max-w-xl mb-14">
                Hos North ønsker vi å bruke teknologi der den faktisk gjør arbeidshverdagen bedre.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6">
              {futureFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <FadeIn key={feature.title} delay={i * 0.08}>
                    <div className="h-full bg-navy-dark rounded-2xl p-8 flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-teal-accent" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                        <p className="text-white/70 text-[15px] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="relative bg-gray-50 py-16 overflow-hidden">
          <ElectricPattern />

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <div className="h-0.5 w-16 bg-green mx-auto mb-7 rounded-full" />
            <h2 className="text-xl md:text-2xl font-extrabold text-navy-dark tracking-tight mb-7">
              Høres dette ut som en arbeidshverdag for deg?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <OpenInterestButton className="inline-flex items-center justify-center bg-green text-navy-dark font-bold px-8 py-4 rounded-xl hover:bg-green-dark transition-colors text-[15px] uppercase tracking-wide cursor-pointer">
                Jeg er nysgjerrig
              </OpenInterestButton>
              <a
                href="#menneskene"
                className="text-sm font-semibold text-navy-dark/60 hover:text-navy-dark transition-colors"
              >
                Se mer først
              </a>
            </div>
            <div className="h-0.5 w-16 bg-green mx-auto mt-9 rounded-full" />
          </div>
        </section>

        {/* Menneskene */}
        <section id="menneskene" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeIn>
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Menneskene
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-14 max-w-2xl">
                Teknologi hjelper deg.
                <br />
                <span className="text-navy-dark/50">Folk spiller deg god.</span>
              </h2>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <FadeIn className="aspect-[4/3] rounded-2xl overflow-hidden">
                <TeamSlider photos={teamPhotos} />
              </FadeIn>
              <div className="space-y-6">
                <FadeIn delay={0.05}>
                  <div className="bg-navy-dark rounded-2xl p-8">
                    <p className="text-white text-lg md:text-xl font-bold leading-snug">
                      Står du fast?
                    </p>
                    <p className="text-white/70 text-[15px] leading-relaxed mt-2">
                      Da skal hjelpen være én telefon eller ett klikk unna.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.12}>
                  <div className="bg-teal-accent/10 border border-teal-accent/30 rounded-2xl p-8">
                    <p className="text-navy-dark text-lg md:text-xl font-bold leading-snug">
                      Frihet betyr ikke at du står alene.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Slik kan hverdagen din se ut */}
        <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
          <ElectricPattern />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <FadeIn>
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Hverdagen din
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-14">
                Slik kan hverdagen din se ut
              </h2>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {featuredOffers.map((offer, i) => {
                const Icon = offer.icon;
                return (
                  <FadeIn key={offer.title} delay={i * 0.06}>
                    <div className="h-full bg-navy-dark rounded-2xl p-7">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                        <Icon className="w-5 h-5 text-teal-accent" />
                      </div>
                      <h3 className="text-white font-bold text-base mb-2">{offer.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{offer.description}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherOffers.map((offer, i) => {
                const Icon = offer.icon;
                return (
                  <FadeIn key={offer.title} delay={i * 0.05}>
                    <div className="h-full bg-white rounded-xl p-5 flex items-center gap-4 border border-navy-dark/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                      <div className="w-11 h-11 rounded-xl bg-navy-dark flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-teal-accent" strokeWidth={2.25} />
                      </div>
                      <div>
                        <p className="text-navy-dark font-bold text-sm">{offer.title}</p>
                        <p className="text-navy-dark/55 text-xs leading-relaxed">
                          {offer.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Passer vi sammen? */}
        <section id="krav" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <FadeIn>
                <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
                  Passer vi sammen?
                </p>
                <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-6">
                  Du kan faget.
                  <br />
                  <span className="text-navy-dark/50">Sammen tar vi det videre.</span>
                </h2>
                <div className="space-y-2">
                  {traits.map((trait) => (
                    <p key={trait} className="text-navy-dark/70 text-[15px] leading-relaxed">
                      {trait}
                    </p>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.08} className="bg-navy-dark rounded-2xl p-8 space-y-6">
                <div>
                  <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                    Dette trenger du
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
                <div className="pt-5 border-t border-white/10">
                  <p className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                    Bra om du har
                  </p>
                  <p className="text-white/85 text-[15px] leading-relaxed">{niceToHave}</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Troverdighet */}
        <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
          <ElectricPattern />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <FadeIn>
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Dette er North
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-14 max-w-2xl">
                Ordentlig elektro.
                <br />
                <span className="text-navy-dark/50">
                  Bare en litt mer moderne måte å jobbe på.
                </span>
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {cultureStatements.map((statement, i) => (
                <FadeIn key={statement} delay={i * 0.08}>
                  <div className="h-full bg-white rounded-2xl p-7 border-l-4 border-teal-accent">
                    <p className="text-navy-dark/80 text-[15px] leading-relaxed">{statement}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Avsluttende konvertering */}
        <section className="bg-navy-dark py-24 lg:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
                Klar for en mandag
                <br />
                <span className="text-teal-accent">du gleder deg til?</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-10">
                Du trenger ikke ha bestemt deg for å bytte jobb. Start med en uforpliktende prat.
              </p>
              <OpenInterestButton className="inline-flex items-center justify-center bg-green text-navy-dark font-bold px-9 py-4 rounded-xl hover:bg-green-dark transition-colors text-[15px] uppercase tracking-wide cursor-pointer">
                Ja, jeg er nysgjerrig
              </OpenInterestButton>
              <p className="mt-4 text-white/50 text-xs uppercase tracking-wider">
                Navn + telefon er nok. Ingen CV nødvendig.
              </p>
              <a
                href="#soknad"
                className="mt-6 inline-block text-sm font-semibold text-teal-accent hover:text-white transition-colors"
              >
                Send full søknad
              </a>
            </FadeIn>
          </div>
        </section>

        {/* Full søknad */}
        <section id="soknad" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-teal-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Allerede klar?
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-dark tracking-tight">
                Send oss CV-en din, så tar vi kontakt.
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 lg:gap-10 items-stretch">
              <div className="aspect-[4/3] lg:aspect-auto">
                <TeamSlider photos={teamPhotos} />
              </div>
              <div>
                <ApplicationForm />
              </div>
            </div>
          </div>
        </section>

        {/* Siste statement */}
        <section className="bg-navy-dark py-20 lg:py-28 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">
              Du kan faget.
            </p>
            <p className="text-teal-accent text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
              Sammen tar vi det videre.
            </p>
            <p className="text-white/40 text-sm uppercase tracking-[0.3em] font-semibold mb-2">
              North Installasjon
            </p>
            <p className="text-white/70 text-lg font-semibold">Hva gir deg energi?</p>
            <a
              href={BUSINESS.phoneHref}
              className="mt-6 inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </section>

        <Footer />
        <StickyApplyCta />
      </main>
    </InterestModalProvider>
  );
}
