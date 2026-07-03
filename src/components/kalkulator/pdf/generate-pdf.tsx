import React from "react";
import type { PriceLine } from "@/lib/calculator-data";

export async function generatePDF(params: {
  serviceHeader: string;
  lines: PriceLine[];
  exVat: number;
  incVat: number;
  isRange?: boolean;
  minIncVat?: number;
  maxIncVat?: number;
  crossSellItems?: { name: string; price: number }[];
  northTrygg: boolean;
}): Promise<void> {
  const [{ pdf }, { NorthPDF }] = await Promise.all([
    import("@react-pdf/renderer"),
    import("./NorthPDF"),
  ]);

  const element = (
    <NorthPDF
      serviceHeader={params.serviceHeader}
      lines={params.lines}
      exVat={params.exVat}
      incVat={params.incVat}
      isRange={params.isRange}
      minIncVat={params.minIncVat}
      maxIncVat={params.maxIncVat}
      crossSellItems={params.crossSellItems}
      northTrygg={params.northTrygg}
    />
  );

  const blob = await pdf(element).toBlob();

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "North-Installasjon-Prisestimat.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
