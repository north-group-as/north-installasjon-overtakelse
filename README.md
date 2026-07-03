# North Installasjon

Nettsiden til North Installasjon AS: [www.northinstallasjon.no](https://www.northinstallasjon.no).
Elektroinstallasjon for privat, bedrift og borettslag i Oslo-området.

## Stack

- Next.js 16.1 (App Router) med TypeScript
- React 19.2 og Tailwind CSS
- Innhold i koden: sider som komponenter, blogg og sammenlign-sider som MDX
- Hostet på Vercel med auto-deploy fra `main`
- Node 24.x (pinnet i `package.json`, plukkes opp automatisk av Vercel)

## Kom i gang

```bash
npm install
cp .env.example .env.local   # fyll inn verdier, se tabellen under
npm run dev                  # http://localhost:3000
```

## Kommandoer

| Kommando | Gjør |
|---|---|
| `npm run dev` | Lokal utviklingsserver |
| `npm run build` | Produksjonsbygg |
| `npm run lint` | ESLint |
| `npx playwright test` | E2E-tester i `tests/` (første gang: `npx playwright install`) |

## Miljøvariabler

Settes i `.env.local` lokalt og i Vercel (Project Settings, Environment
Variables) i produksjon. Full mal i `.env.example`.

| Variabel | Status | Funksjon |
|---|---|---|
| `MONDAY_API_KEY` | påkrevd | Leads og filopplasting til Monday |
| `MONDAY_BOARD_ID` | påkrevd | Board-ID for CRM-tavlen |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | valgfri | Adresse-autocomplete i priskalkulatoren. Uten den blir feltet et vanlig tekstfelt |
| `RESEND_API_KEY` | valgfri | E-postvarsel ved innsendinger med vedlegg |
| `MONDAY_ADDRESS_COLUMN_ID` / `_TYPE` | valgfri | Overstyrer hvilken Monday-kolonne adressen havner i |

## Slik gjør du vanlige endringer

| Oppgave | Hvor |
|---|---|
| Telefon, e-post, adresse | `src/lib/business-data.ts` |
| Ansatte | `src/lib/team-data.ts` + bilde i `public/images/team/` |
| Priser og valg i kalkulatoren | `src/lib/calculator-data.ts` |
| Prosjekter/referanser | `src/lib/projects-data.ts` |
| Anmeldelser | `src/lib/reviews-data.ts` |
| Ledige stillinger | `src/lib/careers-data.ts` |
| Nytt blogginnlegg | Ny `.mdx`-fil i `content/blog/` + webp-bilde i `public/images/blog/` |
| Sammenlign-artikler (elbilladere) | `content/sammenlign/` |
| Tekst på en side | `src/app/<rute>/page.tsx` |

Frontmatter-mal for blogginnlegg:

```yaml
---
title: "Tittel på innlegget"
metaTitle: "Kort SEO-tittel"
description: "Kort beskrivelse for søkemotorer."
date: "2026-07-04"
category: "fagartikkel"
image: "/images/blog/mitt-bilde.webp"
author: "North Installasjon"
keywords: ["nokkelord", "flere nokkelord"]
---
```

## Skjema og leads

Kontaktskjema, priskalkulator og jobbsøknad poster alle til
`/api/submit-lead`, som oppretter kort i Monday og sender valgfritt
e-postvarsel via Resend. Påkrevde felt: source, navn, telefon, e-post.

## Verdt å vite

- Kanonisk adresse er `www.northinstallasjon.no`; apex skal redirecte til www.
- **CSP-en i `next.config.ts` er streng og blokkerer faktisk.** Skal du ta i
  bruk et nytt eksternt domene (script, API, bilder), må det legges til der
  først. Gjelder også `maps.googleapis.com` hvis kalkulatorens
  adresse-autocomplete skal aktiveres.
- Alle bilder skal være `.webp` for ytelse.
- `public/llms.txt` serveres på `/llms.txt` og er en kuratert oversikt for
  AI-søkemotorer; oppdater den ved store endringer i tjenestetilbudet.
