import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#070B10",
          900: "#0B0F16",
          850: "#0F141C",
          800: "#141B26",
          700: "#1C2530",
          600: "#2A3542",
        },
        line: "#22303C",
        signal: {
          cyan: "#3ED8E0",
          blue: "#4C8DFF",
          amber: "#FFB24C",
          green: "#5CE6A0",
        },
        ink: {
          100: "#F3F6F8",
          300: "#B9C4CE",
          500: "#7C8B98",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(62,216,224,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(62,216,224,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(92, 230, 160, 0.3), 0 0 10px rgba(92, 230, 160, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 15px rgba(92, 230, 160, 0.5), 0 0 30px rgba(92, 230, 160, 0.2)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(62, 216, 224, 0.3)" },
          "50%": { borderColor: "rgba(62, 216, 224, 0.6)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2.2s ease-in-out infinite",
        dash: "dash 2.4s linear forwards",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        borderGlow: "borderGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
