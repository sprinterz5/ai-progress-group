import { Mail, Phone, MapPin, Instagram, Youtube, Send } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacts" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SK</span>
                </div>
                <span className="text-xl font-bold">Startum Kids</span>
              </div>
              <p className="text-background/70 mb-6 max-w-md">
                Современная мини-школа для детей 8+ лет. Развиваем креативность и цифровые навыки через практику с
                искусственным интеллектом.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                >
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-background/70 hover:text-background transition-colors">
                    О школе
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-background/70 hover:text-background transition-colors">
                    Программы
                  </a>
                </li>
                <li>
                  <a href="#advantages" className="text-background/70 hover:text-background transition-colors">
                    Преимущества
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/70 hover:text-background transition-colors">
                    Расписание
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/70 hover:text-background transition-colors">
                    Цены
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-background/70">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-background/70">info@startumkids.ru</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-background/70">г. Москва, ул. Инновационная, д. 42</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">© 2025 Startum Kids. Все права защищены.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
