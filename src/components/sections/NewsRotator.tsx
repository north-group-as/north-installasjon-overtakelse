"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";
import type { NewsItem } from "@/lib/news-data";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function NewsRotator({ items }: { items: NewsItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || items.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [items.length]);

  return (
    <div className="min-h-[250px] sm:min-h-[210px]">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider text-gray-50/60">
        <span>{activeItem.source}</span>
        <span className="h-1 w-1 rounded-full bg-gray-50/30" />
        <span className="inline-flex items-center gap-1.5 normal-case tracking-normal">
          <Calendar className="h-3.5 w-3.5" />
          {formatDate(activeItem.date)}
        </span>
      </div>

      <Link
        key={activeItem.id}
        href="/aktuelt"
        className="group mt-5 grid gap-5 transition-opacity duration-500 sm:grid-cols-[128px_1fr] sm:items-start"
      >
        <div className="relative h-28 overflow-hidden rounded-xl bg-white/10 sm:h-24 sm:w-32">
          {activeItem.image ? (
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              width={256}
              height={192}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, 128px"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-navy">
              <Newspaper className="h-8 w-8 text-gray-50/75" aria-hidden="true" />
            </div>
          )}
        </div>

        <div>
          <h3 className="max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
            {activeItem.title}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-50/75">
            {activeItem.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green">
            Gå til aktuelt
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>

      <div className="mt-7 flex gap-2">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Vis sak ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-green" : "w-2 bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
