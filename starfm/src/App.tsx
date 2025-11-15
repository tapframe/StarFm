import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Stats } from "@/components/Stats"
import "./App.css"

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <Navbar />
      <main className="space-y-24 pb-24 pt-6">
        <Hero />
        <Stats />
      </main>
    </div>
  )
}

export default App
