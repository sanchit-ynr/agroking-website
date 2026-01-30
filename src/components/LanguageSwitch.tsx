"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/components/LanguageProvider";
import { languageLabels, type Lang } from "@/content/i18n";

const allLanguages: Lang[] = ["en", "hi", "pa", "ta", "te", "mr", "gu", "bn", "kn", "ml"];

export function LanguageSwitch({ compact }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className={cn("glass inline-flex items-center gap-1 rounded-full px-2 py-2", compact && "px-1")}>
        <button
          type="button"
          onClick={() => setLang(lang === "en" ? "hi" : "en")}
          className={cn(
            "rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink/80 transition-opacity",
            "opacity-80 hover:opacity-100"
          )}
          aria-label="Switch between English and Hindi"
        >
          EN/हिं
        </button>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink/70"
          aria-label="Other languages"
        >
          +
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-12 w-44 rounded-2xl border border-sand/60 bg-sand/90 p-3 shadow-lift backdrop-blur-2xl"
          >
            <div className="space-y-2">
              {allLanguages.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setLang(code);
                    setOpen(false);
                  }}
                  className={cn(
                    "block w-full px-2 py-1 text-left text-xs font-semibold transition-colors",
                    lang === code ? "text-ink" : "text-ink/80 hover:text-ink"
                  )}
                >
                  {languageLabels[code]}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
