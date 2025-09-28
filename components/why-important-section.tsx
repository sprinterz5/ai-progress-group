"use client"

import { Rocket, Palette, Cpu, Trophy } from "lucide-react"

import { useTranslations } from "@/components/language-provider"

export function WhyImportantSection() {
  const t = useTranslations()
  const icons = [Rocket, Palette, Cpu, Trophy]

  return (
    <section id="advantages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t.whyImportant.heading} <span className="text-secondary">{t.whyImportant.highlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t.whyImportant.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.whyImportant.benefits.map((benefit, index) => {
              const Icon = icons[index] ?? Rocket

              return (
                <div key={benefit.title} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-balance">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
