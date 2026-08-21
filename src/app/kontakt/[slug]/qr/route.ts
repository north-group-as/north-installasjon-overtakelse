import QRCode from "qrcode";
import { findContactBySlug } from "@/lib/contacts-data";
import { generateVCard } from "@/lib/vcard";

/**
 * Genererer en QR-kode med vCard-innholdet kodet direkte inn (ikke en
 * lenke). Da viser telefonens kamera navnet med én gang ved skanning,
 * uavhengig av nettsiden. Brukes til å lage/oppdatere trykte
 * visittkort — last ned bildet herfra og send til trykkeriet.
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const contact = findContactBySlug(slug);
  if (!contact) {
    return new Response("Fant ikke kontakt", { status: 404 });
  }

  const vcard = generateVCard(contact);
  const png = await QRCode.toBuffer(vcard, {
    errorCorrectionLevel: "M",
    margin: 2,
    width: 1000,
    color: { dark: "#0e2c3d", light: "#ffffff" },
  });

  return new Response(new Uint8Array(png), {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": `inline; filename="${slug}-qr.png"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
