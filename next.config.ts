import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async headers() {
    const cspReportOnly = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://vitals.vercel-insights.com",
      "frame-src 'self'",
      "frame-ancestors 'none'",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=()" },
          { key: "Content-Security-Policy", value: cspReportOnly },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/elektriker-oslo/service-elektriker", destination: "/tjenester/service", permanent: true },
      { source: "/elektriker-oslo/service-elektriker/", destination: "/tjenester/service", permanent: true },
      { source: "/elektrikker-for-din-bedrift", destination: "/tjenester/bedrift", permanent: true },
      { source: "/elektrikker-for-din-bedrift/", destination: "/tjenester/bedrift", permanent: true },
      { source: "/elektriker-oslo/elektrikker-restaurant-og-butikk", destination: "/tjenester/restaurant-og-naering", permanent: true },
      { source: "/elektriker-oslo/elektrikker-restaurant-og-butikk/", destination: "/tjenester/restaurant-og-naering", permanent: true },
      { source: "/elektriker-oslo/elektrikker-for-borettslag", destination: "/tjenester/borettslag-og-sameie", permanent: true },
      { source: "/elektriker-oslo/elektrikker-for-borettslag/", destination: "/tjenester/borettslag-og-sameie", permanent: true },
      { source: "/elektrotjenester", destination: "/tjenester", permanent: true },
      { source: "/elektrotjenester/", destination: "/tjenester", permanent: true },

      // WordPress-migrering: sider som ikke har direkte match i Next.js
      { source: "/jobbsoker", destination: "/karriere", permanent: true },
      { source: "/jobbsoker/", destination: "/karriere", permanent: true },
      { source: "/din-elektriker", destination: "/", permanent: true },
      { source: "/din-elektriker/", destination: "/", permanent: true },
      { source: "/elektriker-oslo/elbillader-for-jul", destination: "/tjenester/elbillader", permanent: true },
      { source: "/elektriker-oslo/elbillader-for-jul/", destination: "/tjenester/elbillader", permanent: true },
      { source: "/digitale-kurs", destination: "/kurs", permanent: true },
      { source: "/digitale-kurs/", destination: "/kurs", permanent: true },
      { source: "/kursoversikt", destination: "/kurs", permanent: true },
      { source: "/kursoversikt/", destination: "/kurs", permanent: true },
      { source: "/my-account", destination: "/", permanent: true },
      { source: "/my-account/", destination: "/", permanent: true },
      { source: "/author/:slug", destination: "/om-oss", permanent: true },
      { source: "/author/:slug/", destination: "/om-oss", permanent: true },
      { source: "/product-category/:path*", destination: "/", permanent: true },

      // /about er duplikat av /om-oss (engelsk metadata, norsk body). SEO-audit 2026-06-15:
      // 308-redirect alt til norsk primærside. Hindrer dobbel indexering og sparer crawl-budsjett.
      { source: "/about", destination: "/om-oss", permanent: true },
      { source: "/about/", destination: "/om-oss", permanent: true },
      { source: "/about-us", destination: "/om-oss", permanent: true },
      { source: "/about-us/", destination: "/om-oss", permanent: true },

      // Redirecter for gamle slugs med spesialtegn
      { source: "/elektriker/lillestr%C3%B8m", destination: "/elektriker/lillestrom", permanent: true },
      { source: "/elektriker/l%C3%B8renskog", destination: "/elektriker/lorenskog", permanent: true },
      { source: "/elektriker/%C3%A5s", destination: "/elektriker/as", permanent: true },

      { source: "/tjenester/elektriker-oslo", destination: "/elektriker/oslo", permanent: true },
      { source: "/tjenester/elektriker-oslo/", destination: "/elektriker/oslo", permanent: true },
    ];
  },
};

export default nextConfig;
