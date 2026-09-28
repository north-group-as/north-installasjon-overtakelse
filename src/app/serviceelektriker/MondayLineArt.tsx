// Speilvendt variant av hero-grafikken for "Gleder du deg til mandag?":
// firkantpuls, kretsbaner og prikknett kommer inn fra begge kanter, mens et
// radielt maskefelt holder midten (der teksten står) helt rolig.
export default function MondayLineArt() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 md:opacity-100"
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="monday-art-fade" cx="0.5" cy="0.5" r="0.62">
          <stop offset="0.38" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.62" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </radialGradient>
        <mask id="monday-art-mask">
          <rect width="1440" height="640" fill="url(#monday-art-fade)" />
        </mask>
        <pattern id="monday-art-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="currentColor" />
        </pattern>
      </defs>

      <g mask="url(#monday-art-mask)">
        {/* Prikknett i hjørnene */}
        <g className="text-white/[0.07]">
          <rect x="0" y="0" width="380" height="260" fill="url(#monday-art-dots)" />
          <rect x="1060" y="380" width="380" height="260" fill="url(#monday-art-dots)" />
        </g>

        {/* Kvartbuer i motsatte hjørner */}
        <g className="text-teal-accent/30" stroke="currentColor" strokeWidth="1.5">
          <path d="M0 520 A120 120 0 0 1 120 640" />
          <path d="M0 440 A200 200 0 0 1 200 640" strokeDasharray="4 10" />
          <path d="M0 360 A280 280 0 0 1 280 640" />
          <path d="M1440 120 A120 120 0 0 1 1320 0" />
          <path d="M1440 200 A200 200 0 0 1 1240 0" strokeDasharray="4 10" />
          <path d="M1440 280 A280 280 0 0 1 1160 0" />
        </g>

        {/* Firkantpuls (digitalt signal) fra begge sider */}
        <g className="text-green/40" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M-20 320 H80 V270 H140 V320 H200 V270 H260 V320 H340 V290 H380 V320 H620" />
          <path d="M1460 320 H1360 V370 H1300 V320 H1240 V370 H1180 V320 H1100 V350 H1060 V320 H820" />
        </g>

        {/* Kretsbaner, speilvendt */}
        <g className="text-teal-accent/45" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round">
          <path d="M0 150 H180 L230 200 H420 L460 160 H560" />
          <path d="M0 470 H140 L190 420 H360 L400 460 H520" />
          <path d="M300 0 V60 L340 100 V130" />
          <path d="M1440 490 H1260 L1210 440 H1020 L980 480 H880" />
          <path d="M1440 170 H1300 L1250 220 H1080 L1040 180 H920" />
          <path d="M1140 640 V580 L1100 540 V510" />
        </g>
        <g className="text-teal-accent/70" fill="currentColor">
          <circle cx="340" cy="130" r="4" />
          <circle cx="1100" cy="510" r="4" />
          <circle cx="230" cy="200" r="3" />
          <circle cx="1210" cy="440" r="3" />
          <circle cx="190" cy="420" r="3" />
          <circle cx="1250" cy="220" r="3" />
        </g>
        <g className="text-teal-accent/60" stroke="currentColor" strokeWidth="1.5">
          <circle cx="560" cy="160" r="5" />
          <circle cx="520" cy="460" r="5" />
          <circle cx="880" cy="480" r="5" />
          <circle cx="920" cy="180" r="5" />
        </g>
      </g>
    </svg>
  );
}
