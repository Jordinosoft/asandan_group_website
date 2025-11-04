import { Target, Eye, Award } from "lucide-react"

export function MissionSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Mission & Vision</h2>
            <p className="text-xl text-accent leading-relaxed text-pretty">
              The Asandan Group is dedicated to pioneering entrepreneurial excellence and driving sustained economic
              diversification across Cameroon. We cultivate success in foundational sectors like agriculture and
              livestock while expanding into high-growth areas such as luxury hospitality and real estate, committed to
              building a lasting legacy of quality and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-accent text-sm leading-relaxed">
                Uncompromising quality in every venture we undertake
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Vision</h3>
              <p className="text-accent text-sm leading-relaxed">Strategic foresight driving sustainable growth</p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Legacy</h3>
              <p className="text-accent text-sm leading-relaxed">Building lasting value for Cameroon's future</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
