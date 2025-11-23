import { Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ManagementSupportProps {
  onContactClick?: () => void
}

interface Service {
  title: string
  description: string
  image: string
}

export function ManagementSupport({ onContactClick }: ManagementSupportProps) {
  const { t } = useTranslation()
  const headerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const element = headerRef.current
    if (!element) return

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(element, {
            backgroundPosition: `center ${self.progress * -100}px`
          })
        }
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  
  const services: Service[] = [
    {
      title: t('managementSupport.services.crFormation.title'),
      description: t('managementSupport.services.crFormation.description'),
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: t('managementSupport.services.qiwaPortal.title'),
      description: t('managementSupport.services.qiwaPortal.description'),
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: t('managementSupport.services.candidateSourcing.title'),
      description: t('managementSupport.services.candidateSourcing.description'),
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: t('managementSupport.services.muqeemServices.title'),
      description: t('managementSupport.services.muqeemServices.description'),
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: t('managementSupport.services.trainingPrograms.title'),
      description: t('managementSupport.services.trainingPrograms.description'),
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: t('managementSupport.services.vehicleRegistration.title'),
      description: t('managementSupport.services.vehicleRegistration.description'),
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: t('managementSupport.services.drivingLicense.title'),
      description: t('managementSupport.services.drivingLicense.description'),
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: t('managementSupport.services.globalVisa.title'),
      description: t('managementSupport.services.globalVisa.description'),
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: t('managementSupport.services.fleetServices.title'),
      description: t('managementSupport.services.fleetServices.description'),
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: t('managementSupport.services.adminSupport.title'),
      description: t('managementSupport.services.adminSupport.description'),
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: t('managementSupport.services.itSupport.title'),
      description: t('managementSupport.services.itSupport.description'),
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=720&h=480&fit=crop&auto=format"
    }
  ]

  return (
    <>
      {/* Header with Background Image */}
      <section 
        ref={headerRef}
        className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-24 lg:py-32"
        style={{
          backgroundImage: "url('https://w.wallhaven.cc/full/dp/wallhaven-dplwll.jpg')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm shadow-lg">
              <Sparkles className="h-4 w-4 text-white/80" />
              {t('managementSupport.badge')}
            </div>
            <h2 className="mb-6 font-display text-6xl font-black leading-[1.1] text-white lg:text-7xl tracking-tight drop-shadow-2xl">
              {t('managementSupport.title')}
            </h2>
            <p className="text-xl leading-relaxed text-white/95 font-light tracking-wide max-w-2xl mx-auto drop-shadow-lg">
              {t('managementSupport.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:px-6">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-0 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{t('managementSupport.serviceDesk')}</p>
                  <h3 className="text-xl font-bold text-brand-deep">{service.title}</h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{t('managementSupport.supportLabel')}</span>
                  <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{t('managementSupport.activeStatus')}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

                <div className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-slate-50 p-8 lg:p-12 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{t('managementSupport.readyToOffload')}</p>
              <h3 className="mt-3 text-3xl font-bold text-brand-deep">
                {t('managementSupport.handleHeavyLifting')}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {t('managementSupport.offloadDescription')}
              </p>
            </div>
            <button
              onClick={onContactClick}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 lg:mt-0"
            >
              {t('managementSupport.startDiscussion')}
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
