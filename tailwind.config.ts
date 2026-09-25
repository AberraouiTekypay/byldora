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
        ink: "#111827",
        "slate-deep": "#243244",
        paper: "#F5F4F0",
        "paper-light": "#FAF9F6",
        "paper-border": "#E5E4DE",
        "byldora-blue": "#2457D6",
        "blue-steel": "#506A85",
        oxide: "#B66A3C",
        "status-success": "#18794E",
        "status-warning": "#B7791F",
        "status-critical": "#B42318",
        byldora: {
          navy: "#111827",
          "navy-light": "#1C2636",
          "navy-dark": "#0B1220",
          graphite: "#243244",
          "graphite-light": "#334155",
          electric: "#2457D6",
          "electric-hover": "#1D47B8",
          cyan: "#506A85",
          "warm-white": "#F5F4F0",
          card: "#FFFFFF",
          text: {
            primary: "#111827",
            secondary: "#243244",
            muted: "#506A85",
          },
          border: "#D9DEE7",
          "border-dark": "#2A384C",
          status: {
            success: "#18794E",
            warning: "#B7791F",
            error: "#B42318",
          }
        },
      },
      borderRadius: {
        'card': '6px',
        'btn': '4px',
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-geist-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
