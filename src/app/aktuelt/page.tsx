import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllNewsItems } from "@/lib/news-data";
import type { NewsItem } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "Aktuelt og nyheter",
  description:
    "Aktuelle saker fra North Installasjon og relevante bransjeoppdateringer om elsikkerhet, elbillading, service og elektriske anlegg.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/aktuelt",
  },
  openGraph: {
    title: "Aktuelt og nyheter | North Installasjon",
    description:
      "Egne saker og relevante bransjeoppdateringer fra North Installasjon.",
    url: "https://www.northinstallasjon.no/aktuelt",
    type: "website",
    images: [
      {
        url: "/images/logo-north-installasjon.webp",
        width: 1200,
        height: 630,
        alt: "North Installasjon",
      },
    ],
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-navy-dark/10 bg-white transition-shadow hover:shadow-lg">
      <Link href={item.href} className="block">
        {item.image ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-navy-dark/5">
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={500}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center bg-navy-dark">
            <Newspaper className="h-12 w-12 text-gray-50/80" />
          </div>
        )}

        <div className="p-6">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider text-navy-dark/45">
            <span>{item.source}</span>
            <span className="inline-flex items-center gap-1.5 normal-case tracking-normal">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(item.date)}
            </span>
          </div>
          <h2 className="text-xl font-bold leading-tight text-navy-dark transition-colors group-hover:text-teal">
            {item.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy-dark/70">
            {item.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors group-hover:text-teal-dark">
            {item.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function AktueltPage() {
  const items = getAllNewsItems();
  const industryItems = items.filter((item) => item.kind === "bransje").length;

  return (
    <main className="bg-white">
      <Navbar />

      <section className="bg-navy-dark pt-32 pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Aktuelt og nyheter
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-50/75">
              Relevante bransjeoppdateringer for boliger, borettslag og
              bedrifter som vil ta bedre valg om elektriske anlegg.
            </p>
          </div>

          <div className="mt-10 max-w-xs">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-white">{industryItems}</p>
              <p className="mt-1 text-sm text-gray-50/65">Bransjeoppdateringer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {items.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-dark sm:text-4xl">
            Har du et prosjekt som bør vurderes?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-dark/70">
            Vi hjelper med service, oppgradering, elbillading og kontroll av
            elektriske anlegg i Oslo-området.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-green-dark"
          >
            Kontakt oss
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
