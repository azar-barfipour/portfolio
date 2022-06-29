import React, { useState } from "react";
const ThemeContext = React.createContext({ theme: "dark" });

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("dark");
  const themeHandler = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, themeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
