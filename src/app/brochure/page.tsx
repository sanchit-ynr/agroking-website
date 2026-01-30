import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { Trans } from "@/components/Trans";
import { useLang } from "@/components/LanguageProvider";
import { t } from "@/content/i18n";

export const metadata: Metadata = {
  title: "Brochure",
  description: "Download Agroking product brochures.",
};

export default function BrochurePage() {
  const { lang } = useLang();
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-4xl space-y-8 px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={<Trans text="Brochures" />}
            title={<Trans text="Download product brochures" />}
            subtitle={<Trans text="Placeholder download center. Replace with real PDFs when available." />}
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
                  <p className="text-sm font-semibold text-ink">{t(lang, product.name)}</p>
                  <p className="text-xs text-slate">{t(lang, product.shortDescription)}</p>
                </div>
                <Button variant="secondary" size="sm" href="#">
                  <Trans text="Download PDF" />
                </Button>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
