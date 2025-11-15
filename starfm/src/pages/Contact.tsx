import { motion } from "framer-motion"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactProps {
  onBack: () => void
}

export function Contact({ onBack }: ContactProps) {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+XXX XXX XXXX", "+XXX XXX XXXX"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@starfm.com", "support@starfm.com"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["[Address Line 1]", "[City, Country]"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "from-orange-500 to-red-500"
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
              Get In Touch
            </span>
          </motion.div>

          <h1 className="mb-6 font-display text-5xl font-black leading-tight text-brand-deep sm:text-6xl lg:text-7xl">
            Contact
            <span className="block gradient-text mt-2">
              Our Team
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-forest/70">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-brand-deep/10 bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:border-brand-gold/30 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative flex items-start gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${info.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="mb-3 font-display text-xl font-bold text-brand-deep">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm font-medium leading-relaxed text-brand-forest/70">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-gold/10 blur-2xl transition-all duration-300 group-hover:bg-brand-gold/20" />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/20 to-brand-moss/20 rounded-3xl blur-2xl opacity-60 -z-10" />
            
            <div className="relative overflow-hidden rounded-3xl border border-brand-gold/20 bg-white/90 backdrop-blur-xl p-8 shadow-2xl sm:p-10">
              <h3 className="mb-6 font-display text-3xl font-black text-brand-deep">
                Send us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-brand-deep">
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full rounded-xl border-2 border-brand-deep/10 bg-white px-4 py-3 text-brand-deep transition-all duration-300 placeholder:text-brand-forest/40 focus:border-brand-gold/50 focus:outline-none focus:ring-4 focus:ring-brand-gold/10"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-brand-deep">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-xl border-2 border-brand-deep/10 bg-white px-4 py-3 text-brand-deep transition-all duration-300 placeholder:text-brand-forest/40 focus:border-brand-gold/50 focus:outline-none focus:ring-4 focus:ring-brand-gold/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-brand-deep">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full rounded-xl border-2 border-brand-deep/10 bg-white px-4 py-3 text-brand-deep transition-all duration-300 placeholder:text-brand-forest/40 focus:border-brand-gold/50 focus:outline-none focus:ring-4 focus:ring-brand-gold/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-brand-deep">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+XXX XXX XXXX"
                    className="w-full rounded-xl border-2 border-brand-deep/10 bg-white px-4 py-3 text-brand-deep transition-all duration-300 placeholder:text-brand-forest/40 focus:border-brand-gold/50 focus:outline-none focus:ring-4 focus:ring-brand-gold/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-brand-deep">
                    Service Interest
                  </label>
                  <select className="w-full rounded-xl border-2 border-brand-deep/10 bg-white px-4 py-3 text-brand-deep transition-all duration-300 focus:border-brand-gold/50 focus:outline-none focus:ring-4 focus:ring-brand-gold/10">
                    <option>Facilities Management</option>
                    <option>Home Solutions</option>
                    <option>Hospitality Services</option>
                    <option>Landscaping & Gardens</option>
                    <option>Technical Services</option>
                    <option>Pest Control</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-brand-deep">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your needs..."
                    className="w-full rounded-xl border-2 border-brand-deep/10 bg-white px-4 py-3 text-brand-deep transition-all duration-300 placeholder:text-brand-forest/40 focus:border-brand-gold/50 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-brand-gold via-brand-sand to-brand-gold py-6 font-black uppercase tracking-wider text-brand-deep shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/40"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-sand to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </Button>
              </form>

              {/* Decorative elements */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-gold/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-brand-moss/20 blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Map Section Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 overflow-hidden rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/10 via-white/50 to-brand-sand/10 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex h-96 items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-16 w-16 text-brand-gold" strokeWidth={1.5} />
              <h3 className="mb-2 font-display text-2xl font-bold text-brand-deep">
                Map Location
              </h3>
              <p className="text-sm text-brand-forest/70">
                [Interactive map will be added here]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
