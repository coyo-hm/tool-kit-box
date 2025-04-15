"use client";

import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "@/styles/theme.css";
import { whFull } from "@/styles/vars.css";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      setMounted(true);
      const savedTheme = localStorage.getItem("theme") as Theme;
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

      const initialTheme = savedTheme || systemTheme;
      setTheme(initialTheme);
    } catch (error) {
      console.error("Theme initialization error:", error);
    }
  }, []);

  const toggleTheme = () => {
    try {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    } catch (error) {
      console.error("Theme toggle error:", error);
    }
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {mounted ? <div className={`${theme === "light" ? lightTheme : darkTheme} ${whFull}`}>{children}</div> : null}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
