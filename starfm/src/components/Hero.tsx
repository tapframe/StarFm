import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Building2, ArrowRight, Sparkles, Home, Hotel, Trees, Wrench, Shield } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface HeroProps {
  onServicesClick?: () => void
  onContactClick?: () => void
}

export function Hero({ onServicesClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const leftContentRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)
  const bgImageRef = useRef<HTMLDivElement>(null)
  const carouselContentRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const statsBadgeRef = useRef<HTMLDivElement>(null)
  const ctaButtonRef = useRef<HTMLButtonElement>(null)
  const shimmerRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)
  const bgCircle1Ref = useRef<HTMLDivElement>(null)
  const bgCircle2Ref = useRef<HTMLDivElement>(null)
  const sparklesRef = useRef<HTMLDivElement>(null)
  const buttonHoverRef = useRef<HTMLDivElement>(null)

  const carouselSlides = [
    {
      title: "Facilities Management",
      description: "Comprehensive management solutions for commercial and residential properties with 24/7 support.",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      stats: { value: "500+", label: "Properties Managed" },
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      title: "Home Solutions",
      description: "Professional cleaning, maintenance, and home care services for residential properties.",
      icon: Home,
      color: "from-emerald-500 to-teal-500",
      stats: { value: "1,000+", label: "Happy Homes" },
      bgImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
    },
    {
      title: "Hospitality Services",
      description: "Premium hospitality management for hotels, resorts, and commercial spaces.",
      icon: Hotel,
      color: "from-purple-500 to-pink-500",
      stats: { value: "50+", label: "Hotels Served" },
      bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
    },
    {
      title: "Landscaping & Gardens",
      description: "Expert landscape design, maintenance, and outdoor space management services.",
      icon: Trees,
      color: "from-green-500 to-emerald-500",
      stats: { value: "300+", label: "Gardens Maintained" },
      bgImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
    },
    {
      title: "Technical Services",
      description: "HVAC, electrical, plumbing, and technical maintenance by certified professionals.",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      stats: { value: "99.8%", label: "Uptime Rate" },
      bgImage: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
    },
    {
      title: "Pest Control",
      description: "Safe and effective pest management solutions for all property types.",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      stats: { value: "2,000+", label: "Treatments Done" },
      bgImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
    }
  ]

  // Initial animations on mount with enhanced effects
  useEffect(() => {
    const tl = gsap.timeline()
    
    // Professional left content animations
    if (leftContentRef.current) {
      gsap.set(leftContentRef.current, { opacity: 0, x: -30 })
      tl.to(leftContentRef.current, { 
        opacity: 1, 
        x: 0, 
        duration: 0.6,
        ease: "power3.out",
        force3D: true
      })
    }
    
    if (badgeRef.current) {
      gsap.set(badgeRef.current, { opacity: 0, y: 12, scale: 0.96 })
      tl.to(badgeRef.current, { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.5, 
        ease: "power2.out",
        force3D: true
      }, 0.05)
    }
    
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 15 })
      tl.to(titleRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.65,
        ease: "power3.out",
        force3D: true
      }, 0.1)
    }
    
    if (underlineRef.current) {
      gsap.set(underlineRef.current, { scaleX: 0 })
      tl.to(underlineRef.current, { 
        scaleX: 1, 
        duration: 0.6,
        transformOrigin: "left",
        ease: "power2.out",
        force3D: true
      }, 0.2)
    }
    
    if (descriptionRef.current) {
      gsap.set(descriptionRef.current, { opacity: 0, y: 12 })
      tl.to(descriptionRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.55,
        ease: "power2.out",
        force3D: true
      }, 0.15)
    }
    
    if (buttonsRef.current) {
      gsap.set(buttonsRef.current, { opacity: 0, y: 15, scale: 0.97 })
      tl.to(buttonsRef.current, { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        force3D: true
      }, 0.2)
    }
    
    if (statsRef.current) {
      gsap.set(statsRef.current, { opacity: 0, y: 12 })
      tl.to(statsRef.current, { 
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        force3D: true
      }, 0.3)
    }
    
    // Professional right content animation
    if (rightContentRef.current) {
      gsap.set(rightContentRef.current, { opacity: 0, scale: 0.97, y: 20 })
      tl.to(rightContentRef.current, { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        force3D: true
      }, 0.15)

      // Add parallax on scroll
      ScrollTrigger.create({
        trigger: rightContentRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        onUpdate: (self) => {
          gsap.set(rightContentRef.current, {
            y: -40 * self.progress,
            scale: 1 - (0.05 * self.progress),
            force3D: true
          })
        },
        markers: false
      })
    }
    
    // Rotating sparkles animation
    if (sparklesRef.current) {
      gsap.to(sparklesRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        force3D: true
      })
    }
    
    // Background circles animations with parallax
    if (bgCircle1Ref.current) {
      gsap.set(bgCircle1Ref.current, { scale: 1, opacity: 0.2 })
      gsap.to(bgCircle1Ref.current, {
        scale: 1.3,
        opacity: 0.35,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        force3D: true
      })

      // Parallax on scroll
      ScrollTrigger.create({
        trigger: bgCircle1Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(bgCircle1Ref.current, {
            x: -50 * self.progress,
            y: -30 * self.progress,
            force3D: true
          })
        },
        markers: false
      })
    }
    
    if (bgCircle2Ref.current) {
      gsap.set(bgCircle2Ref.current, { scale: 1.2, opacity: 0.15 })
      gsap.to(bgCircle2Ref.current, {
        scale: 1,
        opacity: 0.3,
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        force3D: true
      })

      // Parallax on scroll
      ScrollTrigger.create({
        trigger: bgCircle2Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
        onUpdate: (self) => {
          gsap.set(bgCircle2Ref.current, {
            x: 50 * self.progress,
            y: 30 * self.progress,
            force3D: true
          })
        },
        markers: false
      })
    }
    
    // Arrow animation
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        x: 6,
        duration: 0.75,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        force3D: true
      })
    }
    
    // Shimmer effect
    if (shimmerRef.current) {
      gsap.set(shimmerRef.current, { x: "-100%" })
      gsap.to(shimmerRef.current, {
        x: "200%",
        duration: 2,
        repeat: -1,
        repeatDelay: 1,
        ease: "none",
        force3D: true
      })
    }
    
    // Button hover effect
    const button = ctaButtonRef.current
    if (button) {
      button.style.willChange = "transform"
      button.addEventListener("mouseenter", () => {
        gsap.to(button, { 
          scale: 1.02, 
          y: -2, 
          duration: 0.35,
          ease: "power2.out",
          force3D: true
        })
      }, { passive: true })
      button.addEventListener("mouseleave", () => {
        gsap.to(button, { 
          scale: 1, 
          y: 0, 
          duration: 0.35,
          ease: "power2.out",
          force3D: true
        })
      }, { passive: true })
    }

    // Set initial button hover state
    if (buttonHoverRef.current) {
      gsap.set(buttonHoverRef.current, { x: "-100%" })
    }
    
    // Store refs to avoid stale closure warnings
    const rightContent = rightContentRef.current
    const bgCircle1 = bgCircle1Ref.current
    const bgCircle2 = bgCircle2Ref.current
    
    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars?.trigger === rightContent ||
            trigger.vars?.trigger === bgCircle1 ||
            trigger.vars?.trigger === bgCircle2) {
          trigger.kill()
        }
      })
      if (button) {
        button.style.willChange = "auto"
        button.removeEventListener("mouseenter", () => {})
        button.removeEventListener("mouseleave", () => {})
      }
    }
  }, [])

  // Carousel slide change animation
  useEffect(() => {
    if (bgImageRef.current && carouselContentRef.current && iconRef.current && statsBadgeRef.current && ctaButtonRef.current) {
      const tl = gsap.timeline()
      
      // Professional fade out
      tl.to(carouselContentRef.current, { 
        opacity: 0, 
        y: -15, 
        duration: 0.3,
        ease: "power2.in",
        force3D: true
      })
      tl.to(bgImageRef.current, { 
        opacity: 0, 
        scale: 0.99, 
        duration: 0.35,
        ease: "power2.in",
        force3D: true
      }, 0)
      
      // Elegant fade in
      tl.set(bgImageRef.current, { scale: 1.01 })
      tl.to(bgImageRef.current, { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        ease: "power3.out",
        force3D: true
      }, 0.25)
      
      // Refined icon reveal
      gsap.set(iconRef.current, { scale: 0.95, opacity: 0 })
      tl.to(iconRef.current, { 
        scale: 1, 
        opacity: 1,
        duration: 0.4, 
        ease: "power2.out",
        force3D: true
      }, 0.2)
      
      // Professional content fade
      gsap.set(carouselContentRef.current, { opacity: 0, y: 15 })
      tl.to(carouselContentRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.45, 
        ease: "power2.out",
        force3D: true
      }, 0.25)
      
      // Refined stats badge
      gsap.set(statsBadgeRef.current, { opacity: 0, y: 15, scale: 0.97 })
      tl.to(statsBadgeRef.current, { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        force3D: true
      }, 0.3)
      
      // Professional CTA button
      gsap.set(ctaButtonRef.current, { opacity: 0, y: 10, scale: 0.97 })
      tl.to(ctaButtonRef.current, { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        force3D: true
      }, 0.35)
    }
  }, [currentSlide])

  // Carousel auto-play and swipe handling
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0
    let autoplayTimer: ReturnType<typeof setInterval>

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      const swipeThreshold = 50
      const diff = touchStartX - touchEndX

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swiped left - next slide
          setCurrentSlide((prev) => (prev + 1) % 6)
        } else {
          // Swiped right - previous slide
          setCurrentSlide((prev) => (prev - 1 + 6) % 6)
        }
      }
      resetAutoplay()
    }

    const startAutoplay = () => {
      autoplayTimer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 6)
      }, 8000)
    }

    const resetAutoplay = () => {
      clearInterval(autoplayTimer)
      startAutoplay()
    }

    const carousel = rightContentRef.current
    if (carousel) {
      carousel.addEventListener("touchstart", handleTouchStart as EventListener)
      carousel.addEventListener("touchend", handleTouchEnd as EventListener)
    }

    startAutoplay()

    return () => {
      clearInterval(autoplayTimer)
      if (carousel) {
        carousel.removeEventListener("touchstart", handleTouchStart as EventListener)
        carousel.removeEventListener("touchend", handleTouchEnd as EventListener)
      }
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-forest to-brand-moss py-8 sm:py-12 lg:py-20">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div ref={bgCircle1Ref} className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-brand-gold/30 opacity-50" />
        <div ref={bgCircle2Ref} className="absolute right-1/3 top-1/4 h-96 w-96 rounded-full bg-brand-moss/25 opacity-50" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container relative px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div ref={leftContentRef} className="flex flex-col justify-center">
            <div ref={badgeRef} className="mb-4 sm:mb-6 inline-flex items-center gap-2 w-fit">
              <div className="flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 bg-opacity-50 px-3 py-1.5">
                <div ref={sparklesRef} className="flex h-5 w-5 items-center justify-center">
                  <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  FM Services Provider
                </span>
              </div>
            </div>

            <h1 ref={titleRef} className="mb-4 font-display text-3xl leading-[1.1] font-black text-white sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              Elevating
              <span className="relative block mt-2">
                <span className="gradient-text">
                  Facilities Management
                </span>
                <div ref={underlineRef} className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-sand to-transparent rounded-full origin-left" />
              </span>
            </h1>

            <p ref={descriptionRef} className="mb-6 text-base leading-relaxed text-brand-cream/90 sm:text-lg lg:text-xl font-medium max-w-lg">
              Expert facilities management solutions tailored to your needs. From commercial buildings to residential complexes, we deliver comprehensive services with professional excellence.
            </p>

            <div ref={buttonsRef} className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-gold to-brand-sand px-8 py-3.5 text-brand-deep font-bold text-base shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/40 uppercase tracking-wide"
                onClick={onServicesClick}
                onMouseEnter={(e) => {
                  const hoverDiv = e.currentTarget.querySelector('.button-hover') as HTMLElement
                  if (hoverDiv) {
                    gsap.to(hoverDiv, { x: "100%", duration: 0.6 })
                  }
                }}
                onMouseLeave={(e) => {
                  const hoverDiv = e.currentTarget.querySelector('.button-hover') as HTMLElement
                  if (hoverDiv) {
                    gsap.to(hoverDiv, { x: "-100%", duration: 0.6 })
                  }
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Our Services
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                </span>
                <div ref={buttonHoverRef} className="button-hover absolute inset-0 bg-gradient-to-r from-brand-sand to-brand-gold" />
              </Button>

              <Button
                size="lg"
                className="group rounded-full border-2 border-brand-cream/50 bg-white/10 px-8 py-3.5 text-brand-cream font-bold text-base transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/20 hover:text-white hover:shadow-lg uppercase tracking-wide"
              >
                <span className="flex items-center justify-center gap-2">
                  Contact Us
                  <span ref={arrowRef} className="text-lg">→</span>
                </span>
              </Button>
            </div>

            {/* Quick Stats Row */}
            <div ref={statsRef} className="mt-8 sm:mt-12 flex items-center gap-6 sm:gap-8 border-t border-white/15 pt-6 sm:pt-10">
              {[
                { value: "500+", label: "Facilities" },
                { value: "2,000+", label: "Clients" },
                { value: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col group stat-item"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, { scale: 1.08, y: -2, duration: 0.3 })
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, { scale: 1, y: 0, duration: 0.3 })
                  }}
                >
                  <span className="font-display text-2xl sm:text-3xl font-black text-brand-gold group-hover:text-brand-sand transition-colors">{stat.value}</span>
                  <span className="text-xs font-bold text-brand-cream/70 uppercase tracking-widest mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div ref={rightContentRef} className="relative">
            {/* Enhanced glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/30 via-brand-sand/20 to-brand-moss/30 rounded-[2rem] opacity-70 -z-10 animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-br from-white/40 to-white/10 rounded-[1.75rem] -z-10" />

            <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] border border-white/30 bg-white/95 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.25)] min-h-[400px] sm:min-h-[500px] lg:min-h-[580px] flex flex-col">
              {/* Background Image with Modern Overlay */}
              <div ref={bgImageRef} className="absolute inset-0 rounded-[1.75rem] overflow-hidden">
                <img 
                  src={carouselSlides[currentSlide].bgImage}
                  alt={carouselSlides[currentSlide].title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/95 via-brand-forest/90 to-brand-moss/85 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Decorative mesh pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
              </div>

              <div className="relative z-10 flex-1 flex flex-col p-6 sm:p-8 lg:p-10">
                <div ref={carouselContentRef} key={currentSlide} className="flex-1 flex flex-col">
                  {/* Modern Header */}
                  <div className="mb-6 sm:mb-8 lg:mb-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/30 bg-opacity-50">
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gold">Our Services</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-5">
                      <div
                        ref={iconRef}
                        className={`relative flex h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${carouselSlides[currentSlide].color} shadow-2xl ring-4 ring-white/30`}
                      >
                        <div className="absolute inset-0 rounded-2xl bg-white/20 bg-opacity-50" />
                        {(() => {
                          const Icon = carouselSlides[currentSlide].icon
                          return <Icon className="relative h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white drop-shadow-lg" strokeWidth={2} />
                        })()}
                      </div>
                      
                      <div className="flex-1">
                        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-black leading-[1.1] mb-2 sm:mb-3 drop-shadow-lg">
                          {carouselSlides[currentSlide].title}
                        </h2>
                        <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed font-medium">
                          {carouselSlides[currentSlide].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Modern Stats Badge */}
                  <div ref={statsBadgeRef} className="relative rounded-xl sm:rounded-2xl border border-brand-gold/40 bg-gradient-to-br from-brand-gold/25 via-brand-gold/15 to-transparent p-4 sm:p-6 mb-6 sm:mb-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <div className="relative flex items-baseline gap-3">
                      <div className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black gradient-text drop-shadow-sm">
                        {carouselSlides[currentSlide].stats.value}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-xs sm:text-sm font-bold text-white/95 uppercase tracking-wide">
                          {carouselSlides[currentSlide].stats.label}
                        </div>
                        <div className="text-xs text-white/70 font-medium">and growing</div>
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand-gold/20 opacity-50" />
                  </div>

                  {/* Modern CTA Button */}
                  <button
                    ref={ctaButtonRef}
                    onClick={onServicesClick}
                    className="group relative w-full rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-gold via-brand-sand to-brand-gold py-4 sm:py-5 px-6 sm:px-8 font-black text-brand-deep text-sm sm:text-base shadow-[0_10px_40px_-15px_rgba(231,180,89,0.6)] transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(231,180,89,0.8)] uppercase tracking-wider overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Discover More
                      <div>
                        <ArrowRight className="h-5 w-5" strokeWidth={3} />
                      </div>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-sand to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Shimmer effect */}
                    <div ref={shimmerRef} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </button>
                </div>

                {/* Modern Carousel Indicators */}
                <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                  {carouselSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`relative rounded-full transition-all duration-500 ${
                        index === currentSlide
                          ? "h-2.5 w-12 bg-brand-gold shadow-[0_0_20px_rgba(231,180,89,0.6)]"
                          : "h-2 w-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      onMouseEnter={(e) => {
                        if (index !== currentSlide) {
                          gsap.to(e.currentTarget, { scale: 1.2, duration: 0.2 })
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (index !== currentSlide) {
                          gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })
                        }
                      }}
                      onMouseDown={(e) => {
                        gsap.to(e.currentTarget, { scale: 0.9, duration: 0.1 })
                      }}
                      onMouseUp={(e) => {
                        gsap.to(e.currentTarget, { scale: index === currentSlide ? 1 : 1.2, duration: 0.1 })
                      }}
                    >
                      {index === currentSlide && (
                        <div className="absolute inset-0 rounded-full bg-brand-gold" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
