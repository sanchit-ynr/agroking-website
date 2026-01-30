"use client";

import { useLang } from "@/components/LanguageProvider";
import { t } from "@/content/i18n";

export function Trans({ text }: { text: string }) {
  const { lang } = useLang();
  return <>{t(lang, text)}</>;
}
