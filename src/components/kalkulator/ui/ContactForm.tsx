"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { X, Upload } from "lucide-react";
import { AddressAutocompleteField, type AddressValue } from "./AddressAutocompleteField";

interface ContactFormProps {
  onSubmit: (data: {
    name: string;
    phone: string;
    email: string;
    address: AddressValue;
    haster: boolean;
    files: File[];
  }) => void;
  isSubmitted: boolean;
}

export function ContactForm({ onSubmit, isSubmitted }: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState<AddressValue>({ address: "" });
  const [haster, setHaster] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [phoneError, setPhoneError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);
    onSubmit({ name, phone, email, address, haster, files });
  }

  const handleAddressChange = useCallback((nextAddress: AddressValue) => {
    setAddress(nextAddress);
  }, []);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  if (isSubmitted) {
    return (
      <div className="border-2 border-green rounded-2xl p-6 text-center">
        <p className="text-lg font-bold text-navy-dark mb-1">
          Takk, vi har mottatt henvendelsen.
        </p>
        <p className="text-sm text-navy-light/70">
          Vi tar kontakt innen 24 timer.
        </p>
      </div>
    );
  }

  const inputClass =
    "py-3 px-3.5 border-2 border-navy-light/20 rounded-xl text-base text-navy-dark bg-white outline-none focus:border-teal-accent transition-colors w-full";

  return (
    <form onSubmit={handleSubmit}>
      <div className="sr-only" aria-hidden="false">
        <label htmlFor="_website-kalk">Ikke fyll ut dette feltet</label>
        <input
          id="_website-kalk"
          type="text"
          name="_website"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>
      <h3 className="text-lg font-bold text-navy-dark mb-3.5 text-center">
        Få et uforpliktende tilbud
      </h3>

      <div className="flex flex-col gap-2.5 mb-3.5">
        <input
          type="text"
          placeholder="Navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="Telefon *"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (phoneError) setPhoneError(false);
          }}
          className={cn(inputClass, phoneError && "border-red-400")}
        />
        <input
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="mb-3.5">
        <label className="text-sm text-navy-light/70 block mb-1.5">
          Last opp bilder eller dokumenter (valgfritt)
        </label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="relative p-4 border-2 border-dashed border-navy-light/20 rounded-xl text-center cursor-pointer hover:border-teal-accent hover:bg-teal-accent/5 transition-all"
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,.pdf"
            onChange={handleFileChange}
            aria-label="Last opp bilder eller dokumenter"
            className="hidden"
          />
          <Upload size={20} className="mx-auto mb-1 text-navy-light/40" />
          <span className="text-sm text-navy-light/60">Velg filer</span>
        </div>

        {files.length > 0 && (
          <div className="mt-2 flex flex-col gap-1">
            {files.map((file, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-sm text-navy-light/70 bg-navy-dark/5 rounded-lg px-3 py-1.5"
              >
                <span className="truncate mr-2">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="text-red-500 hover:text-red-700 shrink-0"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <label
        onClick={() => setHaster(!haster)}
        className="flex flex-wrap items-center gap-2 p-3 mb-3.5 bg-green-light border border-green rounded-xl cursor-pointer transition-colors"
      >
        <input
          type="checkbox"
          checked={haster}
          onChange={() => setHaster(!haster)}
          className="w-4.5 h-4.5 accent-green"
        />
        <span className="text-base font-bold text-navy-dark">
          Jobben haster
        </span>
        <span className="text-xs text-navy-light/70 w-full ml-6.5">
          Hastehenvendelse, vi tar kontakt raskt
        </span>
      </label>

      <div className="mb-3.5">
        <AddressAutocompleteField
          value={address}
          onChange={handleAddressChange}
          inputClassName={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-teal-accent text-white text-base font-extrabold rounded-xl border-none cursor-pointer mt-5 hover:bg-teal-accent/90 transition-all"
      >
        Send meg et tilbud
      </button>

      <p className="text-sm text-navy-light/60 text-center mt-3">
        Eller ring oss direkte:{" "}
        <a
          href="tel:+4774999333"
          className="text-teal-accent font-semibold hover:underline"
        >
          749 99 333
        </a>
      </p>
    </form>
  );
}
