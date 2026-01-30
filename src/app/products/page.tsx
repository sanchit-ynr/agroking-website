import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductsFilter } from "@/components/ProductsFilter";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Agroking's export-ready agricultural implements.",
};

export default function ProductsPage() {
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <SectionHeading
          eyebrow="Products"
          title="Premium implements built for global farms"
          subtitle="Filter by category or search by product name."
        />
        <ProductsFilter />
      </div>
    </div>
  );
}
