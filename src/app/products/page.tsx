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
              eyebrow={<Trans en="Products" hi="उत्पाद" />}
              title={<Trans en="Premium implements built for global farms" hi="वैश्विक खेतों के लिए प्रीमियम उपकरण" />}
              subtitle={<Trans en="Filter by category or search by product name." hi="श्रेणी चुनें या उत्पाद खोजें।" />}
            />
          </div>
          <div className="md:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate">
              <Trans en="Products" hi="उत्पाद" />
            </p>
            <h1 className="mt-2 font-display text-2xl font-semibold text-ink">
              <Trans en="Agroking Implement Store" hi="Agroking उत्पाद स्टोर" />
            </h1>
            <p className="mt-2 text-sm text-slate">
              <Trans en="Browse implements by category and HP range." hi="श्रेणी और HP के अनुसार देखें।" />
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ProductsFilter />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-ink/10 bg-white p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate">
              <Trans en="Brochures" hi="ब्रॉशर" />
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              <Trans en="Need detailed specs?" hi="विस्तृत स्पेसिफिकेशन चाहिए?" />
            </h2>
            <p className="mt-2 text-sm text-slate">
              <Trans en="Browse the brochure library for every implement." hi="हर उत्पाद के ब्रॉशर देखें।" />
            </p>
            <Link
              href="/brochure"
              className="mt-4 inline-flex rounded-full border border-ink/10 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-ink"
            >
              <Trans en="View brochures" hi="ब्रॉशर देखें" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
