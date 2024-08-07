import React, { createContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState("Light");
  const toggleTheme = () => {
    setTheme((prev) => prev === "Light" ? "Dark" : "Light");

  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext };
