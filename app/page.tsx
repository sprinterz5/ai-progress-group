import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyImportantSection } from "@/components/why-important-section"
import { ProgramsSection } from "@/components/programs-section"
import { FormatSection } from "@/components/format-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyImportantSection />
      <ProgramsSection />
      <FormatSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
