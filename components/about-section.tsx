"use client"

import { Card } from "@/components/ui/card"
import { Target, Users, Lightbulb } from "lucide-react"

import { useTranslations } from "@/components/language-provider"

export function AboutSection() {
  const t = useTranslations()
  const icons = [Target, Users, Lightbulb]
  const accentClasses = ["bg-primary/10", "bg-secondary/10", "bg-accent/10"]
  const iconColors = ["text-primary", "text-secondary", "text-accent-foreground"]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.about.heading} <span className="text-primary">{t.about.highlight}</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">{t.about.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.cards.map((card, index) => {
              const Icon = icons[index] ?? Target

              return (
                <Card key={card.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div
                    className={`w-16 h-16 ${accentClasses[index] ?? "bg-primary/10"} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`w-8 h-8 ${iconColors[index] ?? "text-primary"}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
