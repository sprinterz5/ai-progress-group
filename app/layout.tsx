import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

import { LanguageProvider } from "@/components/language-provider"
import { translations } from "@/lib/translations"

import "./globals.css"

export const metadata: Metadata = {
  title: translations.ru.metadata.title,
  description: translations.ru.metadata.description,
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
