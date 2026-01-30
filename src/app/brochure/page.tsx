import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Brochure",
  description: "Download Agroking product brochures.",
};

export default function BrochurePage() {
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-4xl space-y-8 px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Brochures"
            title="Download product brochures"
            subtitle="Placeholder download center. Replace with real PDFs when available."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="space-y-4">
            {site.products.map((product) => (
              <div
                key={product.slug}
                className="flex flex-col items-start justify-between gap-4 rounded-xl border border-ink/10 bg-white p-5 md:flex-row md:items-center"
              >
                <div>
                  <p className="text-sm font-semibold text-ink">{product.name}</p>
                  <p className="text-xs text-slate">{product.shortDescription}</p>
                </div>
                <Button variant="secondary" size="sm" href="#">
                  Download PDF
                </Button>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
