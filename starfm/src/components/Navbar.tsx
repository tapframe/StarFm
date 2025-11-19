import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowLeft } from "lucide-react"

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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const navItemsRef = useRef<HTMLAnchorElement[]>([])
  const servicesButtonRef = useRef<HTMLButtonElement>(null)
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
        logo.removeEventListener("mouseenter", () => {})
        logo.removeEventListener("mouseleave", () => {})
      }
      if (languageToggle) {
        languageToggle.removeEventListener("mouseenter", () => {})
        languageToggle.removeEventListener("mouseleave", () => {})
      }
      if (contactButton) {
        contactButton.removeEventListener("mouseenter", () => {})
        contactButton.removeEventListener("mouseleave", () => {})
        contactButton.removeEventListener("mousedown", () => {})
        contactButton.removeEventListener("mouseup", () => {})
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
  ]

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        navbarVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0 pointer-events-none"
      } ${
        scrolled 
          ? "bg-white/95 shadow-2xl shadow-brand-deep/5" 
          : "bg-white/85"
      }`}
    >
      {/* Gradient Border */}
      <div className={`absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-opacity duration-500 ${
        scrolled ? "opacity-100" : "opacity-0"
      }`} />
      
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:h-24 lg:px-6">
        {isPageView ? (
          <>
            {/* Page View: Back Button on Left */}
            <button
              ref={servicesButtonRef}
              onClick={onBack}
              className="flex items-center gap-2 rounded-full border-2 border-brand-deep/10 bg-white px-4 py-2 font-bold text-brand-deep transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={2.5} />
              {t('nav.backToHome')}
            </button>


            {/* Logo on Right */}
            <img
              src="/image.png"
              alt="MahhabFM Logo"
              className="h-20 w-20 sm:h-32 sm:w-32 object-contain"
            />
          </>
        ) : (
          <>
            {/* Logo */}
            <a
              ref={logoRef}
              href="#"
              className="group relative flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/image.png"
                alt="MahhabFM Logo"
                className="h-20 w-20 sm:h-32 sm:w-32 object-contain"
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
                  className="group relative text-sm font-bold uppercase tracking-wide text-blue-600/70 transition-all duration-300 hover:text-blue-700"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                  <span className="absolute inset-0 -z-10 scale-0 rounded-lg bg-blue-500/10 transition-transform duration-300 group-hover:scale-100" />
                </a>
              ))}

              {/* Services Link */}
              <button
                ref={servicesButtonRef}
                onClick={onServicesClick}
                className="group relative text-sm font-bold uppercase tracking-wide text-blue-600/70 transition-all duration-300 hover:text-blue-700"
              >
                <span className="relative z-10">{t('nav.services')}</span>
                <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                <span className="absolute inset-0 -z-10 scale-0 rounded-lg bg-blue-500/10 transition-transform duration-300 group-hover:scale-100" />
              </button>
            </div>

            {/* CTA Section */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Language Toggle */}
              <div
                ref={languageToggleRef}
                className="flex items-center gap-2 rounded-full border-2 border-blue-200/50 bg-white px-3 py-1.5 shadow-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-md sm:px-4 sm:py-2"
              >
                <button 
                  onClick={() => changeLanguage('en')}
                  className={`text-xs font-black uppercase transition-opacity hover:opacity-80 ${
                    i18n.language === 'en' ? 'text-blue-700' : 'text-blue-600/40'
                  }`}
                >
                  EN
                </button>
                <span className="h-3 w-[2px] bg-blue-300/40" />
                <button 
                  onClick={() => changeLanguage('ar')}
                  className={`text-xs font-black uppercase transition-opacity hover:opacity-100 ${
                    i18n.language === 'ar' ? 'text-blue-700' : 'text-blue-600/40'
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
                className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-blue-200/50 bg-white shadow-sm transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-50/50 hover:shadow-md lg:hidden"
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
          className="overflow-hidden border-t-2 border-blue-200/50 bg-white/95 lg:hidden"
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
                  className="group relative overflow-hidden rounded-xl border-2 border-blue-200/50 bg-white px-5 py-4 text-base font-bold uppercase tracking-wide text-blue-700/70 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-50/50 hover:text-blue-700"
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
                className="group relative overflow-hidden rounded-xl border-2 border-blue-200/50 bg-white px-5 py-4 text-base font-bold uppercase tracking-wide text-blue-700/70 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-50/50 hover:text-blue-700 text-left"
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
  )
}
