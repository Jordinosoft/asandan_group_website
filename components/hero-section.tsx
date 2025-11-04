import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/diversified-professional-business-group.png" alt="Asandan Group Farms" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
            Pioneering Entrepreneurial Excellence
          </h1>
          <p className="text-xl md:text-2xl text-accent leading-relaxed max-w-3xl mx-auto text-pretty">
            Cultivating success across agriculture, livestock, hospitality, and real estate—building a lasting legacy of
            quality and scale in Cameroon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-6" asChild>
              <a href="#ventures">
                Explore Our Ventures <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white text-base px-8 py-6 bg-transparent"
              asChild
            >
              <a href="#about">Our Story</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
