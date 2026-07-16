import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        "background-soft": "hsl(var(--background-soft))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        accent: "hsl(var(--accent))",
        "accent-soft": "hsl(var(--accent-soft))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        "hero-from": "hsl(var(--hero-from))",
        "hero-via": "hsl(var(--hero-via))",
        "hero-to": "hsl(var(--hero-to))",
        whatsapp: "hsl(var(--whatsapp))",
        "whatsapp-hover": "hsl(var(--whatsapp-hover))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
