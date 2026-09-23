"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, X, FileText, CheckCircle } from "lucide-react";

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPTED_EXTENSIONS = ".pdf,.doc,.docx";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [cv, setCv] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setValidFile = useCallback((file: File | undefined) => {
    if (file && ACCEPTED_TYPES.includes(file.type)) {
      setCv(file);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      setValidFile(e.dataTransfer.files?.[0]);
    },
    [setValidFile]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const honeypotValue =
      (e.currentTarget.elements.namedItem("_website") as HTMLInputElement | null)
        ?.value || "";

    if (!cv) {
      setError("Last opp CV-en din før du sender søknaden.");
      setSubmitting(false);
      return;
    }

    const data = new FormData();
    if (honeypotValue) data.append("_website", honeypotValue);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    if (formData.message) data.append("message", formData.message);
    data.append("cv", cv);

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
          : "Noe gikk galt. Prøv igjen eller kontakt oss direkte på post@northinstallasjon.no."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
        <CheckCircle className="w-16 h-16 text-green mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-navy-dark mb-3">
          Takk for søknaden!
        </h3>
        <p className="text-navy-dark/60 max-w-md mx-auto">
          Vi har mottatt søknaden din som serviceelektriker og går gjennom
          den så raskt som mulig. Du hører fra oss innen kort tid.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-navy-dark/10 bg-white text-navy-dark placeholder:text-navy-dark/60 focus:outline-none focus:ring-2 focus:ring-teal-accent focus:border-teal-accent transition-shadow text-[15px]";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 md:p-10 shadow-sm space-y-6 max-w-2xl mx-auto"
    >
      <div className="sr-only" aria-hidden="false">
        <label htmlFor="_website-service">Ikke fyll ut dette feltet</label>
        <input
          id="_website-service"
          type="text"
          name="_website"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-2">
          Søk stillingen
        </h2>
        <p className="text-navy-dark/70 text-[15px]">
          Fyll ut skjemaet under og last opp CV-en din. Vi tar kontakt.
        </p>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy-dark mb-1.5">
          Navn <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Ditt fulle navn"
          className={inputClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-dark mb-1.5">
            E-post <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="din@epost.no"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy-dark mb-1.5">
            Telefon <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ditt telefonnummer"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-dark mb-1.5">
          Kort søknadstekst (valgfritt)
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Fortell litt om deg selv og din erfaring..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-dark mb-1.5">
          Last opp CV <span className="text-red-500">*</span>
        </label>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
            dragOver
              ? "border-teal-accent bg-teal-accent/5"
              : "border-navy-dark/15 hover:border-teal-accent/50"
          }`}
        >
          <Upload
            className={`w-8 h-8 mx-auto mb-3 ${
              dragOver ? "text-teal-accent" : "text-navy-dark/25"
            }`}
          />
          <p className="text-sm text-navy-dark/70">
            <span className="font-semibold text-teal-accent">Klikk for å laste opp</span>{" "}
            eller dra filen hit
          </p>
          <p className="text-xs text-navy-dark/30 mt-1">PDF, DOC eller DOCX.</p>
          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPTED_EXTENSIONS}
            aria-label="Last opp CV"
            onChange={(e) => setValidFile(e.target.files?.[0])}
            className="hidden"
          />
        </div>

        {cv && (
          <div className="mt-3 flex items-center gap-3 bg-navy-dark/5 rounded-lg px-4 py-2.5 text-sm">
            <FileText className="w-4 h-4 text-teal-accent shrink-0" />
            <span className="text-navy-dark truncate flex-1">{cv.name}</span>
            <button
              type="button"
              onClick={() => setCv(null)}
              className="text-navy-dark/30 hover:text-red-500 transition-colors cursor-pointer"
              aria-label="Fjern CV"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-green text-navy-dark font-semibold py-4 rounded-xl hover:bg-green-dark transition-colors text-base cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sender..." : "Send søknad"}
      </button>
      {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
    </form>
  );
}
