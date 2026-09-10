"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className="block text-[hsl(var(--ink-muted))] transition-colors hover:text-foreground"
    >
      {/* Render the moon until mounted so the markup matches on the server */}
      {isDark ? (
        <Sun className="h-[17px] w-[17px]" strokeWidth={1.5} />
      ) : (
        <Moon className="h-[17px] w-[17px]" strokeWidth={1.5} />
      )}
    </button>
  );
}
