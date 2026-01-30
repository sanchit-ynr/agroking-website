"use client";

import { useMemo, useState } from "react";
import { site } from "@/content/site";
import { ProductGrid } from "@/components/ProductGrid";

export function ProductsFilter() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

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
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
              activeCategory === "all"
                ? "border-gold bg-gold/10 text-ink"
                : "border-ink/10 text-slate"
            }`}
          >
            All
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
              {category.name}
            </button>
          ))}
        </div>
        <div className="w-full md:max-w-xs">
          <label className="sr-only" htmlFor="product-search">
            Search products
          </label>
          <input
            id="product-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products"
            className="w-full rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink placeholder:text-slate focus:border-gold focus:outline-none"
          />
        </div>
      </div>
      <ProductGrid products={filtered} />
    </div>
  );
}
