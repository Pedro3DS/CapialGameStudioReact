'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { texts as textos } from './texts'

export type Idioma = 'pt' | 'en' | 'es' | 'fr'

interface LanguageContextType {
  idioma: Idioma
  setIdioma: (lang: Idioma) => void
  textos: typeof textos[Idioma]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>('pt')

  useEffect(() => {
    const savedLang = localStorage.getItem('idioma') as Idioma | null
    if (savedLang) setIdioma(savedLang)
  }, [])

  useEffect(() => {
    localStorage.setItem('idioma', idioma)
  }, [idioma])

  return (
    <LanguageContext.Provider value={{ idioma, setIdioma, textos: textos[idioma] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage deve ser usado dentro de <LanguageProvider>')
  return context
}
