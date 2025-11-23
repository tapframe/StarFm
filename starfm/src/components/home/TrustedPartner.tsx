import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function TrustedPartner() {
  const { t } = useTranslation()
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
          backgroundImage: "url('https://w.wallhaven.cc/full/ym/wallhaven-ym1gpx.jpg')",
          backgroundAttachment: "fixed"
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        <div className="text-center">
          <p className="text-xl leading-relaxed text-white font-light tracking-wide drop-shadow-lg mb-8">
            {t('trustedPartner.profmDescription')}
          </p>
          <a
            href="https://www.profm.com.sa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://www.profm.com.sa/logo.svg"
              alt="ProFM Logo"
              className="h-16 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  )
}