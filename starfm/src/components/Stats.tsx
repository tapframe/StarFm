import { Card, CardContent } from "@/components/ui/card"
import {
  Award,
  BookOpenCheck,
  CalendarDays,
  FileText,
  Users2,
} from "lucide-react"

const stats = [
  {
    number: "1000+",
    label: "Members & Partners",
    description: "Growing regional collaboration",
    icon: Users2,
    gradient: "from-brand-forest/90 to-brand-moss/80",
  },
  {
    number: "370+",
    label: "Events",
    description: "Forums, summits & webinars",
    icon: CalendarDays,
    gradient: "from-brand-moss/90 to-brand-forest/70",
  },
  {
    number: "150+",
    label: "Training Courses",
    description: "Certified FM learning paths",
    icon: BookOpenCheck,
    gradient: "from-brand-forest/90 to-brand-gold/70",
  },
  {
    number: "2500+",
    label: "Trained Professionals",
    description: "Upskilled FM specialists",
    icon: Award,
    gradient: "from-brand-forest/95 to-brand-moss/75",
  },
  {
    number: "35+",
    label: "Industry Reports",
    description: "Insights & benchmarking",
    icon: FileText,
    gradient: "from-brand-moss/80 to-brand-gold/70",
  },
]

export function Stats() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="group relative overflow-hidden border-none bg-white/90 shadow-card backdrop-blur-xl"
            >
              <div
                className={`absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${stat.gradient}`}
              />
              <CardContent className="relative p-6 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <div className="rounded-2xl bg-white/20 p-3">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    StarFM
                  </span>
                </div>
                <p className="text-4xl font-semibold leading-none">{stat.number}</p>
                <p className="mt-3 text-lg font-medium">{stat.label}</p>
                <p className="mt-2 text-sm text-white/80">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
