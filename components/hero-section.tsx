import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Brain } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-12 h-12 bg-primary/30 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* AI Robot Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BD%D0%B0%D1%88%20%D0%B1%D0%BE%D1%82.jpg-pEshDjyZgmSpXSjSnxjac8lEBrKI2P.jpeg"
                alt="Startum Kids AI Robot"
                className="w-48 h-48 object-contain animate-float"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse-glow">
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
            <span className="text-foreground">Startum Kids —</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              твой старт в будущее
            </span>
            <br />
            <span className="text-foreground">с искусственным интеллектом</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Развиваем детей 8+ лет через практику с ИИ-инструментами, креативность и современные цифровые навыки
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg">
              <Zap className="w-5 h-5 mr-2" />
              Попробовать бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-8 py-4 text-lg bg-transparent"
            >
              <Brain className="w-5 h-5 mr-2" />
              Узнать больше
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Мини-группы до 6 детей</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>100% практические занятия</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Реальные проекты с ИИ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
