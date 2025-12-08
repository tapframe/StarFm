import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useAnimationFrame, useMotionValue } from "framer-motion"

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
    const containerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    // Fade in the whole section on scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

    // Animation logic
    const baseVelocity = -0.03 // Normal speed (slower)
    const hoverVelocity = -0.01 // Slow speed (on hover)
    const x = useMotionValue(0)

    // Calculate width dependent on number of logos
    // We'll wrap at -50% (half the total width of duplicated list)

    useAnimationFrame((_, delta) => {
        const targetVelocity = isHovered ? hoverVelocity : baseVelocity
        let moveBy = targetVelocity * (delta / 16) // Normalize to roughly 60fps

        // Apply movement
        const currentX = x.get()
        let newX = currentX + moveBy

        // Wrap logic: assuming the track is long enough, and we want to loop every 50%
        // We can't easily use % on percentage strings in motion value.
        // Better to use pixels if possible, but responsive is tricky.

        // Alternative: Use CSS variables for speed? 
        // No, framer motion is better.

        // Let's rely on standard motion value x as percentage.
        // Range -50 to 0.
        if (newX <= -50) {
            newX = 0
        }
        x.set(newX)
    })

    // Convert motion value number to percentage string
    const xPercent = useTransform(x, value => `${value}%`)

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
                    Trusted by Industry Leaders
                    <span className="mt-2 block bg-gradient-to-r from-brand-azure to-brand-sand bg-clip-text text-transparent">
                        Our Partners
                    </span>
                </h2>
            </motion.div>

            <div
                className="relative flex overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                {/* Sliding Tracks */}
                <motion.div
                    className="flex gap-16 pr-16"
                    style={{ x: xPercent, width: "fit-content" }}
                >
                    {/* Double the logos to create seamless loop */}
                    {[...logos, ...logos].map((logo, idx) => (
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
                </motion.div>
            </div>
        </section>
    )
}
