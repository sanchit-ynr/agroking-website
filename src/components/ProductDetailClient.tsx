"use client";

import Image from "next/image";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { SpecsTable } from "@/components/SpecsTable";
import { LeadForm } from "@/components/LeadForm";
import { Trans } from "@/components/Trans";
import { useLang } from "@/components/LanguageProvider";
import { t } from "@/content/i18n";
import { FadeIn } from "@/components/FadeIn";
import { site } from "@/content/site";

interface ProductDetailClientProps {
  product: typeof site.products[number];
  category?: (typeof site.productCategories)[number];
}

export function ProductDetailClient({ product, category }: ProductDetailClientProps) {
  const { lang } = useLang();

  return (
    <div className="section bg-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.6fr_0.8fr]">
        <div className="space-y-8">
          <FadeIn>
            <div className="space-y-4">
              <Badge>{t(lang, category?.name ?? "Category")}</Badge>
              <h1 className="font-display text-4xl font-semibold text-ink">{t(lang, product.name)}</h1>
              <p className="text-lg text-slate">{t(lang, product.description)}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid gap-4 md:grid-cols-2">
              {product.images.map((image, index) => (
                <div key={image} className="overflow-hidden rounded-xl border border-ink/10">
                  <Image
                    src={image}
                    alt={`${t(lang, product.name)} image ${index + 1}`}
                    width={600}
                    height={420}
                    className="h-56 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-6">
              <SectionHeading title={<Trans text="Key specifications" />} />
              <SpecsTable specs={product.specs} />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-ink"><Trans text="Use cases" /></h3>
              <ul className="grid gap-2 text-sm text-slate md:grid-cols-2">
                {product.useCases.map((useCase) => (
                  <li key={t(lang, useCase)} className="rounded-lg border border-ink/10 bg-white px-4 py-2">
                    {t(lang, useCase)}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="rounded-2xl border border-ink/10 bg-white p-6">
              <p className="text-sm font-semibold uppercase text-slate"><Trans text="Compatible tractor HP" /></p>
              <p className="mt-2 text-2xl font-semibold text-ink">{product.hpRange}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.keySpecs.map((spec) => (
                  <span key={t(lang, spec)} className="rounded-full border border-ink/10 px-3 py-1 text-xs">
                    {t(lang, spec)}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6 rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
              <div>
                <h3 className="text-lg font-semibold text-ink"><Trans text="Request a quote" /></h3>
                <p className="text-sm text-slate">
                  <Trans text="Share volumes, markets, and branding requirements. We respond within 24 hours." />
                </p>
              </div>
              <LeadForm formType="quote" compact />
              <Button href={product.brochure} variant="secondary" className="w-full">
                <Trans text="Download brochure" />
              </Button>
            </div>
          </aside>
        </FadeIn>
      </div>
    </div>
  );
}
