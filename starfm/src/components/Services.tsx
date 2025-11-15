import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

const services = [
  {
    title: "Facilities Management",
    description:
      "Comprehensive FM solutions for commercial buildings, retail spaces, and corporate headquarters. We optimize operations, reduce costs, and ensure peak performance.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    features: ["24/7 Operations", "Energy Optimization", "Compliance Management"],
  },
  {
    title: "Integrated Home Solutions",
    description:
      "Premium maintenance programs designed exclusively for private homes, villas, and residential complexes with specialized preventive care.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    features: ["Preventive Maintenance", "Smart Home Integration", "Concierge Service"],
  },
  {
    title: "Hospitality Services",
    description:
      "Tailored FM services for hotels, resorts, and hospitality venues ensuring guest satisfaction and operational excellence.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    features: ["Guest Experience", "Property Upkeep", "Event Support"],
  },
  {
    title: "Landscaping & Garden",
    description:
      "Professional agriculture and green area maintenance for hotels, offices, commercial centers, and private estates across the region.",
    icon: Trees,
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
    features: ["Seasonal Care", "Irrigation Systems", "Pest Management"],
  },
  {
    title: "Technical Services",
    description:
      "Expert technical maintenance covering HVAC, electrical, plumbing, and mechanical systems with certified engineers.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
    features: ["HVAC Systems", "Emergency Response", "Preventive Checks"],
  },
]

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = services.length - 1
      if (nextIndex >= services.length) nextIndex = 0
      return nextIndex
    })
  }

  const currentService = services[currentIndex]

  return (
    <section id="services" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-20 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl" />
        <div className="absolute -right-10 bottom-20 h-72 w-72 rounded-full bg-brand-forest/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-moss/10 blur-3xl" />
      </div>

      <div className="container relative px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 inline-block"
          >
            <span className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold backdrop-blur-sm">
              What We Offer
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto max-w-2xl text-base text-foreground/70 sm:text-lg"
          >
            Comprehensive facilities management solutions tailored to elevate your operations
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative mx-auto max-w-6xl">
            <div className="relative h-[550px] sm:h-[500px] lg:h-[500px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1)
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1)
                    }
                  }}
                  className="absolute w-full"
                >
                <Card className="group relative overflow-hidden border border-white/10 bg-white/95 shadow-2xl backdrop-blur-xl">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-forest/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* Image Section */}
                    <div className="relative h-[240px] overflow-hidden sm:h-[280px] lg:h-[500px]">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={currentService.image}
                          alt={currentService.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/60 via-brand-forest/20 to-transparent" />
                      </motion.div>

                      {/* Icon Badge */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="absolute left-4 top-4 sm:left-6 sm:top-6"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 shadow-lg backdrop-blur-xl sm:h-16 sm:w-16 sm:rounded-2xl">
                          <currentService.icon className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
                        </div>
                      </motion.div>

                      {/* Index Badge */}
                      <div className="absolute bottom-4 right-4 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-xl sm:bottom-6 sm:right-6 sm:px-4 sm:py-2">
                        <span className="text-xs font-semibold text-white sm:text-sm">
                          {String(currentIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent className="flex flex-col justify-center gap-4 p-6 sm:gap-6 sm:p-8 lg:p-12">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="mb-2 text-xl text-foreground sm:text-2xl sm:mb-3 lg:text-3xl">
                          {currentService.title}
                        </h3>
                        <p className="text-sm text-foreground/70 sm:text-base">
                          {currentService.description}
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-2 sm:space-y-3"
                      >
                        {currentService.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className="flex items-center gap-2 sm:gap-3"
                          >
                            <div className="flex h-1.5 w-1.5 rounded-full bg-primary sm:h-2 sm:w-2" />
                            <span className="text-xs font-medium text-foreground/80 sm:text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Button className="group w-full rounded-full bg-gradient-to-r from-primary to-brand-forest px-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto sm:px-6">
                          Learn More
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-forest/20 bg-white shadow-lg backdrop-blur-xl transition-all hover:border-brand-gold hover:bg-brand-gold/10 hover:shadow-xl"
              aria-label="Previous service"
            >
              <ChevronLeft className="h-5 w-5 text-brand-forest" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {services.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1)
                    setCurrentIndex(idx)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-brand-gold"
                      : "w-2 bg-brand-forest/30 hover:bg-brand-gold/50"
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to service ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-forest/20 bg-white shadow-lg backdrop-blur-xl transition-all hover:border-brand-gold hover:bg-brand-gold/10 hover:shadow-xl"
              aria-label="Next service"
            >
              <ChevronRight className="h-5 w-5 text-brand-forest" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
