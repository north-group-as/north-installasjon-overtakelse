import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS, STATS } from "@/lib/business-data";
import { getAllReviews } from "@/lib/reviews-data";
import { Star, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Kundeanmeldelser",
  description:
    "Les hva kundene sier om North Installasjon. Vi er stolt av vår høye kundetilfredshet og jobber alltid for å levere kvalitet.",
  keywords: [
    "north installasjon anmeldelser",
    "elektriker anmeldelser oslo",
    "elektriker tilbakemeldinger",
    "north installasjon vurdering",
  ],
  alternates: {
    canonical: "https://www.northinstallasjon.no/anmeldelser",
  },
};

const reviews = getAllReviews();

const aggregateRating = {
  ratingValue: STATS.rating,
  reviewCount: reviews.length,
  bestRating: "5",
  worstRating: "1",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: BUSINESS.name,
  url: BUSINESS.siteUrl,
  telephone: BUSINESS.phone,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: aggregateRating.ratingValue,
    reviewCount: aggregateRating.reviewCount,
    bestRating: aggregateRating.bestRating,
    worstRating: aggregateRating.worstRating,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: r.name,
    },
    datePublished: r.date,
    reviewBody: r.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: "5",
      worstRating: "1",
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: BUSINESS.siteUrl },
    { "@type": "ListItem", position: 2, name: "Anmeldelser", item: `${BUSINESS.siteUrl}/anmeldelser` },
  ],
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function AnmeldelserPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Hva kundene sier
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-12">
            Vi er stolt av vår høye kundetilfredshet. Les hva kundene sier om samarbeidet med North Installasjon.
          </p>

          {/* Aggregate rating */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-4xl font-extrabold text-white">{aggregateRating.ratingValue}</span>
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-white/70 text-sm">{aggregateRating.reviewCount} anmeldelser på Google</p>
              </div>
            </div>
            <a
              href="https://g.page/r/northinstallasjon/review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-4 rounded-2xl hover:bg-white/20 transition-colors text-sm"
            >
              Skriv en anmeldelse
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Anmeldelser */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-navy-dark/[0.03] rounded-2xl overflow-hidden flex flex-col"
              >
                {review.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={review.image}
                      alt={`${review.serviceType} for ${review.name}`}
                      width={800}
                      height={400}
                      className="absolute inset-0 w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <StarRating rating={review.rating} />
                  <p className="mt-4 text-navy-dark/70 text-sm leading-relaxed flex-1">
                    {review.text}
                  </p>
                  {review.erfaring && (
                    <div className="mt-3 bg-teal-accent/5 rounded-xl p-3">
                      <p className="text-xs font-semibold text-teal-accent mb-1">Faglig innsikt</p>
                      <p className="text-xs text-navy-dark/60 leading-relaxed">{review.erfaring}</p>
                    </div>
                  )}
                  <div className="mt-5 pt-4 border-t border-navy-dark/10 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-navy-dark text-sm">{review.name}</p>
                      <p className="text-navy-dark/40 text-xs">{review.locationLabel}</p>
                    </div>
                    <span className="text-xs text-navy-dark/30 font-medium">{review.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Bli vår neste fornøyde kunde
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Kontakt oss for et uforpliktende prisestimat. Vi svarer raskt og gir konkrete priser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kalkulator"
              className="bg-navy-dark text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-navy-dark/90 text-base inline-flex items-center justify-center gap-2.5"
            >
              Beregn pris
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/kontakt"
              className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5"
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
