import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { ProductDetailClient } from "@/components/ProductDetailClient";

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
    <ProductDetailClient product={product} category={category} />
  );
}
