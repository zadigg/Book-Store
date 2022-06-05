import React, { createContext, useContext, useState } from "react";

const context = createContext();
export const ThemeContext = ({ children }) => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  }
  const themelocal = localStorage.getItem("theme");
  const [theme, setTheme] = useState(themelocal);
  localStorage.setItem("theme", theme);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <context.Provider value={{ theme, toggleTheme }}>
      {children}
    </context.Provider>
  );
};

export const useTheme = () => useContext(context);
