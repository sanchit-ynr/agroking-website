"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ThemeMode = "light" | "dark";

type ThemePref = "light" | "dark" | "system";

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [pref, setPref] = useState<ThemePref>("system");

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = (mode: ThemeMode) => {
      document.documentElement.classList.toggle("theme-dark", mode === "dark");
      setTheme(mode);
    };

    if (saved === "light" || saved === "dark") {
      setPref(saved);
      apply(saved);
    } else {
      setPref("system");
      apply(prefersDark.matches ? "dark" : "light");
    }

    const onChange = (event: MediaQueryListEvent) => {
      if (pref === "system") {
        apply(event.matches ? "dark" : "light");
      }
    };

    prefersDark.addEventListener("change", onChange);
    return () => prefersDark.removeEventListener("change", onChange);
  }, [pref]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setPref(next);
    setTheme(next);
    document.documentElement.classList.toggle("theme-dark", next === "dark");
    window.localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "glass inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide text-ink"
      )}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "Light" : "Dark"}
    </button>
  );
}
