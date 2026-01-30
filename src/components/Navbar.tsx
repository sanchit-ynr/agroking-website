import Link from "next/link";
import { Button } from "@/components/Button";
import { site } from "@/content/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sand">
            {site.shortName.slice(0, 1)}
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-ink">{site.shortName}</p>
            <p className="text-xs text-slate">Premium Implements</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button href="/contact" variant="secondary" size="sm">
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
