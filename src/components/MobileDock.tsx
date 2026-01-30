"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const secondaryLinks = [
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/brochure", label: "Brochure" },
];

export function MobileDock() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      const scrollingDown = current > lastY + 4;
      const scrollingUp = current < lastY - 4;

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
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:hidden">
      <div
        className={cn(
          "pointer-events-auto flex items-center gap-3 rounded-full border border-white/30 bg-white/70 px-4 py-2 shadow-lift backdrop-blur-lg transition-all",
          hidden ? "translate-y-16 opacity-0" : "translate-y-0 opacity-100"
        )}
      >
        {primaryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-2 text-xs font-semibold text-ink"
          >
            {link.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-white/60 text-lg text-ink"
          aria-label="More"
        >
          •••
        </button>
      </div>

      {open ? (
        <div
          className={cn(
            "pointer-events-auto absolute bottom-16 w-[min(92vw,360px)] rounded-2xl border border-white/30 bg-white/80 p-4 text-sm shadow-lift backdrop-blur-lg",
            hidden ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="grid grid-cols-2 gap-3">
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-ink/10 bg-white/70 px-3 py-2 text-center text-xs font-semibold text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
