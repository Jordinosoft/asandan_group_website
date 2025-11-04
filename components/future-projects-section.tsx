import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Home, TrendingUp, Globe, Package } from "lucide-react"

const projects = [
  {
    icon: Building2,
    title: "Five-Star Hotel Development",
    description:
      "A flagship luxury hospitality project that will set new standards for premium accommodation and service excellence in the region.",
    impact: "Tourism & Hospitality",
  },
  {
    icon: Home,
    title: "Residential Property Management",
    description:
      "Dedicated house renting division providing quality residential properties and professional property management services.",
    impact: "Real Estate",
  },
  {
    icon: TrendingUp,
    title: "Agricultural Expansion",
    description:
      "Strategic acquisition of new farmland to scale our proven agricultural operations and increase production capacity.",
    impact: "Agriculture Growth",
  },
  {
    icon: Globe,
    title: "Cocoa Exportation",
    description:
      "Establishing international supply chains to export premium Cameroonian cocoa to global markets, opening new revenue streams.",
    impact: "International Trade",
  },
  {
    icon: Package,
    title: "Rubber Exportation",
    description:
      "Developing export channels for our rubber production to reach international markets, leveraging our growing rubber cultivation operations.",
    impact: "International Trade",
  },
]

export function FutureProjectsSection() {
  return (
    <section id="future" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Future Projects</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            The Next Chapter of Growth
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Our ambitious expansion plans demonstrate our commitment to diversification and our vision for becoming a
            key player in Central Africa's economic development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-primary text-white">Upcoming</Badge>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <project.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground text-balance">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                  <div className="pt-2">
                    <span className="text-sm font-semibold text-primary">{project.impact}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Project Highlight */}
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <Badge className="bg-primary text-white">Flagship Project</Badge>
                  <h3 className="text-3xl font-bold text-foreground text-balance">
                    Five-Star Hotel: A New Era of Luxury
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    Our flagship hospitality project will bring world-class luxury accommodation to Cameroon, featuring
                    premium amenities, exceptional service, and strategic location to serve both business and leisure
                    travelers.
                  </p>
                </div>
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/Strawberry-Park-Resort1-large.jpg"
                    alt="Five-Star Hotel Concept"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
