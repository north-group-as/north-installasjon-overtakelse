// Speilvendt variant av hero-grafikken for "Gleder du deg til mandag?":
// firkantpuls, kretsbaner, brikker og prikknett kommer inn fra begge kanter,
// mens et radielt maskefelt holder midten (der teksten står) rolig.
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
        <radialGradient id="monday-art-fade" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0.3" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="0.85" stopColor="#fff" stopOpacity="1" />
        </radialGradient>
        <mask id="monday-art-mask">
          <rect width="1440" height="640" fill="url(#monday-art-fade)" />
        </mask>
        <pattern id="monday-art-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="currentColor" />
        </pattern>
      </defs>

      <g mask="url(#monday-art-mask)">
        {/* Prikknett i alle fire hjørner */}
        <g className="text-white/[0.08]">
          <rect x="0" y="0" width="380" height="260" fill="url(#monday-art-dots)" />
          <rect x="1060" y="380" width="380" height="260" fill="url(#monday-art-dots)" />
          <rect x="1180" y="0" width="260" height="180" fill="url(#monday-art-dots)" />
          <rect x="0" y="460" width="260" height="180" fill="url(#monday-art-dots)" />
        </g>

        {/* Kvartbuer i motsatte hjørner */}
        <g className="text-teal-accent/35" stroke="currentColor" strokeWidth="1.5">
          <path d="M0 520 A120 120 0 0 1 120 640" />
          <path d="M0 440 A200 200 0 0 1 200 640" strokeDasharray="4 10" />
          <path d="M0 360 A280 280 0 0 1 280 640" />
          <path d="M0 290 A350 350 0 0 1 350 640" strokeDasharray="2 8" />
          <path d="M1440 120 A120 120 0 0 1 1320 0" />
          <path d="M1440 200 A200 200 0 0 1 1240 0" strokeDasharray="4 10" />
          <path d="M1440 280 A280 280 0 0 1 1160 0" />
          <path d="M1440 350 A350 350 0 0 1 1090 0" strokeDasharray="2 8" />
        </g>

        {/* Firkantpuls (digitalt signal) fra begge sider */}
        <g className="text-green/45" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M-20 320 H80 V270 H140 V320 H200 V270 H260 V320 H340 V290 H380 V320 H620" />
          <path d="M1460 320 H1360 V370 H1300 V320 H1240 V370 H1180 V320 H1100 V350 H1060 V320 H820" />
        </g>
        <g className="text-green/25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M-20 90 H60 V60 H100 V90 H180 V60 H220 V90 H300" />
          <path d="M1460 560 H1380 V590 H1340 V560 H1260 V590 H1220 V560 H1140" />
          <path d="M1460 90 H1400 V120 H1360 V90 H1300" />
          <path d="M-20 560 H40 V530 H80 V560 H140" />
        </g>

        {/* Kretsbaner, speilvendt */}
        <g className="text-teal-accent/50" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round">
          <path d="M0 150 H180 L230 200 H420 L460 160 H560" />
          <path d="M0 470 H140 L190 420 H360 L400 460 H520" />
          <path d="M300 0 V60 L340 100 V130" />
          <path d="M0 230 H90 L120 260 V300" />
          <path d="M420 640 V580 L460 540 H540" />
          <path d="M1440 490 H1260 L1210 440 H1020 L980 480 H880" />
          <path d="M1440 170 H1300 L1250 220 H1080 L1040 180 H920" />
          <path d="M1140 640 V580 L1100 540 V510" />
          <path d="M1440 410 H1350 L1320 380 V340" />
          <path d="M1020 0 V60 L980 100 H900" />
        </g>
        <g className="text-teal-accent/75" fill="currentColor">
          <circle cx="340" cy="130" r="4" />
          <circle cx="1100" cy="510" r="4" />
          <circle cx="230" cy="200" r="3" />
          <circle cx="1210" cy="440" r="3" />
          <circle cx="190" cy="420" r="3" />
          <circle cx="1250" cy="220" r="3" />
          <circle cx="120" cy="300" r="3.5" />
          <circle cx="1320" cy="340" r="3.5" />
        </g>
        <g className="text-teal-accent/65" stroke="currentColor" strokeWidth="1.5">
          <circle cx="560" cy="160" r="5" />
          <circle cx="520" cy="460" r="5" />
          <circle cx="880" cy="480" r="5" />
          <circle cx="920" cy="180" r="5" />
          <circle cx="540" cy="540" r="5" />
          <circle cx="900" cy="100" r="5" />
        </g>

        {/* Brikker (IC) med pinner, en på hver side */}
        <g className="text-teal-accent/45" stroke="currentColor" strokeWidth="1.5">
          <rect x="150" y="360" width="70" height="44" rx="4" />
          <path d="M165 360 V348 M185 360 V348 M205 360 V348 M165 404 V416 M185 404 V416 M205 404 V416" />
          <rect x="1220" y="236" width="70" height="44" rx="4" />
          <path d="M1235 236 V224 M1255 236 V224 M1275 236 V224 M1235 280 V292 M1255 280 V292 M1275 280 V292" />
        </g>
        <g className="text-green/50" fill="currentColor">
          <circle cx="161" cy="371" r="2.5" />
          <circle cx="1231" cy="247" r="2.5" />
        </g>
      </g>
    </svg>
  );
}
