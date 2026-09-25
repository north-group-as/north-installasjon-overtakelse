"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { TeamPhoto } from "@/lib/service-elektriker-data";

const ROTATE_MS = 5000;

export default function TeamSlider({ photos }: { photos: TeamPhoto[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(
      () => setActive((i) => (i + 1) % photos.length),
      ROTATE_MS,
    );
    return () => window.clearTimeout(id);
  }, [active, photos.length]);

  return (
    <div
      className="relative w-full h-full lg:min-h-[360px] rounded-2xl overflow-hidden bg-navy-dark"
      aria-roledescription="karusell"
      aria-label="Bilder fra arbeidshverdagen i North Installasjon"
    >
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== active}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 pb-5 pt-10 bg-gradient-to-t from-navy-dark/60 to-transparent">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Vis bilde ${i + 1}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
