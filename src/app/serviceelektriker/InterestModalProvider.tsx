"use client";

import { createContext, useCallback, useContext, useState } from "react";
import InterestForm from "./InterestForm";

interface InterestModalContextValue {
  open: () => void;
}

const InterestModalContext = createContext<InterestModalContextValue | null>(null);

export function useInterestModal() {
  const ctx = useContext(InterestModalContext);
  if (!ctx) {
    throw new Error("useInterestModal må brukes inne i InterestModalProvider");
  }
  return ctx;
}

export default function InterestModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const handleWantsFullApplication = useCallback(() => {
    close();
    requestAnimationFrame(() => {
      document.getElementById("soknad")?.scrollIntoView({ behavior: "smooth" });
    });
  }, [close]);

  return (
    <InterestModalContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <InterestForm onClose={close} onWantsFullApplication={handleWantsFullApplication} />
      )}
    </InterestModalContext.Provider>
  );
}
