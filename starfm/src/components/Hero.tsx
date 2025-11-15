import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building2, Users2, Zap, ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  const heroMetrics = [
    { icon: Building2, value: "500+", label: "Facilities Managed", color: "from-blue-500 to-cyan-500" },
    { icon: Users2, value: "2,000+", label: "Satisfied Clients", color: "from-emerald-500 to-teal-500" },
    { icon: Zap, value: "99.8%", label: "Service Uptime", color: "from-purple-500 to-pink-500" },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-forest to-brand-moss py-16 sm:py-20 lg:py-28">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-brand-gold/25 blur-3xl sm:h-96 sm:w-96"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-1/3 top-1/4 h-72 w-72 rounded-full bg-brand-moss/20 blur-3xl sm:h-96 sm:w-96"
        />
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
              className="mb-6 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Elevating
              <span className="relative block">
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
              className="mb-8 text-base leading-relaxed text-brand-cream/85 sm:text-lg"
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
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-gold to-brand-sand px-7 py-3 text-brand-deep font-semibold shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/30"
              >
                <span className="relative z-10 flex items-center justify-center">
                  View Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                className="group rounded-full border-2 border-brand-cream/40 bg-white/5 backdrop-blur-xl px-7 py-3 text-brand-cream font-semibold transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/15 hover:text-white hover:shadow-lg"
              >
                <span className="flex items-center justify-center">
                  Contact Us
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
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
              className="mt-10 flex items-center gap-6 border-t border-white/10 pt-8"
            >
              {[
                { value: "500+", label: "Facilities" },
                { value: "2,000+", label: "Clients" },
                { value: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col"
                >
                  <span className="font-display text-2xl font-bold text-brand-gold">{stat.value}</span>
                  <span className="text-xs text-brand-cream/60 uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Glass Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow effect behind panel */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-brand-moss/20 rounded-3xl blur-2xl opacity-60 -z-10" />

            <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
              {/* Inner gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent rounded-3xl" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -z-10" />

              <motion.div className="relative z-10">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Services</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-white">
                    Our Core
                    <span className="block bg-gradient-to-r from-brand-gold to-brand-sand bg-clip-text text-transparent">
                      Service Areas
                    </span>
                  </h2>
                </motion.div>

                {/* Metrics Cards */}
                <div className="space-y-4">
                  {heroMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      whileHover={{ translateX: 4 }}
                      className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-gold/30 hover:bg-white/10 hover:shadow-xl"
                    >
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`flex shrink-0 h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${metric.color} shadow-lg`}
                      >
                        <metric.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="font-display text-lg sm:text-xl font-bold text-white">
                          {metric.value}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-brand-cream/70">
                          {metric.label}
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="text-brand-gold/60"
                      >
                        →
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full rounded-xl bg-gradient-to-r from-brand-gold to-brand-sand py-3 font-semibold text-brand-deep transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/30"
                >
                  Browse Services
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}