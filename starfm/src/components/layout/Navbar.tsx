import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowLeft, ChevronDown } from "lucide-react"
import { LoadingOverlay } from "@/components/ui/loading-overlay"
import { ModeToggle } from "@/components/layout/mode-toggle"

interface NavbarProps {
  onContactClick?: () => void
  onServicesClick?: () => void
  isPageView?: boolean
  onBack?: () => void
}

export function Navbar({ onContactClick, onServicesClick, isPageView, onBack }: NavbarProps) {
  const { t, i18n } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navbarVisible, setNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [languageLoading, setLanguageLoading] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [activeServiceTab, setActiveServiceTab] = useState<'individual' | 'corporate'>('individual')

  const changeLanguage = async (lng: string) => {
    if (lng === i18n.language) return
    setLanguageLoading(true)
    const startTime = Date.now()
    const minDisplayTime = 2000 // Minimum 2 seconds

    try {
      await i18n.changeLanguage(lng)
    } catch (error) {
      console.error("Failed to change language:", error)
    } finally {
      // Calculate remaining time to reach minimum display time
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime)

      // Wait for remaining time before hiding overlay
      setTimeout(() => {
        setLanguageLoading(false)
      }, remainingTime)
    }
  }
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const navItemsRef = useRef<HTMLAnchorElement[]>([])
  const servicesButtonRef = useRef<HTMLButtonElement>(null)
  const closeTimeoutRef = useRef<number | null>(null)
  const languageToggleRef = useRef<HTMLDivElement>(null)
  const contactButtonRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileNavItemsRef = useRef<HTMLAnchorElement[]>([])
  const mobileServicesRef = useRef<HTMLButtonElement>(null)
  const mobileContactRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 20)

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setNavbarVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide navbar when scrolling down
        setNavbarVisible(false)
      }

      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Initial navbar animation
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100 },
        { y: 0, duration: 0.6, ease: "power2.out" }
      )
    }

    // Logo hover
    if (logoRef.current) {
      logoRef.current.addEventListener("mouseenter", () => {
        gsap.to(logoRef.current, { scale: 1.02, duration: 0.2 })
      })
      logoRef.current.addEventListener("mouseleave", () => {
        gsap.to(logoRef.current, { scale: 1, duration: 0.2 })
      })
    }

    // Nav items animations
    navItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.4, delay: index * 0.1 }
        )
      }
    })

    if (servicesButtonRef.current) {
      gsap.fromTo(servicesButtonRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, delay: navItemsRef.current.length * 0.1 }
      )
    }

    // Language toggle hover
    if (languageToggleRef.current) {
      languageToggleRef.current.addEventListener("mouseenter", () => {
        gsap.to(languageToggleRef.current, { scale: 1.05, duration: 0.2 })
      })
      languageToggleRef.current.addEventListener("mouseleave", () => {
        gsap.to(languageToggleRef.current, { scale: 1, duration: 0.2 })
      })
    }

    // Contact button hover
    if (contactButtonRef.current) {
      contactButtonRef.current.addEventListener("mouseenter", () => {
        gsap.to(contactButtonRef.current, { scale: 1.05, duration: 0.2 })
      })
      contactButtonRef.current.addEventListener("mouseleave", () => {
        gsap.to(contactButtonRef.current, { scale: 1, duration: 0.2 })
      })
      contactButtonRef.current.addEventListener("mousedown", () => {
        gsap.to(contactButtonRef.current, { scale: 0.95, duration: 0.1 })
      })
      contactButtonRef.current.addEventListener("mouseup", () => {
        gsap.to(contactButtonRef.current, { scale: 1.05, duration: 0.1 })
      })
    }

    // Arrow animation
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        x: 4,
        duration: 0.75,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      })
    }

    // Store refs to avoid stale closure warnings
    const logo = logoRef.current
    const languageToggle = languageToggleRef.current
    const contactButton = contactButtonRef.current

    return () => {
      if (logo) {
        logo.removeEventListener("mouseenter", () => { })
        logo.removeEventListener("mouseleave", () => { })
      }
      if (languageToggle) {
        languageToggle.removeEventListener("mouseenter", () => { })
        languageToggle.removeEventListener("mouseleave", () => { })
      }
      if (contactButton) {
        contactButton.removeEventListener("mouseenter", () => { })
        contactButton.removeEventListener("mouseleave", () => { })
        contactButton.removeEventListener("mousedown", () => { })
        contactButton.removeEventListener("mouseup", () => { })
      }
      // clear any pending dropdown close timeout on unmount
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current)
        closeTimeoutRef.current = null
      }
    }
  }, [])

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileMenuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { opacity: 0, height: 0 },
          { opacity: 1, height: "auto", duration: 0.3 }
        )

        // Animate mobile nav items
        mobileNavItemsRef.current.forEach((item, index) => {
          if (item) {
            gsap.fromTo(item,
              { opacity: 0, x: -20 },
              { opacity: 1, x: 0, duration: 0.3, delay: index * 0.1 }
            )
          }
        })

        if (mobileServicesRef.current) {
          gsap.fromTo(mobileServicesRef.current,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.3, delay: mobileNavItemsRef.current.length * 0.1 }
          )
        }

        if (mobileContactRef.current) {
          gsap.fromTo(mobileContactRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3, delay: (mobileNavItemsRef.current.length + 1) * 0.1 }
          )
        }
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          height: 0,
          duration: 0.3
        })
      }
    }
  }, [mobileMenuOpen])

  const navItems = [
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.programs'), href: "#programs" },
    { label: t('nav.training'), href: "#training" },
  ]

  const individualServices = [
    { label: "Cleaning Services", icon: "🧹", href: "/services/cleaning" },
    { label: "Hospitality Services", icon: "🏨", href: "/services/hospitality" },
    { label: "Air Conditioner Repair", icon: "🔧", href: "/services/ac-repair" },
    { label: "Electrical Services", icon: "⚡", href: "/services/electrical" },
    { label: "Pool Cleaning", icon: "🏊", href: "/services/pool-cleaning" },
    { label: "Beach Cleaning", icon: "🏖️", href: "/services/beach-cleaning" },
    { label: "Landscaping", icon: "🌱", href: "/services/landscaping" },
    { label: "Pest Control Services", icon: "🦟", href: "/services/pest-control" },
    { label: "Plumbing Services", icon: "🚰", href: "/services/plumbing" },
    { label: "Facade Cleaning", icon: "🏢", href: "/services/facade-cleaning" },
    { label: "Sweeper Services", icon: "🚛", href: "/services/sweeper" },
    { label: "Sewage Trucks", icon: "🚚", href: "/services/sewage-trucks" },
    { label: "Logistics Services", icon: "📦", href: "/services/logistics" },
    { label: "Water Services", icon: "💧", href: "/services/water" },
    { label: "Water Tank Cleaning", icon: "🪣", href: "/services/water-tank-cleaning" },
    { label: "Yacht Cleaning", icon: "⛵", href: "/services/yacht-cleaning" },
    { label: "Renovation Services", icon: "🏠", href: "/services/renovation" },
  ]

  const corporateServices = [
    { label: "Regular Cleaning", icon: "🧹", href: "/services/corporate/regular-cleaning" },
    { label: "Pool Cleaning Services", icon: "🏊", href: "/services/corporate/pool-cleaning" },
    { label: "Plumbing Services", icon: "🚰", href: "/services/corporate/plumbing" },
    { label: "Beach Cleaning", icon: "🏖️", href: "/services/corporate/beach-cleaning" },
    { label: "Facade Cleaning", icon: "🏢", href: "/services/corporate/facade-cleaning" },
    { label: "Sweeper Services", icon: "🚛", href: "/services/corporate/sweeper" },
    { label: "Sewage Trucks Services", icon: "🚚", href: "/services/corporate/sewage-trucks" },
    { label: "Logistics Services", icon: "📦", href: "/services/corporate/logistics" },
    { label: "Water Tank Cleaning", icon: "🪣", href: "/services/corporate/water-tank-cleaning" },
    { label: "Deep Cleaning", icon: "🧽", href: "/services/corporate/deep-cleaning" },
    { label: "Housekeeping Services", icon: "👩‍💼", href: "/services/corporate/housekeeping" },
    { label: "Hospitality Services", icon: "🏨", href: "/services/corporate/hospitality" },
    { label: "Air Conditioner Repair", icon: "🔧", href: "/services/corporate/ac-repair" },
    { label: "Pest Control Services", icon: "🦟", href: "/services/corporate/pest-control" },
    { label: "Maintenance Operation Services", icon: "🔨", href: "/services/corporate/maintenance" },
    { label: "Restoration Renovation Services", icon: "⚙️", href: "/services/corporate/restoration" },
    { label: "Agricultural Services", icon: "🌾", href: "/services/corporate/agricultural" },
    { label: "Yacht Cleaning", icon: "⛵", href: "/services/corporate/yacht-cleaning" },
  ]

  return (
    <>
      <LoadingOverlay
        isLoading={languageLoading}
        message={t('nav.languageLoadingMessage')}
      />
      <nav
        ref={navRef}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${navbarVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0 pointer-events-none"
          } ${scrolled
            ? "bg-white/95 dark:bg-slate-900/95 shadow-2xl shadow-brand-deep/5"
            : "bg-white/85 dark:bg-slate-900/85"
          }`}
      >
        {/* Gradient Border */}
        <div className={`absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"
          }`} />

        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:h-24 lg:px-6">
          {isPageView ? (
            <>
              {/* Page View: Back Button on Left */}
              <button
                ref={servicesButtonRef}
                onClick={onBack}
                className="flex items-center gap-2 rounded-full border-2 border-brand-deep/10 bg-white dark:bg-slate-800 px-4 py-2 font-bold text-brand-deep dark:text-white transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={2.5} />
                {t('nav.backToHome')}
              </button>


              {/* Logo on Right */}
              <img
                src="/image.png"
                alt="MahhabFM Logo"
                className="h-16 w-16 sm:h-28 sm:w-28 object-contain"
              />
            </>
          ) : (
            <>
              {/* Logo */}
              <a
                ref={logoRef}
                href="#"
                className="group relative flex items-center gap-2 transition-transform duration-300 hover:scale-105 mt-3"
              >
                <img
                  src="/image.png"
                  alt="MahhabFM Logo"
                  className="h-20 w-20 sm:h-16 sm:w-16 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain"
                />
              </a>

              {/* Desktop Navigation Links */}
              <div className="hidden items-center gap-8 lg:flex xl:gap-10">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    ref={(el) => {
                      if (el) navItemsRef.current[index] = el
                    }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="group relative text-sm font-bold uppercase tracking-wide text-blue-600/70 dark:text-blue-400/70 transition-all duration-300 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                    <span className="absolute inset-0 -z-10 scale-0 rounded-lg bg-blue-500/10 transition-transform duration-300 group-hover:scale-100" />
                  </a>
                ))}

                {/* Services Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => {
                    // cancel any pending close and open immediately
                    if (closeTimeoutRef.current) {
                      window.clearTimeout(closeTimeoutRef.current)
                      closeTimeoutRef.current = null
                    }
                    setServicesDropdownOpen(true)
                  }}
                  onMouseLeave={() => {
                    // add a short delay before closing to allow mouse to move to dropdown
                    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current)
                    closeTimeoutRef.current = window.setTimeout(() => {
                      setServicesDropdownOpen(false)
                      closeTimeoutRef.current = null
                    }, 160)
                  }}
                >
                  <button
                    ref={servicesButtonRef}
                    className="group/btn relative text-sm font-bold uppercase tracking-wide text-blue-600/70 dark:text-blue-400/70 transition-all duration-300 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
                  >
                    <span className="relative z-10">{t('nav.services')}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all duration-300 group-hover/btn:w-full" />
                    <span className="absolute inset-0 -z-10 scale-0 rounded-lg bg-blue-500/10 transition-transform duration-300 group-hover/btn:scale-100" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[850px] rounded-2xl border border-brand-deep/10 bg-white dark:bg-slate-900 shadow-2xl transition-all duration-300 ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
                    }`}>
                    {/* Tabs */}
                    <div className="flex border-b border-brand-deep/10">
                      <button
                        onClick={() => setActiveServiceTab('individual')}
                        className={`flex-1 px-6 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${activeServiceTab === 'individual'
                          ? 'text-brand-azure border-b-2 border-brand-azure bg-brand-azure/5'
                          : 'text-brand-deep/50 hover:text-brand-azure/70 hover:bg-brand-azure/5'
                          }`}
                      >
                        Individual Services
                      </button>
                      <button
                        onClick={() => setActiveServiceTab('corporate')}
                        className={`flex-1 px-6 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${activeServiceTab === 'corporate'
                          ? 'text-brand-azure border-b-2 border-brand-azure bg-brand-azure/5'
                          : 'text-brand-deep/50 hover:text-brand-azure/70 hover:bg-brand-azure/5'
                          }`}
                      >
                        Corporate Services
                      </button>
                    </div>

                    {/* Services Grid */}
                    <div className="p-6 max-h-[500px] overflow-y-auto">
                      <div className="grid grid-cols-3 gap-4">
                        {(activeServiceTab === 'individual' ? individualServices : corporateServices).map((service, index) => (
                          <a
                            key={index}
                            href={service.href}
                            className="group/item flex items-center gap-3 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-brand-azure/20 hover:bg-brand-azure/5 dark:hover:bg-brand-azure/10"
                          >
                            <div className="text-2xl transition-transform duration-300 group-hover/item:scale-110">
                              {service.icon}
                            </div>
                            <span className="text-sm font-semibold text-brand-deep/80 dark:text-white/80 transition-colors duration-300 group-hover/item:text-brand-azure">
                              {service.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex items-center gap-3 sm:gap-4">
                <ModeToggle />
                {/* Language Toggle */}
                <div
                  ref={languageToggleRef}
                  className="flex items-center gap-2 rounded-full border-2 border-blue-200/50 bg-white dark:bg-slate-800 px-3 py-1.5 shadow-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-md sm:px-4 sm:py-2"
                >
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`text-xs font-black uppercase transition-opacity hover:opacity-80 ${i18n.language === 'en' ? 'text-blue-700 dark:text-blue-400' : 'text-blue-600/40 dark:text-blue-400/40'
                      }`}
                  >
                    EN
                  </button>
                  <span className="h-3 w-[2px] bg-blue-300/40" />
                  <button
                    onClick={() => changeLanguage('ar')}
                    className={`text-xs font-black uppercase transition-opacity hover:opacity-100 ${i18n.language === 'ar' ? 'text-blue-700 dark:text-blue-400' : 'text-blue-600/40 dark:text-blue-400/40'
                      }`}
                  >
                    AR
                  </button>
                </div>

                <Button
                  ref={contactButtonRef}
                  onClick={onContactClick}
                  className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-6 py-2.5 font-bold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 sm:inline-flex"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t('nav.contactUs')}
                    <span ref={arrowRef}>→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Button>

                {/* Mobile Menu Button */}
                <button
                  ref={menuButtonRef}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-blue-200/50 bg-white dark:bg-slate-800 shadow-sm transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-50/50 dark:hover:bg-slate-700 hover:shadow-md lg:hidden"
                  aria-label="Toggle menu"
                  onMouseDown={() => {
                    gsap.to(menuButtonRef.current, { scale: 0.9, duration: 0.1 })
                  }}
                  onMouseUp={() => {
                    gsap.to(menuButtonRef.current, { scale: 1, duration: 0.1 })
                  }}
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6 text-blue-700" strokeWidth={2.5} />
                  ) : (
                    <Menu className="h-6 w-6 text-blue-700" strokeWidth={2.5} />
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="overflow-hidden border-t-2 border-blue-200/50 bg-white/95 dark:bg-slate-900/95 lg:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    ref={(el) => {
                      if (el) mobileNavItemsRef.current[index] = el
                    }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="group relative overflow-hidden rounded-xl border-2 border-blue-200/50 bg-white dark:bg-slate-800 px-5 py-4 text-base font-bold uppercase tracking-wide text-blue-700/70 dark:text-blue-400/70 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-50/50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-400"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-blue-500/10 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
                  </a>
                ))}

                {/* Services Button */}
                <button
                  ref={mobileServicesRef}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onServicesClick?.();
                  }}
                  className="group relative overflow-hidden rounded-xl border-2 border-blue-200/50 bg-white dark:bg-slate-800 px-5 py-4 text-base font-bold uppercase tracking-wide text-blue-700/70 dark:text-blue-400/70 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-50/50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-400 text-left"
                >
                  <span className="relative z-10">{t('nav.services')}</span>
                  <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-blue-500/10 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
                </button>

                <div ref={mobileContactRef}>
                  <Button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onContactClick?.();
                    }}
                    className="mt-3 w-full rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 py-4 font-black uppercase tracking-wide text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/40"
                  >
                    {t('nav.contactUs')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
