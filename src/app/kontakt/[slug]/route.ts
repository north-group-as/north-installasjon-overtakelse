import { teamMembers } from "@/lib/team-data";
import { generateVCard } from "@/lib/vcard";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const name = slug.replace(/\.vcf$/i, "");
  const member = teamMembers.find((m) => m.slug === name);
  if (!member) {
    return new Response("Fant ikke kontakt", { status: 404 });
  }
  return new Response(generateVCard(member), {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${member.slug}.vcf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
