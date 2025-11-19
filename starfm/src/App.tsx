import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { ServiceTypes } from "@/components/ServiceTypes"
import { ManagementSupport } from "@/components/ManagementSupport"
import { Stats } from "@/components/Stats"
import { Services } from "@/components/Services"
import { TrustedPartner } from "@/components/TrustedPartner"
import { Footer } from "@/components/Footer"
import { Contact } from "@/pages/Contact"
import { ServicesPage } from "@/pages/ServicesPage"
import "./App.css"

function App() {
  const { i18n } = useTranslation()
  const [currentPage, setCurrentPage] = useState<"home" | "contact" | "services">("home")
  const [prevPage, setPrevPage] = useState<"home" | "contact" | "services">("home")
  const homeRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  // Handle RTL for Arabic
  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = i18n.language
  }, [i18n.language])

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
    <div className="min-h-screen">
      {currentPage === "home" ? (
        <div ref={homeRef} key="home">
          <Navbar onContactClick={handleContactClick} onServicesClick={handleServicesClick} />
          <main className="space-y-0 pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pb-24 lg:pt-24">
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              <Hero onServicesClick={handleServicesClick} onContactClick={handleContactClick} />
              <About />
            </div>
            
            {/* Management Support Services - Standalone Section */}
            <div className="mt-8 sm:mt-12 lg:mt-16">
              <ManagementSupport onContactClick={handleContactClick} />
            </div>
            
            {/* Facility Management Services Section */}
            <div className="mt-8 space-y-8 sm:mt-12 sm:space-y-12 lg:mt-16 lg:space-y-16">
              <ServiceTypes />
              <Stats />
              <Services onServicesPageClick={handleServicesClick} />
            </div>
          </main>

          {/* New Hero Section Before Footer */}
          <TrustedPartner onServicesClick={handleServicesClick} onContactClick={handleContactClick} />

          <Footer onContactClick={handleContactClick} onServicesClick={handleServicesClick} />
        </div>
      ) : currentPage === "contact" ? (
        <div ref={contactRef} key="contact">
          <Contact onBack={handleBackHome} />
        </div>
      ) : (
        <div ref={servicesRef} key="services">
          <ServicesPage onBack={handleBackHome} onContactClick={handleContactClick} />
        </div>
      )}
    </div>
  )
}

export default App
