import Link from "next/link";
import { site } from "@/content/site";

const links = [
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="text-sm text-sand/70">{site.tagline}</p>
          <p className="text-sm text-sand/60">{site.contact.address}</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-sand">Quick Links</p>
          <ul className="space-y-2 text-sand/70">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-sand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-sand">Product Lines</p>
          <ul className="space-y-2 text-sand/70">
            {site.productCategories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-sand">Contact</p>
          <ul className="space-y-2 text-sand/70">
            <li>{site.contact.phone}</li>
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
        © {new Date().getFullYear()} {site.shortName}. All rights reserved.
      </div>
    </footer>
  );
}
