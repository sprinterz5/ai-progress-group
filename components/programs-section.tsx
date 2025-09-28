"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Film, GraduationCap, Clock, Users, Star } from "lucide-react"

import { useTranslations } from "@/components/language-provider"

export function ProgramsSection() {
  const t = useTranslations()
  const icons = [User, Film, GraduationCap]
  const gradients = ["from-primary/20 to-primary/10", "from-secondary/20 to-secondary/10", "from-accent/20 to-accent/10"]

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t.programs.heading} <span className="text-primary">{t.programs.highlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t.programs.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.programs.items.map((program, index) => {
              const Icon = icons[index] ?? User

              return (
                <Card key={program.title} className="p-6 hover:shadow-xl transition-all duration-300 group">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${gradients[index] ?? gradients[0]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">{program.title}</h3>

                  <p className="text-muted-foreground mb-6 text-balance">{program.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{program.age}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span>{program.level}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">{t.programs.cta}</Button>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
