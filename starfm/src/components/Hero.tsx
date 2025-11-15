import { Button } from "@/components/ui/button"
import { Users2, CalendarDays, BookOpenCheck } from "lucide-react"

const marqueeHighlights = ["Membership • Learning • Events"]

const heroMetrics = [
  { label: "Members", value: "1,000+", icon: Users2 },
  { label: "Training Courses", value: "150+", icon: BookOpenCheck },
  { label: "Events", value: "370+", icon: CalendarDays },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 right-0 h-64 w-64 rounded-full bg-brand-gold/30 blur-3xl" />
        <div className="absolute left-8 top-16 h-48 w-48 rounded-full bg-brand-forest/20 blur-3xl" />
      </div>

      <div className="container relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/75 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-sm">
            <span className="h-3 w-3 rounded-full bg-primary" />
            StarFM — What we do
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              We empower facilities management professionals
            </p>
            <h1 className="text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              StarFM connects members, training, and events to elevate FM standards
            </h1>
            <p className="max-w-2xl text-lg text-foreground/70">
              Join a community of FM leaders across the region — get access to training, events, research, and a members-only portal that helps you stay ahead.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {marqueeHighlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/85 px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 shadow-brand">
              Become a Member
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-brand-gold/50 bg-white/80 px-8 text-primary shadow-sm"
            >
              Learn More
            </Button>
          </div>

          <div className="grid gap-6 rounded-2xl border border-white/60 bg-white/80 p-6 shadow-card backdrop-blur-xl sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center gap-3 sm:justify-start">
                  <div className="rounded-full bg-white/25 p-2 text-primary">
                    <metric.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{metric.value}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{metric.label}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">{metric.label} that drive progress and professional growth.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-forest/15 via-transparent to-brand-gold/25" />
          <div className="relative flex h-full flex-col justify-between gap-8 p-10">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary/70">
                What StarFM provides
              </p>
              <h2 className="text-3xl leading-snug text-foreground">A professional network for facilities management</h2>
              <p className="text-foreground/70">
                We deliver certified training, networking events, industry benchmarking, and an exclusive portal for members to connect and upskill.
              </p>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/10 p-6 text-white shadow-card">
              <p className="text-xs uppercase tracking-[0.5em] text-white/70">Members</p>
              <p className="mt-2 text-2xl font-semibold">Access exclusive training & reports</p>
              <p className="mt-1 text-sm text-white/70">Join events, get research and unlock member-only content.</p>
              <ul className="mt-4 grid gap-2 text-white/75">
                <li>• Certified training programs</li>
                <li>• Regional networking & job board</li>
                <li>• Industry benchmarking & reports</li>
              </ul>
              <div className="mt-6 flex justify-end">
                <Button size="sm" className="rounded-full bg-white/10 px-4 text-white/90">
                  Join
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
