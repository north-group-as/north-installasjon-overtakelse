"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

const EXTRA_SUGGESTIONS = [
  "Flytte sikringsskap",
  "Trekke ny kabel",
  "Koble til varmepumpe",
  "Installere jacuzzi",
  "Oppussing bad",
  "Oppussing kjøkken",
  "Nytt kjøkken",
  "Tilbygg",
  "Garasje",
  "Motorvarmer",
  "Infrarød varmelampe",
  "Smart hjem",
];

interface AutocompleteTextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  suggestions: string[];
}

const MAX_VISIBLE = 8;

export function AutocompleteTextarea({
  value,
  onChange,
  placeholder,
  suggestions,
}: AutocompleteTextareaProps) {
  const [expanded, setExpanded] = useState(false);

  const allSuggestions = useMemo(() => {
    const combined = [...suggestions, ...EXTRA_SUGGESTIONS];
    return [...new Set(combined)];
  }, [suggestions]);

  const filtered = useMemo(() => {
    const lower = value.toLowerCase();
    // Skjul suggestions som allerede er lagt til i teksten
    return allSuggestions.filter((s) => !lower.includes(s.toLowerCase()));
  }, [value, allSuggestions]);

  const visible = expanded ? filtered : filtered.slice(0, MAX_VISIBLE);
  const hasMore = filtered.length > MAX_VISIBLE;

  function handleChipClick(suggestion: string) {
    const trimmed = value.trim();
    if (trimmed) {
      onChange(trimmed + ". " + suggestion);
    } else {
      onChange(suggestion);
    }
  }

  return (
    <div>
      {visible.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {visible.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleChipClick(s)}
              className={cn(
                "bg-white border border-navy-light/20 rounded-lg px-3 py-1.5 text-sm",
                "cursor-pointer transition-all",
                "hover:bg-teal-accent/10 hover:border-teal-accent",
                "active:scale-95"
              )}
            >
              {s}
            </button>
          ))}
          {hasMore && !expanded && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="text-sm text-teal-accent font-semibold px-3 py-1.5 cursor-pointer hover:underline"
            >
              +{filtered.length - MAX_VISIBLE} flere
            </button>
          )}
          {expanded && hasMore && (
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="text-sm text-navy-light/50 font-semibold px-3 py-1.5 cursor-pointer hover:underline"
            >
              Vis færre
            </button>
          )}
        </div>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full py-3 px-3.5 border border-navy-light/20 rounded-xl text-sm resize-y min-h-[80px] focus:outline-none focus:border-teal-accent focus:ring-[3px] focus:ring-teal-accent/10 transition-all"
      />
    </div>
  );
}
