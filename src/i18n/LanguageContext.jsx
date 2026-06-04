import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  translations,
  supportedLanguages,
  defaultLanguage,
} from './translations'

const STORAGE_KEY = 'lumina-lang'

const LanguageContext = createContext(null)

function detectInitialLanguage() {
  if (typeof window === 'undefined') return defaultLanguage
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && translations[saved]) return saved
  } catch {
    /* ignore */
  }
  return defaultLanguage
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(detectInitialLanguage)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  const setLanguage = lang => {
    if (!translations[lang]) return
    setLanguageState(lang)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }

  const value = useMemo(() => {
    const t = translations[language] ?? translations[defaultLanguage]
    return {
      language,
      setLanguage,
      t,
      supportedLanguages,
    }
  }, [language])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
