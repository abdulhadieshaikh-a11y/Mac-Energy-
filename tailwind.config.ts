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
          950: "#050810",
          900: "#0a0e1a",
          850: "#0f1525",
          800: "#151d32",
          700: "#1c2842",
          600: "#263354",
        },
        line: "#1c2d4a",
        signal: {
          cyan: "#00d4aa",
          blue: "#3b82f6",
          amber: "#f59e0b",
          green: "#10b981",
        },
        ink: {
          100: "#f0f4f8",
          300: "#94a3b8",
          500: "#64748b",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(0,212,170,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.04) 1px, transparent 1px)",
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
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(2deg)" },
          "66%": { transform: "translateY(4px) rotate(-1deg)" },
        },
        floatWide: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(6px, -10px)" },
          "50%": { transform: "translate(-4px, -6px)" },
          "75%": { transform: "translate(8px, 4px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 8px rgba(16, 185, 129, 0.3), 0 0 16px rgba(16, 185, 129, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.15)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(0, 212, 170, 0.25)" },
          "50%": { borderColor: "rgba(0, 212, 170, 0.5)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        countUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2.2s ease-in-out infinite",
        dash: "dash 2.4s linear forwards",
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 8s ease-in-out infinite",
        floatWide: "floatWide 10s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
        fadeInUp: "fadeInUp 0.7s ease-out forwards",
        fadeInLeft: "fadeInLeft 0.7s ease-out forwards",
        fadeInRight: "fadeInRight 0.7s ease-out forwards",
        scaleIn: "scaleIn 0.6s ease-out forwards",
        borderGlow: "borderGlow 3s ease-in-out infinite",
        glowPulse: "glowPulse 3s ease-in-out infinite",
        gradientShift: "gradientShift 4s ease infinite",
        countUp: "countUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
