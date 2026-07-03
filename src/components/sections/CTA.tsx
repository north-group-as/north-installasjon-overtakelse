import { Phone, Send } from "lucide-react";
import { BUSINESS } from "@/lib/business-data";

export default function CTA() {
  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark tracking-tight mb-6">
          Klar for å komme i gang?
        </h2>
        <p className="text-lg text-navy-dark/70 mb-14 max-w-md mx-auto leading-relaxed">
          Ta kontakt for en uforpliktende prat. Vi gir deg et prisestimat
          raskt.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BUSINESS.phoneHref}
            className="bg-green text-white font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-green-dark text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            Ring oss
          </a>
          <a
            href="/kontakt"
            className="border-2 border-navy-dark/20 text-navy-dark font-semibold px-10 py-4 rounded-xl transition-colors hover:bg-navy-dark/5 text-base inline-flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Send forespørsel
          </a>
        </div>
      </div>
    </section>
  );
}
