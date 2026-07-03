/**
 * Resend e-postintegrasjon - sender filer til North
 *
 * Oppsett:
 * 1. Opprett konto på resend.com
 * 2. Legg til RESEND_API_KEY i .env
 * 3. Verifiser domenet northinstallasjon.no i Resend (for fra-adressen)
 *    Inntil domenet er verifisert, bruk onboarding@resend.dev som fra-adresse
 */

import { Resend } from "resend";
import type { LeadData, LeadSource } from "./monday";

const SOURCE_LABELS: Record<LeadSource, string> = {
  kontakt: "Kontaktskjema",
  kalkulator: "Kalkulator",
  jobb: "Jobbsøker",
};

function buildEmailHtml(data: LeadData): string {
  const rows = [
    ["Navn", data.name],
    ["Telefon", data.phone],
    ["E-post", data.email],
    data.address ? ["Adresse", data.address] : null,
    data.service ? ["Tjeneste", data.service] : null,
    data.position ? ["Stilling", data.position] : null,
    typeof data.estimate === "number"
      ? ["Prisestimat", `${data.estimate.toLocaleString("nb-NO")} kr (inkl. mva)`]
      : null,
    data.haster ? ["Haster", "Ja"] : null,
    data.message ? ["Melding", data.message] : null,
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
          Ny innkommende henvendelse – ${SOURCE_LABELS[data.source]}
        </h1>
      </div>
      <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;">
        <table style="width:100%;border-collapse:collapse;">
          ${rows}
        </table>
      </div>
      ${
        data.haster
          ? `<div style="margin-top:16px;padding:12px 16px;background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;color:#c2410c;font-weight:600;">
              Hastehenvendelse – prioriter tilbakemelding
            </div>`
          : ""
      }
      <p style="color:#9ca3af;font-size:12px;margin-top:24px;">
        Sendt fra northinstallasjon.no
      </p>
    </div>
  `;
}

export interface FileAttachment {
  filename: string;
  content: Buffer;
}

export async function sendFileEmail(
  data: LeadData,
  attachments: FileAttachment[]
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      "[resend] Mangler RESEND_API_KEY - hopper over e-postutsending"
    );
    return;
  }

  const resend = new Resend(apiKey);
  const sourceLabel = SOURCE_LABELS[data.source];

  const { error } = await resend.emails.send({
    from: "North Nettside <no-reply@northinstallasjon.no>",
    to: "post@northinstallasjon.no",
    subject: `[${sourceLabel}] Ny henvendelse – ${data.name}${data.haster ? " 🚨 HASTER" : ""}`,
    html: buildEmailHtml(data),
    attachments: attachments.map((a) => ({
      filename: a.filename,
      content: a.content,
    })),
  });

  if (error) {
    throw new Error(`Resend-feil: ${error.message}`);
  }

  console.log(`[resend] E-post sendt til post@northinstallasjon.no`);
}
