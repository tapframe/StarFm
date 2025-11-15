import { Button } from "@/components/ui/button"
import { ArrowUpRight, Sparkles } from "lucide-react"

const marqueeHighlights = [
  "Gala Night • Dubai",
  "Live Broadcast Across MENA",
  "Celebrating 15 Years",
]

const heroMetrics = [
  { label: "Awards Presented", value: "24" },
  { label: "Highly Commended", value: "40" },
  { label: "Nominations", value: "320+" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 right-0 h-64 w-64 rounded-full bg-brand-gold/30 blur-3xl" />
        <div className="absolute left-8 top-16 h-48 w-48 rounded-full bg-brand-forest/20 blur-3xl" />
      </div>

      <div className="container relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-sm">
            <Sparkles className="h-4 w-4 text-brand-gold" />
            StarFM Awards 2025
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              Of Excellence in FM 2025
            </p>
            <h1 className="text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Congratulations to the Winners & Highly Commended
            </h1>
            <p className="max-w-2xl text-lg text-foreground/70">
              The StarFM Awards spotlight the most impactful facilities management projects across the Middle East—uniting leaders, innovators, and partners committed to elevating the built environment.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {marqueeHighlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 shadow-brand">
              View Winners
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-brand-gold/50 bg-white/80 px-8 text-primary shadow-sm"
            >
              Learn More
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-6 rounded-2xl border border-white/60 bg-white/80 p-6 shadow-card backdrop-blur-xl sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="space-y-1 text-center sm:text-left">
                <p className="text-3xl font-semibold text-primary">{metric.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-forest/15 via-transparent to-brand-gold/25" />
          <div className="relative flex h-full flex-col justify-between gap-8 p-10">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-primary/70">
                Ceremony Highlight
              </p>
              <h2 className="text-3xl leading-snug text-foreground">
                Elevating Facilities Management standards with every accolade.
              </h2>
              <p className="text-foreground/70">
                Witness the region’s leading FM teams and partners gather for an evening of recognition, collaboration, and future-ready insights.
              </p>
            </div>

            <div className="rounded-2xl border border-white/50 bg-gradient-to-br from-brand-forest/90 to-brand-moss/80 p-6 text-white shadow-card">
              <p className="text-xs uppercase tracking-[0.5em] text-white/70">Spotlight</p>
              <p className="mt-2 text-2xl font-semibold">2025 Awards • Dubai Opera</p>
              <p className="mt-1 text-sm text-white/70">Streaming live to 15+ countries</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Keynote</p>
                  <p className="text-lg font-semibold">Future of FM</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Hosts</p>
                  <p className="text-lg font-semibold">Regional FM Board</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
