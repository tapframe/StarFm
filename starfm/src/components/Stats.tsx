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
    <section className="relative py-12 sm:py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-12"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:mb-3 sm:text-sm">
            Our Reach
          </p>
          <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">Service Excellence</h2>
          <p className="mt-4 text-sm text-foreground/70 sm:text-base">StarFM delivers comprehensive facilities management across diverse sectors</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-none bg-gradient-to-br from-brand-forest/90 to-brand-moss/80 shadow-card transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="flex flex-col items-center gap-3 p-6 text-center sm:gap-4 sm:p-8">
                  <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 sm:rounded-2xl sm:p-4">
                    <stat.icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                  </div>
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
