import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  Svg,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "@react-pdf/renderer";
import type { PriceLine } from "@/lib/calculator-data";
import { BUSINESS, STATS } from "@/lib/business-data";
import { LOGO_BASE64 } from "./logo-data";

// ---------------------------------------------------------------------------
// Colors
// ---------------------------------------------------------------------------
const C = {
  navyDark: "#0e2c3d",
  navy: "#023849",
  green: "#00d084",
  greenDark: "#00a86b",
  white: "#ffffff",
  lightGray: "#f4f7f9",
};

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const s = StyleSheet.create({
  // -- Page defaults --
  pageDark: {
    backgroundColor: C.navyDark,
    padding: 48,
    fontFamily: "Helvetica",
    color: C.white,
    position: "relative",
  },
  pageLight: {
    backgroundColor: C.white,
    paddingTop: 40,
    paddingBottom: 48,
    paddingLeft: 32,
    paddingRight: 40,
    fontFamily: "Helvetica",
    color: C.navyDark,
    position: "relative",
  },

  // -- Nordlys SVG container --
  nordlysContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 180,
    overflow: "hidden",
  },

  // -- Cover --
  logo: { width: 140, marginBottom: 40 },
  accentBar: {
    width: 60,
    height: 4,
    backgroundColor: C.green,
    marginBottom: 24,
    borderRadius: 2,
  },
  coverTitle: {
    fontSize: 36,
    fontFamily: "Helvetica-Bold",
    color: C.white,
    marginBottom: 10,
  },
  coverSubtitle: {
    fontSize: 16,
    color: C.green,
    marginBottom: 6,
  },
  coverDate: {
    fontSize: 12,
    color: "#8faab8",
    marginBottom: 0,
  },
  // -- Cover pitch section --
  coverPitch: {
    marginTop: 40,
    marginBottom: 20,
  },
  coverPitchHeading: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: C.green,
    marginBottom: 10,
  },
  coverPitchText: {
    fontSize: 11,
    color: "#a8cdd9",
    lineHeight: 1.7,
    marginBottom: 6,
  },
  coverStats: {
    flexDirection: "row",
    marginTop: 16,
    gap: 24,
  },
  coverStat: {
    alignItems: "center",
  },
  coverStatNumber: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: C.green,
  },
  coverStatLabel: {
    fontSize: 9,
    color: "#6a98ad",
    marginTop: 2,
  },

  // -- Page 2 decorations --
  page2Sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: 6,
    backgroundColor: C.navyDark,
  },
  page2SidebarAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 6,
    height: 80,
    backgroundColor: C.green,
  },
  page2Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#d5e8f0",
  },
  page2Logo: {
    width: 80,
    opacity: 0.7,
  },
  page2BottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 6,
    backgroundColor: C.navyDark,
  },

  // -- Price page --
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    marginBottom: 0,
    color: C.navyDark,
  },
  table: {
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#d5e8f0",
  },
  tableRowAlt: {
    backgroundColor: C.lightGray,
  },
  tableLabel: {
    fontSize: 11,
    color: C.navyDark,
    flex: 1,
  },
  tableVal: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: C.navyDark,
    textAlign: "right",
    minWidth: 80,
  },
  totalsBox: {
    backgroundColor: C.navyDark,
    borderRadius: 8,
    padding: 16,
    marginTop: 8,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalIncLabel: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: C.white,
  },
  totalIncVal: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: C.green,
  },
  crossSellSection: {
    marginTop: 20,
  },
  crossSellTitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: C.navyDark,
    marginBottom: 8,
  },
  crossSellRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: C.lightGray,
    borderRadius: 4,
    marginBottom: 4,
  },
  northTryggBox: {
    marginTop: 16,
    padding: 14,
    backgroundColor: C.lightGray,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: C.green,
  },
  northTryggTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: C.navyDark,
    marginBottom: 4,
  },
  northTryggText: {
    fontSize: 10,
    color: "#4a6e7f",
    lineHeight: 1.5,
  },
  disclaimerBox: {
    marginTop: 20,
    padding: 14,
    backgroundColor: C.lightGray,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: C.green,
  },
  disclaimerText: {
    fontSize: 10,
    color: "#4a6e7f",
    lineHeight: 1.5,
  },

  // -- USP items (reused in CTA) --
  uspItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  uspCheckLight: {
    fontSize: 11,
    color: C.green,
    marginRight: 8,
    fontFamily: "Helvetica-Bold",
  },
  uspTextLight: {
    fontSize: 10,
    color: "#a8cdd9",
  },

  // -- CTA box --
  ctaBox: {
    marginTop: "auto",
    padding: 24,
    backgroundColor: C.navyDark,
    borderRadius: 10,
  },
  ctaTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: C.green,
    marginBottom: 12,
  },
  ctaContactRow: {
    marginBottom: 14,
  },
  ctaLine: {
    fontSize: 11,
    color: "#a8cdd9",
    marginBottom: 4,
    lineHeight: 1.5,
  },
  ctaDivider: {
    height: 1,
    backgroundColor: "#1e4a5e",
    marginBottom: 14,
  },
  ctaUspRow: {},
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function fmtKr(n: number): string {
  return Math.round(n).toLocaleString("nb-NO") + "\u00a0kr";
}

function fmtDate(): string {
  const d = new Date();
  const months = [
    "januar",
    "februar",
    "mars",
    "april",
    "mai",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "desember",
  ];
  return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`;
}

// ---------------------------------------------------------------------------
// Nordlys SVG component
// ---------------------------------------------------------------------------

function NordlysSvg() {
  return (
    <View style={s.nordlysContainer}>
      <Svg width="595" height="180" viewBox="0 0 595 180">
        <Defs>
          <LinearGradient id="nordlys1" x1="0" y1="0" x2="1" y2="0.8">
            <Stop offset="0%" stopColor={C.green} stopOpacity={0.45} />
            <Stop offset="40%" stopColor="#0a6e5c" stopOpacity={0.35} />
            <Stop offset="100%" stopColor={C.navy} stopOpacity={0.2} />
          </LinearGradient>
          <LinearGradient id="nordlys2" x1="1" y1="0" x2="0" y2="0.6">
            <Stop offset="0%" stopColor={C.green} stopOpacity={0.3} />
            <Stop offset="50%" stopColor="#0a6e5c" stopOpacity={0.2} />
            <Stop offset="100%" stopColor={C.navyDark} stopOpacity={0.05} />
          </LinearGradient>
          <LinearGradient id="nordlys3" x1="0.3" y1="0" x2="0.7" y2="1">
            <Stop offset="0%" stopColor={C.green} stopOpacity={0.2} />
            <Stop offset="100%" stopColor={C.navyDark} stopOpacity={0} />
          </LinearGradient>
        </Defs>
        {/* Wave 1 - broad smooth sweep */}
        <Path
          d="M0 80 C60 40, 150 60, 240 35 C330 10, 420 55, 500 30 C540 20, 570 35, 595 25 L595 180 L0 180 Z"
          fill="url(#nordlys1)"
        />
        {/* Wave 2 - mid curve */}
        <Path
          d="M0 110 C80 80, 170 100, 260 75 C350 50, 440 90, 530 65 C560 55, 580 70, 595 60 L595 180 L0 180 Z"
          fill="url(#nordlys2)"
        />
        {/* Wave 3 - subtle foreground */}
        <Path
          d="M0 140 C100 120, 200 135, 320 115 C420 100, 500 130, 595 110 L595 180 L0 180 Z"
          fill="url(#nordlys3)"
        />
      </Svg>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export interface NorthPDFProps {
  serviceHeader: string;
  lines: PriceLine[];
  exVat: number;
  incVat: number;
  isRange?: boolean;
  minIncVat?: number;
  maxIncVat?: number;
  crossSellItems?: { name: string; price: number }[];
  northTrygg: boolean;
}

export function NorthPDF({
  serviceHeader,
  lines,
  crossSellItems,
  northTrygg,
  incVat,
  isRange,
  minIncVat,
  maxIncVat,
}: NorthPDFProps) {
  const totalDisplay = isRange && minIncVat != null && maxIncVat != null
    ? `ca. ${fmtKr(minIncVat)} – ${fmtKr(maxIncVat)}`
    : fmtKr(incVat);
  return (
    <Document>
      {/* ---------------------------------------------------------------- */}
      {/* PAGE 1: COVER (dark with nordlys SVG)                            */}
      {/* ---------------------------------------------------------------- */}
      <Page size="A4" style={s.pageDark}>
        <NordlysSvg />

        <Image src={LOGO_BASE64} style={s.logo} />
        <View style={s.accentBar} />
        <Text style={s.coverTitle}>Ditt prisestimat</Text>
        <Text style={s.coverSubtitle}>{serviceHeader}</Text>
        <Text style={s.coverDate}>{fmtDate()}</Text>

        {/* North pitch */}
        <View style={s.coverPitch}>
          <Text style={s.coverPitchHeading}>Hvorfor velge North?</Text>
          <Text style={s.coverPitchText}>
            North Installasjon er en autorisert elektroinstallatør i
            Oslo-området. Vi leverer trygge, forskriftsmessige
            elektroinstallasjoner for privatboliger, bedrifter og borettslag.
          </Text>
          <Text style={s.coverPitchText}>
            Alle jobber utføres av sertifiserte montører og leveres med
            samsvarserklæring og garanti.
          </Text>
          <View style={s.coverStats}>
            <View style={s.coverStat}>
              <Text style={s.coverStatNumber}>{STATS.customers}</Text>
              <Text style={s.coverStatLabel}>fornøyde kunder</Text>
            </View>
            <View style={s.coverStat}>
              <Text style={s.coverStatNumber}>{STATS.experienceYears}</Text>
              <Text style={s.coverStatLabel}>års erfaring</Text>
            </View>
            <View style={s.coverStat}>
              <Text style={s.coverStatNumber}>{STATS.rating}/5</Text>
              <Text style={s.coverStatLabel}>på Google</Text>
            </View>
          </View>
        </View>
      </Page>

      {/* ---------------------------------------------------------------- */}
      {/* PAGE 2: PRICE DETAILS + USP + CTA                                */}
      {/* ---------------------------------------------------------------- */}
      <Page size="A4" style={s.pageLight}>
        {/* Decorations */}
        <View style={s.page2Sidebar} />
        <View style={s.page2SidebarAccent} />
        <View style={s.page2BottomBar} />

        {/* Header with logo */}
        <View style={s.page2Header}>
          <Text style={s.sectionTitle}>{serviceHeader}</Text>
          <Image src={LOGO_BASE64} style={s.page2Logo} />
        </View>

        {/* Price table */}
        <View style={s.table}>
          {lines.map((line, i) => (
            <View
              key={`line-${i}`}
              style={[s.tableRow, i % 2 === 1 ? s.tableRowAlt : {}]}
            >
              <Text style={s.tableLabel}>{line.label}</Text>
              <Text style={s.tableVal}>{fmtKr(line.val)}</Text>
            </View>
          ))}
        </View>

        {/* Total - only incl. mva */}
        <View style={s.totalsBox}>
          <View style={s.totalRow}>
            <Text style={s.totalIncLabel}>
              {isRange ? "Prisestimat inkl. mva" : "Total inkl. mva"}
            </Text>
            <Text style={s.totalIncVal}>{totalDisplay}</Text>
          </View>
        </View>

        {/* Cross-sell */}
        {crossSellItems && crossSellItems.length > 0 && (
          <View style={s.crossSellSection}>
            <Text style={s.crossSellTitle}>Tilleggstjenester valgt</Text>
            {crossSellItems.map((item, i) => (
              <View key={`cs-${i}`} style={s.crossSellRow}>
                <Text style={s.tableLabel}>{item.name}</Text>
                <Text style={s.tableVal}>{fmtKr(item.price)}</Text>
              </View>
            ))}
          </View>
        )}

        {/* North Trygg */}
        {northTrygg && (
          <View style={s.northTryggBox}>
            <Text style={s.northTryggTitle}>
              North Trygg, serviceavtale (valgt)
            </Text>
            <Text style={s.northTryggText}>
              Inkluderer: Årlig elkontroll, prioritert responstid, 10% rabatt
              på fremtidige jobber, samsvarserklæring oppdatert årlig. Fra 199
              kr/mnd.
            </Text>
          </View>
        )}

        {/* Disclaimer */}
        <View style={s.disclaimerBox}>
          <Text style={s.disclaimerText}>
            Dette er et estimat. Endelig pris avtales etter befaring.
          </Text>
        </View>

        {/* CTA box - pushed to bottom */}
        <View style={s.ctaBox}>
          <Text style={s.ctaTitle}>Klar for å komme i gang?</Text>
          <View style={s.ctaContactRow}>
            <Text style={s.ctaLine}>Telefon: {BUSINESS.phoneDisplay}</Text>
            <Text style={s.ctaLine}>E-post: {BUSINESS.email}</Text>
            <Text style={s.ctaLine}>Nett: northinstallasjon.no</Text>
          </View>
          <View style={s.ctaDivider} />
          <View style={s.ctaUspRow}>
            {[
              "Autorisert elektroinstallatør",
              "Garanti på alt arbeid",
              "Samsvarserklæring inkludert",
            ].map((text, i) => (
              <View key={`usp-${i}`} style={s.uspItem}>
                <Text style={s.uspCheckLight}>&#x2713;</Text>
                <Text style={s.uspTextLight}>{text}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
