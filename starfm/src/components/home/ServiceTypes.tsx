import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { Clock, Calendar, RotateCcw, ArrowRight } from "lucide-react"

export function ServiceTypes() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const iconContainersRef = useRef<HTMLDivElement[]>([])
  const rotatingRingsRef = useRef<HTMLDivElement[]>([])
  const buttonsRef = useRef<HTMLButtonElement[]>([])
  const bgCircle1Ref = useRef<HTMLDivElement>(null)
  const bgCircle2Ref = useRef<HTMLDivElement>(null)

  const serviceTypes = [
    {
      icon: Clock,
      title: t('serviceTypes.types.oneTime.title'),
      description: t('serviceTypes.types.oneTime.description'),
      gradient: "from-cyan-400 via-cyan-500 to-teal-600",
      iconBg: "from-cyan-500/20 to-teal-500/20",
      hoverGlow: "group-hover:shadow-cyan-500/30",
      delay: 0.1
    },
    {
      icon: Calendar,
      title: t('serviceTypes.types.monthly.title'),
      description: t('serviceTypes.types.monthly.description'),
      gradient: "from-emerald-400 via-green-500 to-emerald-600",
      iconBg: "from-emerald-500/20 to-green-500/20",
      hoverGlow: "group-hover:shadow-emerald-500/30",
      delay: 0.2
    },
    {
      icon: RotateCcw,
      title: t('serviceTypes.types.yearly.title'),
      description: t('serviceTypes.types.yearly.description'),
      gradient: "from-blue-400 via-blue-500 to-cyan-600",
      iconBg: "from-blue-500/20 to-cyan-500/20",
      hoverGlow: "group-hover:shadow-blue-500/30",
      delay: 0.3
    }
  ]

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      {/* Arabic Corporate Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/backgrounds/services-bg.png"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Lighter gradient overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50 dark:from-black/70 dark:via-black/50 dark:to-black/60" />
      </div>

      {/* Enhanced Background Pattern */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div ref={bgCircle1Ref} className="absolute left-1/4 top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-brand-azure/20 to-brand-sand/15 opacity-50" />
        <div ref={bgCircle2Ref} className="absolute right-1/4 bottom-20 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-brand-moss/20 to-brand-forest/15 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />
      </div>

      <div className="container relative z-20 px-4 sm:px-6">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 text-center sm:mb-20">
          <div ref={badgeRef} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-brand-azure" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-azure">
              {t('serviceTypes.badge')}
            </span>
          </div>
          <h2 className="mb-6 font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            {t('serviceTypes.subtitle')}{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-brand-azure to-brand-sand bg-clip-text text-transparent">
                {t('serviceTypes.title')}
              </span>
              <div ref={underlineRef} className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-brand-azure via-brand-sand to-transparent origin-left" />
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-semibold text-white/80">
            {t('serviceTypes.description')}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3 lg:gap-12">
          {serviceTypes.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="group relative"
            >
              {/* Glowing Background */}
              <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 transition-all duration-500 group-hover:opacity-40`} />

              <div className={`relative h-full overflow-hidden rounded-3xl border-2 border-white dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-xl transition-all duration-500 ${service.hoverGlow} group-hover:border-transparent group-hover:shadow-2xl`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.iconBg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                {/* Card Content */}
                <div className="relative p-8 sm:p-10">
                  {/* Icon Section */}
                  <div
                    ref={(el) => {
                      if (el) iconContainersRef.current[index] = el
                    }}
                    className="relative mx-auto mb-8 h-36 w-36"
                  >
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 shadow-inner" />

                    {/* Animated Ring */}
                    <div
                      ref={(el) => {
                        if (el) rotatingRingsRef.current[index] = el
                      }}
                      className={`absolute inset-2 rounded-full bg-gradient-to-br ${service.gradient} opacity-20`}
                    />

                    {/* Icon Container */}
                    <div className={`absolute inset-3 flex items-center justify-center rounded-full bg-gradient-to-br ${service.gradient} shadow-2xl ring-4 ring-white dark:ring-slate-800 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                      <service.icon className="h-14 w-14 text-white drop-shadow-lg" strokeWidth={2.5} />
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-60`} />
                  </div>

                  {/* Text Content */}
                  <div className="text-center">
                    <h3 className="mb-4 font-display text-2xl font-black text-brand-deep dark:text-foreground transition-colors duration-300 group-hover:text-brand-forest dark:group-hover:text-brand-azure sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-base font-semibold leading-relaxed text-brand-forest/70 dark:text-muted-foreground transition-colors duration-300 group-hover:text-brand-forest/90 dark:group-hover:text-muted-foreground/90 sm:text-lg">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <button
                      ref={(el) => {
                        if (el) buttonsRef.current[index] = el
                      }}
                      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${service.gradient} px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl`}
                    >
                      <span className="text-sm uppercase tracking-wide">{t('common.learnMore')}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
