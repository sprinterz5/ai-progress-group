import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Film, GraduationCap, Clock, Users, Star } from "lucide-react"

export function ProgramsSection() {
  const programs = [
    {
      icon: User,
      title: "Создай персонажа с ИИ",
      description: "Дети учатся создавать уникальных персонажей с помощью ИИ-генераторов изображений",
      duration: "4 недели",
      age: "8-12 лет",
      level: "Начинающий",
      color: "from-primary/20 to-primary/10",
    },
    {
      icon: Film,
      title: "Мультфильмы с ИИ",
      description: "Создание коротких анимационных роликов с использованием ИИ-инструментов",
      duration: "6 недель",
      age: "10-14 лет",
      level: "Продвинутый",
      color: "from-secondary/20 to-secondary/10",
    },
    {
      icon: GraduationCap,
      title: "ИИ-помощник в учёбе",
      description: "Изучаем, как ИИ может помочь в выполнении домашних заданий и изучении новых тем",
      duration: "3 недели",
      age: "8-16 лет",
      level: "Для всех",
      color: "from-accent/20 to-accent/10",
    },
  ]

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Наши <span className="text-primary">программы</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Практические курсы, где дети создают реальные проекты с помощью ИИ-инструментов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <program.icon className="w-8 h-8 text-primary" />
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

                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Записаться на курс</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
