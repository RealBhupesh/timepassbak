"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="rounded-full bg-white/60 p-2 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
        aria-label="Toggle theme"
      >
        <SunIcon className="h-5 w-5 text-caramel" />
      </button>
    );
  }

  const isLight = (resolvedTheme ?? theme) === "light";

  return (
    <button
      className="rounded-full bg-white/60 p-2 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {isLight ? (
        <MoonIcon className="h-5 w-5 text-caramel" />
      ) : (
        <SunIcon className="h-5 w-5 text-caramel" />
      )}
    </button>
  );
}
