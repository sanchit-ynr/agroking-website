import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "./src/**/*.{js,jsx}", "./src/**/*.{mdx}"] ,
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        charcoal: "rgb(var(--charcoal) / <alpha-value>)",
        sand: "rgb(var(--sand) / <alpha-value>)",
        gold: "rgb(var(--gold) / <alpha-value>)",
        bronze: "rgb(var(--bronze) / <alpha-value>)",
        slate: "rgb(var(--slate) / <alpha-value>)",
        smoke: "rgb(var(--smoke) / <alpha-value>)",
        leaf: "rgb(var(--leaf) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-manrope)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 12px 36px -24px rgba(27, 28, 25, 0.35)",
        lift: "0 16px 48px -28px rgba(27, 28, 25, 0.45)",
      },
      borderRadius: {
        xl: "1rem",
      },
      letterSpacing: {
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
} satisfies Config;
