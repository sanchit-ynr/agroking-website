"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Badge } from "@/components/Badge";
import { useLang } from "@/components/LanguageProvider";
import { t } from "@/content/i18n";
import { Trans } from "@/components/Trans";

interface ProductGridProps {
  products: typeof site.products;
}

export function ProductGrid({ products }: ProductGridProps) {
  const { lang } = useLang();
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link
          key={product.slug}
          href={`/products/${product.slug}`}
          className="group rounded-2xl border border-ink/10 bg-white p-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
        >
          <div className="overflow-hidden rounded-xl border border-ink/10">
            <Image
              src={product.images[0]}
              alt={t(lang, product.name)}
              width={600}
              height={420}
              className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-4 space-y-3">
            <Badge>
              {t(lang, site.productCategories.find((cat) => cat.id === product.category)?.name ?? "Category")}
            </Badge>
            <h3 className="text-base font-semibold text-ink sm:text-lg">{t(lang, product.name)}</h3>
            <p className="text-sm text-slate">{t(lang, product.shortDescription)}</p>
            <div className="flex flex-wrap gap-2 text-[11px] text-slate">
              {product.keySpecs.slice(0, 2).map((spec) => (
                <span key={t(lang, spec)} className="rounded-full border border-ink/10 px-3 py-1">
                  {t(lang, spec)}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 text-xs font-semibold text-ink">
              <span className="rounded-full border border-ink/10 px-3 py-1">{product.hpRange}</span>
              <span className="text-xs uppercase tracking-wide">{t(lang, "View Details")}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
