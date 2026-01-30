import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductsFilter } from "@/components/ProductsFilter";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Agroking's export-ready agricultural implements.",
};

export default function ProductsPage() {
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <FadeIn>
          <div className="hidden md:block">
            <SectionHeading
              eyebrow="Products"
              title="Premium implements built for global farms"
              subtitle="Filter by category or search by product name."
            />
          </div>
          <div className="md:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate">Products</p>
            <h1 className="mt-2 font-display text-2xl font-semibold text-ink">
              Agroking Implement Store
            </h1>
            <p className="mt-2 text-sm text-slate">Browse implements by category and HP range.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ProductsFilter />
        </FadeIn>
      </div>
    </div>
  );
}
