import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        f10: {
          ivory: "#FFFFFF",       // Bright Clean White
          stone: "#F8FAFC",       // Ultra-light Crisp Slate
          charcoal: "#0F172A",    // Deep Modern Text
          charcoalDark: "#090D16",// High Contrast
          muted: "#64748B",       // Secondary Text
          accent: "#2554D7",      // Vibrant Royal Cobalt
          accentHover: "#1D4ED8",
          accentLight: "#EFF6FF",
          border: "#E2E8F0",
          borderDark: "#1E293B",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widestEditorial: "0.25em",
        tightEditorial: "-0.035em",
      },
    },
  },
  plugins: [],
};

export default config;
