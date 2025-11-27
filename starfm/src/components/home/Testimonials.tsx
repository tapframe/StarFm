import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Quote, Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function Testimonials() {
    const { t, i18n } = useTranslation()
    const sectionRef = useRef<HTMLElement>(null)
    const badgeRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)

    const testimonials = [
        {
            name: t('testimonials.items.0.name'),
            role: t('testimonials.items.0.role'),
            content: t('testimonials.items.0.content'),
            rating: 5
        },
        {
            name: t('testimonials.items.1.name'),
            role: t('testimonials.items.1.role'),
            content: t('testimonials.items.1.content'),
            rating: 5
        },
        {
            name: t('testimonials.items.2.name'),
            role: t('testimonials.items.2.role'),
            content: t('testimonials.items.2.content'),
            rating: 5
        },
        {
            name: t('testimonials.items.3.name'),
            role: t('testimonials.items.3.role'),
            content: t('testimonials.items.3.content'),
            rating: 5
        },
        {
            name: t('testimonials.items.4.name'),
            role: t('testimonials.items.4.role'),
            content: t('testimonials.items.4.content'),
            rating: 5
        },
        {
            name: t('testimonials.items.5.name'),
            role: t('testimonials.items.5.role'),
            content: t('testimonials.items.5.content'),
            rating: 5
        }
    ]

    // Duplicate testimonials for seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials]

    useEffect(() => {
        // Badge reveal
        if (badgeRef.current) {
            ScrollTrigger.create({
                trigger: badgeRef.current,
                start: "top 80%",
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

        // Title fade
        if (titleRef.current) {
            ScrollTrigger.create({
                trigger: titleRef.current,
                start: "top 80%",
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

        // Subtitle fade
        if (subtitleRef.current) {
            ScrollTrigger.create({
                trigger: subtitleRef.current,
                start: "top 80%",
                onEnter: () => {
                    gsap.to(subtitleRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        delay: 0.15,
                        ease: "power2.out",
                        force3D: true
                    })
                },
                markers: false
            })
            gsap.set(subtitleRef.current, { opacity: 0, y: 20 })
        }

        // Infinite scroll animation
        if (carouselRef.current) {
            const carousel = carouselRef.current
            const cardWidth = 384 // w-96 = 384px
            const gap = 32 // gap-8 = 32px
            const singleSetWidth = (cardWidth + gap) * testimonials.length
            const isRTL = i18n.language === 'ar'

            // Kill any existing animation
            gsap.killTweensOf(carousel)

            // Create infinite loop animation
            // In RTL (Arabic), we move in positive x direction; in LTR (English), negative
            const animation = gsap.fromTo(
                carousel,
                { x: 0 },
                {
                    x: isRTL ? singleSetWidth : -singleSetWidth,
                    duration: 40,
                    ease: "none",
                    repeat: -1,
                    onRepeat: () => {
                        // Reset to start position for seamless loop
                        gsap.set(carousel, { x: 0 })
                    }
                }
            )

            // Pause/resume on hover
            const handleMouseEnter = () => {
                animation.pause()
            }

            const handleMouseLeave = () => {
                animation.play()
            }

            carousel.addEventListener('mouseenter', handleMouseEnter)
            carousel.addEventListener('mouseleave', handleMouseLeave)

            return () => {
                carousel.removeEventListener('mouseenter', handleMouseEnter)
                carousel.removeEventListener('mouseleave', handleMouseLeave)
                animation.kill()
            }
        }

        const section = sectionRef.current

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars?.trigger === section) {
                    trigger.kill()
                }
            })
        }
    }, [i18n.language])

    return (
        <section ref={sectionRef} className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-background">
            <div className="container relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
                    <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full bg-brand-azure/5 dark:bg-brand-azure/10 px-4 py-2 mb-6">
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-azure" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-azure">
                            {t('testimonials.badge')}
                        </span>
                    </div>

                    <h2 ref={titleRef} className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl mb-6">
                        {t('testimonials.title')}
                        <span className="mt-2 block bg-gradient-to-r from-brand-azure to-brand-sand bg-clip-text text-transparent">
                            {t('testimonials.titleHighlight')}
                        </span>
                    </h2>

                    <p ref={subtitleRef} className="text-lg leading-relaxed text-muted-foreground">
                        {t('testimonials.subtitle')}
                    </p>
                </div>
            </div>

            {/* Infinite Carousel */}
            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        ref={carouselRef}
                        className="flex gap-8"
                        style={{ width: 'fit-content' }}
                    >
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="group relative w-96 flex-shrink-0 rounded-2xl border border-brand-deep/5 dark:border-white/10 bg-gradient-to-br from-white via-white to-brand-sand/5 dark:from-slate-900 dark:via-slate-900 dark:to-brand-azure/5 p-6 shadow-sm transition-all duration-300 hover:border-brand-azure/20 hover:shadow-lg backdrop-blur-sm"
                            >
                                {/* Quote Icon */}
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-azure/10 transition-all duration-300 group-hover:bg-brand-azure/15 group-hover:scale-110">
                                    <Quote className="h-5 w-5 text-brand-azure" strokeWidth={2} />
                                </div>

                                {/* Rating */}
                                <div className="mb-3 flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-3.5 w-3.5 fill-brand-azure text-brand-azure"
                                            strokeWidth={0}
                                        />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                                    "{testimonial.content}"
                                </p>

                                {/* Divider */}
                                <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-brand-azure/20 to-transparent" />

                                {/* Author Info */}
                                <div className="space-y-0.5">
                                    <h4 className="font-display text-base font-semibold text-card-foreground">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                        {testimonial.role}
                                    </p>
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute -right-px -top-px h-16 w-16 rounded-bl-2xl rounded-tr-2xl bg-gradient-to-br from-brand-azure/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gradient overlays for fade effect */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent" />
            </div>
        </section>
    )
}
