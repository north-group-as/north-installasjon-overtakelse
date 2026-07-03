import { Check, X } from "lucide-react";
import type { ProductSpec } from "@/lib/comparisons";

interface Props {
  products: ProductSpec[];
}

const ROW_LABELS: Record<string, string> = {
  name: "Modell",
  brand: "Merke",
  price: "Pris (kun lader)",
  power: "Effekt",
  app: "App-styring",
  loadBalancing: "Lastbalansering",
  builtInDCProtection: "Innebygd DC-vern",
  warranty: "Garanti",
  origin: "Opprinnelse",
  bestFor: "Best for",
  rating: "Vår vurdering",
};

const SPEC_KEYS = Object.keys(ROW_LABELS) as (keyof ProductSpec)[];

function parseLeadingNumber(value: string): number | null {
  const match = value.match(/^[\d\s]*[\d,.]+/);
  if (!match) return null;
  return parseFloat(match[0].replace(/\s/g, "").replace(",", "."));
}

function getBestIndices(
  key: keyof ProductSpec,
  products: ProductSpec[]
): Set<number> {
  const best = new Set<number>();

  if (key === "rating") {
    let max = -1;
    products.forEach((p, i) => {
      if (p.rating != null && p.rating > max) max = p.rating;
    });
    if (max > 0) {
      products.forEach((p, i) => {
        if (p.rating === max) best.add(i);
      });
    }
    return best;
  }

  if (key === "price") {
    let min = Infinity;
    products.forEach((p, i) => {
      const n = parseLeadingNumber(p.price);
      if (n != null && n < min) min = n;
    });
    if (min < Infinity) {
      products.forEach((p, i) => {
        const n = parseLeadingNumber(p.price);
        if (n === min) best.add(i);
      });
    }
    return best;
  }

  if (key === "power") {
    let max = -1;
    products.forEach((p, i) => {
      const n = parseLeadingNumber(p.power);
      if (n != null && n > max) max = n;
    });
    if (max > 0) {
      products.forEach((p, i) => {
        const n = parseLeadingNumber(p.power);
        if (n === max) best.add(i);
      });
    }
    return best;
  }

  if (key === "builtInDCProtection") {
    products.forEach((p, i) => {
      if (p.builtInDCProtection) best.add(i);
    });
    return best;
  }

  if (key === "warranty") {
    let max = -1;
    products.forEach((p, i) => {
      const n = parseLeadingNumber(p.warranty);
      if (n != null && n > max) max = n;
    });
    if (max > 0) {
      products.forEach((p, i) => {
        const n = parseLeadingNumber(p.warranty);
        if (n === max) best.add(i);
      });
    }
    return best;
  }

  return best;
}

function RatingBar({ rating }: { rating: number }) {
  const pct = (rating / 10) * 100;
  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold">{rating}/10</span>
      <div className="h-2 w-20 rounded-full bg-navy-dark/10">
        <div
          className="h-full rounded-full bg-teal-accent"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function BooleanIcon({ value }: { value: boolean }) {
  return value ? (
    <Check className="size-5 text-green" />
  ) : (
    <X className="size-5 text-red-500" />
  );
}

function CellValue({
  specKey,
  product,
  isBest,
}: {
  specKey: keyof ProductSpec;
  product: ProductSpec;
  isBest: boolean;
}) {
  const highlight = isBest ? "text-teal-accent font-semibold" : "";

  if (specKey === "builtInDCProtection") {
    return (
      <span className={isBest ? "text-teal-accent" : ""}>
        <BooleanIcon value={product.builtInDCProtection} />
      </span>
    );
  }

  if (specKey === "rating") {
    if (product.rating == null) return <span className="text-navy-dark/40">-</span>;
    return (
      <span className={highlight}>
        <RatingBar rating={product.rating} />
      </span>
    );
  }

  const value = product[specKey] as string;
  return <span className={highlight}>{value}</span>;
}

export default function ProductComparisonTable({ products }: Props) {
  if (products.length === 0) return null;

  const bestByKey = new Map<keyof ProductSpec, Set<number>>();
  for (const key of SPEC_KEYS) {
    bestByKey.set(key, getBestIndices(key, products));
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table aria-label="Produktsammenligning" className="w-full border-collapse text-sm">
          <caption className="sr-only">Oversikt og sammenligning av produktspesifikasjoner</caption>
          <thead>
            <tr>
              <th className="bg-navy-dark/5 text-navy-dark font-semibold text-left p-3 border border-navy-dark/10 min-w-[140px]">
                Spesifikasjon
              </th>
              {products.map((p) => (
                <th
                  key={p.name}
                  className="bg-navy-dark/5 text-navy-dark font-semibold text-left p-3 border border-navy-dark/10"
                >
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SPEC_KEYS.map((key) => (
              <tr key={key} className="even:bg-navy-dark/5">
                <td className="p-3 border border-navy-dark/10 font-medium text-navy-dark">
                  {ROW_LABELS[key]}
                </td>
                {products.map((product, i) => (
                  <td
                    key={product.name}
                    className="p-3 border border-navy-dark/10"
                  >
                    <CellValue
                      specKey={key}
                      product={product}
                      isBest={bestByKey.get(key)?.has(i) ?? false}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card stack */}
      <div className="flex flex-col gap-4 md:hidden">
        {products.map((product, productIndex) => (
          <div
            key={product.name}
            className="rounded-xl border border-navy-dark/10 overflow-hidden"
          >
            <div className="bg-navy-dark/5 p-4">
              <h2 className="text-navy-dark font-semibold text-lg">
                {product.name}
              </h2>
              <p className="text-navy-dark/60 text-sm">{product.brand}</p>
            </div>
            <div className="divide-y divide-navy-dark/10">
              {SPEC_KEYS.filter((k) => k !== "name" && k !== "brand").map(
                (key) => (
                  <div
                    key={key}
                    className="flex items-center justify-between px-4 py-3 text-sm"
                  >
                    <span className="font-medium text-navy-dark/70">
                      {ROW_LABELS[key]}
                    </span>
                    <span className="text-right">
                      <CellValue
                        specKey={key}
                        product={product}
                        isBest={
                          bestByKey.get(key)?.has(productIndex) ?? false
                        }
                      />
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
