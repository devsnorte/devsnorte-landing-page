export type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}
