import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { ServiceTypes } from "@/components/ServiceTypes"
import { Stats } from "@/components/Stats"
import { Services } from "@/components/Services"
import { Footer } from "@/components/Footer"
import { Contact } from "@/pages/Contact"
import { ServicesPage } from "@/pages/ServicesPage"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "contact" | "services">("home")

  const handleContactClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setCurrentPage("contact")
  }

  const handleServicesClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setCurrentPage("services")
  }

  const handleBackHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setCurrentPage("home")
  }

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentPage === "home" ? (
          <>
            <Navbar onContactClick={handleContactClick} onServicesClick={handleServicesClick} />
            <main className="space-y-8 pb-12 pt-16 sm:space-y-12 sm:pb-16 sm:pt-20 lg:space-y-16 lg:pb-24 lg:pt-24">
              <Hero onServicesClick={handleServicesClick} />
              <About />
              <ServiceTypes />
              <Stats />
              <Services />
            </main>
            <Footer onContactClick={handleContactClick} onServicesClick={handleServicesClick} />
          </>
        ) : currentPage === "contact" ? (
          <Contact onBack={handleBackHome} />
        ) : (
          <ServicesPage onBack={handleBackHome} onContactClick={handleContactClick} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
