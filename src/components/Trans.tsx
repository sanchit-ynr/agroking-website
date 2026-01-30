"use client";

import { useLang } from "@/components/LanguageProvider";

export function Trans({ en, hi }: { en: string; hi: string }) {
  const { lang } = useLang();
  return <>{lang === "hi" ? hi : en}</>;
}
