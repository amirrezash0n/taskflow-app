import { useEffect, useState } from "react";
import { THEMES, type Theme } from "../constants/theme";
import { STORAGE_KEYS } from "../constants/storage-keys";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return THEMES.LIGHT;
    const stored = localStorage.getItem(STORAGE_KEYS.THEME);
    if (stored === THEMES.DARK || stored === THEMES.LIGHT) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? THEMES.DARK
      : THEMES.LIGHT;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === THEMES.DARK) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));
  };

  return { theme, toggleTheme, isDark: theme === THEMES.DARK };
}
