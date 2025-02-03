import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "@styles/theme.ts";

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <EmotionThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Global
          styles={theme => ({
            "*": {
              color: theme.colors.text,
            },
          })}
        />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export default ThemeProvider;
