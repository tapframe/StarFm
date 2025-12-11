import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react"
// import { SparklesCore } from "@/components/ui/sparkles"


export function About() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement[]>([])
  const bgCircle1Ref = useRef<HTMLDivElement>(null)
  const bgCircle2Ref = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: Award,
      title: t('about.features.excellence.title'),
      description: t('about.features.excellence.description')
    },
    {
      icon: Users,
      title: t('about.features.expertTeam.title'),
      description: t('about.features.expertTeam.description')
    },
    {
      icon: TrendingUp,
      title: t('about.features.growth.title'),
      description: t('about.features.growth.description')
    },
    {
      icon: CheckCircle2,
      title: t('about.features.reliability.title'),
      description: t('about.features.reliability.description')
    }
  ]

  return <section ref={sectionRef} id="about" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
    {/* Arabic Corporate Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/backgrounds/about-bg.png"
        alt=""
        className="h-full w-full object-cover"
      />
      {/* Lighter gradient overlay for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30 dark:from-black/80 dark:via-black/60 dark:to-black/50" />
    </div>

    {/* Minimal Background decorations */}
    <div className="pointer-events-none absolute inset-0 z-10">
      <div ref={bgCircle1Ref} className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-brand-azure/10 to-transparent blur-3xl" />
      <div ref={bgCircle2Ref} className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-brand-sand/10 to-transparent blur-3xl" />
    </div>

    <div className="container relative z-20 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      {/* PROFM Partnership Section - Full Width */}
      {/* <div ref={bottomSectionRef} className="mb-16 -mx-6 sm:-mx-8 lg:-mx-12 rounded-3xl border border-brand-deep/5 dark:border-white/10 bg-gradient-to-br from-brand-azure/5 via-white to-brand-sand/5 dark:via-slate-900 dark:to-brand-azure/5 p-8 sm:p-10 lg:p-12 shadow-brand backdrop-blur-sm">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-azure/20 bg-white/80 dark:bg-slate-800/80 px-4 py-1.5 shadow-sm backdrop-blur-sm">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-azure" />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand-azure">
                {t('about.profm.badge')}
              </span>
            </div>
          </div>

          <div className="text-center relative">
            <h3 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl relative z-10">
              {t('about.profm.title')}
              <span className="mt-2 block bg-gradient-to-r from-brand-azure via-brand-forest to-brand-azure bg-clip-text text-transparent">
                {t('about.profm.titleHighlight')}
              </span>
            </h3>
            <div className="absolute inset-0 flex items-center justify-center">
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1.4}
                particleDensity={150}
                className="h-full w-full max-w-xs"
                particleColor="#3b82f6"
              />
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-lg font-light leading-[1.6] tracking-wide text-muted-foreground sm:text-xl">
              {t('about.profm.description')}
            </p>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm leading-[1.6] text-muted-foreground/80">
              {t('about.profm.subtitle')}
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 pt-2">
            <a
              href="#"
              className="group relative inline-block"
            >
              <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-brand-azure/10 via-brand-sand/10 to-brand-azure/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-lg border border-brand-deep/5 dark:border-white/10 bg-white dark:bg-slate-800 p-4 shadow-card transition-all duration-300 group-hover:border-brand-azure/20 group-hover:shadow-brand">
                <img
                  src="/image.png"
                  alt="MahhabFM Logo"
                  className="h-8 w-auto transition-transform duration-500 group-hover:scale-105 sm:h-10"
                />
              </div>
            </a>

            <div className="flex items-center justify-center">
              <Handshake className="h-6 w-6 text-brand-azure" strokeWidth={2} />
            </div>

            <a
              href="https://www.profm.com.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block"
            >
              <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-brand-azure/10 via-brand-sand/10 to-brand-azure/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-lg border border-brand-deep/5 dark:border-white/10 bg-white dark:bg-slate-800 p-4 shadow-card transition-all duration-300 group-hover:border-brand-azure/20 group-hover:shadow-brand">
                <img
                  src="https://www.profm.com.sa/logo.svg"
                  alt="ProFM Logo"
                  className="h-8 w-auto transition-transform duration-500 group-hover:scale-105 sm:h-10"
                />
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-azure/30 to-transparent" />
            <div className="h-1.5 w-1.5 rounded-full bg-brand-azure/40" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-azure/30 to-transparent" />
          </div>
        </div>
      </div> */}

      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
        {/* Left Content */}
        <div ref={leftContentRef} className="space-y-8">
          <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-azure" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-azure">
              {t('about.badge')}
            </span>
          </div>

          <h2 ref={titleRef} className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {t('about.title')}
            <span className="mt-2 block bg-gradient-to-r from-brand-azure to-brand-sand bg-clip-text text-transparent">
              {t('about.titleHighlight')}
            </span>
          </h2>

          <div ref={descriptionRef} className="space-y-5">
            <p className="text-lg leading-relaxed text-white/90">
              {t('about.description1')}
            </p>
            <p className="text-base leading-relaxed text-white/70">
              {t('about.description2')}
            </p>
          </div>

          {/* CTA Button */}
          <button
            ref={buttonRef}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-deep px-8 py-4 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-deep/90 hover:shadow-md"
          >
            <span>{t('about.learnMore')}</span>
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
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
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-sm transition-all duration-300 hover:border-brand-azure/30 hover:shadow-lg hover:bg-white/10"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-azure/20 transition-all duration-300 group-hover:bg-brand-azure/30 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-brand-azure" strokeWidth={2} />
                </div>

                <h3 className="mb-2 font-display text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>


  </section >
}
