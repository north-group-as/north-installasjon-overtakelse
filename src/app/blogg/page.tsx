import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";
import BlogGrid from "./BlogGrid";

export const metadata: Metadata = {
  title: "Blogg og fagartikler",
  description:
    "Fagartikler, tips og prosjektoppdateringer fra elektrikerne hos North Installasjon. Les om elbillader, sikringsskap, service og mer i Oslo-området.",
  alternates: {
    canonical: "https://www.northinstallasjon.no/blogg",
  },
};

export default function BloggPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <AuroraBackground intensity="subtle" className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Artikler og nyheter
          </h1>
          <p className="text-white/60 max-w-lg text-lg leading-relaxed">
            Fagartikler, tips og prosjektoppdateringer fra våre elektrikere.
          </p>
        </div>
      </AuroraBackground>

      {/* Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <BlogGrid posts={posts} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
            Trenger du elektriker?
          </h2>
          <p className="text-lg text-navy-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
            Kontakt oss for en uforpliktende vurdering, eller beregn pris på
            nett.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kalkulator"
              className="bg-navy-dark text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-navy-dark/90 text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Beregn pris
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/kontakt"
              className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
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
