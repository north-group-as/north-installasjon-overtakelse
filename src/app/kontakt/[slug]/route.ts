import { findContactBySlug } from "@/lib/contacts-data";
import { generateVCard } from "@/lib/vcard";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const name = slug.replace(/\.vcf$/i, "");
  const contact = findContactBySlug(name);
  if (!contact) {
    return new Response("Fant ikke kontakt", { status: 404 });
  }
  return new Response(generateVCard(contact), {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${name}.vcf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
