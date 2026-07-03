import { PARTNERS } from "@/lib/business-data";

export default function PartnerLogos() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-lg font-medium text-navy-dark text-center mb-8 tracking-wide">
          Noen av våre samarbeidspartnere
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center border border-navy-dark/10 rounded-lg px-6 py-4"
            >
              <span className="text-navy-dark/80 font-medium text-sm tracking-wide">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
