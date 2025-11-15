import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Membership", href: "#membership" },
    { label: "Training Center", href: "#training" },
    { label: "Members Portal", href: "#portal" },
    { label: "Programs", href: "#programs" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b border-white/30 bg-white/90 backdrop-blur-2xl shadow-brand/50",
        className
      )}
    >
      <div className="container flex h-24 items-center justify-between gap-8 px-6">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center gap-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-forest via-brand-moss to-brand-deep text-white shadow-lg transition-transform duration-300 hover:scale-105">
              <span className="text-xl font-bold tracking-tight">SF</span>
            </div>
            <div className="border-l border-brand-gold/30 pl-3">
              <p className="text-base font-bold tracking-wide text-primary">StarFM <span className="text-xs font-medium text-muted-foreground/80">— Excellence in FM</span></p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center space-x-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative px-3 py-2 text-sm font-medium text-foreground/75 transition-colors duration-300 hover:text-primary"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-brand-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <span className="hidden text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/70 lg:inline">
            EN / AR
          </span>
          <div className="h-6 w-px bg-gradient-to-b from-transparent via-brand-gold/50 to-transparent" />
          <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-brand-forest px-6 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Login / Sign Up
          </Button>
        </div>
      </div>
    </nav>
  )
}
