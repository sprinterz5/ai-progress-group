"use client"

import { Button } from "@/components/ui/button"
import { Rocket, ArrowRight } from "lucide-react"

import { useTranslations } from "@/components/language-provider"

export function CtaSection() {
  const t = useTranslations()
  const bulletColors = ["bg-primary", "bg-secondary", "bg-accent"]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            <span className="text-primary">{t.cta.headingPrefix}</span> <span>{t.cta.headingHighlight}</span>
            <br />
            {t.cta.headingSuffix}
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">{t.cta.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg group">
              {t.cta.primaryAction}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-8 py-4 text-lg bg-transparent"
            >
              {t.cta.secondaryAction}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm text-muted-foreground">
            {t.cta.highlights.map((highlight, index) => (
              <div key={highlight} className="flex items-center justify-center gap-2">
                <div className={`w-2 h-2 ${bulletColors[index] ?? bulletColors[0]} rounded-full`}></div>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
