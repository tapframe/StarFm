import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTranslation } from "react-i18next"

const logos = [
    "03.png",
    "05.png",
    "07.png",
    "akn-logo-english.svg",
    "alalogo.png",
    "download.svg",
    "khan.png",
    "kooz-karak-logo.png",
]

export function BrandCarousel() {
    const { t } = useTranslation()
    const containerRef = useRef<HTMLDivElement>(null)

    // Fade in the whole section on scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

    return (
        <section
            ref={containerRef}
            className="w-full py-20 sm:py-24 overflow-hidden bg-background"
        >
            <motion.div
                style={{ opacity }}
                className="container mx-auto px-4 mb-16 text-center"
            >
                <h2 className="font-display text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
                    {t('brandCarousel.title')}
                    <span className="mt-2 block bg-gradient-to-r from-brand-azure to-brand-sand bg-clip-text text-transparent">
                        {t('brandCarousel.subtitle')}
                    </span>
                </h2>
            </motion.div>

            {/* Force LTR context for the entire marquee area */}
            <div
                className="relative overflow-hidden cursor-pointer marquee-container"
                dir="ltr"
            >
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                {/* Sliding Track - uses global CSS class for animation */}
                <div className="marquee-track">
                    {/* Quadruple the logos to ensure seamless infinite loop */}
                    {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                        <div
                            key={idx}
                            className="relative w-32 h-20 flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <img
                                src={`/company-logos/${logo}`}
                                alt="Company Logo"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
