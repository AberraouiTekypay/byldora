import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        byldora: {
          navy: "#0B1220",
          "navy-light": "#0F1A2E",
          "navy-dark": "#070B14",
          graphite: "#1C2636",
          "graphite-light": "#243247",
          electric: "#2563EB",
          "electric-hover": "#1D4ED8",
          cyan: "#0EA5E9",
          "warm-white": "#F8FAFC",
          card: "#FFFFFF",
          text: {
            primary: "#0F172A",
            secondary: "#475569",
            muted: "#64748B",
          },
          border: "#E2E8F0",
          "border-dark": "#2A384C",
          status: {
            success: "#16A34A",
            warning: "#D97706",
            error: "#DC2626",
          }
        },
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
