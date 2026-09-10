import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        reading: "46rem",
      },
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
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "hsl(var(--ink))",
            "--tw-prose-headings": "hsl(var(--ink))",
            "--tw-prose-lead": "hsl(var(--ink-muted))",
            "--tw-prose-links": "hsl(var(--link))",
            "--tw-prose-bold": "hsl(var(--ink))",
            "--tw-prose-counters": "hsl(var(--ink-muted))",
            "--tw-prose-bullets": "hsl(var(--rule))",
            "--tw-prose-hr": "hsl(var(--rule))",
            "--tw-prose-quotes": "hsl(var(--ink-muted))",
            "--tw-prose-quote-borders": "hsl(var(--rule))",
            "--tw-prose-captions": "hsl(var(--ink-muted))",
            "--tw-prose-code": "hsl(var(--ink))",
            "--tw-prose-pre-code": "hsl(var(--ink))",
            "--tw-prose-pre-bg": "hsl(var(--wash))",
            "--tw-prose-th-borders": "hsl(var(--rule))",
            "--tw-prose-td-borders": "hsl(var(--rule-soft))",
            maxWidth: "none",
            // Typography wraps inline code in literal backticks by default
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: {
              fontWeight: "400",
              fontSize: "0.875em",
              backgroundColor: "hsl(var(--wash))",
              borderRadius: "3px",
              padding: "0.15em 0.35em",
            },
            "pre code": {
              backgroundColor: "transparent",
              fontSize: "0.85em",
              padding: "0",
            },
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        enter: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        enter: "enter 1s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
