import { Card } from "@/components/ui/card"
import { Target, Users, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            О школе <span className="text-primary">Startum Kids</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
            Мы создали уникальную образовательную среду, где дети изучают будущее уже сегодня. Наша миссия — развивать
            детей через практику с ИИ-инструментами, формируя креативность и цифровые навыки XXI века.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Наша цель</h3>
              <p className="text-muted-foreground">
                Подготовить детей к будущему, где ИИ станет неотъемлемой частью жизни и работы
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Наш подход</h3>
              <p className="text-muted-foreground">
                Обучение в мини-группах с индивидуальным подходом к каждому ребенку
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Наш результат</h3>
              <p className="text-muted-foreground">
                Уверенные в себе дети, готовые творить и создавать с помощью современных технологий
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
