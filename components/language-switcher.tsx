"use client"

import clsx from "clsx"

import { useLanguage } from "@/components/language-provider"
import type { Language } from "@/lib/translations"

const options: Array<{ value: Language; label: string }> = [
  { value: "ru", label: "Рус" },
  { value: "en", label: "Eng" },
  { value: "kk", label: "Қаз" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-white/70 p-1 text-sm shadow-sm">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLanguage(option.value)}
          className={clsx(
            "rounded-full px-3 py-1 transition-colors",
            language === option.value
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted"
          )}
          aria-pressed={language === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
