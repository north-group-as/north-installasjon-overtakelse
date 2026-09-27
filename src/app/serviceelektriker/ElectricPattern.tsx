export default function ElectricPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full text-teal-accent/[0.08] pointer-events-none ${className}`}
      preserveAspectRatio="none"
      viewBox="0 0 1000 400"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 70 L220 70 L250 25 L278 115 L305 45 L332 70 L1000 70"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M0 320 L680 320 L708 275 L735 365 L762 295 L790 320 L1000 320"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M120 400 L120 340 L150 340 L150 250"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M880 0 L880 60 L850 60 L850 150"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="250" cy="25" r="4" fill="currentColor" />
      <circle cx="735" cy="365" r="4" fill="currentColor" />
      <circle cx="150" cy="250" r="3" fill="currentColor" />
      <circle cx="850" cy="150" r="3" fill="currentColor" />
    </svg>
  );
}
