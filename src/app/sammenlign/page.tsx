import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllComparisons } from "@/lib/comparisons";
import { BUSINESS } from "@/lib/business-data";
import ComparisonGrid from "./ComparisonGrid";

export const metadata: Metadata = {
  title: "Sammenlign elbilladere",
  description:
    "Uavhengige sammenligninger av elbilladere for norske hjem og borettslag. Easee, Zaptec, Garo, Wallbox og Tesla sammenlignet på pris, funksjoner og installasjon.",
  keywords: [
    "sammenlign elbilladere",
    "elbillader test",
    "beste elbillader 2026",
    "easee vs zaptec",
    "elbillader sammenligning norge",
  ],
  alternates: {
    canonical: "https://www.northinstallasjon.no/sammenlign",
  },
};

export default function SammenlignPage() {
  const comparisons = getAllComparisons();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Elbillader-sammenligninger",
    description:
      "Sammenligninger av elbilladere for norske hjem og borettslag",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: comparisons.length,
    itemListElement: comparisons.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `${BUSINESS.siteUrl}/sammenlign/${c.slug}`,
    })),
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Sammenlign elbilladere
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Uavhengige sammenligninger av de mest populære elbilladerne i Norge.
            Vi tester pris, funksjoner, app-styring og installasjonskostnader
            slik at du kan velge riktig lader.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ComparisonGrid comparisons={comparisons} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
