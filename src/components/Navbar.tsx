"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/Button";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

const mobilePrimary = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const mobileSecondary = [
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/brochure", label: "Brochure" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sand">
            {site.shortName.slice(0, 1)}
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-ink">{site.shortName}</p>
            <p className="text-xs text-slate">Premium Implements</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-base font-semibold text-slate md:flex">
          <div className="glass flex items-center gap-6 rounded-full px-6 py-2.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitch />
          <ThemeToggle />
          <Button href="/contact" variant="secondary" size="sm">
            Get Quote
          </Button>
        </div>

        <div className="relative flex items-center gap-2 md:hidden">
          <div className="glass flex items-center gap-1 rounded-full px-2 py-2">
            {mobilePrimary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs font-semibold text-ink transition-colors hover:bg-white/70"
              >
                {item.label}
              </Link>
            ))}
            <motion.button
              type="button"
              whileTap={{ scale: 0.96 }}
              onClick={() => setOpen((prev) => !prev)}
              className={cn(
                "px-2 py-1 text-xs font-semibold text-ink/80 transition-opacity",
                open ? "opacity-60" : "opacity-80 hover:opacity-100"
              )}
              aria-label="Open menu"
            >
              •••
            </motion.button>
          </div>

          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute right-0 top-12 w-48 rounded-2xl border border-sand/60 bg-sand/90 p-3 shadow-lift backdrop-blur-2xl"
              >
                <div className="space-y-2">
                  {mobileSecondary.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-2 py-1 text-xs font-semibold text-ink/90 transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <LanguageSwitch compact />
                  <ThemeToggle />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
