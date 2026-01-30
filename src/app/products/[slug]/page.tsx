import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { SpecsTable } from "@/components/SpecsTable";
import { LeadForm } from "@/components/LeadForm";

interface ProductDetailProps {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return site.products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductDetailProps): Metadata {
  const product = site.products.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: product.images.map((image) => ({ url: image })),
    },
  };
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const product = site.products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const category = site.productCategories.find((cat) => cat.id === product.category);

  return (
    <div className="section bg-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.6fr_0.8fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge>{category?.name ?? "Category"}</Badge>
            <h1 className="font-display text-4xl font-semibold text-ink">{product.name}</h1>
            <p className="text-lg text-slate">{product.description}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {product.images.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-xl border border-ink/10">
                <Image
                  src={image}
                  alt={`${product.name} image ${index + 1}`}
                  width={600}
                  height={420}
                  className="h-56 w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <SectionHeading title="Key specifications" />
            <SpecsTable specs={product.specs} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ink">Use cases</h3>
            <ul className="grid gap-2 text-sm text-slate md:grid-cols-2">
              {product.useCases.map((useCase) => (
                <li key={useCase} className="rounded-lg border border-ink/10 bg-white px-4 py-2">
                  {useCase}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-6">
            <p className="text-sm font-semibold uppercase text-slate">Compatible tractor HP</p>
            <p className="mt-2 text-2xl font-semibold text-ink">{product.hpRange}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.keySpecs.map((spec) => (
                <span key={spec} className="rounded-full border border-ink/10 px-3 py-1 text-xs">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="sticky top-24 space-y-6 rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
            <div>
              <h3 className="text-lg font-semibold text-ink">Request a quote</h3>
              <p className="text-sm text-slate">
                Share volumes, markets, and branding requirements. We respond within 24 hours.
              </p>
            </div>
            <LeadForm formType="quote" compact />
            <Button href={product.brochure} variant="secondary" className="w-full">
              Download brochure
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
