"use client";

import { site } from "@/content/site";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { Trans } from "@/components/Trans";
import { useLang } from "@/components/LanguageProvider";
import { t } from "@/content/i18n";

export function BrochureClient() {
  const { lang } = useLang();

  return (
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
  );
}
