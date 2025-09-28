"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

import { useTranslations } from "@/components/language-provider"

export function TestimonialsSection() {
  const t = useTranslations()

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t.testimonials.heading} <span className="text-primary">{t.testimonials.highlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t.testimonials.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.testimonials.entries.map((testimonial) => (
              <Card key={testimonial.name} className="p-6 hover:shadow-lg transition-shadow relative">
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-balance">"{testimonial.content}"</p>

                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
