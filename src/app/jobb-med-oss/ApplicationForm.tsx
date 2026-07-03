"use client";

import { useState, useRef, useCallback } from "react";
import {
  Upload,
  X,
  FileText,
  CheckCircle,
} from "lucide-react";
import { jobRoles } from "@/lib/jobb-med-oss-data";

const MAX_FILES = 3;
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
    position: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addFiles = useCallback((newFiles: FileList | File[]) => {
    const validFiles = Array.from(newFiles).filter((f) =>
      ACCEPTED_TYPES.includes(f.type)
    );
    setFiles((prev) => [...prev, ...validFiles].slice(0, MAX_FILES));
  }, []);

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
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
    data.append("source", "jobb");
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    if (formData.position) data.append("position", formData.position);
    if (formData.message) data.append("message", formData.message);
    for (const file of files) data.append("files", file);

    try {
      const res = await fetch("/api/submit-lead", { method: "POST", body: data });
      if (!res.ok) throw new Error("Serverfeil");
      setSubmitted(true);
    } catch {
      setError("Noe gikk galt. Prøv igjen eller kontakt oss direkte.");
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
        <p className="text-navy-dark/60 max-w-md mx-auto mb-8">
          Vi har mottatt søknaden din og går gjennom den så raskt som mulig. Du
          hører fra oss innen noen virkedager.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              position: "",
              message: "",
            });
            setFiles([]);
          }}
          className="text-teal-accent font-semibold hover:underline cursor-pointer"
        >
          Send en ny søknad
        </button>
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
        <label htmlFor="_website-jobb">Ikke fyll ut dette feltet</label>
        <input
          id="_website-jobb"
          type="text"
          name="_website"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-2">
          Send søknad
        </h2>
        <p className="text-navy-dark/70 text-[15px]">
          Fyll ut skjemaet under og last opp CV-en din. Vi tar kontakt.
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
          htmlFor="position"
          className="block text-sm font-medium text-navy-dark mb-1.5"
        >
          Stilling
        </label>
        <select
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Velg stilling...</option>
          {jobRoles.map((role) => (
            <option key={role.title} value={role.title}>
              {role.title}
            </option>
          ))}
          <option value="Annet">Annet / Åpen søknad</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-dark mb-1.5"
        >
          Søknadstekst
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Fortell litt om deg selv, din erfaring og hvorfor du ønsker å jobbe hos North Installasjon..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* CV upload */}
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
            <span className="font-semibold text-teal-accent">
              Klikk for å laste opp
            </span>{" "}
            eller dra filer hit
          </p>
          <p className="text-xs text-navy-dark/30 mt-1">
            PDF, DOC eller DOCX. Maks {MAX_FILES} filer.
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={ACCEPTED_EXTENSIONS}
            aria-label="Last opp CV eller søknadsdokumenter"
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
                <FileText className="w-4 h-4 text-teal-accent shrink-0" />
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

      <button
        type="submit"
        disabled={submitting}
      className="w-full bg-green text-white font-semibold py-4 rounded-xl hover:bg-green-dark transition-colors text-base cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sender..." : "Send søknad"}
      </button>
      {error && (
        <p className="text-red-500 text-sm text-center mt-2">{error}</p>
      )}
    </form>
  );
}
