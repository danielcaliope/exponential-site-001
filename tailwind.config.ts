import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
          light: "hsl(var(--primary-light))",
          lighter: "hsl(var(--primary-lighter))",
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
        "gradient-dark": {
          1: "hsl(var(--gradient-dark-1))",
          2: "hsl(var(--gradient-dark-2))",
          darker: "hsl(var(--gradient-darker))",
        },
      },
      fontFamily: {
        display: ['Rubik', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
        sans: ['Rubik', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
            opacity: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: {
            height: "0",
            opacity: "0",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        "glow": {
          "0%, 100%": {
            textShadow: "0 0 20px hsl(var(--primary-lighter) / 0.5)",
          },
          "50%": {
            textShadow: "0 0 30px hsl(var(--primary-lighter) / 0.8), 0 0 40px hsl(var(--accent) / 0.5)",
          },
        },
        "scroll": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "particle-float": {
          "0%": { 
            transform: "translate(0, 0) scale(1)",
            opacity: "0.3"
          },
          "25%": { 
            transform: "translate(10px, -15px) scale(1.1)",
            opacity: "0.5"
          },
          "50%": { 
            transform: "translate(-5px, -30px) scale(0.9)",
            opacity: "0.7"
          },
          "75%": { 
            transform: "translate(-15px, -15px) scale(1.05)",
            opacity: "0.4"
          },
          "100%": { 
            transform: "translate(0, 0) scale(1)",
            opacity: "0.3"
          },
        },
        "particle-drift": {
          "0%": { 
            transform: "translateY(0) translateX(0)",
            opacity: "0.2"
          },
          "50%": { 
            transform: "translateY(-20px) translateX(15px)",
            opacity: "0.6"
          },
          "100%": { 
            transform: "translateY(-40px) translateX(30px)",
            opacity: "0"
          },
        },
        "particle-pulse": {
          "0%, 100%": { 
            transform: "scale(1)",
            opacity: "0.4"
          },
          "50%": { 
            transform: "scale(1.5)",
            opacity: "0.8"
          },
        },
        "float-up": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) rotate(720deg)", opacity: "0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "50%": { transform: "scale(1.2)", opacity: "0.4" },
          "100%": { transform: "scale(0.8)", opacity: "0.8" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "tilt": {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(2deg)" },
          "75%": { transform: "rotate(-2deg)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-up": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "scroll": "scroll 30s linear infinite",
        "particle-float": "particle-float 15s ease-in-out infinite",
        "particle-drift": "particle-drift 20s linear infinite",
        "particle-pulse": "particle-pulse 3s ease-in-out infinite",
        "float-up": "float-up 15s linear infinite",
        "pulse-ring": "pulse-ring 2s ease-in-out infinite",
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "tilt": "tilt 10s ease-in-out infinite",
        "count-up": "count-up 0.8s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "scale-up": "scale-up 0.5s ease-out forwards",
        "rotate-slow": "rotate-slow 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
