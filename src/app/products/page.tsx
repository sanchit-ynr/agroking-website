import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductsFilter } from "@/components/ProductsFilter";
import { FadeIn } from "@/components/FadeIn";
import { Trans } from "@/components/Trans";

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
              eyebrow={<Trans text="Products" />}
              title={<Trans text="Premium implements built for global farms" />}
              subtitle={<Trans text="Filter by category or search by product name." />}
            />
          </div>
          <div className="md:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate">
              <Trans text="Products" />
            </p>
            <h1 className="mt-2 font-display text-2xl font-semibold text-ink">
              <Trans text="Agroking Implement Store" />
            </h1>
            <p className="mt-2 text-sm text-slate">
              <Trans text="Browse implements by category and HP range." />
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ProductsFilter />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-ink/10 bg-white p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate">
              <Trans text="Brochures" />
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              <Trans text="Need detailed specs?" />
            </h2>
            <p className="mt-2 text-sm text-slate">
              <Trans text="Browse the brochure library for every implement." />
            </p>
            <Link
              href="/brochure"
              className="mt-4 inline-flex rounded-full border border-ink/10 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-ink"
            >
              <Trans text="View brochures" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
