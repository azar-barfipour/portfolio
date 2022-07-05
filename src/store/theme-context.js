import React, { useState } from "react";
const ThemeContext = React.createContext({
  theme: "dark",
  themeHandler: () => {},
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("dark");
  const themeHandler = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme: theme, themeHandler: themeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
