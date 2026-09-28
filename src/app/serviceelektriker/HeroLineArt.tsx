// Abstrakt, geometrisk linjekunst for hero-banneret: kretsbaner, sinusbølge,
// sekskantnett og konsentriske buer. Tyngden ligger til høyre og tones ut mot
// venstre, slik at overskrift og knapper alltid står på rolig bakgrunn.
export default function HeroLineArt() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-25 md:opacity-100"
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMaxYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-art-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.38" stopColor="#fff" stopOpacity="0.15" />
          <stop offset="0.62" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="hero-art-mask">
          <rect width="1440" height="560" fill="url(#hero-art-fade)" />
        </mask>
        <pattern id="hero-art-hex" width="48" height="83.14" patternUnits="userSpaceOnUse">
          <path
            d="M24 0 L48 13.86 L48 41.57 L24 55.43 L0 41.57 L0 13.86 Z M24 55.43 L24 83.14"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <g mask="url(#hero-art-mask)">
        {/* Sekskantnett, svakt */}
        <g className="text-white/[0.05]">
          <rect x="880" y="0" width="560" height="560" fill="url(#hero-art-hex)" />
        </g>

        {/* Konsentriske buer */}
        <g className="text-teal-accent/30" stroke="currentColor" strokeWidth="1.5">
          <circle cx="1250" cy="280" r="90" />
          <circle cx="1250" cy="280" r="150" strokeDasharray="4 10" />
          <circle cx="1250" cy="280" r="215" />
          <path d="M1250 -30 A310 310 0 0 1 1560 280" strokeWidth="1" />
          <path d="M940 280 A310 310 0 0 1 1060 36" strokeWidth="1" strokeDasharray="2 8" />
        </g>

        {/* Kretsbaner med knutepunkter */}
        <g className="text-teal-accent/45" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round">
          <path d="M640 110 H880 L930 60 H1110" />
          <path d="M760 190 H960 L1010 140 H1440" />
          <path d="M700 420 H900 L950 470 H1180 L1210 440 H1440" />
          <path d="M1060 560 V500 L1100 460 V380" />
          <path d="M1340 0 V90 L1300 130 V200" />
          <path d="M820 340 H980 L1020 300 H1060" />
        </g>
        <g className="text-teal-accent/70" fill="currentColor">
          <circle cx="1110" cy="60" r="4" />
          <circle cx="760" cy="190" r="3" />
          <circle cx="1180" cy="470" r="4" />
          <circle cx="1100" cy="380" r="4" />
          <circle cx="1300" cy="200" r="4" />
          <circle cx="1060" cy="300" r="3" />
        </g>
        <g className="text-teal-accent/60" stroke="currentColor" strokeWidth="1.5">
          <circle cx="640" cy="110" r="5" />
          <circle cx="700" cy="420" r="5" />
          <circle cx="820" cy="340" r="5" />
        </g>

        {/* Sinusbølge (vekselstrøm) */}
        <path
          className="text-green/40"
          stroke="currentColor"
          strokeWidth="2"
          d="M600 260 C650 200, 700 200, 750 260 S850 320, 900 260 S1000 200, 1050 260 S1150 320, 1200 260 S1300 200, 1350 260 S1450 320, 1500 260"
        />

        {/* Lynsymbol i sirkelsentrum */}
        <path
          className="text-green/60"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M1262 232 L1232 286 H1256 L1240 330 L1276 270 H1252 Z"
        />
      </g>
    </svg>
  );
}
