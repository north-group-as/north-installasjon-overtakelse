import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Calculator from "@/components/kalkulator/Calculator";

export const metadata: Metadata = {
  title: "Priskalkulator",
  description:
    "Beregn pris på elektrikerarbeid hos North Installasjon. Få et raskt estimat på service, installasjon eller elbillader i Oslo.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/kalkulator",
  },
};

export default function KalkulatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] max-[560px]:h-[30vh] max-[560px]:min-h-[200px] flex items-end overflow-hidden">
        <Image
          src="/images/kalkulator-hero.webp"
          alt="Fjelltopper over tåke"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-navy-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Priskalkulator
          </h1>
          <p className="text-white/60 max-w-lg mx-auto text-lg leading-relaxed">
            Svar på noen enkle spørsmål og få et prisestimat med en gang
            </p>
        </div>
      </section>

      <section className="bg-white pt-10 pb-4">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-navy-dark/70 text-[15px] leading-relaxed">
            Kalkulatoren gir deg et prisestimat basert på gjennomsnittlige priser
            for elektrikertjenester i Oslo. Prisene er veiledende og inkluderer
            mva. For et eksakt tilbud anbefaler vi en uforpliktende befaring.
          </p>
        </div>
      </section>

      <Calculator />

      {/* SEO text */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-dark tracking-tight mb-6">
            Hvordan fungerer priskalkulatoren?
          </h2>
          <div className="space-y-4 text-navy-dark/70 text-[15px] leading-relaxed">
            <p>
              Priskalkulatoren gir deg et raskt estimat på hva elektrikerarbeidet vil koste.
              Du svarer på noen enkle spørsmål om hva slags jobb du trenger hjelp med,
              og får umiddelbart et prisestimat basert på våre standardpriser.
            </p>
            <p>
              Husk at et estimat alltid er veiledende. Den endelige prisen avhenger av
              omfanget på arbeidet, tilstanden på det eksisterende anlegget, og eventuelle
              tilleggsarbeider som oppdages under befaring. Vi tilbyr alltid gratis og
              uforpliktende befaring for å gi deg en nøyaktig pris.
            </p>
            <p>
              Har du spørsmål om prisene i kalkulatoren, eller ønsker en mer detaljert vurdering?
              Ta kontakt med oss direkte, så hjelper vi deg.
            </p>
          </div>
        </div>
      </section>

      {/* Vanlige spørsmål om priser */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-dark tracking-tight mb-10">
            Vanlige spørsmål om priser
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-navy-dark mb-2">
                Hva er inkludert i prisen?
              </h3>
              <p className="text-navy-dark/70 text-[15px] leading-relaxed">
                Prisen inkluderer nødvendige materialer, arbeid, dokumentasjon
                og samsvarserklæring. Du får en full oversikt over hva som er
                dekket i tilbudet vi sender deg etter befaring.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy-dark mb-2">
                Kan prisen endre seg underveis?
              </h3>
              <p className="text-navy-dark/70 text-[15px] leading-relaxed">
                Vi gjør alltid en grundig befaring før arbeidet starter. Hvis vi
                oppdager uforutsette forhold underveis, tar vi kontakt med deg
                før vi gjør endringer som påvirker prisen.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy-dark mb-2">
                Tilbyr dere faste priser på oppdrag?
              </h3>
              <p className="text-navy-dark/70 text-[15px] leading-relaxed">
                Vi gir konkurransedyktige priser basert på befaring. Etter at vi
                har sett på oppdraget, gir vi deg et detaljert tilbud som gjelder
                for hele jobben, slik at du vet hva du betaler på forhånd.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy-dark mb-2">
                Hvilke betalingsmetoder aksepterer dere?
              </h3>
              <p className="text-navy-dark/70 text-[15px] leading-relaxed">
                Vi aksepterer faktura, Vipps og kortbetaling. Du velger den
                betalingsmetoden som passer deg best, og betalingen skjer etter
                at arbeidet er ferdigstilt og godkjent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
