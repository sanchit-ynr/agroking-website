"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      document.documentElement.classList.toggle("theme-dark", saved === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
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
