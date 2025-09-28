import { Rocket, Palette, Cpu, Trophy } from "lucide-react"

export function WhyImportantSection() {
  const benefits = [
    {
      icon: Rocket,
      title: "Навыки будущего",
      description: "Изучение ИИ-инструментов, которые будут востребованы в ближайшие 10-20 лет",
    },
    {
      icon: Palette,
      title: "Креативность",
      description: "Развитие творческого мышления через создание уникальных проектов с ИИ",
    },
    {
      icon: Cpu,
      title: "Работа с технологиями",
      description: "Практические навыки использования современных цифровых инструментов",
    },
    {
      icon: Trophy,
      title: "Уверенность в себе",
      description: "Повышение самооценки через достижение реальных результатов в проектах",
    },
  ]

  return (
    <section id="advantages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Почему это <span className="text-secondary">важно</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              В мире, где ИИ меняет все сферы жизни, важно дать детям преимущество уже сегодня
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-balance">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
