/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05060D",
        surface: "#0B0D1C",
        surface2: "#10122A",
        line: "rgba(255,255,255,0.08)",
        line2: "rgba(255,255,255,0.14)",
        text: "#E8EAF6",
        muted: "#8B90AC",
        blue: {
          DEFAULT: "#4D7FFF",
          glow: "#5E8CFF",
        },
        purple: {
          DEFAULT: "#9B6BFF",
          glow: "#B388FF",
        },
        cyan: {
          DEFAULT: "#5EEAD4",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "glow-radial":
          "radial-gradient(circle at 50% 0%, rgba(77,127,255,0.18), transparent 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glowBlue: "0 0 40px rgba(77,127,255,0.35)",
        glowPurple: "0 0 40px rgba(155,107,255,0.35)",
        glass: "0 8px 32px rgba(0,0,0,0.45)",
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
