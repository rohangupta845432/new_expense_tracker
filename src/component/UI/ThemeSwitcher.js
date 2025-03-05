import React, { useContext } from "react";
import ThemeContext from "../../store/theme-context";

function ThemeSwitcher() {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  console.log(theme);
  if (themeCtx.premium === "false") {
    return "";
  }
  return (
    <button
      className="theme-toggle-btn"
      onClick={() => themeCtx.setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeSwitcher;
