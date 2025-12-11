import { useState, useRef } from "react"
import { useTranslation } from "react-i18next"
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
import { SparklesCore } from "@/components/ui/sparkles"

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
      image: "https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?w=800&q=80",
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

  const sectionRef = useRef<HTMLElement>(null)

  // Removed unused refs

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = services.length - 1
      if (nextIndex >= services.length) nextIndex = 0
      return nextIndex
    })
  }

  const currentService = services[currentIndex]

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-20 h-72 w-72 rounded-full bg-blue-500/15 opacity-50" />
        <div className="absolute -right-10 bottom-20 h-72 w-72 rounded-full bg-brand-forest/15 opacity-50" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-moss/10 opacity-50" />
      </div>

      <div className="container relative px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16 relative">
          <div className="mb-4 inline-block">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 dark:bg-blue-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-opacity-50">
              {t('services.sectionBadge')}
            </span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl relative z-10">
            {t('services.sectionTitle')}
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
          <p className="mx-auto max-w-2xl text-base text-foreground/70 sm:text-lg">
            {t('services.sectionDescription')}
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative mx-auto max-w-6xl">
            <div className="relative h-[550px] sm:h-[500px] lg:h-[500px]">
              <div
                className="absolute w-full"
              >
                <Card className="group relative overflow-hidden border border-white/10 bg-white/95 dark:bg-slate-900/95 shadow-2xl">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-azure/5 via-transparent to-brand-forest/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* Image Section */}
                    <div className="relative h-[240px] overflow-hidden sm:h-[280px] lg:h-[500px]">
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
                      <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 dark:bg-slate-800/90 shadow-lg sm:h-16 w-16 sm:w-16 sm:rounded-2xl">
                          <currentService.icon className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
                        </div>
                      </div>

                      {/* Index Badge */}
                      <div className="absolute bottom-4 right-4 rounded-full bg-white/20 dark:bg-black/40 px-3 py-1.5 bg-opacity-50 sm:bottom-6 sm:right-6 sm:px-4 sm:py-2">
                        <span className="text-xs font-semibold text-white sm:text-sm">
                          {String(currentIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent className="flex flex-col justify-center gap-4 p-6 sm:gap-6 sm:p-8 lg:p-12">
                      <div>
                        <h3 className="mb-2 text-xl text-foreground sm:text-2xl sm:mb-3 lg:text-3xl">
                          {currentService.title}
                        </h3>
                        <p className="text-sm text-foreground/70 sm:text-base">
                          {currentService.description}
                        </p>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
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
                        <Button onClick={onServicesPageClick} className="group w-full rounded-full bg-gradient-to-r from-primary to-brand-forest px-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto sm:px-6">
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
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-forest/20 bg-white dark:bg-slate-800 dark:border-slate-700 shadow-lg transition-all hover:border-brand-azure hover:bg-brand-azure/10 hover:shadow-xl"
              aria-label="Previous service"
            >
              <ChevronLeft className="h-5 w-5 text-brand-forest" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                    ? "w-8 bg-brand-azure"
                    : "w-2 bg-brand-forest/30 hover:bg-brand-azure/50"
                    }`}
                  aria-label={`Go to service ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-forest/20 bg-white dark:bg-slate-800 dark:border-slate-700 shadow-lg transition-all hover:border-brand-azure hover:bg-brand-azure/10 hover:shadow-xl"
              aria-label="Next service"
            >
              <ChevronRight className="h-5 w-5 text-brand-forest" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
