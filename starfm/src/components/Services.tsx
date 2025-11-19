import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Home,
  Sparkles,
  Trees,
  Wrench,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface ServicesProps {
  onServicesPageClick?: () => void
}

export function Services({ onServicesPageClick }: ServicesProps) {
  const { t } = useTranslation()
  
  const services = [
    {
      title: t('services.list.facilitiesManagement.title'),
      description: t('services.list.facilitiesManagement.description'),
      icon: Building2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      features: t('services.list.facilitiesManagement.features', { returnObjects: true }) as string[],
    },
    {
      title: t('services.list.homeSolutions.title'),
      description: t('services.list.homeSolutions.description'),
      icon: Home,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      features: t('services.list.homeSolutions.features', { returnObjects: true }) as string[],
    },
    {
      title: t('services.list.hospitalityServices.title'),
      description: t('services.list.hospitalityServices.description'),
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      features: t('services.list.hospitalityServices.features', { returnObjects: true }) as string[],
    },
    {
      title: t('services.list.landscaping.title'),
      description: t('services.list.landscaping.description'),
      icon: Trees,
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
      features: t('services.list.landscaping.features', { returnObjects: true }) as string[],
    },
    {
      title: t('services.list.technicalServices.title'),
      description: t('services.list.technicalServices.description'),
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      features: t('services.list.technicalServices.features', { returnObjects: true }) as string[],
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const slideRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const bgCircle1Ref = useRef<HTMLDivElement>(null)
  const bgCircle2Ref = useRef<HTMLDivElement>(null)
  const bgCircle3Ref = useRef<HTMLDivElement>(null)
  
  const startXRef = useRef<number>(0)
  const currentXRef = useRef<number>(0)
  const isDraggingRef = useRef<boolean>(false)

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = services.length - 1
      if (nextIndex >= services.length) nextIndex = 0
      return nextIndex
    })
  }



  // Initial animations with enhanced scroll effects
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
            x: -60 * self.progress,
            y: -40 * self.progress,
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
        scrub: 1.3,
        onUpdate: (self) => {
          gsap.set(bgCircle2Ref.current, {
            x: 60 * self.progress,
            y: 40 * self.progress,
            scale: 1 + (0.15 * self.progress),
            force3D: true
          })
        },
        markers: false
      })
    }

    if (bgCircle3Ref.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
        onUpdate: (self) => {
          gsap.set(bgCircle3Ref.current, {
            scale: 1 + (0.2 * self.progress),
            opacity: 0.5 + (0.3 * self.progress),
            force3D: true
          })
        },
        markers: false
      })
    }

    // Header animations with smooth reveal
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
        markers: false
      }
    })

    if (badgeRef.current) {
      gsap.set(badgeRef.current, { scale: 0.95, opacity: 0 })
      headerTl.to(badgeRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        force3D: true
      }, 0)
    }

    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 15 })
      headerTl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        force3D: true
      }, 0.1)
    }

    if (descriptionRef.current) {
      gsap.set(descriptionRef.current, { opacity: 0, y: 12 })
      headerTl.to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
        force3D: true
      }, 0.2)
    }

    // Carousel parallax
    if (carouselRef.current) {
      ScrollTrigger.create({
        trigger: carouselRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 0.5,
        onUpdate: (self) => {
          gsap.set(carouselRef.current, {
            y: -30 * self.progress,
            force3D: true
          })
        },
        markers: false
      })
    }

    // Store refs to avoid stale closure warnings
    const section = sectionRef.current
    const header = headerRef.current
    const carousel = carouselRef.current

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars?.trigger === section || 
            trigger.vars?.trigger === header ||
            trigger.vars?.trigger === carousel) {
          trigger.kill()
        }
      })
    }
  }, [])

  // Professional slide transition animation
  useEffect(() => {
    if (slideRef.current && imageRef.current && iconRef.current && contentRef.current && featuresRef.current && buttonRef.current) {
      const tl = gsap.timeline({ defaults: { force3D: true, ease: "power3.inOut" } })
      
      // Professional slide direction: next slides left, previous slides right
      const exitX = direction > 0 ? -600 : 600
      const enterX = direction > 0 ? 600 : -600
      
      // Elegant exit with fade
      tl.to(slideRef.current, {
        x: exitX,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in"
      })
      
      // Reset position
      tl.set(slideRef.current, {
        x: enterX,
        opacity: 0
      })
      
      // Smooth professional enter
      tl.to(slideRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out"
      })
      
      // Refined icon reveal
      gsap.set(iconRef.current, { scale: 0.9, opacity: 0 })
      tl.to(iconRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      }, 0.2)
      
      // Professional content fade
      gsap.set(contentRef.current, { opacity: 0, y: 15 })
      tl.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out"
      }, 0.25)
      
      // Elegant staggered features
      const featureElements = featuresRef.current.querySelectorAll('.feature-item')
      featureElements.forEach((feature, idx) => {
        gsap.set(feature, { opacity: 0, x: -15 })
        tl.to(feature, {
          opacity: 1,
          x: 0,
          duration: 0.35,
          ease: "power2.out"
        }, 0.3 + idx * 0.06)
      })
      
      // Refined button reveal
      gsap.set(buttonRef.current, { opacity: 0, scale: 0.97 })
      tl.to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      }, 0.4)
      
      // Smooth image hover effect
      if (imageRef.current) {
        const img = imageRef.current.querySelector('img')
        if (img) {
          imageRef.current.style.willChange = "transform"
          img.style.willChange = "transform"
          imageRef.current.addEventListener("mouseenter", () => {
            gsap.to(img, { 
              scale: 1.03, 
              duration: 0.5,
              ease: "power2.out",
              force3D: true
            })
          }, { passive: true })
          imageRef.current.addEventListener("mouseleave", () => {
            gsap.to(img, { 
              scale: 1, 
              duration: 0.5,
              ease: "power2.out",
              force3D: true,
              onComplete: () => {
                img.style.willChange = "auto"
              }
            })
          }, { passive: true })
        }
      }
    }
  }, [currentIndex, direction])

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDraggingRef.current = true
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    startXRef.current = clientX
    currentXRef.current = clientX
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingRef.current) return
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    currentXRef.current = clientX
  }

  const handleDragEnd = () => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    
    const offset = currentXRef.current - startXRef.current
    const velocity = Math.abs(offset) > 50 ? (offset > 0 ? 1 : -1) : 0
    const swipe = swipePower(offset, velocity)

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1)
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1)
    }
    
    startXRef.current = 0
    currentXRef.current = 0
  }

  const currentService = services[currentIndex]

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div ref={bgCircle1Ref} className="absolute -left-10 top-20 h-72 w-72 rounded-full bg-blue-500/15 opacity-50" />
        <div ref={bgCircle2Ref} className="absolute -right-10 bottom-20 h-72 w-72 rounded-full bg-brand-forest/15 opacity-50" />
        <div ref={bgCircle3Ref} className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-moss/10 opacity-50" />
      </div>

      <div className="container relative px-4 sm:px-6">
        <div ref={headerRef} className="mb-12 text-center sm:mb-16">
          <div className="mb-4 inline-block">
            <span ref={badgeRef} className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-opacity-50">
              {t('services.sectionBadge')}
            </span>
          </div>
          <h2 ref={titleRef} className="mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
            {t('services.sectionTitle')}
          </h2>
          <p ref={descriptionRef} className="mx-auto max-w-2xl text-base text-foreground/70 sm:text-lg">
            {t('services.sectionDescription')}
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div ref={carouselRef} className="relative mx-auto max-w-6xl">
            <div className="relative h-[550px] sm:h-[500px] lg:h-[500px]">
              <div
                ref={slideRef}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                className="absolute w-full cursor-grab active:cursor-grabbing"
              >
                <Card className="group relative overflow-hidden border border-white/10 bg-white/95 shadow-2xl">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-azure/5 via-transparent to-brand-forest/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* Image Section */}
                    <div ref={imageRef} className="relative h-[240px] overflow-hidden sm:h-[280px] lg:h-[500px]">
                      <div className="absolute inset-0">
                        <img
                          src={currentService.image}
                          alt={currentService.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/60 via-brand-forest/20 to-transparent" />
                      </div>

                      {/* Icon Badge */}
                      <div ref={iconRef} className="absolute left-4 top-4 sm:left-6 sm:top-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 shadow-lg sm:h-16 sm:w-16 sm:rounded-2xl">
                          <currentService.icon className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
                        </div>
                      </div>

                      {/* Index Badge */}
                      <div className="absolute bottom-4 right-4 rounded-full bg-white/20 px-3 py-1.5 bg-opacity-50 sm:bottom-6 sm:right-6 sm:px-4 sm:py-2">
                        <span className="text-xs font-semibold text-white sm:text-sm">
                          {String(currentIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent ref={contentRef} className="flex flex-col justify-center gap-4 p-6 sm:gap-6 sm:p-8 lg:p-12">
                      <div>
                        <h3 className="mb-2 text-xl text-foreground sm:text-2xl sm:mb-3 lg:text-3xl">
                          {currentService.title}
                        </h3>
                        <p className="text-sm text-foreground/70 sm:text-base">
                          {currentService.description}
                        </p>
                      </div>

                      <div ref={featuresRef} className="space-y-2 sm:space-y-3">
                        {currentService.features.map((feature) => (
                          <div
                            key={feature}
                            className="feature-item flex items-center gap-2 sm:gap-3"
                          >
                            <div className="flex h-1.5 w-1.5 rounded-full bg-primary sm:h-2 sm:w-2" />
                            <span className="text-xs font-medium text-foreground/80 sm:text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div>
                        <Button ref={buttonRef} onClick={onServicesPageClick} className="group w-full rounded-full bg-gradient-to-r from-primary to-brand-forest px-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto sm:px-6">
                          {t('common.learnMore')}
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
            <button
              onClick={() => paginate(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-forest/20 bg-white shadow-lg transition-all hover:border-brand-azure hover:bg-brand-azure/10 hover:shadow-xl"
              aria-label="Previous service"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { scale: 1.03, duration: 0.3, ease: "power2.out", force3D: true })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out", force3D: true })
              }}
              onMouseDown={(e) => {
                gsap.to(e.currentTarget, { scale: 0.97, duration: 0.15, ease: "power2.in", force3D: true })
              }}
              onMouseUp={(e) => {
                gsap.to(e.currentTarget, { scale: 1.03, duration: 0.2, ease: "power2.out", force3D: true })
              }}
            >
              <ChevronLeft className="h-5 w-5 text-brand-forest" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1)
                    setCurrentIndex(idx)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-brand-azure"
                      : "w-2 bg-brand-forest/30 hover:bg-brand-azure/50"
                  }`}
                  aria-label={`Go to service ${idx + 1}`}
                  onMouseEnter={(e) => {
                    if (idx !== currentIndex) {
                      gsap.to(e.currentTarget, { scale: 1.15, duration: 0.25, ease: "power2.out", force3D: true })
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (idx !== currentIndex) {
                      gsap.to(e.currentTarget, { scale: 1, duration: 0.25, ease: "power2.out", force3D: true })
                    }
                  }}
                  onMouseDown={(e) => {
                    gsap.to(e.currentTarget, { scale: 0.9, duration: 0.15, ease: "power2.in", force3D: true })
                  }}
                  onMouseUp={(e) => {
                    gsap.to(e.currentTarget, { scale: idx === currentIndex ? 1 : 1.15, duration: 0.2, ease: "power2.out", force3D: true })
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-forest/20 bg-white shadow-lg transition-all hover:border-brand-azure hover:bg-brand-azure/10 hover:shadow-xl"
              aria-label="Next service"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { scale: 1.03, duration: 0.3, ease: "power2.out", force3D: true })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out", force3D: true })
              }}
              onMouseDown={(e) => {
                gsap.to(e.currentTarget, { scale: 0.97, duration: 0.15, ease: "power2.in", force3D: true })
              }}
              onMouseUp={(e) => {
                gsap.to(e.currentTarget, { scale: 1.03, duration: 0.2, ease: "power2.out", force3D: true })
              }}
            >
              <ChevronRight className="h-5 w-5 text-brand-forest" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
