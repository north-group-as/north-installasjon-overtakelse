"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { ComparisonType } from "@/lib/comparisons";

const typeLabels: Record<ComparisonType, string> = {
  "head-to-head": "Mot hverandre",
  roundup: "Beste i test",
  matrix: "Full sammenligning",
};

const allTypes: Array<"all" | ComparisonType> = [
  "all",
  "head-to-head",
  "roundup",
  "matrix",
];

interface Comparison {
  slug: string;
  title: string;
  description: string;
  date: string;
  type: ComparisonType;
  verdict?: string;
  products: { name: string }[];
  readingTime: number;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ComparisonCard({ comparison }: { comparison: Comparison }) {
  return (
    <Link
      href={`/sammenlign/${comparison.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white border border-navy-dark/5 hover:shadow-lg transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-accent">
            {typeLabels[comparison.type]}
          </span>
          <span className="flex items-center gap-1 text-xs text-navy-dark/40">
            <Calendar className="w-3 h-3" />
            {formatDate(comparison.date)}
          </span>
          <span className="flex items-center gap-1 text-xs text-navy-dark/40">
            <Clock className="w-3 h-3" />
            {comparison.readingTime} min
          </span>
        </div>
        <h2 className="text-xl font-bold text-navy-dark mb-2 group-hover:text-teal-accent transition-colors">
          {comparison.title}
        </h2>
        {comparison.products.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {comparison.products.map((p) => (
              <span
                key={p.name}
                className="text-xs bg-navy-dark/5 text-navy-dark/60 px-2.5 py-1 rounded-full"
              >
                {p.name}
              </span>
            ))}
          </div>
        )}
        <p className="text-sm text-navy-dark/70 leading-relaxed line-clamp-2 mb-4">
          {comparison.verdict || comparison.description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-accent group-hover:gap-2 transition-all">
          Les sammenligningen
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

export default function ComparisonGrid({
  comparisons,
}: {
  comparisons: Comparison[];
}) {
  const [active, setActive] = useState<"all" | ComparisonType>("all");

  const filtered =
    active === "all"
      ? comparisons
      : comparisons.filter((c) => c.type === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-12">
        {allTypes.map((type) => {
          const isActive = type === active;
          const label = type === "all" ? "Alle" : typeLabels[type];
          return (
            <button
              key={type}
              onClick={() => setActive(type)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "bg-navy-dark text-white"
                  : "bg-navy-dark/5 text-navy-dark/60 hover:bg-navy-dark/10"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-navy-dark/70 text-center text-lg py-12">
          Ingen sammenligninger i denne kategorien ennå.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((comparison) => (
            <ComparisonCard key={comparison.slug} comparison={comparison} />
          ))}
        </div>
      )}
    </>
  );
}
