import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business-data";
import { ArrowRight, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Vanlige spørsmål om elektriker",
  description:
    "Svar på de vanligste spørsmålene om elektrikerarbeid, priser, elbillader, sikringsskap og hva du kan gjøre selv. North Installasjon svarer.",
  keywords: [
    "vanlige spørsmål elektriker",
    "hva koster elektriker",
    "elektriker pris oslo",
    "elektriker faq",
    "elbillader spørsmål",
    "sikringsskap spørsmål",
  ],
  alternates: {
    canonical: "https://www.northinstallasjon.no/faq",
  },
};

const categories = [
  {
    heading: "Priser og betaling",
    faqs: [
      {
        question: "Hva koster en elektriker per time i Oslo?",
        answer:
          "Timepris for elektriker i Oslo-området ligger typisk mellom 900 og 1 400 kr per time ekskl. mva, avhengig av firma og type arbeid. I tillegg kommer som regel startavgift/fremmøteavgift. North Installasjon gir tydelig pris på mange oppdrag, så du slipper ubehagelige overraskelser.",
        links: [{ label: "Beregn din pris", href: "/kalkulator" }],
      },
      {
        question: "Hva koster installasjon av elbillader?",
        answer:
          "Prisen varierer etter boligtype og kabelavstand. For en enebolig eller leilighet med kort kabelavstand starter prisen fra ca. 3 000-5 000 kr ekskl. mva for selve installasjonen. For borettslag og sameie gjelder egne priser. Kontakt oss for et konkret tilbud.",
        links: [{ label: "Mer om elbillader", href: "/tjenester/elbillader" }],
      },
      {
        question: "Hva koster det å bytte sikringsskap?",
        answer:
          "Bytte av sikringsskap til moderne el-tavle koster normalt mellom 8 000 og 25 000 kr ekskl. mva, avhengig av størrelse, antall kurser og kompleksitet. Prisen inkluderer materiell, arbeid og samsvarserklæring.",
        links: [{ label: "Les mer om priser", href: "/tjenester/pris" }],
      },
    ],
  },
  {
    heading: "Elbillader",
    faqs: [
      {
        question: "Trenger jeg tillatelse fra borettslaget for å installere elbillader?",
        answer:
          "Ja, du trenger som regel godkjenning fra styret. Det er likevel viktig å vite at borettslaget etter loven ikke kan avvise rimelige ladeinstallasjoner uten saklig grunn. North Installasjon har god erfaring med å hjelpe beboere gjennom prosessen.",
        links: [{ label: "Elbillader i borettslag", href: "/tjenester/borettslag-og-sameie" }],
      },
      {
        question: "Hvilken elbillader anbefaler dere?",
        answer:
          "Det finnes mange gode elbilladere på markedet. Easee, Zaptec og Garo er populære valg for hjemmelading. Valget avhenger av bilmerke, boligtype og om du vil ha smart lading. Se vår sammenligning av de mest populære modellene.",
        links: [{ label: "Sammenlign elbilladere", href: "/sammenlign" }],
      },
      {
        question: "Kan jeg installere elbillader selv?",
        answer:
          "Nei. Installasjon av elbillader er elektrisk arbeid som krever autorisert elektroinstallatør. Uautorisert arbeid er ulovlig og kan ugyldiggjøre forsikringen din. North Installasjon gir deg et raskt og trygt tilbud.",
        links: [],
      },
    ],
  },
  {
    heading: "Elektrisk anlegg og sikkerhet",
    faqs: [
      {
        question: "Hva kan jeg gjøre selv elektrisk i boligen?",
        answer:
          "Du kan bytte lysbrytere, stikkontakter og lamper/armaturer under noen forutsetninger — forutsatt at det eksisterende anlegget er intakt og du kobler riktig til eksisterende kabler. Alt som innebærer nye kabler, kursopplegg eller arbeid i sikringsskap, krever autorisert elektriker.",
        links: [],
      },
      {
        question: "Hvor ofte bør man ha elkontroll?",
        answer:
          "For de fleste boliger anbefales elkontroll hvert 10. år. Eldre anlegg (20+ år), hytter, utleieboliger og næringsbygg bør kontrolleres hyppigere. En elkontroll avdekker feil og sikrer at anlegget er trygt.",
        links: [{ label: "Service og feilsøking", href: "/tjenester/service" }],
      },
      {
        question: "Når må man bytte sikringsskapet?",
        answer:
          "Eldre anlegg med skrusikringer (porselensikringer) bør skiftes. Andre tegn på at el-tavlen bør byttes er hyppige utløsninger, synlige brannskader, manglende jordfeilbryter, eller at anlegget er fra før 1990. Ta kontakt for en vurdering.",
        links: [{ label: "Book service", href: "/kontakt" }],
      },
    ],
  },
  {
    heading: "Praktisk informasjon",
    faqs: [
      {
        question: "Hva er en samsvarserklæring?",
        answer:
          "En samsvarserklæring er dokumentasjon fra autorisert elektrikerfirma som bekrefter at det elektriske anlegget er utført i tråd med gjeldende forskrifter og standarder. Den registreres i Boligmappa og er viktig ved salg av bolig. North Installasjon leverer alltid samsvarserklæring.",
        links: [],
      },
      {
        question: "Hvilke kommuner dekker dere?",
        answer:
          "Vi dekker hele Oslo-området, inkludert Oslo, Bærum, Asker, Lillestrøm, Lørenskog, Ski, Ås og Moss. Ta kontakt for å høre om vi kan hjelpe i ditt område.",
        links: [{ label: "Se alle steder vi dekker", href: "/elektriker/oslo" }],
      },
      {
        question: "Hvor raskt kan dere komme?",
        answer:
          "For vanlig servicearbeid tilstreber vi å komme innen 1-5 virkedager. For hasteoppgaver tar vi kontakt for å finne raskeste mulighet. Ring oss direkte for akutte henvendelser.",
        links: [{ label: "Kontakt oss", href: "/kontakt" }],
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  ),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: BUSINESS.siteUrl },
    { "@type": "ListItem", position: 2, name: "Vanlige spørsmål", item: `${BUSINESS.siteUrl}/faq` },
  ],
};

export default function FAQPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Vanlige spørsmål
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Svar på det du lurer på om elektrikerarbeid, priser, elbillader og mer.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-16">
          {categories.map((category) => (
            <div key={category.heading}>
              <h2 className="text-2xl font-extrabold text-navy-dark tracking-tight mb-8">
                {category.heading}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-navy-dark/10 rounded-2xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-semibold text-navy-dark text-base list-none">
                      {faq.question}
                      <ChevronDown className="w-5 h-5 text-navy-dark/40 group-open:rotate-180 transition-transform shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-navy-dark/70 leading-relaxed text-base border-t border-navy-dark/5">
                      <p>{faq.answer}</p>
                      {faq.links.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-3">
                          {faq.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="inline-flex items-center gap-1.5 text-teal-accent font-semibold text-sm hover:underline"
                            >
                              {link.label}
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Finner du ikke svaret?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Ta kontakt med oss direkte. Vi svarer raskt og gir konkrete svar på ditt spørsmål.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5"
            >
              Kontakt oss
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="bg-navy-dark/5 text-navy-dark font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-navy-dark/10 text-base inline-flex items-center justify-center"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
