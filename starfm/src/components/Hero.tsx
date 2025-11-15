import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building2, ArrowRight, Sparkles, Home, Hotel, Trees, Wrench, Shield } from "lucide-react"

interface HeroProps {
  onServicesClick?: () => void
}

export function Hero({ onServicesClick }: HeroProps) {
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
                <span className="gradient-text">
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
                onClick={onServicesClick}
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
            {/* Enhanced glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/30 via-brand-sand/20 to-brand-moss/30 rounded-[2rem] blur-3xl opacity-70 -z-10 animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-br from-white/40 to-white/10 rounded-[1.75rem] blur-xl -z-10" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/30 bg-white/95 backdrop-blur-2xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.25)] min-h-[580px] flex flex-col">
              {/* Background Image with Modern Overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`bg-${currentSlide}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-[1.75rem] overflow-hidden"
                >
                  <img 
                    src={carouselSlides[currentSlide].bgImage}
                    alt={carouselSlides[currentSlide].title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/95 via-brand-forest/90 to-brand-moss/85 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Decorative mesh pattern */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }} />
                </motion.div>
              </AnimatePresence>

              <div className="relative z-10 flex-1 flex flex-col p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex-1 flex flex-col"
                  >
                    {/* Modern Header */}
                    <div className="mb-10">
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-3 mb-6"
                      >
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/30 backdrop-blur-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gold">Our Services</span>
                        </div>
                      </motion.div>
                      
                      <div className="flex items-start gap-5">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
                          className={`relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${carouselSlides[currentSlide].color} shadow-2xl ring-4 ring-white/30`}
                        >
                          <div className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur-sm" />
                          {(() => {
                            const Icon = carouselSlides[currentSlide].icon
                            return <Icon className="relative h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-lg" strokeWidth={2} />
                          })()}
                        </motion.div>
                        
                        <div className="flex-1">
                          <h2 className="font-display text-3xl sm:text-4xl text-white font-black leading-[1.1] mb-3 drop-shadow-lg">
                            {carouselSlides[currentSlide].title}
                          </h2>
                          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                            {carouselSlides[currentSlide].description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Modern Stats Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative rounded-2xl border border-brand-gold/40 bg-gradient-to-br from-brand-gold/25 via-brand-gold/15 to-transparent backdrop-blur-xl p-6 mb-8 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                      <div className="relative flex items-baseline gap-3">
                        <div className="font-display text-5xl sm:text-6xl font-black gradient-text drop-shadow-sm">
                          {carouselSlides[currentSlide].stats.value}
                        </div>
                        <div className="flex flex-col">
                          <div className="text-sm font-bold text-white/95 uppercase tracking-wide">
                            {carouselSlides[currentSlide].stats.label}
                          </div>
                          <div className="text-xs text-white/70 font-medium">and growing</div>
                        </div>
                      </div>
                      
                      {/* Decorative corner accent */}
                      <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand-gold/20 blur-2xl" />
                    </motion.div>

                    {/* Modern CTA Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full rounded-2xl bg-gradient-to-r from-brand-gold via-brand-sand to-brand-gold py-5 px-8 font-black text-brand-deep text-base shadow-[0_10px_40px_-15px_rgba(231,180,89,0.6)] transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(231,180,89,0.8)] uppercase tracking-wider overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Discover More
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="h-5 w-5" strokeWidth={3} />
                        </motion.div>
                      </span>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-brand-sand to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["0%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                      />
                    </motion.button>
                  </motion.div>
                </AnimatePresence>

                {/* Modern Carousel Indicators */}
                <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-white/10">
                  {carouselSlides.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`relative rounded-full transition-all duration-500 ${
                        index === currentSlide
                          ? "h-2.5 w-12 bg-brand-gold shadow-[0_0_20px_rgba(231,180,89,0.6)]"
                          : "h-2 w-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      {index === currentSlide && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 rounded-full bg-brand-gold"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
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