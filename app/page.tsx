import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { VenturesSection } from "@/components/ventures-section"
import { FutureProjectsSection } from "@/components/future-projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <VenturesSection />
      <FutureProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
