import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"

interface ContactProps {
  onBack: () => void
}

export function Contact({ onBack }: ContactProps) {
  const { t } = useTranslation()
  const pageRef = useRef<HTMLDivElement>(null)
  const pageHeaderRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const contactCardsRef = useRef<HTMLDivElement[]>([])
  const formRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const buttonHoverRef = useRef<HTMLDivElement>(null)

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      details: ["00966 547770046"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: ["Info@mahhab.com"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: t('contact.location'),
      details: [t('contact.locationText')],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Clock,
      title: t('contact.workingHours'),
      details: [
        t('contact.workingHoursDetails.weekdays'),
        t('contact.workingHoursDetails.saturday'),
        t('contact.workingHoursDetails.friday')
      ],
      color: "from-orange-500 to-red-500"
    }
  ]

  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo({ top: 0, behavior: "instant" })

    // Page fade in
    if (pageRef.current) {
      gsap.fromTo(pageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
    }


    // Page header animations
    if (pageHeaderRef.current) {
      gsap.fromTo(pageHeaderRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )
    }

    if (badgeRef.current) {
      gsap.fromTo(badgeRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.2 }
      )
    }

    // Contact cards animations
    contactCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.4 + index * 0.1
          }
        )

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -5, scale: 1.02, duration: 0.3 })
        })
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.3 })
        })
      }
    })

    // Form animation
    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.3 }
      )
    }

    // Map animation
    if (mapRef.current) {
      gsap.fromTo(mapRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.8 }
      )
    }

    // Button hover effect
    const submitButton = document.querySelector('.submit-button')
    if (submitButton && buttonHoverRef.current) {
      gsap.set(buttonHoverRef.current, { x: "-100%" })
      submitButton.addEventListener("mouseenter", () => {
        gsap.to(buttonHoverRef.current, { x: 0, duration: 0.3 })
      })
      submitButton.addEventListener("mouseleave", () => {
        gsap.to(buttonHoverRef.current, { x: "-100%", duration: 0.3 })
      })
    }

    return () => {
      contactCardsRef.current.forEach(card => {
        if (card) {
          card.removeEventListener("mouseenter", () => { })
          card.removeEventListener("mouseleave", () => { })
        }
      })
    }
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-white via-brand-cream/20 to-blue-400/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-blue-500/10 opacity-50" />
        <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-brand-moss/10 opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Navbar */}
      <Navbar isPageView={true} onBack={onBack} />

      {/* Main Content */}
      <div className="container relative mx-auto px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24">
        {/* Page Header */}
        <div ref={pageHeaderRef} className="mb-16 text-center">
          <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 dark:bg-blue-500/20 px-4 py-2 bg-opacity-50">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
              {t('contact.badge')}
            </span>
          </div>

          <h1 className="mb-6 font-display text-5xl font-black leading-tight text-brand-deep dark:text-foreground sm:text-6xl lg:text-7xl">
            {t('contact.title')}
            <span className="block gradient-text mt-2">
              {t('contact.subtitle')}
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-forest/70 dark:text-muted-foreground">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) contactCardsRef.current[index] = el
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-brand-deep/10 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 p-6 shadow-lg transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${info.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-3 font-display text-xl font-bold text-brand-deep dark:text-foreground">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm font-medium leading-relaxed text-brand-forest/70 dark:text-muted-foreground/80">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-500/10 opacity-50 transition-all duration-300 group-hover:bg-blue-500/20" />
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-azure/20 to-brand-moss/20 rounded-3xl opacity-60 -z-10" />

            <div className="relative overflow-hidden rounded-3xl border border-brand-azure/20 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 p-8 shadow-2xl sm:p-10">
              <h3 className="mb-6 font-display text-3xl font-black text-brand-deep dark:text-foreground">
                {t('contact.form.title')}
              </h3>

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-brand-deep dark:text-foreground">
                      {t('contact.form.firstName')} {t('contact.form.required')}
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full rounded-xl border-2 border-brand-deep/10 dark:border-white/10 bg-white dark:bg-slate-800 px-4 py-3 text-brand-deep dark:text-white transition-all duration-300 placeholder:text-brand-forest/40 dark:placeholder:text-slate-500 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-brand-deep">
                      {t('contact.form.lastName')} {t('contact.form.required')}
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-xl border-2 border-brand-deep/10 dark:border-white/10 bg-white dark:bg-slate-800 px-4 py-3 text-brand-deep dark:text-white transition-all duration-300 placeholder:text-brand-forest/40 dark:placeholder:text-slate-500 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-brand-deep dark:text-foreground">
                    {t('contact.form.email')} {t('contact.form.required')}
                  </label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full rounded-xl border-2 border-brand-deep/10 dark:border-white/10 bg-white dark:bg-slate-800 px-4 py-3 text-brand-deep dark:text-white transition-all duration-300 placeholder:text-brand-forest/40 dark:placeholder:text-slate-500 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-brand-deep dark:text-foreground">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    placeholder="+XXX XXX XXXX"
                    className="w-full rounded-xl border-2 border-brand-deep/10 dark:border-white/10 bg-white dark:bg-slate-800 px-4 py-3 text-brand-deep dark:text-white transition-all duration-300 placeholder:text-brand-forest/40 dark:placeholder:text-slate-500 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-brand-deep dark:text-foreground">
                    {t('contact.form.serviceInterest')}
                  </label>
                  <select className="w-full rounded-xl border-2 border-brand-deep/10 dark:border-white/10 bg-white dark:bg-slate-800 px-4 py-3 text-brand-deep dark:text-white transition-all duration-300 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10">
                    <option value="facilitiesManagement">{t('contact.form.serviceOptions.facilitiesManagement')}</option>
                    <option value="homeSolutions">{t('contact.form.serviceOptions.homeSolutions')}</option>
                    <option value="hospitalityServices">{t('contact.form.serviceOptions.hospitalityServices')}</option>
                    <option value="technicalServices">{t('contact.form.serviceOptions.technicalServices')}</option>
                    <option value="pestControl">{t('contact.form.serviceOptions.pestControl')}</option>
                    <option value="other">{t('contact.form.serviceOptions.other')}</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-brand-deep dark:text-foreground">
                    {t('contact.form.message')} {t('contact.form.required')}
                  </label>
                  <textarea
                    rows={5}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full rounded-xl border-2 border-brand-deep/10 dark:border-white/10 bg-white dark:bg-slate-800 px-4 py-3 text-brand-deep dark:text-white transition-all duration-300 placeholder:text-brand-forest/40 dark:placeholder:text-slate-500 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="submit-button group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 py-6 font-black uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t('contact.form.submit')}
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div ref={buttonHoverRef} className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </form>

              {/* Decorative elements */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 opacity-50" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-brand-moss/20 opacity-50" />
            </div>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div ref={mapRef} className="mt-16 overflow-hidden rounded-3xl border border-blue-500/20 dark:border-blue-500/10 bg-gradient-to-br from-blue-500/10 via-white/50 to-blue-400/10 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 shadow-2xl">
          <div className="flex h-96 items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-16 w-16 text-blue-500" strokeWidth={1.5} />
              <h3 className="mb-2 font-display text-2xl font-bold text-brand-deep dark:text-foreground">
                {t('contact.map.title')}
              </h3>
              <p className="text-sm text-brand-forest/70 dark:text-muted-foreground">
                {t('contact.map.placeholder')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
