import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold">ASANDAN GROUP</h3>
            <p className="text-accent leading-relaxed max-w-md text-pretty">
              Pioneering entrepreneurial excellence and driving sustained economic diversification across Cameroon.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-accent hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-accent hover:text-primary-foreground transition-colors">
                About
              </Link>
              <Link href="#ventures" className="text-accent hover:text-primary-foreground transition-colors">
                Current Ventures
              </Link>
              <Link href="#future" className="text-accent hover:text-primary-foreground transition-colors">
                Future Projects
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact</h4>
            <div className="space-y-2 text-accent text-sm">
              <p>Lum, Limbe</p>
              <p>Cameroon</p>
              <p>contact@asandangroup.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-accent text-sm">© {new Date().getFullYear()} Asandan Group. All rights reserved.</p>
          <p className="text-accent text-sm">Building Cameroon's Economic Future</p>
        </div>
      </div>
    </footer>
  )
}
