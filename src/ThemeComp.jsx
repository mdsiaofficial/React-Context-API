import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const ThemeComp = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === "Light" ? "#fff" : "#333",
      color: theme === "Light" ? "#000" : "#fff",
    }}>
      <h1 >The Current Theme is {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemeComp