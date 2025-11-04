import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/cocoa-harvesting2.jpg"
                alt="Asandan Group Operations"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm tracking-wider uppercase">Our Story</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Building a Legacy of Excellence
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Asandan Group stands as a testament to Cameroonian entrepreneurship, driven by a singular vision: to
                build a diversified business empire that contributes substantially to the nation's economic growth and
                stability. Our journey reflects the power of committed domestic investment, establishing a foundation
                for innovation and scale across various vital sectors.
              </p>
              <p>
                Our roots are firmly planted in the foundational sectors of agriculture and livestock, with extensive,
                high-quality operations in regions including Lum and Limbe. This foundational success in resource
                management and production serves as the bedrock for our ambitious expansion plans.
              </p>
              <p>
                Looking forward, we are spearheading strategic diversification into high-growth, high-value markets.
                This includes the development of a flagship 5-Star Hotel, major residential property initiatives, and
                the critical step of establishing international channels for Cameroonian commodity export, beginning
                with cocoa and rubber.
              </p>
            </div>

            <Card className="bg-muted/50 border-primary/20 p-6">
              <p className="text-foreground font-semibold text-lg italic leading-relaxed text-pretty">
                "Our expansion is not merely about growth; it is about establishing a lasting legacy of excellence,
                creating sustainable opportunities, and positioning the Asandan Group as a key player in Central
                Africa's next era of development."
              </p>
              <p className="text-muted-foreground mt-3 font-medium">— Asandan Group Leadership</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
