import { Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"
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
      title: "CR Formation & Renewal",
      description:
        "Complete commercial registration services including formation, amendments, and timely renewals.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: "Qiwa Portal Services",
      description:
        "Full management of Qiwa platform services for labor compliance and workforce management.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: "Candidate Sourcing",
      description:
        "Professional sourcing and shortlisting of qualified candidates from our active database.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: "Muqeem Services",
      description:
        "Comprehensive Muqeem portal services for visa processing, residency permits, and renewals.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: "Training Programs",
      description:
        "Onboarding and training programs designed specifically for new employees and team members.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: "Vehicle Registration",
      description:
        "Complete vehicle registration and annual renewal services for corporate and employee vehicles.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: "Driving License Services",
      description:
        "Driving license issuance, renewal, and related services for your employees.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: "Global Visa Applications",
      description:
        "Visa application services for Europe, UK, US, GCC, and other international destinations.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: "Fleet Services",
      description:
        "Comprehensive fleet management including maintenance, tracking, and operational support.",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: "Admin Support",
      description:
        "Full administrative support services to streamline your business operations and workflows.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=720&h=480&fit=crop&auto=format"
    },
    {
      title: "IT Support",
      description:
        "Professional IT support services including setup, maintenance, and technical assistance.",
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
          backgroundImage: "url('https://w.wallhaven.cc/full/2y/wallhaven-2yzj9x.png')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm shadow-lg">
              <Sparkles className="h-4 w-4 text-white/80" />
              HR & Management Services
            </div>
            <h2 className="mb-6 font-display text-6xl font-black leading-[1.1] text-white lg:text-7xl tracking-tight drop-shadow-2xl">
              Give it to us.
            </h2>
            <p className="text-xl leading-relaxed text-white/95 font-light tracking-wide max-w-2xl mx-auto drop-shadow-lg">
              From CR formation to global visa applications, we handle all your HR and administrative needs. Focus on growing your business while we manage Qiwa, Muqeem, fleet services, training, and complete operational support.
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
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Service Desk</p>
                  <h3 className="text-xl font-bold text-brand-deep">{service.title}</h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">24/7 Support</span>
                  <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Active</span>
                </div>
              </div>
            </article>
          ))}
        </div>

                <div className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-slate-50 p-8 lg:p-12 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Ready to offload?</p>
              <h3 className="mt-3 text-3xl font-bold text-brand-deep">
                Let's handle the heavy lifting.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                We co-author governance plans, run execution pods, and deliver weekly KPI reviews with live dashboards. You get predictability. We get accountability.
              </p>
            </div>
            <button
              onClick={onContactClick}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 lg:mt-0"
            >
              Start Discussion
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
