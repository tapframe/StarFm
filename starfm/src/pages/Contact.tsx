import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactProps {
  onBack: () => void
}

export function Contact({ onBack }: ContactProps) {
  const pageRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const backButtonRef = useRef<HTMLButtonElement>(null)
  const pageHeaderRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const contactCardsRef = useRef<HTMLDivElement[]>([])
  const formRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const buttonHoverRef = useRef<HTMLDivElement>(null)

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+XXX XXX XXXX", "+XXX XXX XXXX"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@mahhabfm.com", "support@mahhabfm.com"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["[Address Line 1]", "[City, Country]"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "from-orange-500 to-red-500"
    }
  ]

  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo({ top: 0, behavior: "instant" })
    
    // Page fade in
    if (pageRef.current) {
      gsap.fromTo(pageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
    }

    // Header animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      )
    }

    // Back button hover
    if (backButtonRef.current) {
      backButtonRef.current.addEventListener("mouseenter", () => {
        gsap.to(backButtonRef.current, { scale: 1.05, x: -5, duration: 0.2 })
      })
      backButtonRef.current.addEventListener("mouseleave", () => {
        gsap.to(backButtonRef.current, { scale: 1, x: 0, duration: 0.2 })
      })
      backButtonRef.current.addEventListener("mousedown", () => {
        gsap.to(backButtonRef.current, { scale: 0.95, duration: 0.1 })
      })
      backButtonRef.current.addEventListener("mouseup", () => {
        gsap.to(backButtonRef.current, { scale: 1.05, duration: 0.1 })
      })
    }

    // Page header animations
    if (pageHeaderRef.current) {
      gsap.fromTo(pageHeaderRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )
    }

    if (badgeRef.current) {
      gsap.fromTo(badgeRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.2 }
      )
    }

    // Contact cards animations
    contactCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.4 + index * 0.1
          }
        )

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -5, scale: 1.02, duration: 0.3 })
        })
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.3 })
        })
      }
    })

    // Form animation
    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.3 }
      )
    }

    // Map animation
    if (mapRef.current) {
      gsap.fromTo(mapRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.8 }
      )
    }

    // Button hover effect
    const submitButton = document.querySelector('.submit-button')
    if (submitButton && buttonHoverRef.current) {
      gsap.set(buttonHoverRef.current, { x: "-100%" })
      submitButton.addEventListener("mouseenter", () => {
        gsap.to(buttonHoverRef.current, { x: 0, duration: 0.3 })
      })
      submitButton.addEventListener("mouseleave", () => {
        gsap.to(buttonHoverRef.current, { x: "-100%", duration: 0.3 })
      })
    }

    return () => {
      if (backButtonRef.current) {
        backButtonRef.current.removeEventListener("mouseenter", () => {})
        backButtonRef.current.removeEventListener("mouseleave", () => {})
        backButtonRef.current.removeEventListener("mousedown", () => {})
        backButtonRef.current.removeEventListener("mouseup", () => {})
      }
      contactCardsRef.current.forEach(card => {
        if (card) {
          card.removeEventListener("mouseenter", () => {})
          card.removeEventListener("mouseleave", () => {})
        }
      })
    }
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-white via-brand-cream/20 to-blue-400/30">
      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-blue-500/10 opacity-50" />
        <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-brand-moss/10 opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Header */}
      <header ref={headerRef} className="sticky top-0 z-50 border-b border-blue-500/20 bg-white/80">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
          <button
            ref={backButtonRef}
            onClick={onBack}
            className="flex items-center gap-2 rounded-full border-2 border-brand-deep/10 bg-white px-4 py-2 font-bold text-brand-deep transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={2.5} />
            Back to Home
          </button>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 shadow-lg">
              <span className="font-display text-lg font-black text-brand-deep">SF</span>
            </div>
            <span className="hidden font-display text-xl font-black text-brand-deep sm:block">MahhabFM</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container relative mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        {/* Page Header */}
        <div ref={pageHeaderRef} className="mb-16 text-center">
          <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 bg-opacity-50">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
              Get In Touch
            </span>
          </div>

          <h1 className="mb-6 font-display text-5xl font-black leading-tight text-brand-deep sm:text-6xl lg:text-7xl">
            Contact
            <span className="block gradient-text mt-2">
              Our Team
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-forest/70">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) contactCardsRef.current[index] = el
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-brand-deep/10 bg-white/80 p-6 shadow-lg transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative flex items-start gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${info.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="mb-3 font-display text-xl font-bold text-brand-deep">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm font-medium leading-relaxed text-brand-forest/70">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-500/10 opacity-50 transition-all duration-300 group-hover:bg-blue-500/20" />
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-azure/20 to-brand-moss/20 rounded-3xl opacity-60 -z-10" />
            
            <div className="relative overflow-hidden rounded-3xl border border-brand-azure/20 bg-white/90 p-8 shadow-2xl sm:p-10">
              <h3 className="mb-6 font-display text-3xl font-black text-brand-deep">
                Send us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-brand-deep">
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full rounded-xl border-2 border-brand-deep/10 bg-white px-4 py-3 text-brand-deep transition-all duration-300 placeholder:text-brand-forest/40 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-brand-deep">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-xl border-2 border-brand-deep/10 bg-white px-4 py-3 text-brand-deep transition-all duration-300 placeholder:text-brand-forest/40 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-brand-deep">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full rounded-xl border-2 border-brand-deep/10 bg-white px-4 py-3 text-brand-deep transition-all duration-300 placeholder:text-brand-forest/40 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-brand-deep">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+XXX XXX XXXX"
                    className="w-full rounded-xl border-2 border-brand-deep/10 bg-white px-4 py-3 text-brand-deep transition-all duration-300 placeholder:text-brand-forest/40 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-brand-deep">
                    Service Interest
                  </label>
                  <select className="w-full rounded-xl border-2 border-brand-deep/10 bg-white px-4 py-3 text-brand-deep transition-all duration-300 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10">
                    <option>Facilities Management</option>
                    <option>Home Solutions</option>
                    <option>Hospitality Services</option>
                    <option>Landscaping & Gardens</option>
                    <option>Technical Services</option>
                    <option>Pest Control</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-brand-deep">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your needs..."
                    className="w-full rounded-xl border-2 border-brand-deep/10 bg-white px-4 py-3 text-brand-deep transition-all duration-300 placeholder:text-brand-forest/40 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="submit-button group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 py-6 font-black uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div ref={buttonHoverRef} className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </form>

              {/* Decorative elements */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 opacity-50" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-brand-moss/20 opacity-50" />
            </div>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div ref={mapRef} className="mt-16 overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-white/50 to-blue-400/10 shadow-2xl">
          <div className="flex h-96 items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-16 w-16 text-blue-500" strokeWidth={1.5} />
              <h3 className="mb-2 font-display text-2xl font-bold text-brand-deep">
                Map Location
              </h3>
              <p className="text-sm text-brand-forest/70">
                [Interactive map will be added here]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
