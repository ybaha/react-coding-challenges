import React from "react";

const themeContext = React.createContext();

export const useTheme = () => {
  return React.useContext(themeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState({ theme: "light" });

  React.useEffect(() => {
    document.querySelector("html").classList.toggle("dark-mode");
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
