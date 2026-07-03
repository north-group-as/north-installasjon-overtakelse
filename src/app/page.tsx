import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import NewsPreview from "@/components/sections/NewsPreview";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Projects from "@/components/sections/Projects";
import ContactSection from "@/components/sections/ContactSection";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Elektriker Oslo | North Installasjon",
  description: "Autorisert elektriker i Oslo-området. Vi hjelper private, næringsliv og borettslag med elektroinstallasjon, elbillader og service. Ring 982 49 598.",
  alternates: {
    canonical: "https://www.northinstallasjon.no",
  },
  openGraph: {
    title: "Elektriker Oslo | North Installasjon",
    description: "Autorisert elektriker i Oslo-området. Vi hjelper private, næringsliv og borettslag med elektroinstallasjon, elbillader og service.",
    url: "https://www.northinstallasjon.no",
    type: "website",
    images: [
      {
        url: "/images/hero-elektriker.webp",
        width: 1200,
        height: 630,
        alt: "North Installasjon — elektriker i arbeid",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <FadeIn>
        <Services />
      </FadeIn>
      <FadeIn>
        <NewsPreview />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Process />
      </FadeIn>
      <Testimonials />
      <Projects />
      <ContactSection />
      <Footer />
    </main>
  );
}
