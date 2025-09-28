import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Мама Максима, 10 лет",
      content:
        "Максим в восторге от занятий! Теперь он создает своих персонажей и даже помогает мне с презентациями для работы. Спасибо Startum Kids за такой современный подход к обучению.",
      rating: 5,
    },
    {
      name: "Дмитрий Козлов",
      role: "Папа Софии, 12 лет",
      content:
        "София всегда была творческой, но здесь она научилась воплощать свои идеи с помощью ИИ. Теперь она мечтает стать дизайнером и уже создает потрясающие проекты.",
      rating: 5,
    },
    {
      name: "Елена Смирнова",
      role: "Мама Артема, 9 лет",
      content:
        "Артем стал более уверенным в себе и начал интересоваться технологиями. Преподаватели умеют найти подход к каждому ребенку. Очень рекомендую!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Что говорят <span className="text-primary">родители</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Отзывы семей, которые уже оценили качество нашего обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
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
