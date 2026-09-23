/**
 * Fallback-e-post for serviceelektriker-søknader.
 *
 * Brukes kun når Monday-kallet i monday-service-application.ts feiler,
 * slik at en søknad aldri går tapt selv om Monday er nede eller
 * kolonne-oppsettet er feil konfigurert.
 */

import { Resend } from "resend";
import type { ServiceApplicationData } from "./monday-service-application";

const FALLBACK_RECIPIENT = "lowrens@northinstallasjon.no";

function buildEmailHtml(data: ServiceApplicationData): string {
  const rows = [
    ["Navn", data.name],
    ["Telefon", data.phone],
    ["E-post", data.email],
    data.message ? ["Søknadstekst", data.message] : null,
  ]
    .filter(Boolean)
    .map(
      (row) =>
        `<tr>
          <td style="padding:8px 12px;font-weight:600;color:#1a3347;white-space:nowrap;background:#f0f7fa;">${row![0]}</td>
          <td style="padding:8px 12px;color:#374151;">${row![1]}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#0e2c40;padding:24px 28px;border-radius:8px 8px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:20px;">
          Ny søknad, serviceelektriker (Monday-varsel feilet)
        </h1>
      </div>
      <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;">
        <table style="width:100%;border-collapse:collapse;">
          ${rows}
        </table>
      </div>
      <div style="margin-top:16px;padding:12px 16px;background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;color:#c2410c;">
        Denne søknaden ble ikke opprettet i Monday automatisk. Legg den inn manuelt
        på boardet "Service CV/søknader".
      </div>
      <p style="color:#9ca3af;font-size:12px;margin-top:24px;">
        Sendt fra northinstallasjon.no/serviceelektriker
      </p>
    </div>
  `;
}

export async function sendServiceApplicationFallbackEmail(
  data: ServiceApplicationData,
  cv?: { filename: string; content: Buffer }
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      "[resend-service-application] Mangler RESEND_API_KEY - kan ikke sende fallback-e-post"
    );
    return;
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "North Nettside <no-reply@northinstallasjon.no>",
    to: FALLBACK_RECIPIENT,
    subject: `Ny søknad, serviceelektriker - ${data.name}`,
    html: buildEmailHtml(data),
    attachments: cv ? [{ filename: cv.filename, content: cv.content }] : undefined,
  });

  if (error) {
    throw new Error(`Resend-feil: ${error.message}`);
  }

  console.log(`[resend-service-application] Fallback-e-post sendt til ${FALLBACK_RECIPIENT}`);
}
