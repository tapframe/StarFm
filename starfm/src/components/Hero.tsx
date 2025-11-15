import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building2, ArrowRight, Sparkles, Home, Hotel, Trees, Wrench, Shield } from "lucide-react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselSlides = [
    {
      title: "Facilities Management",
      description: "Comprehensive management solutions for commercial and residential properties with 24/7 support.",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      stats: { value: "500+", label: "Properties Managed" },
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      title: "Home Solutions",
      description: "Professional cleaning, maintenance, and home care services for residential properties.",
      icon: Home,
      color: "from-emerald-500 to-teal-500",
      stats: { value: "1,000+", label: "Happy Homes" },
      bgImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
    },
    {
      title: "Hospitality Services",
      description: "Premium hospitality management for hotels, resorts, and commercial spaces.",
      icon: Hotel,
      color: "from-purple-500 to-pink-500",
      stats: { value: "50+", label: "Hotels Served" },
      bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
    },
    {
      title: "Landscaping & Gardens",
      description: "Expert landscape design, maintenance, and outdoor space management services.",
      icon: Trees,
      color: "from-green-500 to-emerald-500",
      stats: { value: "300+", label: "Gardens Maintained" },
      bgImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
    },
    {
      title: "Technical Services",
      description: "HVAC, electrical, plumbing, and technical maintenance by certified professionals.",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      stats: { value: "99.8%", label: "Uptime Rate" },
      bgImage: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
    },
    {
      title: "Pest Control",
      description: "Safe and effective pest management solutions for all property types.",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      stats: { value: "2,000+", label: "Treatments Done" },
      bgImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 6)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-forest to-brand-moss py-12 sm:py-16 lg:py-20">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-brand-gold/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-1/3 top-1/4 h-96 w-96 rounded-full bg-brand-moss/25 blur-3xl"
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container relative px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 w-fit"
            >
              <div className="flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1.5 backdrop-blur-sm">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex h-5 w-5 items-center justify-center"
                >
                  <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                </motion.div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  FM Services Provider
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6 font-display text-5xl leading-[1.1] font-black text-white sm:text-6xl lg:text-7xl tracking-tight"
            >
              Elevating
              <span className="relative block mt-2">
                <span className="bg-gradient-to-r from-brand-gold via-brand-sand to-brand-gold bg-clip-text text-transparent">
                  Facilities Management
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-sand to-transparent rounded-full origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-10 text-lg leading-relaxed text-brand-cream/90 sm:text-xl font-medium max-w-lg"
            >
              Expert facilities management solutions tailored to your needs. From commercial buildings to residential complexes, we deliver comprehensive services with professional excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-gold to-brand-sand px-8 py-3.5 text-brand-deep font-bold text-base shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/40 uppercase tracking-wide"
                onClick={() => {
                  const serviceSection = document.getElementById('services');
                  if (serviceSection) {
                    serviceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Our Services
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-sand to-brand-gold"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>

              <Button
                size="lg"
                className="group rounded-full border-2 border-brand-cream/50 bg-white/10 backdrop-blur-xl px-8 py-3.5 text-brand-cream font-bold text-base transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/20 hover:text-white hover:shadow-lg uppercase tracking-wide"
              >
                <span className="flex items-center justify-center gap-2">
                  Contact Us
                  <motion.span
                    className="text-lg"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>
            </motion.div>

            {/* Quick Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 flex items-center gap-8 border-t border-white/15 pt-10"
            >
              {[
                { value: "500+", label: "Facilities" },
                { value: "2,000+", label: "Clients" },
                { value: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="flex flex-col group"
                >
                  <span className="font-display text-3xl font-black text-brand-gold group-hover:text-brand-sand transition-colors">{stat.value}</span>
                  <span className="text-xs font-bold text-brand-cream/70 uppercase tracking-widest mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow effect behind panel */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-brand-moss/20 rounded-3xl blur-2xl opacity-60 -z-10" />

            <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl min-h-[500px] flex flex-col">
              {/* Background Image with Overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`bg-${currentSlide}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={carouselSlides[currentSlide].bgImage}
                    alt={carouselSlides[currentSlide].title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                </motion.div>
              </AnimatePresence>

              <div className="relative z-10 flex-1 flex flex-col p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="flex-1 flex flex-col"
                  >
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Our Services</span>
                      </div>
                      <div className="flex items-center gap-4 mb-3">
                        <motion.div
                          initial={{ scale: 0, rotate: 90, opacity: 0 }}
                          animate={{ scale: 1, rotate: 0, opacity: 1 }}
                          exit={{ scale: 0, rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                          className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${carouselSlides[currentSlide].color} shadow-lg ring-2 ring-white/20`}
                        >
                          {(() => {
                            const Icon = carouselSlides[currentSlide].icon
                            return <Icon className="h-7 w-7 text-white" />
                          })()}
                        </motion.div>
                        <h2 className="font-display text-2xl sm:text-3xl text-white font-black leading-tight">
                          {carouselSlides[currentSlide].title}
                        </h2>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base text-brand-cream/90 leading-relaxed mb-10 font-semibold">
                      {carouselSlides[currentSlide].description}
                    </p>

                    {/* Stats Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="rounded-xl border border-brand-gold/30 bg-gradient-to-br from-brand-gold/15 to-transparent p-7 backdrop-blur-lg shadow-xl mb-8"
                    >
                      <div className="flex items-end gap-3">
                        <div className="font-display text-4xl font-black text-brand-gold">
                          {carouselSlides[currentSlide].stats.value}
                        </div>
                        <div className="text-sm font-bold text-brand-cream/85 pb-1.5">
                          {carouselSlides[currentSlide].stats.label}
                        </div>
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ scale: 1.04, y: -3 }}
                      whileTap={{ scale: 0.96 }}
                      className="group w-full rounded-xl bg-gradient-to-r from-brand-gold via-brand-sand to-brand-gold py-4 px-6 font-black text-brand-deep text-base transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/50 relative overflow-hidden uppercase tracking-wide shadow-lg"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                        Learn More
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-sand to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Indicators */}
                <div className="flex items-center justify-center gap-2.5 mt-6">
                  {carouselSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === currentSlide
                          ? "w-10 bg-brand-gold shadow-lg shadow-brand-gold/50"
                          : "w-2 bg-brand-cream/30 hover:bg-brand-cream/60 hover:w-4"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}