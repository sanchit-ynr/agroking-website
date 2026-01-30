import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "./src/**/*.{js,jsx}", "./src/**/*.{mdx}"] ,
  theme: {
    extend: {
      colors: {
        ink: "#1B1C19",
        charcoal: "#2A2D2A",
        sand: "#F4F4F0",
        gold: "#F07A1C",
        bronze: "#9A4F14",
        slate: "#6C726A",
        smoke: "#EAEAE2",
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
