export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;
  const staticRoutes = ["/", "/products", "/applications", "/about", "/support", "/contact", "/brochure"];

  const products = site.products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...products,
  ];
}
