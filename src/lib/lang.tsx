'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Lang = 'en' | 'th'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangContextValue>({ lang: 'en', setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-lang') as Lang | null
    if (stored === 'th') setLangState('th')
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('portfolio-lang', l)
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

/** Pick Thai string when lang==='th' and thValue is defined; otherwise English. */
export function loc(lang: Lang, th: string | undefined, en: string): string
export function loc(lang: Lang, th: string | undefined, en: string | undefined): string | undefined
export function loc(lang: Lang, th: string | undefined, en: string | undefined): string | undefined {
  return lang === 'th' && th != null ? th : en
}
