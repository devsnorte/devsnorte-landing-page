import { ThemeContext } from '@/contexts/ThemeContext'
import { ThemeContextType } from '@/types/hooks/useThemeTypes'
import { useContext } from 'react'

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
