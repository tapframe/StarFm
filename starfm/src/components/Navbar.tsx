import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"

interface NavbarProps {
  onContactClick?: () => void
  onServicesClick?: () => void
}

export function Navbar({ onContactClick, onServicesClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/98 shadow-2xl shadow-brand-deep/5 backdrop-blur-2xl" 
          : "bg-white/85 backdrop-blur-xl"
      }`}
    >
      {/* Gradient Border */}
      <div className={`absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent transition-opacity duration-500 ${
        scrolled ? "opacity-100" : "opacity-0"
      }`} />
      
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:h-24 lg:px-6">
        {/* Logo */}
        <motion.a
          href="#"
          className="group relative flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-sand opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold via-brand-sand to-brand-gold shadow-lg ring-2 ring-brand-gold/20 transition-all duration-300 group-hover:ring-4 group-hover:ring-brand-gold/30 sm:h-14 sm:w-14">
              <span className="font-display text-xl font-black tracking-tighter text-brand-deep sm:text-2xl">
                SF
              </span>
              <div className="absolute -right-1 -top-1">
                <Sparkles className="h-3 w-3 text-brand-gold animate-pulse" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-black tracking-tight text-brand-deep transition-colors group-hover:text-brand-forest sm:text-2xl">
              StarFM
            </span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-brand-forest/60 sm:block">
              Excellence in Facilities
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group relative text-sm font-bold uppercase tracking-wide text-brand-deep/70 transition-all duration-300 hover:text-brand-deep"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-brand-gold via-brand-sand to-brand-gold transition-all duration-300 group-hover:w-full" />
              <span className="absolute inset-0 -z-10 scale-0 rounded-lg bg-brand-gold/10 transition-transform duration-300 group-hover:scale-100" />
            </motion.a>
          ))}
          
          {/* Services Link */}
          <motion.button
            onClick={onServicesClick}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: navItems.length * 0.1 }}
            className="group relative text-sm font-bold uppercase tracking-wide text-brand-deep/70 transition-all duration-300 hover:text-brand-deep"
          >
            <span className="relative z-10">Our Services</span>
            <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-brand-gold via-brand-sand to-brand-gold transition-all duration-300 group-hover:w-full" />
            <span className="absolute inset-0 -z-10 scale-0 rounded-lg bg-brand-gold/10 transition-transform duration-300 group-hover:scale-100" />
          </motion.button>
        </div>

        {/* CTA Section */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Toggle */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 rounded-full border-2 border-brand-deep/10 bg-white px-3 py-1.5 shadow-sm transition-all duration-300 hover:border-brand-gold/30 hover:shadow-md sm:px-4 sm:py-2"
          >
            <button className="text-xs font-black uppercase text-brand-deep transition-opacity hover:opacity-80">
              EN
            </button>
            <span className="h-3 w-[2px] bg-brand-deep/20" />
            <button className="text-xs font-black uppercase text-brand-deep/40 transition-opacity hover:opacity-100">
              AR
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={onContactClick}
              className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-brand-gold via-brand-sand to-brand-gold px-6 py-2.5 font-bold uppercase tracking-wide text-brand-deep shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/40 sm:inline-flex"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-sand to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-brand-deep/10 bg-white shadow-sm transition-all duration-300 hover:border-brand-gold/30 hover:bg-brand-gold/5 hover:shadow-md lg:hidden"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-brand-deep" strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-brand-deep" strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t-2 border-brand-gold/20 bg-white/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="group relative overflow-hidden rounded-xl border-2 border-brand-deep/10 bg-white px-5 py-4 text-base font-bold uppercase tracking-wide text-brand-deep/70 transition-all duration-300 hover:border-brand-gold/30 hover:bg-brand-gold/5 hover:text-brand-deep"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-brand-gold/10 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
                  </motion.a>
                ))}
                
                {/* Services Button */}
                <motion.button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onServicesClick?.();
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border-2 border-brand-deep/10 bg-white px-5 py-4 text-base font-bold uppercase tracking-wide text-brand-deep/70 transition-all duration-300 hover:border-brand-gold/30 hover:bg-brand-gold/5 hover:text-brand-deep text-left"
                >
                  <span className="relative z-10">Our Services</span>
                  <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-brand-gold/10 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
                </motion.button>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (navItems.length + 1) * 0.1 }}
                >
                  <Button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onContactClick?.();
                    }}
                    className="mt-3 w-full rounded-xl bg-gradient-to-r from-brand-gold via-brand-sand to-brand-gold py-4 font-black uppercase tracking-wide text-brand-deep shadow-lg hover:shadow-2xl hover:shadow-brand-gold/40"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
