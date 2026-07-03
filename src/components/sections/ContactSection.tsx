"use client";

import { useState } from "react";
import { Phone, Send, Check, ShieldCheck, Star } from "lucide-react";
import { BUSINESS, STATS } from "@/lib/business-data";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const serviceOptions = [
  { value: "", label: "Velg type oppdrag" },
  { value: "nybygg", label: "Nybygg" },
  { value: "rehabilitering", label: "Rehabilitering" },
  { value: "service", label: "Service" },
  { value: "naering", label: "Næring" },
  { value: "bolig", label: "Bolig" },
  { value: "annet", label: "Annet" },
];

export default function ContactSection() {
  const isMinimal = false;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.phone.trim()) return;

    setSubmitting(true);
    setError(null);

    const data = new FormData();
    data.append("source", "kontakt");
    data.append("name", formData.name.trim());
    data.append("phone", formData.phone.trim());
    data.append("email", formData.email.trim());
    if (formData.service) data.append("service", formData.service);
    if (formData.message.trim()) data.append("message", formData.message.trim());

    try {
      const res = await fetch("/api/submit-lead", { method: "POST", body: data });
      if (!res.ok) throw new Error("Serverfeil");
      setSubmitted(true);
    } catch {
      setError("Noe gikk galt. Prøv igjen eller ring oss direkte.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="bestill" className="relative bg-white py-28 lg:py-36 overflow-hidden">
      <FloatingShapes shapes={[
        { className: "absolute top-10 left-1/4 w-[400px] h-[400px] rounded-full bg-teal-accent/15 blur-md", speed: 1 },
        { className: "absolute -bottom-10 right-16 w-[350px] h-[250px] rounded-[50%_50%_40%_60%] bg-teal-accent/15 blur-md", speed: 1.5 },
        { className: "absolute top-1/3 -right-10 w-[200px] h-[300px] rounded-[40%_60%_55%_45%] bg-teal-accent/20 blur-sm", speed: 2 },
      ]} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Copy + trust */}
          <div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-navy-dark tracking-tight leading-tight mb-6">
              Få gratis befaring
            </h2>
            <p className="text-lg text-navy-dark/60 leading-relaxed mb-10 max-w-md">
              Fyll ut skjemaet, så tar vi kontakt så snart som mulig med et
              uforpliktende tilbud.
            </p>

            {/* Trust signals */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-navy-dark/80">
                <div className="w-8 h-8 rounded-lg bg-green/15 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-green" />
                </div>
                <span className="text-sm">Autorisert elektroinstallatør</span>
              </div>
              <div className="flex items-center gap-3 text-navy-dark/80">
                <div className="w-8 h-8 rounded-lg bg-green/15 flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-green" />
                </div>
                <span className="text-sm">{STATS.rating}/5 på Google</span>
              </div>
            </div>

            {/* Phone — prominent card. Tel-link wrapper kun rundt nummeret for
                å matche href med display-text. */}
            <div className="flex items-center gap-4 bg-navy-dark rounded-2xl px-6 py-5 group hover:bg-navy transition-colors">
              <div className="w-14 h-14 rounded-xl bg-green/20 flex items-center justify-center group-hover:bg-green/30 transition-colors flex-shrink-0">
                <Phone className="w-7 h-7 text-green" aria-hidden="true" />
              </div>
              <div>
                <a
                  href={BUSINESS.phoneHref}
                  className="text-2xl font-extrabold text-white block"
                >
                  {BUSINESS.phoneDisplay}
                </a>
                <p className="text-sm text-white/60">
                  Ring oss, vi svarer raskt
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green" />
                </div>
                <h3 className="text-2xl font-bold text-navy-dark mb-3">
                  Takk for henvendelsen!
                </h3>
                <p className="text-navy-dark/60 mb-2">
                  Hei, vi har sett henvendelsen din. Vi jobber på spreng med å få plass et tilbud til deg.
                </p>
                <p className="text-sm text-navy-dark/40">
                  Eller ring oss:{" "}
                  <a
                    href={BUSINESS.phoneHref}
                    className="text-green font-semibold"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="sr-only" aria-hidden="false">
                  <label htmlFor="_website-nc">Ikke fyll ut dette feltet</label>
                  <input
                    id="_website-nc"
                    type="text"
                    name="_website"
                    tabIndex={-1}
                    autoComplete="off"
                    defaultValue=""
                  />
                </div>
                {!isMinimal && (
                  <div>
                    <label
                      htmlFor="nc-name"
                      className="block text-sm font-medium text-navy-dark/70 mb-1.5"
                    >
                      Navn
                    </label>
                    <input
                      id="nc-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ditt navn"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy-dark placeholder:text-gray-600 focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/30 transition-colors"
                    />
                  </div>
                )}
                <div>
                  <label
                    htmlFor="nc-phone"
                    className="block text-sm font-medium text-navy-dark/70 mb-1.5"
                  >
                    Telefon <span className="text-green">*</span>
                  </label>
                  <input
                    id="nc-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ditt telefonnummer"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy-dark placeholder:text-gray-600 focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/30 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="nc-email"
                    className="block text-sm font-medium text-navy-dark/70 mb-1.5"
                  >
                    E-post <span className="text-green">*</span>
                  </label>
                  <input
                    id="nc-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    spellCheck={false}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="din@epost.no"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy-dark placeholder:text-gray-600 focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/30 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="nc-service"
                    className="block text-sm font-medium text-navy-dark/70 mb-1.5"
                  >
                    Hva trenger du hjelp med?
                  </label>
                  <select
                    id="nc-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy-dark focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/30 transition-colors cursor-pointer appearance-none"
                  >
                    {serviceOptions.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        className="bg-white text-navy-dark"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                {!isMinimal && (
                  <div>
                    <label
                      htmlFor="nc-message"
                      className="block text-sm font-medium text-navy-dark/70 mb-1.5"
                    >
                      Melding{" "}
                      <span className="text-navy-dark/30 font-normal">
                        (valgfritt)
                      </span>
                    </label>
                    <textarea
                      id="nc-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Beskriv kort hva du trenger hjelp med"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy-dark placeholder:text-gray-600 focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/30 transition-colors resize-none"
                    />
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-green text-white font-bold px-8 py-4 rounded-xl transition-all hover:bg-green-dark text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? "Sender..." : "Bestill gratis befaring"}
                </button>
                {error && (
                  <p className="text-center text-sm text-red-600" role="alert" aria-live="polite">
                    {error}
                  </p>
                )}
                <p className="text-center text-xs text-navy-dark/30">
                  Uforpliktende. Vi ringer deg tilbake
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
