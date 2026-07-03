"use client";

import { useRef } from "react";
import { Upload, X, Camera } from "lucide-react";

interface ImageUploadSectionProps {
  categories: { label: string; required?: boolean }[];
  images: Record<string, File[]>;
  onChange: (images: Record<string, File[]>) => void;
}

export function ImageUploadSection({
  categories,
  images,
  onChange,
}: ImageUploadSectionProps) {
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  function handleFileChange(category: string, files: FileList | null) {
    if (!files) return;
    const newImages = { ...images };
    const existing = newImages[category] ?? [];
    newImages[category] = [...existing, ...Array.from(files)];
    onChange(newImages);
  }

  function removeFile(category: string, index: number) {
    const newImages = { ...images };
    newImages[category] = (newImages[category] ?? []).filter(
      (_, i) => i !== index
    );
    onChange(newImages);
  }

  if (categories.length === 0) return null;

  return (
    <div className="mb-5.5">
      <div className="flex items-center gap-2 mb-2">
        <Camera size={16} className="text-teal-accent" />
        <label className="block font-bold text-sm text-navy-dark">
          Last opp bilder
        </label>
      </div>
      <p className="text-sm text-navy-light/70 leading-relaxed mb-3">
        Bilder hjelper oss med å gi deg et mer nøyaktig tilbud. Ikke
        obligatorisk, men veldig nyttig.
      </p>

      <div className="flex flex-col gap-3">
        {categories.map((cat) => {
          const catFiles = images[cat.label] ?? [];
          return (
            <div
              key={cat.label}
              className="p-3 bg-white/60 rounded-xl border border-navy-light/20"
            >
              <div className="text-sm font-medium text-navy-dark mb-2">
                {cat.label}
              </div>

              <div
                onClick={() => fileInputRefs.current[cat.label]?.click()}
                className="relative p-3 border-2 border-dashed border-navy-light/20 rounded-lg text-center cursor-pointer hover:border-teal-accent hover:bg-teal-accent/5 transition-all"
              >
                <input
                  ref={(el) => {
                    fileInputRefs.current[cat.label] = el;
                  }}
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileChange(cat.label, e.target.files)}
                  aria-label={`Last opp bilde: ${cat.label}`}
                  className="hidden"
                />
                <Upload size={16} className="mx-auto mb-1 text-navy-light/40" />
                <span className="text-xs text-navy-light/60">
                  Velg filer eller ta bilde
                </span>
              </div>

              {catFiles.length > 0 && (
                <div className="mt-2 flex flex-col gap-1">
                  {catFiles.map((file, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs text-navy-light/70 bg-navy-dark/5 rounded-lg px-2.5 py-1.5"
                    >
                      <span className="truncate mr-2">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(cat.label, i)}
                        className="text-red-500 hover:text-red-700 shrink-0"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
