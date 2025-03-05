import { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: localStorage.getItem("theme") || "light",
  setTheme: () => {},
  premium: localStorage.getItem("premium") || "false",
  setPremium: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [premium, setPremium] = useState(
    localStorage.getItem("premium") || "false"
  );
  const setThemeValue = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };
  const setPremiumValue = (premium) => {
    localStorage.setItem("premium", premium);
    setPremium(premium);
  };
  const contextValue = {
    theme: theme,
    setTheme: setThemeValue,
    premium: premium,
    setPremium: setPremiumValue,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
