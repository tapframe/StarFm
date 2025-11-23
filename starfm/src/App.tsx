import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { ServiceTypes } from "@/components/ServiceTypes"
// import { ManagementSupport } from "@/components/ManagementSupport"
import { Stats } from "@/components/Stats"
import { Services } from "@/components/Services"
import { Training } from "@/components/Training"
import { Testimonials } from "@/components/Testimonials"
import { TrustedPartner } from "@/components/TrustedPartner"
import { Footer } from "@/components/Footer"
import { Contact } from "@/pages/Contact"
import { ServicesPage } from "@/pages/ServicesPage"
import { LoadingOverlay } from "@/components/ui/loading-overlay"
import { ThemeProvider } from "@/components/theme-provider"
import GradualBlur from "@/components/GradualBlur"
import "./App.css"

function App() {
  const { i18n, t } = useTranslation()
  const [currentPage, setCurrentPage] = useState<"home" | "contact" | "services">("home")
  const [prevPage, setPrevPage] = useState<"home" | "contact" | "services">("home")
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)
  const homeRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  // Handle RTL for Arabic
  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  // Track dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }

    checkDarkMode()

    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  // Track scroll position to check if at bottom
  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      setIsAtBottom(isBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle initial loading
  useEffect(() => {
    const startTime = Date.now()
    const minLoadTime = 2000 // Minimum 2 seconds

    // Simulate loading resources
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, minLoadTime - elapsedTime)

      setTimeout(() => {
        setIsInitialLoading(false)
      }, remainingTime)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  const handleContactClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setPrevPage(currentPage)
    setCurrentPage("contact")
  }

  const handleServicesClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setPrevPage(currentPage)
    setCurrentPage("services")
  }

  const handleBackHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setPrevPage(currentPage)
    setCurrentPage("home")
  }

  useEffect(() => {
    // Page transition animations
    const tl = gsap.timeline()

    if (prevPage !== currentPage) {
      // Fade out previous page
      const prevRef = prevPage === "home" ? homeRef : prevPage === "contact" ? contactRef : servicesRef
      const currentRef = currentPage === "home" ? homeRef : currentPage === "contact" ? contactRef : servicesRef

      if (prevRef.current) {
        tl.to(prevRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        })
      }

      // Fade in new page
      if (currentRef.current) {
        tl.set(currentRef.current, { opacity: 0 })
        tl.to(currentRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        }, 0.15)
      }
    } else {
      // Initial page load
      const currentRef = currentPage === "home" ? homeRef : currentPage === "contact" ? contactRef : servicesRef
      if (currentRef.current) {
        gsap.fromTo(currentRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        )
      }
    }
  }, [currentPage, prevPage])

  // Ensure contact and services pages start at top
  useEffect(() => {
    if (currentPage === "contact" || currentPage === "services") {
      // Use setTimeout to ensure the page has rendered before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
      }, 100)
    }
  }, [currentPage])

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LoadingOverlay
        isLoading={isInitialLoading}
        message={t('loading.initialMessage')}
        subMessage={t('loading.initialSubtitle')}
      />
      <div className="min-h-screen relative">
        {/* Gradual Blur at bottom of viewport - only in dark mode and not at bottom */}
        {isDarkMode && !isAtBottom && (
          <GradualBlur
            target="page"
            position="bottom"
            height="6rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential={true}
            opacity={1}
            zIndex={999}
          />
        )}
        {currentPage === "home" ? (
          <div ref={homeRef} key="home">
            <Navbar onContactClick={handleContactClick} onServicesClick={handleServicesClick} />
            <main className="space-y-0 pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pb-24 lg:pt-24">
              <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                <Hero onServicesClick={handleServicesClick} onContactClick={handleContactClick} />
                <About />
              </div>

              {/* Management Support Services - Standalone Section */}
              {/* <div className="mt-8 sm:mt-12 lg:mt-16">
              <ManagementSupport onContactClick={handleContactClick} />
            </div> */}

              {/* Facility Management Services Section */}
              <div className="mt-8 space-y-8 sm:mt-12 sm:space-y-12 lg:mt-16 lg:space-y-16">
                <ServiceTypes />
                <Stats />
                <Services onServicesPageClick={handleServicesClick} />
                <Training onContactClick={handleContactClick} />
                <Testimonials />
              </div>
            </main>

            {/* New Hero Section Before Footer */}
            <TrustedPartner />

            <Footer onContactClick={handleContactClick} onServicesClick={handleServicesClick} />
          </div>
        ) : currentPage === "contact" ? (
          <div ref={contactRef} key="contact">
            <Contact onBack={handleBackHome} />
          </div>
        ) : (
          <div ref={servicesRef} key="services">
            <ServicesPage onBack={handleBackHome} onContactClick={handleContactClick} />
            <Footer onContactClick={handleContactClick} onServicesClick={handleServicesClick} />
          </div>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
