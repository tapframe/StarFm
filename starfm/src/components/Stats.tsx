import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users2, BuildingIcon, Zap, TreesIcon, Wrench } from "lucide-react"

export function Stats() {
  const stats = [
    { icon: BuildingIcon, value: "500+", label: "Facilities Managed" },
    { icon: Users2, value: "2,000+", label: "Satisfied Clients" },
    { icon: Zap, value: "99.8%", label: "Service Uptime" },
    { icon: TreesIcon, value: "1000+", label: "Green Initiatives" },
    { icon: Wrench, value: "24/7", label: "Technical Support" },
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-brand-gold/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-brand-forest/5 blur-3xl" />
      </div>
      
      <div className="container relative px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 text-center sm:mb-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:mb-3 sm:text-sm"
          >
            Our Reach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl text-foreground sm:text-4xl lg:text-5xl"
          >
            Service Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-sm text-foreground/70 sm:text-base"
          >
            StarFM delivers comprehensive facilities management across diverse sectors
          </motion.p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <Card className="group relative overflow-hidden border border-white/5 bg-gradient-to-br from-brand-forest/80 to-brand-moss/70 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-gold/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="relative flex flex-col items-center gap-3 p-6 text-center sm:gap-4 sm:p-8">
                  <motion.div 
                    className="rounded-xl bg-white/15 p-3 backdrop-blur-sm ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25 group-hover:ring-brand-gold/30 sm:rounded-2xl sm:p-4"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                  </motion.div>
                  <div>
                    <div className="mb-1 font-display text-3xl font-bold text-white sm:mb-2 sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wider text-white/80 sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
