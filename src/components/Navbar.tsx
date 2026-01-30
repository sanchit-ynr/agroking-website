"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/Button";
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
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      const scrollingDown = current > lastY + 6;
      const scrollingUp = current < lastY - 6;

      if (scrollingDown && current > 80) {
        setHidden(true);
        setOpen(false);
      } else if (scrollingUp) {
        setHidden(false);
      }

      lastY = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sand">
            {site.shortName.slice(0, 1)}
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-ink">{site.shortName}</p>
            <p className="text-xs text-slate">Premium Implements</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium text-slate md:flex">
          <div className="glass flex items-center gap-5 rounded-full px-5 py-2">
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
          <Button href="/contact" variant="secondary" size="sm">
            Get Quote
          </Button>
        </div>

        <motion.div
          className="relative flex items-center gap-3 md:hidden"
          animate={{ opacity: hidden ? 0 : 1, y: hidden ? -12 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
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
              whileTap={{ scale: 0.92 }}
              onClick={() => setOpen((prev) => !prev)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/70 text-base text-ink transition-all",
                open ? "scale-95" : "hover:scale-105"
              )}
              aria-label="More"
            >
              ≡
            </motion.button>
          </div>

          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute right-0 top-14 w-56 rounded-2xl border border-white/50 bg-white/75 p-3 shadow-lift backdrop-blur-2xl"
              >
                <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate">
                  More
                </p>
                <div className="space-y-2">
                  {mobileSecondary.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl border border-white/40 bg-white/70 px-3 py-2 text-xs font-semibold text-ink transition-transform hover:-translate-y-0.5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}
