import { motion } from "framer-motion"
import { Clock, Calendar, RotateCcw, ArrowRight } from "lucide-react"

export function ServiceTypes() {
  const serviceTypes = [
    {
      icon: Clock,
      title: "One-Time Services",
      description: "Enjoy consistent service and One-time bookings",
      gradient: "from-cyan-400 via-cyan-500 to-teal-600",
      iconBg: "from-cyan-500/20 to-teal-500/20",
      hoverGlow: "group-hover:shadow-cyan-500/30",
      delay: 0.1
    },
    {
      icon: Calendar,
      title: "Monthly Services",
      description: "Enjoy consistent service with multiple monthly visits",
      gradient: "from-emerald-400 via-green-500 to-emerald-600",
      iconBg: "from-emerald-500/20 to-green-500/20",
      hoverGlow: "group-hover:shadow-emerald-500/30",
      delay: 0.2
    },
    {
      icon: RotateCcw,
      title: "Yearly Services",
      description: "Enjoy consistent service through out the year",
      gradient: "from-blue-400 via-blue-500 to-cyan-600",
      iconBg: "from-blue-500/20 to-cyan-500/20",
      hoverGlow: "group-hover:shadow-blue-500/30",
      delay: 0.3
    }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-cream/10 to-white py-20 sm:py-24 lg:py-32">
      {/* Enhanced Background Pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-brand-gold/15 to-brand-sand/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-brand-moss/15 to-brand-forest/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />
      </div>

      <div className="container relative px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 backdrop-blur-sm"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Service Plans
            </span>
          </motion.div>
          <h2 className="mb-6 font-display text-4xl font-black leading-tight text-brand-deep sm:text-5xl lg:text-6xl">
            Experience exceptional{" "}
            <span className="relative inline-block">
                            <span className="gradient-text">
                Our Service Types
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-brand-gold via-brand-sand to-transparent origin-left"
              />
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-semibold text-brand-forest/70">
            delivered by our highly trained and trusted professionals
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3 lg:gap-12">
          {serviceTypes.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: service.delay, type: "spring", stiffness: 100 }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* Glowing Background */}
              <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-40`} />
              
              <div className={`relative h-full overflow-hidden rounded-3xl border-2 border-white bg-white/80 backdrop-blur-xl shadow-xl transition-all duration-500 ${service.hoverGlow} group-hover:border-transparent group-hover:shadow-2xl`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.iconBg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                {/* Card Content */}
                <div className="relative p-8 sm:p-10">
                  {/* Icon Section */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: service.delay + 0.2, type: "spring", stiffness: 120 }}
                    className="relative mx-auto mb-8 h-36 w-36"
                  >
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner" />
                    
                    {/* Animated Ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-2 rounded-full bg-gradient-to-br ${service.gradient} opacity-20`}
                    />
                    
                    {/* Icon Container */}
                    <div className={`absolute inset-3 flex items-center justify-center rounded-full bg-gradient-to-br ${service.gradient} shadow-2xl ring-4 ring-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                      <service.icon className="h-14 w-14 text-white drop-shadow-lg" strokeWidth={2.5} />
                    </div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60`} />
                  </motion.div>

                  {/* Text Content */}
                  <div className="text-center">
                    <h3 className="mb-4 font-display text-2xl font-black text-brand-deep transition-colors duration-300 group-hover:text-brand-forest sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-base font-semibold leading-relaxed text-brand-forest/70 transition-colors duration-300 group-hover:text-brand-forest/90 sm:text-lg">
                      {service.description}
                    </p>
                    
                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${service.gradient} px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl`}
                    >
                      <span className="text-sm uppercase tracking-wide">Learn More</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
