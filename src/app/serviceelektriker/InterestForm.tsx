"use client";

import { useState } from "react";
import { X, CheckCircle } from "lucide-react";

interface InterestFormProps {
  onClose: () => void;
  onWantsFullApplication: () => void;
}

export default function InterestForm({ onClose, onWantsFullApplication }: InterestFormProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const honeypotValue =
      (e.currentTarget.elements.namedItem("_website") as HTMLInputElement | null)?.value || "";

    const data = new FormData();
    if (honeypotValue) data.append("_website", honeypotValue);
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    if (formData.email) data.append("email", formData.email);
    data.append("interestOnly", "true");

    try {
      const res = await fetch("/api/service-elektriker-soknad", {
        method: "POST",
        body: data,
      });
      const json = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(json?.error || "Serverfeil");
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Noe gikk galt. Prøv igjen eller ring oss direkte på 749 99 333."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-navy-dark/10 bg-white text-navy-dark placeholder:text-navy-dark/40 focus:outline-none focus:ring-2 focus:ring-teal-accent focus:border-teal-accent transition-shadow text-[15px]";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-navy-dark/70 backdrop-blur-sm px-0 md:px-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full md:max-w-md bg-white rounded-t-3xl md:rounded-2xl p-8 md:p-9 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Lukk"
          className="absolute top-5 right-5 text-navy-dark/40 hover:text-navy-dark transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <CheckCircle className="w-14 h-14 text-green mx-auto mb-5" />
            <h3 className="text-xl font-bold text-navy-dark mb-2">Takk!</h3>
            <p className="text-navy-dark/60 text-[15px] leading-relaxed">
              Vi tar kontakt for en uforpliktende prat.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="sr-only" aria-hidden="false">
              <label htmlFor="_website-interest">Ikke fyll ut dette feltet</label>
              <input
                id="_website-interest"
                type="text"
                name="_website"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />
            </div>

            <div>
              <p className="text-teal-accent text-xs font-semibold uppercase tracking-wider mb-2">
                Jeg er nysgjerrig
              </p>
              <h3 className="text-2xl font-extrabold text-navy-dark tracking-tight">
                Ta kontakt med meg
              </h3>
              <p className="mt-2 text-navy-dark/60 text-[15px]">
                Helt uforpliktende. Vi tar en prat først.
              </p>
            </div>

            <div>
              <label htmlFor="interest-name" className="block text-sm font-medium text-navy-dark mb-1.5">
                Navn <span className="text-red-500">*</span>
              </label>
              <input
                id="interest-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                placeholder="Ditt fulle navn"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="interest-phone" className="block text-sm font-medium text-navy-dark mb-1.5">
                Telefon <span className="text-red-500">*</span>
              </label>
              <input
                id="interest-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                placeholder="Ditt telefonnummer"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="interest-email" className="block text-sm font-medium text-navy-dark mb-1.5">
                E-post <span className="text-navy-dark/40 font-normal">(valgfritt)</span>
              </label>
              <input
                id="interest-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                placeholder="din@epost.no"
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-green text-navy-dark font-semibold py-4 rounded-xl hover:bg-green-dark transition-colors text-base cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sender..." : "Ta kontakt med meg"}
            </button>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button
              type="button"
              onClick={onWantsFullApplication}
              className="w-full text-center text-sm font-semibold text-teal-accent hover:text-navy-dark transition-colors cursor-pointer"
            >
              Jeg vil heller sende full søknad
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
