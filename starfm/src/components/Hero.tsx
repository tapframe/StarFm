import { useState, useEffect, useRef, useCallback } from "react"
import { useTranslation } from "react-i18next"
import type { TFunction } from "i18next"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Home, Hotel, Trees, Wrench, Shield } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface HeroProps {
  onServicesClick?: () => void
  onContactClick?: () => void
}

const getHeroSlides = (t: TFunction) => [
  {
    key: 'facilitiesManagement',
    title: t('hero.slides.facilitiesManagement.title'),
    subtitle: t('hero.slides.facilitiesManagement.subtitle'),
    description: t('hero.slides.facilitiesManagement.description'),
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=90",
    stat: { value: t('hero.slides.facilitiesManagement.statValue'), label: t('hero.slides.facilitiesManagement.statLabel') }
  },
  {
    key: 'homeSolutions',
    title: t('hero.slides.homeSolutions.title'),
    subtitle: t('hero.slides.homeSolutions.subtitle'),
    description: t('hero.slides.homeSolutions.description'),
    icon: Home,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=90",
    stat: { value: t('hero.slides.homeSolutions.statValue'), label: t('hero.slides.homeSolutions.statLabel') }
  },
  {
    key: 'hospitalityServices',
    title: t('hero.slides.hospitalityServices.title'),
    subtitle: t('hero.slides.hospitalityServices.subtitle'),
    description: t('hero.slides.hospitalityServices.description'),
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?w=1920&q=90",
    stat: { value: t('hero.slides.hospitalityServices.statValue'), label: t('hero.slides.hospitalityServices.statLabel') }
  },
  {
    key: 'landscaping',
    title: t('hero.slides.landscaping.title'),
    subtitle: t('hero.slides.landscaping.subtitle'),
    description: t('hero.slides.landscaping.description'),
    icon: Trees,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=90",
    stat: { value: t('hero.slides.landscaping.statValue'), label: t('hero.slides.landscaping.statLabel') }
  },
  {
    key: 'technicalServices',
    title: t('hero.slides.technicalServices.title'),
    subtitle: t('hero.slides.technicalServices.subtitle'),
    description: t('hero.slides.technicalServices.description'),
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=90",
    stat: { value: t('hero.slides.technicalServices.statValue'), label: t('hero.slides.technicalServices.statLabel') }
  },
  {
    key: 'pestControl',
    title: t('hero.slides.pestControl.title'),
    subtitle: t('hero.slides.pestControl.subtitle'),
    description: t('hero.slides.pestControl.description'),
    icon: Shield,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=90",
    stat: { value: t('hero.slides.pestControl.statValue'), label: t('hero.slides.pestControl.statLabel') }
  },
  // {
  //   key: 'crFormation',
  //   title: t('hero.slides.crFormation.title'),
  //   subtitle: t('hero.slides.crFormation.subtitle'),
  //   description: t('hero.slides.crFormation.description'),
  //   icon: FileText,
  //   image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=90",
  //   stat: { value: t('hero.slides.crFormation.statValue'), label: t('hero.slides.crFormation.statLabel') }
  // },
  // {
  //   key: 'qiwaServices',
  //   title: t('hero.slides.qiwaServices.title'),
  //   subtitle: t('hero.slides.qiwaServices.subtitle'),
  //   description: t('hero.slides.qiwaServices.description'),
  //   icon: Monitor,
  //   image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=90",
  //   stat: { value: t('hero.slides.qiwaServices.statValue'), label: t('hero.slides.qiwaServices.statLabel') }
  // },
  // {
  //   key: 'candidateSourcing',
  //   title: t('hero.slides.candidateSourcing.title'),
  //   subtitle: t('hero.slides.candidateSourcing.subtitle'),
  //   description: t('hero.slides.candidateSourcing.description'),
  //   icon: Users,
  //   image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=90",
  //   stat: { value: t('hero.slides.candidateSourcing.statValue'), label: t('hero.slides.candidateSourcing.statLabel') }
  // },
  // {
  //   key: 'muqeemServices',
  //   title: t('hero.slides.muqeemServices.title'),
  //   subtitle: t('hero.slides.muqeemServices.subtitle'),
  //   description: t('hero.slides.muqeemServices.description'),
  //   icon: UserCheck,
  //   image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=90",
  //   stat: { value: t('hero.slides.muqeemServices.statValue'), label: t('hero.slides.muqeemServices.statLabel') }
  // },
  // {
  //   key: 'trainingPrograms',
  //   title: t('hero.slides.trainingPrograms.title'),
  //   subtitle: t('hero.slides.trainingPrograms.subtitle'),
  //   description: t('hero.slides.trainingPrograms.description'),
  //   icon: Headphones,
  //   image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=90",
  //   stat: { value: t('hero.slides.trainingPrograms.statValue'), label: t('hero.slides.trainingPrograms.statLabel') }
  // },
  // {
  //   key: 'fleetServices',
  //   title: t('hero.slides.fleetServices.title'),
  //   subtitle: t('hero.slides.fleetServices.subtitle'),
  //   description: t('hero.slides.fleetServices.description'),
  //   icon: Truck,
  //   image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=90",
  //   stat: { value: t('hero.slides.fleetServices.statValue'), label: t('hero.slides.fleetServices.statLabel') }
  // }
]

export function Hero({ onServicesClick, onContactClick }: HeroProps) {
  const { t, i18n } = useTranslation()
  const heroSlides = getHeroSlides(t)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const isArabic = i18n.language === 'ar'

  const heroRef = useRef<HTMLElement>(null)
  const currentBgRef = useRef<HTMLDivElement>(null)
  const nextBgRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  // Initial page load animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    // Initial background animation
    if (currentBgRef.current) {
      gsap.set(currentBgRef.current, { scale: 1.1, opacity: 0 })
      tl.to(currentBgRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
      })
    }

    // Fade in overlay
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { opacity: 0 })
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, 0.2)
    }

    // Animate content
    if (iconRef.current) {
      gsap.set(iconRef.current, { scale: 0, opacity: 0, rotate: -180 })
      tl.to(iconRef.current, {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, 0.5)
    }

    if (titleRef.current) {
      gsap.set(titleRef.current, { y: 60, opacity: 0 })
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, 0.6)
    }

    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { y: 40, opacity: 0 })
      tl.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, 0.75)
    }

    if (descriptionRef.current) {
      gsap.set(descriptionRef.current, { y: 30, opacity: 0 })
      tl.to(descriptionRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, 0.9)
    }

    if (buttonsRef.current) {
      gsap.set(buttonsRef.current, { y: 30, opacity: 0 })
      tl.to(buttonsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, 1.05)
    }

    if (statRef.current) {
      gsap.set(statRef.current, { y: 20, opacity: 0 })
      tl.to(statRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, 1.2)
    }

    return () => {
      tl.kill()
    }
  }, [])

  // Handle manual slide change with transition
  const handleSlideChange = useCallback((nextIndex: number) => {
    if (nextIndex !== currentSlide && !isTransitioning) {
      setIsTransitioning(true)

      const tl = gsap.timeline({
        onComplete: () => {
          setPrevSlide(currentSlide)
          setCurrentSlide(nextIndex)
          // The actual state update triggers the enter animation via useEffect
        }
      })

      // Premium Text Exit Animation (Staggered Fade Out & Up)
      tl.to([titleRef.current, subtitleRef.current, descriptionRef.current, statRef.current], {
        y: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in"
      })

      tl.to(iconRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      }, 0)
    }
  }, [currentSlide, isTransitioning])

  // Enter Animation Effect - Runs when currentSlide changes
  useEffect(() => {
    // Skip initial render
    if (currentSlide === prevSlide && currentSlide === 0) return

    const tl = gsap.timeline({
      onComplete: () => setIsTransitioning(false)
    })

    // Premium Background Transition (Crossfade)
    if (nextBgRef.current) {
      // Reset next background state
      gsap.set(nextBgRef.current, { opacity: 0, scale: 1.1, zIndex: 2 })

      // Animate in
      tl.to(nextBgRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.inOut"
      }, 0)
    }

    // Premium Text Enter Animation (Staggered Fade In & Up)
    tl.fromTo(iconRef.current,
      { scale: 0, rotate: -45, opacity: 0 },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, 0.4)

    tl.fromTo(titleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, 0.5)

    tl.fromTo(subtitleRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out"
      }, 0.6)

    tl.fromTo(descriptionRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out"
      }, 0.7)

    tl.fromTo(statRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, 0.8)

    return () => {
      tl.kill()
    }
  }, [currentSlide, prevSlide])

  // Parallax scroll effect for background image
  useEffect(() => {
    // Apply parallax to both backgrounds if they exist
    const elements = [currentBgRef.current, nextBgRef.current]

    const parallaxTrigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        elements.forEach(el => {
          if (el) {
            gsap.set(el, {
              backgroundPosition: `center ${self.progress * -100}px`
            })
          }
        })
      }
    })

    return () => {
      parallaxTrigger.kill()
    }
  }, [currentSlide])

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % heroSlides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [currentSlide, isTransitioning, handleSlideChange, heroSlides.length])

  const currentData = heroSlides[currentSlide]
  const prevData = heroSlides[prevSlide]
  const Icon = currentData.icon

  return (
    <section ref={heroRef} className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Images - Crossfade Setup */}
      <div className="absolute inset-0 z-0">
        {/* Previous/Underlying Image */}
        <div
          ref={currentBgRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${prevData.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Current/Overlay Image - Only visible during/after transition */}
        <div
          ref={nextBgRef}
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(${currentData.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: currentSlide === prevSlide ? 0 : 1 // Hide initially if same, let animation handle opacity
          }}
        />
      </div>

      {/* Gradient Overlay with Smooth Black Fade - Left on Desktop, Bottom on Mobile */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 hero-gradient-overlay"
        style={{
          '--gradient-direction': isArabic ? 'to left' : 'to right'
        } as React.CSSProperties}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-brand-azure/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-brand-sand/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Proud Partner Logo - Top Right */}
      <div className="absolute top-0 right-0 z-30 flex flex-col items-center gap-1 md:gap-2 p-4 md:p-8 bg-gradient-to-bl from-black/80 via-black/20 to-transparent">
        <span className="text-[8px] md:text-xs font-semibold uppercase tracking-widest text-white/90 shadow-sm">Proud Partner</span>
        <div className="transition-transform hover:scale-105 duration-300">
          <img src="https://www.profm.com.sa/logo.svg" alt="PROFM Logo" className="h-6 md:h-10 w-auto drop-shadow-xl filter" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 pb-16 sm:pb-0">
        <div ref={contentRef} className="max-w-4xl">
          {/* Icon */}
          <div ref={iconRef} className="mb-4 inline-flex">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-azure/30 blur-xl rounded-full" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-azure to-brand-sand shadow-2xl ring-4 ring-white/20">
                <Icon className="h-8 w-8 text-brand-deep" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p ref={subtitleRef} className="mb-2 text-white/80 dark:text-white/90 font-semibold text-sm sm:text-base uppercase tracking-[0.2em] hero-text-shadow">
            {currentData.subtitle}
          </p>

          {/* Title */}
          <h1 ref={titleRef} className="mb-4 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-tight tracking-normal hero-text-shadow">
            {currentData.title}
          </h1>

          {/* Description */}
          <p ref={descriptionRef} className="mb-6 text-base sm:text-base lg:text-lg text-white/80 dark:text-white/90 font-normal leading-relaxed max-w-2xl hero-text-shadow">
            {currentData.description}
          </p>

          {/* Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button
              size="lg"
              onClick={onServicesClick}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-azure to-brand-sand px-8 py-5 text-brand-deep font-black text-sm shadow-2xl transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.8)] hover:scale-105 uppercase tracking-wider"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {t('hero.exploreServices')}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" strokeWidth={3} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-sand to-brand-azure opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              size="lg"
              onClick={onContactClick}
              className="group rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm px-8 py-5 text-white font-black text-sm transition-all duration-300 hover:bg-white hover:text-brand-deep hover:border-white hover:shadow-2xl hover:scale-105 uppercase tracking-wider dark:hover:bg-slate-800 dark:hover:text-white dark:hover:border-slate-800"
            >
              <span className="flex items-center justify-center gap-3">
                {t('hero.getInTouch')}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" strokeWidth={3} />
              </span>
            </Button>
          </div>

          {/* Stat Badge */}
          <div ref={statRef} className="inline-flex items-baseline gap-4 px-8 py-4 rounded-2xl bg-white/10 dark:bg-slate-900/50 backdrop-blur-md border border-white/20">
            <div className="font-sans text-4xl font-bold text-white">
              {currentData.stat.value}
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                {currentData.stat.label}
              </div>
              <div className="text-xs text-white/60">{t('hero.andCounting')}</div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              disabled={isTransitioning}
              className={`group relative transition-all duration-500 ${index === currentSlide
                ? "h-3 w-16 bg-brand-azure shadow-[0_0_30px_rgba(59,130,246,0.8)]"
                : "h-2.5 w-2.5 bg-white/40 hover:bg-white/80 hover:scale-125"
                } rounded-full`}
              aria-label={`Go to slide ${index + 1}: ${heroSlides[index].title}`}
            >
              {/* Progress bar for active slide */}
              {index === currentSlide && (
                <div className="absolute inset-0 rounded-full bg-brand-sand animate-progress" />
              )}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/60">
          <div className="text-xs font-bold uppercase tracking-widest rotate-90 origin-center">{t('hero.scroll')}</div>
          <div className="h-16 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes progress {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        .animate-progress {
          animation: progress 7s linear;
        }

        .hero-gradient-overlay {
          background:
            linear-gradient(to bottom,
              transparent 0%,
              rgba(0, 0, 0, 0.08) 44%,
              rgba(0, 0, 0, 0.15) 48%,
              rgba(0, 0, 0, 0.25) 52%,
              rgba(0, 0, 0, 0.35) 55%,
              rgba(0, 0, 0, 0.45) 57%,
              rgba(0, 0, 0, 0.6) 62%,
              rgba(0, 0, 0, 0.75) 67%,
              rgba(0, 0, 0, 0.85) 72%,
              rgba(0, 0, 0, 0.9) 80%,
              rgba(0, 0, 0, 0.95) 90%,
              rgba(0, 0, 0, 1) 100%
            ),
            linear-gradient(to bottom right,
              rgba(34, 47, 62, 0.3) 0%,
              rgba(34, 47, 62, 0.2) 50%,
              rgba(34, 47, 62, 0.25) 100%
            );
        }

        @media (min-width: 768px) {
          .hero-gradient-overlay {
            background:
              linear-gradient(var(--gradient-direction),
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0.95) 10%,
                rgba(0, 0, 0, 0.9) 20%,
                rgba(0, 0, 0, 0.85) 28%,
                rgba(0, 0, 0, 0.75) 33%,
                rgba(0, 0, 0, 0.6) 38%,
                rgba(0, 0, 0, 0.45) 43%,
                rgba(0, 0, 0, 0.35) 45%,
                rgba(0, 0, 0, 0.25) 48%,
                rgba(0, 0, 0, 0.15) 52%,
                rgba(0, 0, 0, 0.08) 56%,
                transparent 60%
              ),
              linear-gradient(to bottom right,
                rgba(34, 47, 62, 0.3) 0%,
                rgba(34, 47, 62, 0.2) 50%,
                rgba(34, 47, 62, 0.25) 100%
              );
          }
        }
      `}</style>
    </section>
  )
}
