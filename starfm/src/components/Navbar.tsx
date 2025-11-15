import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Membership", href: "#membership" },
    { label: "Our Services", href: "#services" },
    { label: "Members Portal", href: "#portal" },
    { label: "Programs", href: "#programs" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-20 lg:h-24 lg:px-6">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2 sm:gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand-forest shadow-brand transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12 sm:rounded-2xl">
            <span className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
              SF
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
              StarFM
            </span>
            <span className="hidden text-xs tracking-wide text-muted-foreground sm:block">
              Excellence in Facilities
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-brand-forest transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          {/* Language Toggle */}
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/40 px-2.5 py-1 backdrop-blur-sm sm:px-3 sm:py-1.5">
            <button className="text-xs font-semibold text-foreground transition-opacity hover:opacity-100">
              EN
            </button>
            <span className="text-xs text-muted-foreground">/</span>
            <button className="text-xs font-semibold text-muted-foreground transition-opacity hover:opacity-100">
              AR
            </button>
          </div>

          <Button className="hidden rounded-full bg-gradient-to-r from-primary to-brand-forest px-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:inline-flex sm:px-6">
            Join Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/40 backdrop-blur-sm transition-colors hover:bg-white/60 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-white/60 hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-2 w-full rounded-full bg-gradient-to-r from-primary to-brand-forest shadow-lg">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
