import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowLeft, Building2, Home, Hotel, Trees, Wrench, Shield, CheckCircle2, ArrowRight, Star, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServicesPageProps {
  onBack: () => void
  onContactClick: () => void
}

export function ServicesPage({ onBack, onContactClick }: ServicesPageProps) {
  const services = [
    {
      icon: Building2,
      title: "Facilities Management",
      description: "Comprehensive FM solutions for commercial buildings, retail spaces, and corporate headquarters. We optimize operations, reduce costs, and ensure peak performance.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      color: "from-blue-500 to-cyan-500",
      features: [
        "24/7 Operations & Monitoring",
        "Energy Optimization & Sustainability",
        "Compliance & Safety Management",
        "Preventive Maintenance Programs",
        "Vendor Management & Coordination",
        "Asset Management Systems"
      ],
      stats: { value: "500+", label: "Buildings Managed" }
    },
    {
      icon: Home,
      title: "Integrated Home Solutions",
      description: "Premium maintenance programs designed exclusively for private homes, villas, and residential complexes with specialized preventive care.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      color: "from-emerald-500 to-teal-500",
      features: [
        "Regular Home Inspections",
        "Cleaning & Housekeeping Services",
        "Plumbing & Electrical Maintenance",
        "HVAC System Care",
        "Garden & Outdoor Maintenance",
        "Emergency Response Services"
      ],
      stats: { value: "1,000+", label: "Happy Homes" }
    },
    {
      icon: Hotel,
      title: "Hospitality Services",
      description: "Tailored facility management for hotels, resorts, and hospitality venues ensuring exceptional guest experiences and operational excellence.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      color: "from-purple-500 to-pink-500",
      features: [
        "Guest Room Maintenance",
        "Front-of-House Services",
        "Back-of-House Operations",
        "Laundry & Housekeeping",
        "Food & Beverage Support",
        "Event Space Management"
      ],
      stats: { value: "50+", label: "Hotels Served" }
    },
    {
      icon: Trees,
      title: "Landscaping & Gardens",
      description: "Expert landscape design, maintenance, and outdoor space management creating beautiful, sustainable environments.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
      color: "from-green-500 to-emerald-500",
      features: [
        "Landscape Design & Installation",
        "Lawn Care & Maintenance",
        "Irrigation System Management",
        "Tree & Shrub Care",
        "Seasonal Planting Programs",
        "Hardscape Maintenance"
      ],
      stats: { value: "300+", label: "Gardens Maintained" }
    },
    {
      icon: Wrench,
      title: "Technical Services",
      description: "Expert HVAC, electrical, plumbing, and technical maintenance delivered by certified professionals ensuring system reliability.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      color: "from-orange-500 to-red-500",
      features: [
        "HVAC Installation & Repair",
        "Electrical System Maintenance",
        "Plumbing Services",
        "Fire Safety Systems",
        "Building Automation",
        "Emergency Repairs"
      ],
      stats: { value: "99.8%", label: "Uptime Rate" }
    },
    {
      icon: Shield,
      title: "Pest Control",
      description: "Safe, effective, and environmentally responsible pest management solutions protecting your property and health.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      color: "from-indigo-500 to-purple-500",
      features: [
        "Comprehensive Pest Inspections",
        "Eco-Friendly Treatment Methods",
        "Preventive Pest Programs",
        "Termite Control & Protection",
        "Rodent Management",
        "Regular Monitoring & Reporting"
      ],
      stats: { value: "2,000+", label: "Treatments Done" }
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-white via-brand-cream/20 to-brand-sand/30"
    >
      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-brand-moss/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 border-b border-brand-gold/20 bg-white/80 backdrop-blur-xl"
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border-2 border-brand-deep/10 bg-white px-4 py-2 font-bold text-brand-deep transition-all duration-300 hover:border-brand-gold/30 hover:bg-brand-gold/10"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={2.5} />
            Back to Home
          </motion.button>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-gold to-brand-sand shadow-lg">
              <span className="font-display text-lg font-black text-brand-deep">SF</span>
            </div>
            <span className="hidden font-display text-xl font-black text-brand-deep sm:block">StarFM</span>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container relative mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 backdrop-blur-sm"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gold">
              What We Offer
            </span>
          </motion.div>

          <h1 className="mb-6 font-display text-5xl font-black leading-tight text-brand-deep sm:text-6xl lg:text-7xl">
            Our
            <span className="block gradient-text mt-2">
              Services
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-forest/70">
            Comprehensive facilities management solutions designed to meet your every need. From technical services to landscaping, we deliver excellence across all domains.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            const ref = useRef(null)
            const isInView = useInView(ref, { once: true, margin: "-100px" })

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Decorative number */}
                <div className="absolute -top-8 left-0 lg:-left-8">
                  <span className="font-display text-8xl font-black text-brand-gold/5 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Image with enhanced interactions */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`group relative overflow-hidden rounded-3xl ${!isEven ? 'lg:order-2' : ''}`}
                >
                  {/* Animated glow */}
                  <motion.div 
                    className="absolute -inset-3 bg-gradient-to-r from-brand-gold/40 to-brand-moss/40 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand-gold/30 bg-white shadow-2xl">
                    {/* Image with parallax effect */}
                    <motion.img 
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Gradient overlay with hover effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-brand-deep/40 via-brand-forest/30 to-transparent transition-opacity duration-300"
                      whileHover={{ opacity: 0.7 }}
                    />
                    
                    {/* Floating Icon Badge with pulse */}
                    <motion.div 
                      className="absolute left-6 top-6"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-2xl ring-4 ring-white/40 backdrop-blur-sm`}>
                        <Icon className="h-8 w-8 text-white drop-shadow-lg" strokeWidth={2.5} />
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-white"
                          animate={{ opacity: [0, 0.3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>

                    {/* Stats badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.4 }}
                      className="absolute bottom-6 right-6 rounded-xl border border-white/30 bg-white/95 backdrop-blur-xl px-4 py-3 shadow-lg"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className={`font-display text-2xl font-black bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
                          {service.stats.value}
                        </span>
                        <span className="text-xs font-bold text-brand-deep/70 uppercase">
                          {service.stats.label}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content with staggered animations */}
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -30 : 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {/* Category badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.3 }}
                      className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 backdrop-blur-sm"
                    >
                      <Star className="h-3 w-3 text-brand-gold fill-brand-gold" />
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Premium Service</span>
                    </motion.div>

                    <h2 className="mb-4 font-display text-3xl font-black text-brand-deep sm:text-4xl lg:text-5xl">
                      {service.title}
                    </h2>
                    
                    <p className="mb-8 text-base leading-relaxed text-brand-forest/80 sm:text-lg">
                      {service.description}
                    </p>

                    {/* Features with stagger */}
                    <div className="mb-8 space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.4 + idx * 0.08 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                          className="group flex items-center gap-3 rounded-lg border border-transparent p-2 transition-all hover:border-brand-gold/20 hover:bg-brand-gold/5"
                        >
                          <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${service.color} shadow-md transition-transform group-hover:scale-110`}>
                            <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={2.5} />
                          </div>
                          <span className="text-sm font-semibold text-brand-forest/80 transition-colors group-hover:text-brand-deep">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                      <Button
                        onClick={onContactClick}
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-gold via-brand-sand to-brand-gold px-6 py-4 font-bold uppercase tracking-wide text-brand-deep shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/50"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Request Service
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-brand-sand to-brand-gold"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>

                      <Button
                        variant="outline"
                        className="group rounded-xl border-2 border-brand-deep/20 bg-white/50 px-6 py-4 font-bold uppercase tracking-wide text-brand-deep backdrop-blur-sm transition-all hover:border-brand-gold hover:bg-brand-gold/10"
                      >
                        <span className="flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          Learn More
                        </span>
                      </Button>
                    </div>

                    {/* Quality badge */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.8 }}
                      className="mt-6 flex items-center gap-2 text-sm text-brand-forest/60"
                    >
                      <Award className="h-5 w-5 text-brand-gold" />
                      <span className="font-medium">Certified & Quality Assured</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 overflow-hidden rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-brand-deep via-brand-forest to-brand-moss p-12 text-center shadow-2xl sm:p-16"
        >
          <div className="relative">
            <h3 className="mb-4 font-display text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-brand-cream/90">
              Let us handle your facility management needs. Contact our team today for a customized solution.
            </p>
            <Button
              onClick={onContactClick}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-gold via-brand-sand to-brand-gold px-10 py-5 text-lg font-black uppercase tracking-wide text-brand-deep shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us Now
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-6 w-6" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brand-sand to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </Button>

            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-gold/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-brand-sand/20 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
