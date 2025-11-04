import { Card, CardContent } from "@/components/ui/card"
import { Sprout, Beef, TreeDeciduous } from "lucide-react"

const ventures = [
  {
    number: "01",
    icon: Sprout,
    title: "Diversified Crop Farming",
    description:
      "Extensive agricultural operations across Lum, Limbe, and surrounding regions, producing high-quality crops with sustainable farming practices.",
    locations: "Lum, Limbe",
  },
  {
    number: "02",
    icon: Beef,
    title: "Livestock Operations",
    description:
      "Comprehensive livestock management including professional pig farming, goat farming, and modern poultry operations, ensuring quality production and contributing to local food security.",
    locations: "Multiple farm locations",
  },
  {
    number: "03",
    icon: TreeDeciduous,
    title: "Cash Crops Cultivation",
    description:
      "Strategic cultivation of premium cocoa and rubber, positioning the Asandan Group for international export opportunities in the global commodity market.",
    locations: "Regional farms and plantations",
  },
]

export function VenturesSection() {
  return (
    <section id="ventures" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Current Ventures</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Established Operations Generating Success
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Our current portfolio demonstrates proven excellence in agriculture and livestock management, forming the
            foundation of the Asandan Group's diversified business model.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ventures.map((venture) => (
            <Card key={venture.number} className="border-2 hover:border-primary transition-colors group">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="text-6xl font-bold text-muted/20 group-hover:text-primary/20 transition-colors">
                    {venture.number}
                  </div>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <venture.icon className="h-7 w-7 text-primary group-hover:text-white" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground text-balance">{venture.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{venture.description}</p>
                  <p className="text-sm text-primary font-medium">📍 {venture.locations}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
