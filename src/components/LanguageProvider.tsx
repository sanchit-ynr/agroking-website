"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "hi";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "hi" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
      return;
    }
    const browser = navigator.language.toLowerCase();
    const next = browser.startsWith("hi") ? "hi" : "en";
    setLangState(next);
    document.documentElement.lang = next;
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next;
    window.localStorage.setItem("lang", next);
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within LanguageProvider");
  }
  return ctx;
}
