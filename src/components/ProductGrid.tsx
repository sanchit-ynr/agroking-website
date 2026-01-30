import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Badge } from "@/components/Badge";

interface ProductGridProps {
  products: typeof site.products;
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link
          key={product.slug}
          href={`/products/${product.slug}`}
          className="group rounded-xl border border-ink/10 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
        >
          <div className="overflow-hidden rounded-lg border border-ink/10">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={600}
              height={420}
              className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-4 space-y-3">
            <Badge>
              {site.productCategories.find((cat) => cat.id === product.category)
                ?.name ?? "Category"}
            </Badge>
            <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
            <p className="text-sm text-slate">{product.shortDescription}</p>
            <div className="flex flex-wrap gap-2 text-xs text-slate">
              {product.keySpecs.slice(0, 3).map((spec) => (
                <span key={spec} className="rounded-full border border-ink/10 px-3 py-1">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
