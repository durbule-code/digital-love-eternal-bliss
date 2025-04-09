
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        love: {
          50: "#FFF9F0",
          100: "#FFDEE2",
          200: "#FDE1D3",
          300: "#FFB6C1",
          400: "#FF8C9E",
          500: "#FF6B81",
          600: "#E14D64",
          700: "#C13553",
          800: "#A12241",
          900: "#801634",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F0E6A8",
          dark: "#AA8C2C",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        playfair: ["Playfair Display", "serif"],
        greatVibes: ["Great Vibes", "cursive"],
        pacifico: ["Pacifico", "cursive"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "fall-petal": {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(360deg)", opacity: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "type-text": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        sparkle: {
          "0%, 100%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1)", opacity: "1" },
        },
        "unfold-scroll": {
          "0%": { height: "0", opacity: "0" },
          "100%": { height: "auto", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-out": "fade-out 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        "fall-petal": "fall-petal 10s linear forwards",
        pulse: "pulse 2s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "type-text": "type-text 3.5s steps(40, end)",
        sparkle: "sparkle 2s ease-in-out infinite",
        "unfold-scroll": "unfold-scroll 1.5s ease-out forwards",
      },
      backgroundImage: {
        "night-sky": "linear-gradient(to bottom, #0f1729, #2c3e50)",
        "day-sky": "linear-gradient(to bottom, #7ec8e3, #d4f0f7)",
        "sunrise-glow": "linear-gradient(to bottom, #ff7e5f, #feb47b)",
        "love-gradient": "linear-gradient(135deg, #ff6b81, #ff8c9e, #ffb6c1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
