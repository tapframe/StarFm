import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement[]>([])
  const bottomSectionRef = useRef<HTMLDivElement>(null)
  const bgCircle1Ref = useRef<HTMLDivElement>(null)
  const bgCircle2Ref = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals at your service"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuously evolving with your needs"
    },
    {
      icon: CheckCircle2,
      title: "Reliability",
      description: "Trusted by leading organizations"
    }
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
            y: -50 * self.progress,
            scale: 1 + (0.1 * self.progress),
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
        scrub: 1.5,
        onUpdate: (self) => {
          gsap.set(bgCircle2Ref.current, {
            y: 50 * self.progress,
            scale: 1 + (0.15 * self.progress),
            force3D: true
          })
        },
        markers: false
      })
    }

    // Professional left content reveal
    if (leftContentRef.current) {
      ScrollTrigger.create({
        trigger: leftContentRef.current,
        start: "top 75%",
        onEnter: () => {
          gsap.to(leftContentRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            force3D: true
          })
        },
        markers: false
      })
      gsap.set(leftContentRef.current, { opacity: 0, x: -30 })
    }

    // Refined badge reveal
    if (badgeRef.current) {
      ScrollTrigger.create({
        trigger: badgeRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(badgeRef.current, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "power2.out",
            force3D: true
          })
        },
        markers: false
      })
      gsap.set(badgeRef.current, { opacity: 0, scale: 0.96 })
    }

    // Professional title fade
    if (titleRef.current) {
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            force3D: true
          })
        },
        markers: false
      })
      gsap.set(titleRef.current, { opacity: 0, y: 15 })
    }

    // Description with stagger
    if (descriptionRef.current) {
      ScrollTrigger.create({
        trigger: descriptionRef.current,
        start: "top 80%",
        onEnter: () => {
          const paragraphs = descriptionRef.current?.querySelectorAll('p')
          if (paragraphs) {
            paragraphs.forEach((p, idx) => {
              gsap.fromTo(p,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: "power2.out",
                  force3D: true
                }
              )
            })
          }
        },
        markers: false
      })
    }

    // Button with scale animation
    if (buttonRef.current) {
      ScrollTrigger.create({
        trigger: buttonRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(buttonRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            force3D: true
          })
        },
        markers: false
      })
      gsap.set(buttonRef.current, { opacity: 0, y: 30, scale: 0.9 })

      buttonRef.current.style.willChange = "transform"
      buttonRef.current.addEventListener("mouseenter", () => {
        gsap.to(buttonRef.current, { scale: 1.02, duration: 0.35, ease: "power2.out", force3D: true })
      }, { passive: true })
      buttonRef.current.addEventListener("mouseleave", () => {
        gsap.to(buttonRef.current, { scale: 1, duration: 0.35, ease: "power2.out", force3D: true })
      }, { passive: true })
      buttonRef.current.addEventListener("mousedown", () => {
        gsap.to(buttonRef.current, { scale: 0.97, duration: 0.15, ease: "power2.in", force3D: true })
      }, { passive: true })
      buttonRef.current.addEventListener("mouseup", () => {
        gsap.to(buttonRef.current, { scale: 1.02, duration: 0.25, ease: "power2.out", force3D: true })
      }, { passive: true })
    }

    // Professional right content reveal
    if (rightContentRef.current) {
      ScrollTrigger.create({
        trigger: rightContentRef.current,
        start: "top 75%",
        onEnter: () => {
          gsap.to(rightContentRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            force3D: true
          })
        },
        markers: false
      })
      gsap.set(rightContentRef.current, { opacity: 0, x: 30 })

      // Refined parallax on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(rightContentRef.current, {
            y: -15 * self.progress,
            force3D: true
          })
        },
        markers: false
      })
    }

    // Professional staggered card reveals
    featuresRef.current.forEach((card, index) => {
      if (card) {
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.5,
              delay: index * 0.1,
              ease: "power2.out",
              force3D: true
            })
          },
          markers: false
        })
        gsap.set(card, { opacity: 0, y: 20, scale: 0.97 })

        card.style.willChange = "transform"
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { 
            y: -4, 
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
            force3D: true
          })
        }, { passive: true })
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { 
            y: 0, 
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            force3D: true
          })
        }, { passive: true })
      }
    })

    // Bottom section with scale reveal
    if (bottomSectionRef.current) {
      ScrollTrigger.create({
        trigger: bottomSectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(bottomSectionRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "expo.out",
            force3D: true
          })
        },
        markers: false
      })
      gsap.set(bottomSectionRef.current, { opacity: 0, y: 60, scale: 0.95 })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars?.trigger === sectionRef.current || 
            trigger.vars?.trigger === leftContentRef.current ||
            trigger.vars?.trigger === rightContentRef.current) {
          trigger.kill()
        }
      })
      if (buttonRef.current) {
        buttonRef.current.style.willChange = "auto"
        buttonRef.current.removeEventListener("mouseenter", () => {})
        buttonRef.current.removeEventListener("mouseleave", () => {})
        buttonRef.current.removeEventListener("mousedown", () => {})
        buttonRef.current.removeEventListener("mouseup", () => {})
      }
      featuresRef.current.forEach(card => {
        if (card) {
          card.style.willChange = "auto"
          card.removeEventListener("mouseenter", () => {})
          card.removeEventListener("mouseleave", () => {})
        }
      })
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-gradient-to-br from-white via-brand-cream/20 to-brand-sand/30 py-20 sm:py-24 lg:py-32">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div ref={bgCircle1Ref} className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-brand-gold/10 opacity-50" />
        <div ref={bgCircle2Ref} className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-brand-moss/10 opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={leftContentRef}>
            <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 bg-opacity-50">
              <div className="h-2 w-2 animate-pulse rounded-full bg-brand-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gold">
                About Us
              </span>
            </div>

            <h2 ref={titleRef} className="mb-6 font-display text-4xl font-black leading-tight text-brand-deep sm:text-5xl lg:text-6xl">
              Your Trusted Partner in
              <span className="block gradient-text mt-2">
                Facilities Excellence
              </span>
            </h2>

            <div ref={descriptionRef} className="space-y-4">
              <p className="text-lg leading-relaxed text-brand-forest/80">
                [Content will be added here - Company introduction and mission statement]
              </p>
              <p className="text-base leading-relaxed text-brand-forest/70">
                [Content will be added here - Brief history and values]
              </p>
            </div>

            {/* CTA Button */}
            <button
              ref={buttonRef}
              className="mt-8 rounded-full bg-gradient-to-r from-brand-gold to-brand-sand px-8 py-4 font-bold uppercase tracking-wide text-brand-deep shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/40"
            >
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Features Grid */}
          <div ref={rightContentRef} className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) featuresRef.current[index] = el
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-brand-deep/10 bg-white/80 bg-opacity-50 p-6 shadow-lg transition-all duration-300 hover:border-brand-gold/30 hover:shadow-xl"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-sand/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-brand-gold" strokeWidth={2} />
                    </div>
                    
                    <h3 className="mb-2 font-display text-xl font-bold text-brand-deep">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-brand-forest/70">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-gold/10 opacity-50 transition-all duration-300 group-hover:bg-brand-gold/20" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Stats or Additional Content */}
        <div ref={bottomSectionRef} className="mt-16 rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/10 via-white/50 to-brand-sand/10 p-8 sm:p-12">
          <div className="text-center">
            <h3 className="mb-4 font-display text-2xl font-black text-brand-deep sm:text-3xl">
              [Additional Content Section]
            </h3>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-brand-forest/70">
              [Content will be added here - Additional information, certifications, or achievements]
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
