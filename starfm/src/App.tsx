import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ServiceTypes } from "@/components/ServiceTypes"
import { Stats } from "@/components/Stats"
import { Services } from "@/components/Services"
import { Footer } from "@/components/Footer"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-8 pb-12 pt-16 sm:space-y-12 sm:pb-16 sm:pt-20 lg:space-y-16 lg:pb-24 lg:pt-24">
        <Hero />
        <ServiceTypes />
        <Stats />
        <Services />
      </main>
      <Footer />
    </div>
  )
}

export default App
