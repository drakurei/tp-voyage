import { createContext, useContext, useEffect, useState } from "react"

// Thème graphique (accessibilité) : "light" ou "dark", gardé dans le localStorage
const STORAGE_KEY = "voyages_theme"

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "light" || saved === "dark") return saved
  } catch {
    // localStorage indisponible
  }
  // Pas encore de choix : on suit le réglage du système
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  // On applique le thème sur <html> : notre CSS (data-theme) et Bootstrap (data-bs-theme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.dataset.bsTheme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // localStorage indisponible
    }
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"))

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react/only-export-components
export function useTheme() {
  return useContext(ThemeContext)
}
