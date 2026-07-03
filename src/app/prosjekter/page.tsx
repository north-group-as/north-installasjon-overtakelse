import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/lib/projects-data";
import { ArrowRight } from "lucide-react";
import ProjectGrid from "./ProjectGrid";

export const metadata: Metadata = {
  title: "Våre prosjekter",
  description:
    "Se våre referanseprosjekter innen elektroinstallasjon for bolig, næring og offentlig sektor i Oslo-området. Fra private boliger til store næringsbygg.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/prosjekter",
  },
};

export default function ProsjekterPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-teal-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Referanser
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Våre prosjekter
          </h1>
          <p className="text-white/60 max-w-lg text-lg leading-relaxed">
            Fra private boliger til store næringsbygg. Se et utvalg av
            prosjektene vi har bidratt til i Oslo-området.
          </p>
        </div>
      </section>

      {/* Intro + Stats */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="text-navy-dark/70 text-[15px] leading-relaxed mb-4">
              Gjennom årene har North Installasjon deltatt i en rekke prosjekter innen bolig, næring og offentlig sektor.
              Fra private leilighetsoppgraderinger til store nybyggprosjekter i samarbeid med store entreprenører.
              Her viser vi et utvalg av prosjektene som viser bredden i vår kompetanse.
              Hvert prosjekt utføres med fokus på kvalitet, forskriftsmessig utførelse og dokumentasjon.
              Vi har erfaring med alt fra elbillader-installasjoner og smarthus-løsninger til komplette elektriske
              anlegg for næringsbygg, skoler og helseinstitusjoner.
            </p>
            <p className="text-navy-dark/70 text-[15px] leading-relaxed">
              Vi jobber tett med entreprenører, rådgivere og byggherrer for å sikre at alle elektriske installasjoner
              holder høyeste kvalitet. Dokumentasjon, samsvarserklæringer og FDV-materiale er en naturlig del av
              hver leveranse, slik at du som kunde har full kontroll både under og etter prosjektet.
              Våre prosjektledere følger opp fra planlegging til ferdigstillelse, og sørger for at alt arbeid
              følger gjeldende forskrifter og standarder.
              Uansett omfanget av prosjektet, kan du stole på at vi leverer til avtalt tid og pris.
              Utforsk prosjektene under for å se eksempler på arbeid vi har bidratt til.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-navy-dark/10 border-t border-b border-navy-dark/10 py-8">
            <div className="flex-1 sm:pr-8 pt-6 sm:pt-0">
              <p className="text-3xl font-extrabold text-navy-dark mb-1">200+</p>
              <p className="text-sm text-navy-dark/60">gjennomførte prosjekter</p>
            </div>
            <div className="flex-1 sm:px-8 pt-6 sm:pt-0">
              <p className="text-3xl font-extrabold text-navy-dark mb-1">Fra 50 000 til 50 millioner</p>
              <p className="text-sm text-navy-dark/60">i prosjektverdi</p>
            </div>
            <div className="flex-1 sm:pl-8 pt-6 sm:pt-0">
              <p className="text-3xl font-extrabold text-navy-dark mb-1">15+</p>
              <p className="text-sm text-navy-dark/60">års erfaring</p>
            </div>
          </div>

          <div className="max-w-2xl mt-8">
            <p className="text-navy-dark/70 text-[15px] leading-relaxed">
              Vi tar gjerne en uforpliktende samtale om ditt prosjekt, enten det er snakk om en liten oppgradering
              eller et større nybygg. Vår erfaring spenner fra private boliger til komplekse næringsbygg,
              og vi tilpasser alltid løsningen til dine behov og budsjettrammer.
            </p>
          </div>
        </div>
      </section>
      <ProjectGrid projects={projects} />

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Har du et prosjekt?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Kontakt oss for en uforpliktende vurdering, eller beregn pris på
            nett.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kalkulator"
              className="bg-navy-dark text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-navy-dark/90 text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Beregn pris
              <ArrowRight className="w-4 h-4" />
            </a>
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
