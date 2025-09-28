"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">SK</span>
            </div>
            <span className="text-xl font-bold text-foreground">Startum Kids</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              О школе
            </a>
            <a href="#programs" className="text-muted-foreground hover:text-foreground transition-colors">
              Программы
            </a>
            <a href="#advantages" className="text-muted-foreground hover:text-foreground transition-colors">
              Преимущества
            </a>
            <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium">Записаться</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                О школе
              </a>
              <a href="#programs" className="text-muted-foreground hover:text-foreground transition-colors">
                Программы
              </a>
              <a href="#advantages" className="text-muted-foreground hover:text-foreground transition-colors">
                Преимущества
              </a>
              <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium w-full mt-2">Записаться</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
