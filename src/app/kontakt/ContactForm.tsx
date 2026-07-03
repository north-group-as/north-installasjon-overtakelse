"use client";

import { useState, useRef, useCallback } from "react";
import {
  Upload,
  X,
  FileText,
  ImageIcon,
  CheckCircle,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
} from "lucide-react";
import { BUSINESS } from "@/lib/business-data";

const SERVICE_OPTIONS = [
  "Velg kategori...",
  "Nybygg",
  "Rehabilitering",
  "Service",
  "Næring",
  "Bolig",
  "Annet",
];

const MAX_FILES = 5;
const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "application/pdf",
];

const SUBMIT_VARIANTS: Record<string, string> = {
  control: "Send henvendelse",
  test: "Be om tilbud",
};

export default function ContactForm() {
  const submitText = SUBMIT_VARIANTS.control;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferredFrom: "",
    preferredTo: "",
    description: "",
    urgent: false,
  });
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const preferredFromRef = useRef<HTMLInputElement>(null);
  const preferredToRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const addFiles = useCallback(
    (newFiles: FileList | File[]) => {
      const validFiles = Array.from(newFiles).filter((f) =>
        ACCEPTED_TYPES.includes(f.type)
      );
      setFiles((prev) => {
        const combined = [...prev, ...validFiles];
        return combined.slice(0, MAX_FILES);
      });
    },
    []
  );

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const openDatePicker = (input: HTMLInputElement | null) => {
    if (!input) return;

    try {
      input.showPicker();
    } catch {
      input.focus();
    }
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (e.dataTransfer.files.length > 0) {
        addFiles(e.dataTransfer.files);
      }
    },
    [addFiles]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const honeypotValue = (e.currentTarget.elements.namedItem("_website") as HTMLInputElement | null)?.value || "";

    const data = new FormData();
    if (honeypotValue) data.append("_website", honeypotValue);
    data.append("source", "kontakt");
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    if (formData.service) data.append("service", formData.service);
    if (formData.preferredFrom) data.append("preferred_from", formData.preferredFrom);
    if (formData.preferredTo) data.append("preferred_to", formData.preferredTo);
    if (formData.description) data.append("message", formData.description);
    data.append("haster", String(formData.urgent));
    for (const file of files) data.append("files", file);

    try {
      const res = await fetch("/api/submit-lead", { method: "POST", body: data });
      if (!res.ok) throw new Error("Serverfeil");
      setSubmitted(true);
    } catch {
      setError("Noe gikk galt. Prøv igjen eller ring oss direkte.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
        <CheckCircle className="w-16 h-16 text-green mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-navy-dark mb-3">
          Takk for din henvendelse!
        </h3>
        <p className="text-navy-dark/60 max-w-md mx-auto mb-8">
          Hei, vi har sett henvendelsen din. Vi jobber på spreng med å få plass et tilbud til deg.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              service: "",
              preferredFrom: "",
              preferredTo: "",
              description: "",
              urgent: false,
            });
            setFiles([]);
          }}
          className="text-teal-accent font-semibold hover:underline cursor-pointer"
        >
          Send en ny henvendelse
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-navy-dark/10 bg-white text-navy-dark placeholder:text-navy-dark/60 focus:outline-none focus:ring-2 focus:ring-teal-accent focus:border-teal-accent transition-shadow text-[15px]";

  return (
    <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
      {/* Form -- left side */}
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10 shadow-sm space-y-6"
      >
        {/* Honeypot for bot-filtrering. Skjult visuelt men synlig for skjermlesere. */}
        <div className="sr-only" aria-hidden="false">
          <label htmlFor="_website">Ikke fyll ut dette feltet</label>
          <input
            id="_website"
            type="text"
            name="_website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-2">
            Send oss en melding
          </h2>
          <p className="text-navy-dark/70 text-[15px]">
            Fyll ut skjemaet, så tar vi kontakt med deg raskt.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-navy-dark mb-1.5"
            >
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
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-navy-dark mb-1.5"
            >
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
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy-dark mb-1.5"
          >
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
          <label
            htmlFor="service"
            className="block text-sm font-medium text-navy-dark mb-1.5"
          >
            Tjeneste
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt === "Velg kategori..." ? "" : opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-dark mb-1.5">
            Ønsket tidsperiode
          </label>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="preferredFrom"
                className="block text-xs text-navy-dark/50 mb-1"
              >
                Fra
              </label>
              <div className="relative">
                <input
                  id="preferredFrom"
                  ref={preferredFromRef}
                  name="preferredFrom"
                  type="date"
                  value={formData.preferredFrom}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={`${inputClass} cursor-pointer pr-11 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
                />
                <button
                  type="button"
                  aria-label="Åpne kalender for fra-dato"
                  onClick={() => openDatePicker(preferredFromRef.current)}
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-navy-dark/50 transition-colors hover:bg-navy-dark/5 hover:text-navy-dark focus:outline-none focus:ring-2 focus:ring-teal-accent/50"
                >
                  <Calendar className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="preferredTo"
                className="block text-xs text-navy-dark/50 mb-1"
              >
                Til
              </label>
              <div className="relative">
                <input
                  id="preferredTo"
                  ref={preferredToRef}
                  name="preferredTo"
                  type="date"
                  value={formData.preferredTo}
                  onChange={handleChange}
                  min={formData.preferredFrom || new Date().toISOString().split("T")[0]}
                  className={`${inputClass} cursor-pointer pr-11 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
                />
                <button
                  type="button"
                  aria-label="Åpne kalender for til-dato"
                  onClick={() => openDatePicker(preferredToRef.current)}
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-navy-dark/50 transition-colors hover:bg-navy-dark/5 hover:text-navy-dark focus:outline-none focus:ring-2 focus:ring-teal-accent/50"
                >
                  <Calendar className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-navy-dark mb-1.5"
          >
            Beskrivelse
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="Jeg trenger hjelp med en dimmer"
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* File upload */}
        <div>
          <label className="block text-sm font-medium text-navy-dark mb-1.5">
            Vedlegg (valgfritt)
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
              <span className="font-semibold text-teal-accent">
                Klikk for å laste opp
              </span>{" "}
              eller dra filer hit
            </p>
            <p className="text-xs text-navy-dark/30 mt-1">
              Bilder og PDF-filer. Maks {MAX_FILES} filer.
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,.pdf"
              aria-label="Last opp bilder eller dokumenter"
              onChange={(e) => e.target.files && addFiles(e.target.files)}
              className="hidden"
            />
          </div>

          {files.length > 0 && (
            <ul className="mt-3 space-y-2">
              {files.map((file, i) => (
                <li
                  key={`${file.name}-${i}`}
                  className="flex items-center gap-3 bg-navy-dark/5 rounded-lg px-4 py-2.5 text-sm"
                >
                  {file.type === "application/pdf" ? (
                    <FileText className="w-4 h-4 text-teal-accent shrink-0" />
                  ) : (
                    <ImageIcon className="w-4 h-4 text-teal-accent shrink-0" />
                  )}
                  <span className="text-navy-dark truncate flex-1">
                    {file.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="text-navy-dark/30 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Urgent checkbox */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="urgent"
            checked={formData.urgent}
            onChange={handleChange}
            className="mt-0.5 w-5 h-5 rounded border-navy-dark/20 text-teal-accent focus:ring-teal-accent cursor-pointer"
          />
          <div>
            <span className="flex items-center gap-2 text-sm font-medium text-navy-dark">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Haster det?
            </span>
            <span className="text-xs text-navy-dark/40">
              Vi prioriterer hastehenvendelser og ringer deg tilbake så raskt som
              mulig.
            </span>
          </div>
        </label>

        <button
          type="submit"
          disabled={submitting}
        className="w-full bg-green text-white font-semibold py-4 rounded-xl hover:bg-green-dark transition-colors text-base cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sender..." : submitText}
        </button>
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
      </form>

      {/* Info panel -- right side */}
      <aside className="lg:col-span-2 space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-navy-dark">Kontaktinfo</h3>

          <div className="space-y-5">
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-teal-accent/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-teal-accent" aria-hidden="true" />
              </div>
              <div>
                <a
                  href={BUSINESS.phoneHref}
                  className="text-sm font-semibold text-navy-dark group-hover:text-teal-accent transition-colors block"
                >
                  {BUSINESS.phoneDisplay}
                </a>
                <p className="text-xs text-navy-dark/40">Ring oss direkte</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-teal-accent/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-teal-accent" aria-hidden="true" />
              </div>
              <div>
                <a
                  href={BUSINESS.emailHref}
                  className="text-sm font-semibold text-navy-dark group-hover:text-teal-accent transition-colors block"
                >
                  {BUSINESS.email}
                </a>
                <p className="text-xs text-navy-dark/40">
                  Vi svarer innen 1 virkedag
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-teal-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-dark">
                  {BUSINESS.address.street}, {BUSINESS.address.postalCode} {BUSINESS.address.city}
                </p>
                <p className="text-xs text-navy-dark/40">
                  Vi dekker hele {BUSINESS.address.region}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-accent/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-teal-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-dark">
                  Man-Fre 08:00-17:00
                </p>
                <p className="text-xs text-navy-dark/40">
                  Beredskap utenom arbeidstid
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <iframe
            className="w-full aspect-[4/3]"
            width={600}
            height={450}
            loading="lazy"
            src="https://maps.google.com/maps?q=Frydenbergveien+46b+0575+Oslo&t=m&z=14&output=embed&iwloc=near"
            title="Frydenbergveien 46b, 0575 Oslo"
            aria-label="Kart som viser kontoret til North Installasjon"
          />
        </div>
      </aside>
    </div>
  );
}
