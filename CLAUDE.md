# North Installasjon - Prosjektregler

## Prosjekt
- **Nettside:** northinstallasjon.no (kanonisk: www.northinstallasjon.no)
- **Bransje:** Elektroinstallasjon (privat, bedrift, borettslag)
- **Teknologi:** Next.js 16.1 (App Router), React 19.2, TypeScript, Tailwind CSS
- **Deploy:** Vercel, auto-deploy fra `main`, Node 24.x pinnet i package.json
- **Kontakt:** post@northinstallasjon.no, 749 99 333

## Arkitektur
- Sider i `src/app/`, delte seksjoner i `src/components/`
- Alt redigerbart innhold ligger som datafiler i `src/lib/`:
  `business-data.ts` (firmainfo), `calculator-data.ts` (kalkulatorpriser),
  `team-data.ts`, `projects-data.ts`, `reviews-data.ts`, `careers-data.ts`
- Blogg som MDX i `content/blog/`, sammenlign-artikler i `content/sammenlign/`,
  bilder i `public/images/blog/`
- Priskalkulator med valgfri Google Places-autocomplete på adressefeltet
- E2E-tester med Playwright i `tests/`

## Skjema-flyt
- Kontaktskjema (forside + /kontakt), kalkulator og jobbsøknad poster alle til
  `/api/submit-lead`
- Ruten krever source, navn, telefon og e-post, oppretter kort i Monday og
  sender valgfritt e-postvarsel via Resend ved vedlegg

## Viktige regler
- Norsk bokmål med æøå i all brukersynlig tekst; aldri tankestrek (em-dash)
- Ingen emoji i kode, innhold eller commits
- Kanonisk URL er www-subdomenet; robots, sitemap og canonical antar www
- Alle bilder i `.webp`-format for ytelse
- **CSP-en i `next.config.ts` er enforced.** Nye eksterne domener (script,
  connect, img) må whitelistes der, ellers blokkeres de i produksjon
- Aldri commit `.env` eller hemmeligheter
- Ikke slett filer eller gjør destruktive endringer uten å spørre først
- Spør før du committer, pusher eller gjør irreversible handlinger

## Miljøvariabler
Se `.env.example` for full liste. Påkrevd i produksjon: `MONDAY_API_KEY`,
`MONDAY_BOARD_ID`. Valgfri: `RESEND_API_KEY`, `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`,
`MONDAY_ADDRESS_COLUMN_ID`/`_TYPE`.
