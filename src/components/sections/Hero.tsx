import Image from "next/image";
import { Check } from "lucide-react";
import HeroCTAs from "./HeroCTAs";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-[72px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/fjell-vinter.webp"
          alt="Snødekte fjell i Norge"
          width={1410}
          height={2250}
          className="absolute inset-0 w-full h-full object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          Elektriker i Oslo{" "}
          <span className="lg:block">og omegn</span>
        </h1>

        <HeroCTAs />

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green" />
            Autorisert installatør
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green" />
            Fagmessig utførelse
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green" />
            StartBANK-registrert
          </span>
        </div>
      </div>
    </section>
  );
}
