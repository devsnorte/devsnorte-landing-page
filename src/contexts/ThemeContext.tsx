import { ThemeProviderProps } from '@/types/contexts/themeContextTypes'
import { Theme, ThemeContextType } from '@/types/hooks/useThemeTypes'
import React, { createContext, useState, useEffect } from 'react'

const defaultContextValue: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextType>(defaultContextValue)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
