import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Home, Wrench, Phone, Calculator, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Side ikke funnet",
};

const navCards = [
  {
    title: "Forsiden",
    description: "Tilbake til startsiden",
    href: "/",
    icon: Home,
  },
  {
    title: "Tjenester",
    description: "Se alle tjenestene våre",
    href: "/tjenester",
    icon: Wrench,
  },
  {
    title: "Kontakt",
    description: "Ta kontakt med oss",
    href: "/kontakt",
    icon: Phone,
  },
  {
    title: "Priskalkulator",
    description: "Beregn pris på nett",
    href: "/kalkulator",
    icon: Calculator,
  },
];

export default function NotFound() {
  return (
    <main className="bg-white">
      <Navbar />
      <section className="py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-8xl font-extrabold text-navy-dark/10 mb-6">404</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-4">
            Siden finnes ikke
          </h1>
          <p className="text-navy-dark/70 text-lg mb-12 max-w-md mx-auto">
            Beklager, vi fant ikke siden du lette etter. Den kan ha blitt
            flyttet eller slettet.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {navCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="flex items-center gap-4 bg-navy-dark/5 hover:bg-navy-dark/5 rounded-xl p-6 transition-colors text-left group"
              >
                <card.icon className="w-5 h-5 text-green flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-navy-dark">{card.title}</p>
                  <p className="text-sm text-navy-dark/70">{card.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-navy-dark/30 group-hover:text-navy-dark/60 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
