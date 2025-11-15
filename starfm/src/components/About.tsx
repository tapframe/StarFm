import { motion } from "framer-motion"
import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals at your service"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuously evolving with your needs"
    },
    {
      icon: CheckCircle2,
      title: "Reliability",
      description: "Trusted by leading organizations"
    }
  ]

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-white via-brand-cream/20 to-brand-sand/30 py-20 sm:py-24 lg:py-32">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-brand-moss/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 backdrop-blur-sm"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-brand-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gold">
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 font-display text-4xl font-black leading-tight text-brand-deep sm:text-5xl lg:text-6xl"
            >
              Your Trusted Partner in
              <span className="block gradient-text mt-2">
                Facilities Excellence
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg leading-relaxed text-brand-forest/80">
                [Content will be added here - Company introduction and mission statement]
              </p>
              <p className="text-base leading-relaxed text-brand-forest/70">
                [Content will be added here - Brief history and values]
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 rounded-full bg-gradient-to-r from-brand-gold to-brand-sand px-8 py-4 font-bold uppercase tracking-wide text-brand-deep shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/40"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-brand-deep/10 bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:border-brand-gold/30 hover:shadow-xl"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-sand/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-brand-gold" strokeWidth={2} />
                    </div>
                    
                    <h3 className="mb-2 font-display text-xl font-bold text-brand-deep">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-brand-forest/70">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-gold/10 blur-2xl transition-all duration-300 group-hover:bg-brand-gold/20" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Bottom Stats or Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/10 via-white/50 to-brand-sand/10 backdrop-blur-xl p-8 sm:p-12"
        >
          <div className="text-center">
            <h3 className="mb-4 font-display text-2xl font-black text-brand-deep sm:text-3xl">
              [Additional Content Section]
            </h3>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-brand-forest/70">
              [Content will be added here - Additional information, certifications, or achievements]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
