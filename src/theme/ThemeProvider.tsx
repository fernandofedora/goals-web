import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'

type Theme = 'light' | 'dark' | 'system'

type ThemeContextValue = {
  theme: Theme
  setTheme: (t: Theme) => void
  toggleTheme: () => void
  isDark: boolean
}

const STORAGE_KEY = 'goals-web-theme'

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getSystemPrefersDark() {
  return typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyThemeClass(isDark: boolean) {
  const root = document.documentElement
  if (isDark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (saved) {
      setThemeState(saved)
    } else {
      setThemeState('system')
    }
  }, [])

  const isDark = useMemo(() => {
    if (theme === 'system') return getSystemPrefersDark()
    return theme === 'dark'
  }, [theme])

  useEffect(() => {
    applyThemeClass(isDark)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [isDark, theme])

  useEffect(() => {
    if (theme !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyThemeClass(media.matches)
    media.addEventListener?.('change', handler)
    return () => media.removeEventListener?.('change', handler)
  }, [theme])

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme, isDark }),
    [theme, setTheme, toggleTheme, isDark]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

