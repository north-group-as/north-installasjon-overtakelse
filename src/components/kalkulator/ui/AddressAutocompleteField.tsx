"use client";

import { useEffect, useRef, useState } from "react";

export interface AddressValue {
  address: string;
  placeId?: string;
  lat?: number;
  lng?: number;
}

interface AddressAutocompleteFieldProps {
  value: AddressValue;
  onChange: (value: AddressValue) => void;
  inputClassName: string;
}

interface GoogleAutocompletePlace {
  formatted_address?: string;
  place_id?: string;
  geometry?: {
    location?: {
      lat: () => number;
      lng: () => number;
    };
  };
}

interface GoogleAutocomplete {
  addListener: (eventName: "place_changed", handler: () => void) => void;
  getPlace: () => GoogleAutocompletePlace;
}

interface GoogleMapsWindow extends Window {
  google?: {
    maps?: {
      places?: {
        Autocomplete: new (
          input: HTMLInputElement,
          options: {
            componentRestrictions?: { country: string };
            fields?: string[];
            types?: string[];
          }
        ) => GoogleAutocomplete;
      };
    };
  };
}

const GOOGLE_SCRIPT_ID = "google-maps-places";

function loadGooglePlaces(apiKey: string): Promise<void> {
  const existing = document.getElementById(GOOGLE_SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    return existing.dataset.loaded === "true"
      ? Promise.resolve()
      : new Promise((resolve, reject) => {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => reject(new Error("Google Places script failed")), { once: true });
        });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = GOOGLE_SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true }
    );
    script.addEventListener("error", () => reject(new Error("Google Places script failed")), { once: true });
    document.head.appendChild(script);
  });
}

export function AddressAutocompleteField({
  value,
  onChange,
  inputClassName,
}: AddressAutocompleteFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [autocompleteReady, setAutocompleteReady] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey || !inputRef.current) return;

    let isMounted = true;

    loadGooglePlaces(apiKey)
      .then(() => {
        if (!isMounted || !inputRef.current) return;

        const googleWindow = window as GoogleMapsWindow;
        const Autocomplete = googleWindow.google?.maps?.places?.Autocomplete;
        if (!Autocomplete) return;

        const autocomplete = new Autocomplete(inputRef.current, {
          componentRestrictions: { country: "no" },
          fields: ["formatted_address", "geometry.location", "place_id"],
          types: ["address"],
        });

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          const address = place.formatted_address || inputRef.current?.value || "";
          const location = place.geometry?.location;

          onChange({
            address,
            placeId: place.place_id,
            lat: location?.lat(),
            lng: location?.lng(),
          });
        });

        setAutocompleteReady(true);
      })
      .catch(() => {
        setAutocompleteReady(false);
      });

    return () => {
      isMounted = false;
    };
  }, [apiKey, onChange]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Adresse"
        value={value.address}
        onChange={(e) => onChange({ address: e.target.value })}
        className={inputClassName}
        autoComplete="street-address"
      />
      <p className="mt-1.5 text-xs text-navy-light/60">
        {autocompleteReady
          ? "Begynn å skrive og velg adressen fra Google."
          : "Skriv inn adressen for oppdraget."}
      </p>
    </div>
  );
}
