"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

import { translations, type Language, type TranslationContent } from "@/lib/translations"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: TranslationContent
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru")

  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem("preferredLanguage") as Language | null
    if (stored && stored in translations) {
      setLanguage(stored)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem("preferredLanguage", language)
  }, [language])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = translations[language].metadata.title

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", translations[language].metadata.description)
    }
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return { language: context.language, setLanguage: context.setLanguage }
}

export function useTranslations() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useTranslations must be used within a LanguageProvider")
  }

  return context.t
}
