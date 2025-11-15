import { motion } from "framer-motion"
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

interface FooterProps {
  onContactClick?: () => void
  onServicesClick?: () => void
}

export function Footer({ onContactClick, onServicesClick }: FooterProps) {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-brand-deep to-brand-forest">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-brand-moss/10 blur-3xl" />
      </div>

      <div className="container relative py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-gold to-brand-sand">
                <Building2 className="h-6 w-6 text-brand-deep" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">StarFM</h3>
                <p className="text-xs text-brand-cream/70">Facilities Management</p>
              </div>
            </div>
            <p className="mb-6 text-sm text-brand-cream/80">
              Leading facilities management solutions across the region, delivering excellence in every service.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl transition-all hover:scale-110 hover:border-brand-gold hover:bg-brand-gold/20"
                >
                  <Icon className="h-4 w-4 text-brand-cream" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Programs", href: "#programs" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-brand-cream/80 transition-colors hover:text-brand-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onServicesClick}
                  className="text-sm text-brand-cream/80 transition-colors hover:text-brand-gold text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="text-sm text-brand-cream/80 transition-colors hover:text-brand-gold text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-3">
              {[
                "Facilities Management",
                "Home Solutions",
                "Hospitality Services",
                "Landscaping",
                "Technical Services",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-brand-cream/80 transition-colors hover:text-brand-gold"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                <span className="text-sm text-brand-cream/80">
                  Jeddah
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-gold" />
                <a href="tel:+97112345678" className="text-sm text-brand-cream/80 transition-colors hover:text-brand-gold">
                  +971 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-gold" />
                <a href="mailto:info@starfm.com" className="text-sm text-brand-cream/80 transition-colors hover:text-brand-gold">
                  info@starfm.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-brand-cream/60 md:flex-row md:text-left">
          <p>© 2025 StarFM. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="transition-colors hover:text-brand-gold">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-brand-gold">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-brand-gold">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
