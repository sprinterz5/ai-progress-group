import { Users, Zap, Trophy } from "lucide-react"

export function FormatSection() {
  const features = [
    {
      icon: Users,
      title: "Мини-группы",
      description: "До 6 детей в группе для максимального внимания каждому ученику",
    },
    {
      icon: Zap,
      title: "Практика",
      description: "100% практических занятий с реальными ИИ-инструментами",
    },
    {
      icon: Trophy,
      title: "Результат",
      description: "Каждый ребенок создает собственный проект к концу курса",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Формат <span className="text-secondary">обучения</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Современный подход к образованию с фокусом на практические результаты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">{feature.title}</h3>

                <p className="text-muted-foreground text-lg text-balance">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
