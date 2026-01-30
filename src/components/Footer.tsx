"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { useLang } from "@/components/LanguageProvider";
import { t } from "@/content/i18n";
import { Trans } from "@/components/Trans";

const links = [
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
  { href: "/brochure", label: "Brochure" },
];

export function Footer() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-ink/10 bg-ink text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="text-sm text-sand/70"><Trans text={site.tagline} /></p>
          <p className="text-sm text-sand/60"><Trans text={site.contact.address} /></p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-sand">{t(lang, "Quick Links")}</p>
          <ul className="space-y-2 text-sand/70">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-sand">
                  {t(lang, link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-sand">{t(lang, "Product Lines")}</p>
          <ul className="space-y-2 text-sand/70">
            {site.productCategories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-sand">{t(lang, "Contact")}</p>
          <ul className="space-y-2 text-sand/70">
            <li>{site.contact.phone}</li>
            {site.contact.phoneAlt ? <li>{site.contact.phoneAlt}</li> : null}
            <li>{site.contact.email}</li>
            <li>{t(lang, site.contact.hours)}</li>
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
