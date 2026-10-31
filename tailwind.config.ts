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
        automotive: {
          navy: "#0F172A",
          slate: "#1E293B",
          metal: "#334155",
          red: "#DC2626",
          "red-hover": "#B91C1C",
          "red-light": "#FEE2E2",
          silver: "#F1F5F9",
          border: "#E2E8F0",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#20BA5A",
          dark: "#128C7E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 10px 25px -3px rgba(15, 23, 42, 0.12), 0 4px 6px -4px rgba(15, 23, 42, 0.05)",
        premium: "0 20px 40px -15px rgba(15, 23, 42, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
