"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const primary = [
  { code: "en", label: "EN" },
  { code: "hi", label: "HI" },
];

const others = [
  { code: "pa", label: "Punjabi" },
  { code: "ta", label: "Tamil" },
  { code: "te", label: "Telugu" },
  { code: "mr", label: "Marathi" },
  { code: "gu", label: "Gujarati" },
  { code: "bn", label: "Bengali" },
  { code: "kn", label: "Kannada" },
  { code: "ml", label: "Malayalam" },
];

export function LanguageSwitch({ compact }: { compact?: boolean }) {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved) {
      setLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLanguage = (code: string) => {
    setLang(code);
    document.documentElement.lang = code;
    window.localStorage.setItem("lang", code);
    setOpen(false);
  };

  return (
    <div className="relative">
      <div className={cn("glass inline-flex items-center gap-1 rounded-full px-2 py-2", compact && "px-1")}> 
        {primary.map((item) => (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            className={cn(
              "rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink/80 transition-opacity",
              lang === item.code ? "opacity-100" : "opacity-60 hover:opacity-100"
            )}
            aria-label={`Switch to ${item.label}`}
          >
            {item.label}
          </button>
        ))}
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
            <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-leaf">
              Languages
            </p>
            <div className="space-y-2">
              {others.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className="block w-full px-2 py-1 text-left text-xs font-semibold text-ink/90 transition-colors hover:text-ink"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
