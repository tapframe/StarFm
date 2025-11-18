import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface TrustedPartnerProps {
  onServicesClick?: () => void
  onContactClick?: () => void
}

export function TrustedPartner({ onServicesClick, onContactClick }: TrustedPartnerProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(element, {
            backgroundPosition: `center ${self.progress * -100}px`
          })
        }
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-24 lg:py-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://w.wallhaven.cc/full/2y/wallhaven-2yzj9x.png')",
          backgroundAttachment: "fixed"
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm shadow-lg">
            <span className="text-white/80">★</span>
            Excellence in Every Service
          </div>
          <h2 className="mb-6 font-display text-6xl font-black leading-[1.1] text-white lg:text-7xl tracking-tight drop-shadow-2xl">
            Your Trusted
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text mt-2">
              Partner
            </span>
          </h2>
          <p className="text-xl leading-relaxed text-white/95 font-light tracking-wide max-w-2xl mx-auto drop-shadow-lg">
            From comprehensive facilities management to specialized support services, we deliver unparalleled quality and reliability across all our operations.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={onServicesClick}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-white font-bold uppercase tracking-wider transition-all hover:bg-white/20 hover:border-white/30 hover:scale-105"
            >
              Explore Services
              <span className="text-lg">→</span>
            </button>
            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-white font-bold uppercase tracking-wider transition-all hover:bg-white/10 hover:border-white/50 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}