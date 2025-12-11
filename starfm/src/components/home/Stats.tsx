import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Users2, BuildingIcon, Zap, TreesIcon, Wrench } from "lucide-react"
import { SparklesCore } from "@/components/ui/sparkles"

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

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Arabic Corporate Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/backgrounds/stats-bg.png"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Lighter gradient overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 dark:from-black/70 dark:via-black/50 dark:to-black/70" />
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
        <div ref={bgCircle1Ref} className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-blue-500/10 opacity-50" />
        <div ref={bgCircle2Ref} className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-brand-forest/10 opacity-50" />
      </div>

      <div className="container relative z-20 px-4 sm:px-6">
        <div ref={headerRef} className="mb-8 text-center sm:mb-12 relative">
          <p ref={subtitleRef} className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 sm:mb-3 sm:text-sm">
            {t('stats.reach')}
          </p>
          <h2 ref={titleRef} className="text-3xl text-white sm:text-4xl lg:text-5xl relative z-10">
            {t('stats.excellence')}
          </h2>
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
          <p ref={descriptionRef} className="mt-4 text-sm text-white/70 sm:text-base">
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
