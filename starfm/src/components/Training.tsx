import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BookOpen, Users, Award, Zap, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

interface TrainingProps {
  onContactClick?: () => void
}

export function Training({ onContactClick }: TrainingProps) {
  const { t } = useTranslation()

  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const bgCircle1Ref = useRef<HTMLDivElement>(null)
  const bgCircle2Ref = useRef<HTMLDivElement>(null)
  const ctaButtonRef = useRef<HTMLButtonElement>(null)

  const programs = [
    {
      icon: BookOpen,
      title: t('training.programs.onboarding.title', { defaultValue: 'Onboarding Programs' }),
      description: t('training.programs.onboarding.description', { defaultValue: 'Comprehensive orientation for new employees and team members' }),
      features: [
        t('training.programs.onboarding.feature1', { defaultValue: 'Structured curriculum' }),
        t('training.programs.onboarding.feature2', { defaultValue: 'One-on-one mentoring' }),
        t('training.programs.onboarding.feature3', { defaultValue: 'Company culture training' })
      ]
    },
    {
      icon: Users,
      title: t('training.programs.candidateSourcing.title', { defaultValue: 'Candidate Sourcing' }),
      description: t('training.programs.candidateSourcing.description', { defaultValue: 'Professional recruitment and talent acquisition services' }),
      features: [
        t('training.programs.candidateSourcing.feature1', { defaultValue: 'Active candidate database' }),
        t('training.programs.candidateSourcing.feature2', { defaultValue: 'Skill-based matching' }),
        t('training.programs.candidateSourcing.feature3', { defaultValue: 'Quick placement' })
      ]
    },
    {
      icon: Award,
      title: t('training.programs.skillDevelopment.title', { defaultValue: 'Skill Development' }),
      description: t('training.programs.skillDevelopment.description', { defaultValue: 'Specialized training modules tailored to industry requirements' }),
      features: [
        t('training.programs.skillDevelopment.feature1', { defaultValue: 'Technical certifications' }),
        t('training.programs.skillDevelopment.feature2', { defaultValue: 'Soft skills training' }),
        t('training.programs.skillDevelopment.feature3', { defaultValue: 'Continuous learning' })
      ]
    },
    {
      icon: Zap,
      title: t('training.programs.strategicPlacement.title', { defaultValue: 'Strategic Placement' }),
      description: t('training.programs.strategicPlacement.description', { defaultValue: 'Strategic workforce planning and optimal placement solutions' }),
      features: [
        t('training.programs.strategicPlacement.feature1', { defaultValue: 'Job matching' }),
        t('training.programs.strategicPlacement.feature2', { defaultValue: 'Career planning' }),
        t('training.programs.strategicPlacement.feature3', { defaultValue: 'Performance tracking' })
      ]
    }
  ]

  useEffect(() => {
    // Background parallax animations
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

    // Header reveal
    if (headerRef.current) {
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top 75%",
        onEnter: () => {
          gsap.to(headerRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            force3D: true
          })
        },
        markers: false
      })
      gsap.set(headerRef.current, { opacity: 0, y: 30 })
    }

    // Badge animation
    if (badgeRef.current) {
      ScrollTrigger.create({
        trigger: badgeRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(badgeRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            force3D: true
          })
        },
        markers: false
      })
      gsap.set(badgeRef.current, { opacity: 0, scale: 0.96 })
    }

    // Title animation
    if (titleRef.current) {
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 85%",
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

    // Description animation
    if (descriptionRef.current) {
      ScrollTrigger.create({
        trigger: descriptionRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(descriptionRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            force3D: true
          })
        },
        markers: false
      })
      gsap.set(descriptionRef.current, { opacity: 0, y: 12 })
    }

    // Cards stagger animation
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
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out",
              force3D: true
            })
          },
          markers: false
        })
        gsap.set(card, { opacity: 0, y: 20, scale: 0.98 })

        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -8,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            duration: 0.35,
            ease: "power2.out",
            force3D: true
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            duration: 0.35,
            ease: "power2.out",
            force3D: true
          })
        })
      }
    })

    // CTA button animation
    if (ctaButtonRef.current) {
      ctaButtonRef.current.addEventListener("mouseenter", () => {
        gsap.to(ctaButtonRef.current, {
          scale: 1.05,
          y: -3,
          duration: 0.3,
          ease: "back.out(2)",
          force3D: true
        })
      })

      ctaButtonRef.current.addEventListener("mouseleave", () => {
        gsap.to(ctaButtonRef.current, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          force3D: true
        })
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section
      id="training"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 lg:py-24"
    >
      {/* Background decorative circles */}
      <div className="pointer-events-none absolute inset-0">
        <div
          ref={bgCircle1Ref}
          className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          ref={bgCircle2Ref}
          className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-indigo-100/30 dark:bg-indigo-900/10 blur-3xl"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-16 text-center"
        >
          <div
            ref={badgeRef}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 dark:bg-blue-500/20 px-4 py-2 bg-opacity-50"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
              {t('training.badge', { defaultValue: 'Workforce Development' })}
            </span>
          </div>

          <h2
            ref={titleRef}
            className="mb-6 font-display text-4xl font-black leading-tight text-brand-deep dark:text-foreground sm:text-5xl lg:text-6xl"
          >
            {t('training.title', { defaultValue: 'Training' })}
          </h2>

          <p
            ref={descriptionRef}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-forest/80 dark:text-muted-foreground sm:text-xl"
          >
            {t('training.description', { defaultValue: 'Delivering end-to-end workforce development through tailored training programs and strategic candidate sourcing.' })}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={`program-${index}`}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="group relative overflow-hidden rounded-2xl border border-blue-200/50 dark:border-blue-800/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon badge */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-brand-deep dark:text-foreground">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-brand-forest/70 dark:text-muted-foreground/80">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={`feature-${idx}`} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-xs text-brand-forest/60 dark:text-muted-foreground/60">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-blue-500 to-indigo-600 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-blue-200/50 dark:border-blue-800/50 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-slate-900 dark:to-indigo-950/30 p-12 text-center md:p-16">
          <div>
            <h3 className="mb-3 text-2xl font-bold text-brand-deep dark:text-foreground sm:text-3xl">
              {t('training.cta.title', { defaultValue: 'Ready to Develop Your Team?' })}
            </h3>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-brand-forest/70 dark:text-muted-foreground">
              {t('training.cta.description', { defaultValue: 'Let us help you build a skilled, motivated workforce with our comprehensive training and sourcing solutions.' })}
            </p>
          </div>
          <Button
            ref={ctaButtonRef}
            onClick={onContactClick}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('training.cta.button', { defaultValue: 'Get Started' })}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
