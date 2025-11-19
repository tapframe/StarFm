import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Users2, BuildingIcon, Zap, TreesIcon, Wrench } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function Stats() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const bgCircle1Ref = useRef<HTMLDivElement>(null)
  const bgCircle2Ref = useRef<HTMLDivElement>(null)

  const stats = [
    { icon: BuildingIcon, value: t('stats.items.facilitiesManaged.value'), label: t('stats.items.facilitiesManaged.label') },
    { icon: Users2, value: t('stats.items.satisfiedClients.value'), label: t('stats.items.satisfiedClients.label') },
    { icon: Zap, value: t('stats.items.serviceUptime.value'), label: t('stats.items.serviceUptime.label') },
    { icon: TreesIcon, value: t('stats.items.greenInitiatives.value'), label: t('stats.items.greenInitiatives.label') },
    { icon: Wrench, value: t('stats.items.technicalSupport.value'), label: t('stats.items.technicalSupport.label') },
  ]

  useEffect(() => {
    // Background parallax
    if (bgCircle1Ref.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(bgCircle1Ref.current, {
            x: -80 * self.progress,
            scale: 1 + (0.15 * self.progress),
            force3D: true
          })
        },
        markers: false
      })
    }

    if (bgCircle2Ref.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.3,
        onUpdate: (self) => {
          gsap.set(bgCircle2Ref.current, {
            x: 80 * self.progress,
            scale: 1 + (0.2 * self.progress),
            force3D: true
          })
        },
        markers: false
      })
    }

    // Header animations with smooth stagger
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
        markers: false
      }
    })

    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { opacity: 0, y: 30 })
      headerTl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        force3D: true
      }, 0.1)
    }

    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 40 })
      headerTl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        force3D: true
      }, 0.2)
    }

    if (descriptionRef.current) {
      gsap.set(descriptionRef.current, { opacity: 0, y: 30 })
      headerTl.to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        force3D: true
      }, 0.4)
    }

    // Professional card animations
    cardsRef.current.forEach((card, index) => {
      if (card) {
        ScrollTrigger.create({
          trigger: card,
          start: "top 80%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.5,
              delay: index * 0.08,
              ease: "power2.out",
              force3D: true
            })
          },
          markers: false
        })
        gsap.set(card, { opacity: 0, y: 20, scale: 0.97 })

        // Parallax effect
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
          onUpdate: (self) => {
            const offset = (index % 2 === 0 ? 1 : -1) * 15 * self.progress
            gsap.set(card, {
              y: offset,
              force3D: true
            })
          },
          markers: false
        })

        // Hover animations with enhanced effects
        const iconContainer = card.querySelector('.icon-container')
        const valueElement = card.querySelector('.font-display')
        card.style.willChange = "transform"
        
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { 
            scale: 1.03, 
            y: -4,
            duration: 0.35,
            ease: "power2.out",
            force3D: true
          })
          if (iconContainer) {
            gsap.to(iconContainer, { 
              scale: 1.08,
              rotation: -3,
              duration: 0.35,
              ease: "power2.out",
              force3D: true
            })
          }
          if (valueElement) {
            gsap.to(valueElement, {
              scale: 1.03,
              duration: 0.35,
              ease: "power2.out",
              force3D: true
            })
          }
        }, { passive: true })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { 
            scale: 1, 
            y: 0,
            duration: 0.35,
            ease: "power2.out",
            force3D: true
          })
          if (iconContainer) {
            gsap.to(iconContainer, { 
              scale: 1, 
              rotation: 0, 
              duration: 0.35,
              ease: "power2.out",
              force3D: true
            })
          }
          if (valueElement) {
            gsap.to(valueElement, {
              scale: 1,
              duration: 0.35,
              ease: "power2.out",
              force3D: true
            })
          }
        }, { passive: true })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars?.trigger === sectionRef.current || 
            trigger.vars?.trigger === headerRef.current) {
          trigger.kill()
        }
      })
      cardsRef.current.forEach(card => {
        if (card) {
          card.style.willChange = "auto"
          card.removeEventListener("mouseenter", () => {})
          card.removeEventListener("mouseleave", () => {})
        }
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div ref={bgCircle1Ref} className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-blue-500/5 opacity-50" />
        <div ref={bgCircle2Ref} className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-brand-forest/5 opacity-50" />
      </div>
      
      <div className="container relative px-4 sm:px-6">
        <div ref={headerRef} className="mb-8 text-center sm:mb-12">
          <p ref={subtitleRef} className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:mb-3 sm:text-sm">
            {t('stats.reach')}
          </p>
          <h2 ref={titleRef} className="text-3xl text-foreground sm:text-4xl lg:text-5xl">
            {t('stats.excellence')}
          </h2>
          <p ref={descriptionRef} className="mt-4 text-sm text-foreground/70 sm:text-base">
            {t('stats.description')}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
            >
              <Card className="group relative overflow-hidden border border-white/5 bg-gradient-to-br from-brand-forest/80 to-brand-moss/70 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-azure/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="relative flex flex-col items-center gap-3 p-6 text-center sm:gap-4 sm:p-8">
                  <div className="icon-container rounded-xl bg-white/15 p-3 bg-opacity-50 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-white/25 group-hover:ring-brand-azure/30 sm:rounded-2xl sm:p-4">
                    <stat.icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <div className="mb-1 font-display text-3xl font-bold text-white sm:mb-2 sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wider text-white/80 sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
