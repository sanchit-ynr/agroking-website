"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { ProductGrid } from "@/components/ProductGrid";
import { useLang } from "@/components/LanguageProvider";
import { t } from "@/content/i18n";

export function ProductsFilter() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filterOpen, setFilterOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();

  const filtered = useMemo(() => {
    return site.products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesQuery =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="hidden flex-wrap gap-2 md:flex">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
              activeCategory === "all"
                ? "border-gold bg-gold/10 text-ink"
                : "border-ink/10 text-slate"
            }`}
          >
            {t(lang, "All")}
          </button>
          {site.productCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                activeCategory === category.id
                  ? "border-gold bg-gold/10 text-ink"
                  : "border-ink/10 text-slate"
              }`}
            >
              {t(lang, category.name)}
            </button>
          ))}
        </div>
        <div className="hidden w-full md:block md:max-w-xs">
          <label className="sr-only" htmlFor="product-search">
            {t(lang, "Search products")}
          </label>
          <input
            id="product-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t(lang, "Search products")}
            className="w-full rounded-full border border-ink/10 bg-smoke px-4 py-2 text-sm text-ink placeholder:text-slate focus:border-gold focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-smoke px-4 py-3 md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs text-sand">
              {site.shortName.slice(0, 1)}
            </span>
            <span className="text-sm font-semibold text-ink">{site.shortName}</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-full border border-ink/10 px-3 py-2 text-xs font-semibold"
              onClick={() => {
                setFilterOpen((prev) => !prev);
                setMenuOpen(false);
              }}
            >
              {t(lang, "Filter")}
            </button>
            <button
              type="button"
              className="rounded-full border border-ink/10 px-3 py-2 text-xs font-semibold"
              onClick={() => {
                setMenuOpen((prev) => !prev);
                setFilterOpen(false);
              }}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {filterOpen ? (
        <div className="rounded-2xl border border-ink/10 bg-smoke p-4 md:hidden">
          <div className="mb-3 text-xs font-semibold uppercase text-slate">
            {t(lang, "Search")}
          </div>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t(lang, "Search products")}
            className="w-full rounded-full border border-ink/10 bg-smoke px-4 py-2 text-sm text-ink placeholder:text-slate focus:border-gold focus:outline-none"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                activeCategory === "all"
                  ? "border-gold bg-gold/10 text-ink"
                  : "border-ink/10 text-slate"
              }`}
            >
              {t(lang, "All")}
            </button>
            {site.productCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                  activeCategory === category.id
                    ? "border-gold bg-gold/10 text-ink"
                    : "border-ink/10 text-slate"
                }`}
              >
                {t(lang, category.name)}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {menuOpen ? (
        <div className="rounded-2xl border border-ink/10 bg-smoke p-4 md:hidden">
          <p className="text-xs font-semibold uppercase text-slate">
            {lang === "hi" ? "श्रेणियाँ" : "Categories"}
          </p>
          <div className="mt-3 grid gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setMenuOpen(false);
              }}
              className="rounded-xl border border-ink/10 bg-sand px-3 py-2 text-left text-sm font-semibold"
            >
              {t(lang, "All Products")}
            </button>
            {site.productCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setActiveCategory(category.id);
                  setMenuOpen(false);
                }}
                className="rounded-xl border border-ink/10 bg-sand px-3 py-2 text-left text-sm font-semibold"
              >
                {t(lang, category.name)}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <ProductGrid products={filtered} />
    </div>
  );
}
