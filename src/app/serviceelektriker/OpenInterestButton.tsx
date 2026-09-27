"use client";

import { useInterestModal } from "./InterestModalProvider";

export default function OpenInterestButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useInterestModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
