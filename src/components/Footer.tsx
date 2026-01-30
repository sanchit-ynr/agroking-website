"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { useLang } from "@/components/LanguageProvider";

const links = [
  { href: "/products", labelEn: "Products", labelHi: "उत्पाद" },
  { href: "/applications", labelEn: "Applications", labelHi: "उपयोग" },
  { href: "/about", labelEn: "About", labelHi: "हमारे बारे में" },
  { href: "/support", labelEn: "Support", labelHi: "सहायता" },
  { href: "/contact", labelEn: "Contact", labelHi: "संपर्क" },
  { href: "/brochure", labelEn: "Brochure", labelHi: "ब्रॉशर" },
];

export function Footer() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-ink/10 bg-ink text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="text-sm text-sand/70">{site.tagline}</p>
          <p className="text-sm text-sand/60">{site.contact.address}</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-sand">{lang === "hi" ? "त्वरित लिंक" : "Quick Links"}</p>
          <ul className="space-y-2 text-sand/70">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-sand">
                  {lang === "hi" ? link.labelHi : link.labelEn}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-sand">{lang === "hi" ? "उत्पाद लाइन" : "Product Lines"}</p>
          <ul className="space-y-2 text-sand/70">
            {site.productCategories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-sand">{lang === "hi" ? "संपर्क" : "Contact"}</p>
          <ul className="space-y-2 text-sand/70">
            <li>{site.contact.phone}</li>
            {site.contact.phoneAlt ? <li>{site.contact.phoneAlt}</li> : null}
            <li>{site.contact.email}</li>
            <li>{site.contact.hours}</li>
          </ul>
          <div className="flex gap-3 pt-2 text-xs text-sand/60">
            {site.social.map((item) => (
              <span key={item.label}>{item.label}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-sand/10 py-4 text-center text-xs text-sand/50">
        <p>© Copyright 2010 - 2010. Agroking Implements Industries</p>
        <p className="mt-1">Developed &amp; Managed By Weblink.In Pvt. Ltd.</p>
      </div>
    </footer>
  );
}
