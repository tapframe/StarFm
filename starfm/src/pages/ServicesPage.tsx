import { useEffect, useRef, useMemo, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle2, ArrowRight, Star, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"
import { TrustedPartner } from "@/components/home/TrustedPartner"

gsap.registerPlugin(ScrollTrigger)

interface ServicesPageProps {
  onBack: () => void
  onContactClick: () => void
}

export function ServicesPage({ onBack, onContactClick }: ServicesPageProps) {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<'individual' | 'corporate'>('individual')
  const pageRef = useRef<HTMLDivElement>(null)
  const pageHeaderRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const serviceSectionsRef = useRef<HTMLDivElement[]>([])
  const imageRefs = useRef<HTMLDivElement[]>([])
  const imageInnerRefs = useRef<HTMLImageElement[]>([])
  const iconRefs = useRef<HTMLDivElement[]>([])
  const iconInnerRefs = useRef<HTMLDivElement[]>([])
  const glowRefs = useRef<HTMLDivElement[]>([])
  const pulseRefs = useRef<HTMLDivElement[]>([])
  const statsBadgeRefs = useRef<HTMLDivElement[]>([])
  const statsValueRefs = useRef<HTMLSpanElement[]>([])
  const contentRefs = useRef<HTMLDivElement[]>([])
  const categoryBadgeRefs = useRef<HTMLDivElement[]>([])
  const titleTextRefs = useRef<HTMLHeadingElement[]>([])
  const descriptionTextRefs = useRef<HTMLParagraphElement[]>([])
  const featureRefs = useRef<HTMLDivElement[][]>([])
  const featureIconRefs = useRef<HTMLDivElement[][]>([])
  const decorativeNumberRefs = useRef<HTMLSpanElement[]>([])
  const ctaSectionRef = useRef<HTMLDivElement>(null)
  const ctaTitleRef = useRef<HTMLHeadingElement>(null)
  const ctaDescriptionRef = useRef<HTMLParagraphElement>(null)
  const ctaButtonRef = useRef<HTMLButtonElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)
  const buttonHoverRefs = useRef<HTMLDivElement[]>([])
  const scrollTriggersRef = useRef<ScrollTrigger[]>([])
  const animationsRef = useRef<gsap.core.Tween[]>([])

  // Memoize services data to prevent recreation
  const individualServices = useMemo(() => [
    {
      icon: "🧹",
      title: "Cleaning Services",
      description: "Professional cleaning solutions for homes and businesses with attention to detail and quality.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      color: "from-blue-500 to-cyan-500",
      features: ["Deep Cleaning", "Regular Maintenance", "Eco-Friendly Products", "Flexible Scheduling", "Quality Assurance", "Trained Staff"],
      stats: { value: "1,000+", label: "Spaces Cleaned" }
    },
    {
      icon: "🏨",
      title: "Hospitality Services",
      description: "Premium hospitality management for exceptional guest experiences and operational excellence.",
      image: "https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?w=800&q=80",
      color: "from-purple-500 to-pink-500",
      features: ["Guest Services", "Housekeeping", "Front Desk Support", "Event Management", "Laundry Services", "Quality Control"],
      stats: { value: "50+", label: "Hotels Served" }
    },
    {
      icon: "🔧",
      title: "Air Conditioner Repair",
      description: "Expert AC installation, maintenance, and repair services ensuring optimal cooling performance.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      color: "from-orange-500 to-red-500",
      features: ["AC Installation", "Preventive Maintenance", "Emergency Repairs", "System Upgrades", "Energy Optimization", "24/7 Support"],
      stats: { value: "99.8%", label: "Uptime Rate" }
    },
    {
      icon: "⚡",
      title: "Electrical Services",
      description: "Comprehensive electrical solutions from installation to maintenance by certified electricians.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      color: "from-yellow-500 to-orange-500",
      features: ["Wiring & Installation", "Safety Inspections", "Panel Upgrades", "Emergency Services", "LED Solutions", "Energy Audits"],
      stats: { value: "500+", label: "Projects Done" }
    },
    {
      icon: "🏊",
      title: "Pool Cleaning",
      description: "Professional pool maintenance and cleaning services for crystal-clear water year-round.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
      color: "from-cyan-500 to-blue-500",
      features: ["Water Testing", "Chemical Balance", "Filter Cleaning", "Equipment Maintenance", "Regular Service", "Emergency Support"],
      stats: { value: "200+", label: "Pools Maintained" }
    },
    {
      icon: "🏖️",
      title: "Beach Cleaning",
      description: "Specialized beach and coastal area cleaning for pristine shorelines and environments.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      color: "from-teal-500 to-cyan-500",
      features: ["Sand Cleaning", "Debris Removal", "Equipment Setup", "Seasonal Service", "Eco-Friendly Methods", "Regular Maintenance"],
      stats: { value: "50+", label: "Beaches Served" }
    },
    {
      icon: "🌱",
      title: "Landscaping",
      description: "Expert landscape design and maintenance creating beautiful sustainable outdoor spaces.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
      color: "from-green-500 to-emerald-500",
      features: ["Landscape Design", "Lawn Care", "Irrigation Systems", "Tree Services", "Seasonal Planting", "Garden Maintenance"],
      stats: { value: "300+", label: "Gardens Maintained" }
    },
    {
      icon: "🦟",
      title: "Pest Control Services",
      description: "Safe and effective pest management solutions protecting your property and health.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      color: "from-indigo-500 to-purple-500",
      features: ["Pest Inspections", "Eco-Friendly Treatments", "Preventive Programs", "Termite Control", "Rodent Management", "Regular Monitoring"],
      stats: { value: "2,000+", label: "Treatments Done" }
    },
    {
      icon: "🚰",
      title: "Plumbing Services",
      description: "Complete plumbing solutions from repairs to installations by licensed plumbers.",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
      color: "from-blue-600 to-cyan-600",
      features: ["Leak Repairs", "Pipe Installation", "Drain Cleaning", "Water Heaters", "Emergency Service", "Preventive Maintenance"],
      stats: { value: "800+", label: "Jobs Completed" }
    },
    {
      icon: "🏢",
      title: "Facade Cleaning",
      description: "Professional building exterior cleaning for impressive and well-maintained facades.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      color: "from-slate-500 to-gray-500",
      features: ["Pressure Washing", "Window Cleaning", "Stone Restoration", "Safety Compliance", "Eco-Friendly Products", "High-Rise Service"],
      stats: { value: "100+", label: "Buildings Cleaned" }
    },
    {
      icon: "🚛",
      title: "Sweeper Services",
      description: "Industrial sweeping and cleaning services for roads, parking lots, and large areas.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      color: "from-amber-500 to-orange-500",
      features: ["Street Sweeping", "Parking Lot Cleaning", "Construction Site Cleanup", "Dust Control", "Regular Service", "Emergency Response"],
      stats: { value: "500+", label: "Sites Serviced" }
    },
    {
      icon: "🚚",
      title: "Sewage Trucks",
      description: "Professional sewage removal and waste management services with modern equipment.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      color: "from-gray-600 to-slate-600",
      features: ["Septic Tank Pumping", "Waste Removal", "Emergency Service", "Scheduled Maintenance", "Modern Fleet", "Licensed Operators"],
      stats: { value: "1,000+", label: "Services Done" }
    },
    {
      icon: "📦",
      title: "Logistics Services",
      description: "Efficient logistics and transportation solutions for seamless operations.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      color: "from-indigo-600 to-blue-600",
      features: ["Transportation", "Warehousing", "Inventory Management", "Route Optimization", "Tracking Systems", "Timely Delivery"],
      stats: { value: "5,000+", label: "Deliveries Made" }
    },
    {
      icon: "💧",
      title: "Water Services",
      description: "Comprehensive water supply and management solutions for various needs.",
      image: "https://images.unsplash.com/photo-1581093577421-f561a654a353?w=800&q=80",
      color: "from-cyan-600 to-blue-600",
      features: ["Water Delivery", "Storage Solutions", "Quality Testing", "Emergency Supply", "Regular Service", "24/7 Availability"],
      stats: { value: "2,000+", label: "Deliveries Monthly" }
    },
    {
      icon: "🪣",
      title: "Water Tank Cleaning",
      description: "Professional water tank cleaning and sanitization for safe water storage.",
      image: "https://images.unsplash.com/photo-1581093577421-f561a654a353?w=800&q=80",
      color: "from-blue-500 to-teal-500",
      features: ["Deep Cleaning", "Sanitization", "Inspection Service", "Preventive Care", "Quality Assurance", "Regular Maintenance"],
      stats: { value: "1,500+", label: "Tanks Cleaned" }
    },
    {
      icon: "⛵",
      title: "Yacht Cleaning",
      description: "Specialized yacht and boat cleaning services for pristine marine vessels.",
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      color: "from-blue-600 to-indigo-600",
      features: ["Exterior Washing", "Interior Detailing", "Deck Cleaning", "Hull Maintenance", "Polish & Wax", "Regular Service"],
      stats: { value: "150+", label: "Yachts Serviced" }
    },
    {
      icon: "🏠",
      title: "Renovation Services",
      description: "Complete renovation and remodeling services transforming spaces beautifully.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
      color: "from-orange-600 to-red-600",
      features: ["Design Consultation", "Full Remodeling", "Kitchen & Bath", "Flooring", "Painting", "Project Management"],
      stats: { value: "200+", label: "Projects Done" }
    }
  ], [])

  const corporateServices = useMemo(() => [
    {
      icon: "🧹",
      title: "Regular Cleaning",
      description: "Comprehensive commercial cleaning services maintaining professional environments daily.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      color: "from-blue-500 to-cyan-500",
      features: ["Office Cleaning", "Daily Service", "Floor Care", "Restroom Sanitization", "Common Areas", "Quality Standards"],
      stats: { value: "500+", label: "Offices Serviced" }
    },
    {
      icon: "🏊",
      title: "Pool Cleaning Services",
      description: "Commercial pool maintenance for hotels, resorts, and corporate facilities.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
      color: "from-cyan-500 to-blue-500",
      features: ["Chemical Management", "Equipment Service", "Water Quality Testing", "Regular Maintenance", "Compliance Standards", "Emergency Support"],
      stats: { value: "100+", label: "Commercial Pools" }
    },
    {
      icon: "🚰",
      title: "Plumbing Services",
      description: "Corporate plumbing solutions for buildings, offices, and commercial spaces.",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
      color: "from-blue-600 to-cyan-600",
      features: ["System Installation", "Preventive Maintenance", "Emergency Repairs", "Pipe Management", "Compliance", "24/7 Service"],
      stats: { value: "300+", label: "Buildings Served" }
    },
    {
      icon: "🏖️",
      title: "Beach Cleaning",
      description: "Large-scale beach maintenance for resorts, hotels, and commercial coastal areas.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      color: "from-teal-500 to-cyan-500",
      features: ["Daily Maintenance", "Equipment Management", "Waste Removal", "Sand Grooming", "Seasonal Service", "Event Support"],
      stats: { value: "30+", label: "Resorts Served" }
    },
    {
      icon: "🏢",
      title: "Facade Cleaning",
      description: "Commercial building exterior cleaning for corporate towers and office buildings.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      color: "from-slate-500 to-gray-500",
      features: ["High-Rise Cleaning", "Window Washing", "Pressure Washing", "Safety Certified", "Minimal Disruption", "Scheduled Service"],
      stats: { value: "200+", label: "Buildings Maintained" }
    },
    {
      icon: "🚛",
      title: "Sweeper Services",
      description: "Industrial sweeping for corporate campuses, parking structures, and facilities.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      color: "from-amber-500 to-orange-500",
      features: ["Parking Lot Sweeping", "Loading Dock Cleaning", "Campus Maintenance", "Night Service", "Fleet Management", "Regular Schedules"],
      stats: { value: "150+", label: "Facilities Serviced" }
    },
    {
      icon: "🚚",
      title: "Sewage Trucks Services",
      description: "Corporate waste management and sewage removal for commercial properties.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      color: "from-gray-600 to-slate-600",
      features: ["Commercial Pumping", "Scheduled Service", "Emergency Response", "Compliance", "Modern Equipment", "Certified Operators"],
      stats: { value: "500+", label: "Corporate Clients" }
    },
    {
      icon: "📦",
      title: "Logistics Services",
      description: "Enterprise logistics and supply chain management for corporate operations.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      color: "from-indigo-600 to-blue-600",
      features: ["Supply Chain", "Warehouse Management", "Distribution", "Fleet Management", "Route Planning", "Real-Time Tracking"],
      stats: { value: "10,000+", label: "Monthly Shipments" }
    },
    {
      icon: "🪣",
      title: "Water Tank Cleaning",
      description: "Commercial water tank maintenance for buildings and corporate facilities.",
      image: "https://images.unsplash.com/photo-1581093577421-f561a654a353?w=800&q=80",
      color: "from-blue-500 to-teal-500",
      features: ["Large Tank Service", "Scheduled Maintenance", "Quality Testing", "Compliance Reports", "Minimal Downtime", "Certified Process"],
      stats: { value: "800+", label: "Commercial Tanks" }
    },
    {
      icon: "🧽",
      title: "Deep Cleaning",
      description: "Intensive deep cleaning services for corporate spaces and commercial buildings.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      color: "from-purple-500 to-indigo-500",
      features: ["Intensive Cleaning", "Sanitization", "Carpet Deep Clean", "Air Duct Cleaning", "Post-Construction", "Quarterly Service"],
      stats: { value: "400+", label: "Projects Completed" }
    },
    {
      icon: "👩‍💼",
      title: "Housekeeping Services",
      description: "Corporate housekeeping management for hotels, offices, and facilities.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      color: "from-pink-500 to-rose-500",
      features: ["Staff Management", "Quality Control", "Supply Management", "Training Programs", "Standards Compliance", "24/7 Operations"],
      stats: { value: "100+", label: "Facilities Managed" }
    },
    {
      icon: "🏨",
      title: "Hospitality Services",
      description: "Complete hospitality management for hotels, resorts, and corporate venues.",
      image: "https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?w=800&q=80",
      color: "from-purple-500 to-pink-500",
      features: ["Full Service Management", "Guest Experience", "Staff Training", "Quality Standards", "Operations Management", "Brand Compliance"],
      stats: { value: "50+", label: "Properties Managed" }
    },
    {
      icon: "🔧",
      title: "Air Conditioner Repair",
      description: "Commercial HVAC services for corporate buildings and facilities.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      color: "from-orange-500 to-red-500",
      features: ["Central AC Systems", "VRF Systems", "Preventive Maintenance", "Emergency Repairs", "Energy Management", "24/7 Support"],
      stats: { value: "300+", label: "Buildings Serviced" }
    },
    {
      icon: "🦟",
      title: "Pest Control Services",
      description: "Corporate pest management programs for commercial properties and facilities.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      color: "from-indigo-500 to-purple-500",
      features: ["Integrated Pest Management", "Regular Inspections", "Preventive Programs", "Compliance Reports", "Eco-Friendly", "Emergency Response"],
      stats: { value: "500+", label: "Corporate Clients" }
    },
    {
      icon: "🔨",
      title: "Maintenance Operation Services",
      description: "Comprehensive facility maintenance operations for corporate properties.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      color: "from-slate-600 to-zinc-600",
      features: ["Preventive Maintenance", "Repairs & Fixes", "Asset Management", "Work Order System", "Vendor Management", "Compliance"],
      stats: { value: "200+", label: "Facilities Managed" }
    },
    {
      icon: "⚙️",
      title: "Restoration Renovation Services",
      description: "Large-scale renovation and restoration for commercial properties.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
      color: "from-orange-600 to-red-600",
      features: ["Commercial Renovation", "Historic Restoration", "Tenant Improvements", "Building Upgrades", "Project Management", "Minimal Disruption"],
      stats: { value: "100+", label: "Projects Completed" }
    },
    {
      icon: "🌾",
      title: "Agricultural Services",
      description: "Corporate agricultural and green space management for large properties.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
      color: "from-green-600 to-lime-600",
      features: ["Landscape Management", "Irrigation Systems", "Grounds Maintenance", "Seasonal Planting", "Turf Management", "Sustainability"],
      stats: { value: "50+", label: "Properties Managed" }
    },
    {
      icon: "⛵",
      title: "Yacht Cleaning",
      description: "Corporate yacht and marine vessel maintenance for fleets and charters.",
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      color: "from-blue-600 to-indigo-600",
      features: ["Fleet Management", "Regular Maintenance", "Detail Cleaning", "Hull Care", "Interior Service", "Scheduled Programs"],
      stats: { value: "50+", label: "Corporate Fleets" }
    }
  ], [])

  const services = activeTab === 'individual' ? individualServices : corporateServices

  // Optimized event handlers with useCallback

  const handleCtaButtonEnter = useCallback(() => {
    if (ctaButtonRef.current) {
      gsap.to(ctaButtonRef.current, {
        scale: 1.05,
        y: -3,
        duration: 0.3,
        ease: "back.out(2)"
      })
    }
  }, [])

  const handleCtaButtonLeave = useCallback(() => {
    if (ctaButtonRef.current) {
      gsap.to(ctaButtonRef.current, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }, [])

  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo({ top: 0, behavior: "instant" })

    // Set GSAP defaults for better performance
    gsap.config({
      nullTargetWarn: false
    })

    // Batch DOM reads/writes using requestAnimationFrame
    requestAnimationFrame(() => {
      // Subtle page fade in
      if (pageRef.current) {
        const anim = gsap.fromTo(pageRef.current,
          { opacity: 0, scale: 0.99 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            force3D: true
          }
        )
        animationsRef.current.push(anim)
      }


      // Subtle page header stagger
      const headerTl = gsap.timeline({ delay: 0.1 })

      if (pageHeaderRef.current) {
        gsap.set(pageHeaderRef.current, { opacity: 0, y: 15 })
        headerTl.to(pageHeaderRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          force3D: true
        })
      }

      if (badgeRef.current) {
        gsap.set(badgeRef.current, { opacity: 0, scale: 0.96 })
        headerTl.to(badgeRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          force3D: true
        }, 0.1)
      }

      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0, y: 15 })
        headerTl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          force3D: true
        }, 0.15)
      }

      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, { opacity: 0, y: 12 })
        headerTl.to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          force3D: true
        }, 0.25)
      }

      // Service sections with optimized ScrollTrigger
      serviceSectionsRef.current.forEach((section, index) => {
        if (!section) return

        const isEven = index % 2 === 0
        const imageContainer = imageRefs.current[index]
        const contentContainer = contentRefs.current[index]
        const decorativeNumber = decorativeNumberRefs.current[index]

        // Subtle section reveal
        const st1 = ScrollTrigger.create({
          trigger: section,
          start: "top 80%",
          end: "top 30%",
          onEnter: () => {
            gsap.to(section, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power2.out",
              force3D: true
            })
          },
          onLeaveBack: () => {
            gsap.set(section, { opacity: 0, y: 20, scale: 0.98 })
          },
          markers: false,
          refreshPriority: -1
        })
        scrollTriggersRef.current.push(st1)
        gsap.set(section, { opacity: 0, y: 20, scale: 0.98 })

        // Subtle decorative number parallax
        if (decorativeNumber) {
          const st2 = ScrollTrigger.create({
            trigger: section,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1.2,
            onUpdate: (self) => {
              const progress = self.progress
              gsap.set(decorativeNumber, {
                y: -20 * progress,
                opacity: 0.15 + (0.25 * (1 - progress)),
                force3D: true
              })
            },
            markers: false,
            refreshPriority: -1
          })
          scrollTriggersRef.current.push(st2)
        }

        // Clean image container animations
        if (imageContainer) {
          const st3 = ScrollTrigger.create({
            trigger: imageContainer,
            start: "top 80%",
            onEnter: () => {
              gsap.to(imageContainer, {
                opacity: 1,
                x: 0,
                scale: 1,
                rotation: 0,
                duration: 0.6,
                ease: "power2.out",
                force3D: true
              })
            },
            markers: false,
            refreshPriority: -1
          })
          scrollTriggersRef.current.push(st3)
          gsap.set(imageContainer, {
            opacity: 0,
            x: isEven ? -30 : 30,
            scale: 0.97,
            rotation: isEven ? -1 : 1
          })

          // Subtle parallax effect
          const st4 = ScrollTrigger.create({
            trigger: section,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1.5,
            onUpdate: (self) => {
              const progress = self.progress
              gsap.set(imageContainer, {
                y: -15 * progress,
                force3D: true
              })
            },
            markers: false,
            refreshPriority: -1
          })
          scrollTriggersRef.current.push(st4)

          // Optimized hover effects with will-change
          imageContainer.style.willChange = "transform"
          const handleImageEnter = () => {
            gsap.to(imageContainer, {
              scale: 1.02,
              y: -4,
              rotation: isEven ? 0.5 : -0.5,
              duration: 0.5,
              ease: "power2.out",
              force3D: true
            })
            const img = imageInnerRefs.current[index]
            if (img) {
              img.style.willChange = "transform"
              gsap.to(img, {
                scale: 1.05,
                duration: 0.6,
                ease: "power2.out",
                force3D: true
              })
            }
            const glow = glowRefs.current[index]
            if (glow) {
              gsap.to(glow, {
                opacity: 0.6,
                scale: 1.05,
                duration: 0.4,
                ease: "power2.out",
                force3D: true
              })
            }
          }

          const handleImageLeave = () => {
            gsap.to(imageContainer, {
              scale: 1,
              y: 0,
              rotation: 0,
              duration: 0.5,
              ease: "power2.out",
              force3D: true
            })
            const img = imageInnerRefs.current[index]
            if (img) {
              gsap.to(img, {
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
                force3D: true,
                onComplete: () => {
                  img.style.willChange = "auto"
                }
              })
            }
            const glow = glowRefs.current[index]
            if (glow) {
              gsap.to(glow, {
                opacity: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
                force3D: true
              })
            }
          }

          imageContainer.addEventListener("mouseenter", handleImageEnter, { passive: true })
          imageContainer.addEventListener("mouseleave", handleImageLeave, { passive: true })
        }

        // Clean content container reveal
        if (contentContainer) {
          const st5 = ScrollTrigger.create({
            trigger: contentContainer,
            start: "top 80%",
            onEnter: () => {
              gsap.to(contentContainer, {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                force3D: true
              })
            },
            markers: false,
            refreshPriority: -1
          })
          scrollTriggersRef.current.push(st5)
          gsap.set(contentContainer, {
            opacity: 0,
            x: isEven ? -25 : 25,
            y: 15
          })
        }

        // Subtle category badge
        const categoryBadge = categoryBadgeRefs.current[index]
        if (categoryBadge) {
          const st6 = ScrollTrigger.create({
            trigger: categoryBadge,
            start: "top 85%",
            onEnter: () => {
              gsap.to(categoryBadge, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                force3D: true
              })
            },
            markers: false,
            refreshPriority: -1
          })
          scrollTriggersRef.current.push(st6)
          gsap.set(categoryBadge, { opacity: 0, scale: 0.96, y: -8 })
        }

        // Clean title and description
        const titleText = titleTextRefs.current[index]
        if (titleText) {
          const st7 = ScrollTrigger.create({
            trigger: titleText,
            start: "top 85%",
            onEnter: () => {
              gsap.to(titleText, {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power3.out",
                force3D: true
              })
            },
            markers: false,
            refreshPriority: -1
          })
          scrollTriggersRef.current.push(st7)
          gsap.set(titleText, { opacity: 0, y: 15 })
        }

        const descriptionText = descriptionTextRefs.current[index]
        if (descriptionText) {
          const st8 = ScrollTrigger.create({
            trigger: descriptionText,
            start: "top 85%",
            onEnter: () => {
              gsap.to(descriptionText, {
                opacity: 1,
                y: 0,
                duration: 0.55,
                ease: "power2.out",
                force3D: true
              })
            },
            markers: false,
            refreshPriority: -1
          })
          scrollTriggersRef.current.push(st8)
          gsap.set(descriptionText, { opacity: 0, y: 12 })
        }

        // Subtle icon badge
        const iconContainer = iconRefs.current[index]
        if (iconContainer) {
          const st9 = ScrollTrigger.create({
            trigger: iconContainer,
            start: "top 85%",
            onEnter: () => {
              gsap.to(iconContainer, {
                opacity: 1,
                scale: 1,
                rotation: 0,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                force3D: true
              })
            },
            markers: false,
            refreshPriority: -1
          })
          scrollTriggersRef.current.push(st9)
          gsap.set(iconContainer, {
            opacity: 0,
            scale: 0.9,
            rotation: -10,
            y: -10
          })

          iconContainer.style.willChange = "transform"
          const handleIconEnter = () => {
            gsap.to(iconContainer, {
              scale: 1.08,
              rotation: 3,
              y: -3,
              duration: 0.35,
              ease: "power2.out",
              force3D: true
            })
            const iconInner = iconInnerRefs.current[index]
            if (iconInner) {
              gsap.to(iconInner, {
                scale: 1.05,
                rotation: -2,
                duration: 0.35,
                ease: "power2.out",
                force3D: true
              })
            }
          }

          const handleIconLeave = () => {
            gsap.to(iconContainer, {
              scale: 1,
              rotation: 0,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
              force3D: true
            })
            const iconInner = iconInnerRefs.current[index]
            if (iconInner) {
              gsap.to(iconInner, {
                scale: 1,
                rotation: 0,
                duration: 0.35,
                ease: "power2.out",
                force3D: true
              })
            }
          }

          iconContainer.addEventListener("mouseenter", handleIconEnter, { passive: true })
          iconContainer.addEventListener("mouseleave", handleIconLeave, { passive: true })
        }

        // Pulse effect - optimized
        const pulse = pulseRefs.current[index]
        if (pulse) {
          const anim = gsap.to(pulse, {
            opacity: 0.4,
            scale: 1.2,
            duration: 1.5,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
            force3D: true
          })
          animationsRef.current.push(anim)
        }

        // Clean stats badge
        const statsBadge = statsBadgeRefs.current[index]
        if (statsBadge) {
          const st10 = ScrollTrigger.create({
            trigger: statsBadge,
            start: "top 85%",
            onEnter: () => {
              gsap.to(statsBadge, {
                opacity: 1,
                scale: 1,
                y: 0,
                rotation: 0,
                duration: 0.5,
                ease: "power2.out",
                force3D: true
              })
              const statsValue = statsValueRefs.current[index]
              if (statsValue) {
                gsap.to(statsValue, {
                  scale: 1,
                  opacity: 1,
                  duration: 0.4,
                  ease: "power2.out",
                  delay: 0.15,
                  force3D: true
                })
              }
            },
            markers: false,
            refreshPriority: -1
          })
          scrollTriggersRef.current.push(st10)
          gsap.set(statsBadge, {
            opacity: 0,
            scale: 0.96,
            y: 15,
            rotation: -2
          })
          if (statsValueRefs.current[index]) {
            gsap.set(statsValueRefs.current[index], { scale: 0.9, opacity: 0 })
          }
        }

        // Features - optimized batch animation
        const features = featureRefs.current[index]
        if (features && features.length > 0) {
          features.forEach((feature, featureIndex) => {
            if (!feature) return

            const st11 = ScrollTrigger.create({
              trigger: feature,
              start: "top 90%",
              onEnter: () => {
                gsap.to(feature, {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  duration: 0.45,
                  delay: featureIndex * 0.06,
                  ease: "power2.out",
                  force3D: true
                })
                const featureIcon = featureIconRefs.current[index]?.[featureIndex]
                if (featureIcon) {
                  gsap.to(featureIcon, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.4,
                    delay: featureIndex * 0.06 + 0.1,
                    ease: "power2.out",
                    force3D: true
                  })
                }
              },
              markers: false,
              refreshPriority: -1
            })
            scrollTriggersRef.current.push(st11)
            gsap.set(feature, {
              opacity: 0,
              x: -20,
              scale: 0.97
            })
            const featureIcon = featureIconRefs.current[index]?.[featureIndex]
            if (featureIcon) {
              gsap.set(featureIcon, { scale: 0.9, rotation: -15 })
            }

            feature.style.willChange = "transform"
            const handleFeatureEnter = () => {
              gsap.to(feature, {
                x: 4,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
                force3D: true
              })
              const icon = featureIconRefs.current[index]?.[featureIndex]
              if (icon) {
                gsap.to(icon, {
                  scale: 1.1,
                  rotation: 3,
                  duration: 0.3,
                  ease: "power2.out",
                  force3D: true
                })
              }
            }

            const handleFeatureLeave = () => {
              gsap.to(feature, {
                x: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
                force3D: true
              })
              const icon = featureIconRefs.current[index]?.[featureIndex]
              if (icon) {
                gsap.to(icon, {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out",
                  force3D: true
                })
              }
            }

            feature.addEventListener("mouseenter", handleFeatureEnter, { passive: true })
            feature.addEventListener("mouseleave", handleFeatureLeave, { passive: true })
          })
        }
      })

      // Glow animations - optimized
      glowRefs.current.forEach((glow) => {
        if (glow) {
          gsap.set(glow, { opacity: 0, scale: 1 })
          const anim = gsap.to(glow, {
            scale: 1.15,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            force3D: true
          })
          animationsRef.current.push(anim)
        }
      })

      // Subtle CTA Section
      if (ctaSectionRef.current) {
        const st12 = ScrollTrigger.create({
          trigger: ctaSectionRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(ctaSectionRef.current, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power2.out",
              force3D: true
            })
            if (ctaTitleRef.current) {
              gsap.to(ctaTitleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.65,
                delay: 0.15,
                ease: "power3.out",
                force3D: true
              })
            }
            if (ctaDescriptionRef.current) {
              gsap.to(ctaDescriptionRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.55,
                delay: 0.25,
                ease: "power2.out",
                force3D: true
              })
            }
            if (ctaButtonRef.current) {
              gsap.to(ctaButtonRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.5,
                delay: 0.35,
                ease: "power2.out",
                force3D: true
              })
            }
          },
          markers: false,
          refreshPriority: -1
        })
        scrollTriggersRef.current.push(st12)
        gsap.set(ctaSectionRef.current, {
          opacity: 0,
          y: 25,
          scale: 0.98
        })
        if (ctaTitleRef.current) {
          gsap.set(ctaTitleRef.current, { opacity: 0, y: 15 })
        }
        if (ctaDescriptionRef.current) {
          gsap.set(ctaDescriptionRef.current, { opacity: 0, y: 12 })
        }
        if (ctaButtonRef.current) {
          gsap.set(ctaButtonRef.current, { opacity: 0, scale: 0.97, y: 10 })
        }
      }

      // Arrow animation
      if (arrowRef.current) {
        const anim = gsap.to(arrowRef.current, {
          x: 6,
          duration: 0.75,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
          force3D: true
        })
        animationsRef.current.push(anim)
      }

      // Button hover effects
      buttonHoverRefs.current.forEach((hoverDiv) => {
        if (hoverDiv) {
          const button = hoverDiv.closest('button')
          if (button) {
            gsap.set(hoverDiv, { x: "-100%" })
            const handleButtonEnter = () => {
              gsap.to(hoverDiv, {
                x: 0,
                duration: 0.4,
                ease: "power2.out",
                force3D: true
              })
              gsap.to(button, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
                force3D: true
              })
            }
            const handleButtonLeave = () => {
              gsap.to(hoverDiv, {
                x: "-100%",
                duration: 0.4,
                ease: "power2.in",
                force3D: true
              })
              gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
                force3D: true
              })
            }
            button.addEventListener("mouseenter", handleButtonEnter, { passive: true })
            button.addEventListener("mouseleave", handleButtonLeave, { passive: true })
          }
        }
      })
    })


    // CTA button event listeners
    if (ctaButtonRef.current) {
      ctaButtonRef.current.addEventListener("mouseenter", handleCtaButtonEnter, { passive: true })
      ctaButtonRef.current.addEventListener("mouseleave", handleCtaButtonLeave, { passive: true })
    }

    // Refresh ScrollTrigger after all animations are set up
    ScrollTrigger.refresh()

    // Capture current ref values for cleanup
    const currentCtaButton = ctaButtonRef.current
    const currentImageRefs = imageRefs.current.slice()
    const currentImageInnerRefs = imageInnerRefs.current.slice()
    const currentIconRefs = iconRefs.current.slice()
    const currentFeatureRefs = featureRefs.current.slice()

    return () => {
      // Cleanup all ScrollTriggers
      scrollTriggersRef.current.forEach(st => st.kill())
      scrollTriggersRef.current = []

      // Cleanup all animations
      animationsRef.current.forEach(anim => anim.kill())
      animationsRef.current = []

      // Cleanup event listeners
      if (currentCtaButton) {
        currentCtaButton.removeEventListener("mouseenter", handleCtaButtonEnter)
        currentCtaButton.removeEventListener("mouseleave", handleCtaButtonLeave)
      }

      // Reset will-change
      currentImageRefs.forEach(container => {
        if (container) {
          container.style.willChange = "auto"
          const img = currentImageInnerRefs[currentImageRefs.indexOf(container)]
          if (img) img.style.willChange = "auto"
        }
      })
      currentIconRefs.forEach(container => {
        if (container) container.style.willChange = "auto"
      })
      currentFeatureRefs.forEach(features => {
        features.forEach(feature => {
          if (feature) feature.style.willChange = "auto"
        })
      })
    }
  }, [handleCtaButtonEnter, handleCtaButtonLeave])

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-white via-brand-cream/20 to-brand-sand/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-brand-azure/10 opacity-50" />
        <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-brand-moss/10 opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Navbar */}
      <Navbar isPageView={true} onBack={onBack} />

      {/* Main Content */}
      <div className="container relative mx-auto px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24">
        {/* Page Header */}
        <div ref={pageHeaderRef} className="mb-16 text-center">
          <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 dark:bg-blue-500/20 px-4 py-2 bg-opacity-50">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
              {t('servicesPage.pageBadge')}
            </span>
          </div>

          <h1 ref={titleRef} className="mb-6 font-display text-5xl font-black leading-tight text-brand-deep dark:text-foreground sm:text-6xl lg:text-7xl">
            Our
            <span className="block gradient-text mt-2">
              Services
            </span>
          </h1>

          <p ref={descriptionRef} className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-forest/70 dark:text-muted-foreground">
            {t('servicesPage.description')}
          </p>

          {/* Tabs */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex rounded-xl border border-brand-deep/10 bg-white dark:bg-slate-900 dark:border-slate-800 p-1 shadow-md">
              <button
                onClick={() => setActiveTab('individual')}
                className={`px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 ${activeTab === 'individual'
                  ? 'bg-brand-azure text-white shadow-md dark:bg-brand-azure/80 dark:text-white'
                  : 'text-brand-deep/60 hover:text-brand-azure dark:text-slate-400 dark:hover:text-brand-azure'
                  }`}
              >
                Individual Services
              </button>
              <button
                onClick={() => setActiveTab('corporate')}
                className={`px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 ${activeTab === 'corporate'
                  ? 'bg-brand-azure text-white shadow-md dark:bg-brand-azure/80 dark:text-white'
                  : 'text-brand-deep/60 hover:text-brand-azure dark:text-slate-400 dark:hover:text-brand-azure'
                  }`}
              >
                Corporate Services
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={`service-${index}`}
                ref={(el) => {
                  if (el) serviceSectionsRef.current[index] = el
                }}
                className={`relative grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                style={{ contain: "layout style paint" }}
              >
                {/* Decorative number */}
                <div className="absolute -top-8 left-0 lg:-left-8 pointer-events-none">
                  <span
                    ref={(el) => {
                      if (el) decorativeNumberRefs.current[index] = el
                    }}
                    className="font-display text-8xl font-black text-blue-500/5 dark:text-blue-400/5 select-none"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Image with enhanced interactions */}
                <div
                  ref={(el) => {
                    if (el) imageRefs.current[index] = el
                  }}
                  className={`group relative overflow-hidden rounded-3xl ${!isEven ? 'lg:order-2' : ''}`}
                >
                  {/* Animated glow */}
                  <div
                    ref={(el) => {
                      if (el) glowRefs.current[index] = el
                    }}
                    className="absolute -inset-4 bg-gradient-to-r from-brand-azure/40 via-brand-moss/40 to-brand-azure/40 rounded-3xl opacity-0 -z-10 blur-xl"
                    aria-hidden="true"
                  />

                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand-azure/30 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-2xl">
                    {/* Image with lazy loading */}
                    <img
                      ref={(el) => {
                        if (el) imageInnerRefs.current[index] = el
                      }}
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/40 via-brand-forest/30 to-transparent dark:from-slate-900/60 dark:via-slate-900/40 transition-opacity duration-500 group-hover:opacity-70" aria-hidden="true" />

                    {/* Floating Icon Badge with pulse */}
                    <div
                      ref={(el) => {
                        if (el) iconRefs.current[index] = el
                      }}
                      className="absolute left-6 top-6"
                    >
                      <div
                        ref={(el) => {
                          if (el) iconInnerRefs.current[index] = el
                        }}
                        className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-2xl ring-4 ring-white/40 dark:ring-slate-900/40`}
                      >
                        <span className="text-3xl" role="img" aria-label={service.title}>{service.icon}</span>
                        <div
                          ref={(el) => {
                            if (el) pulseRefs.current[index] = el
                          }}
                          className="absolute inset-0 rounded-2xl bg-white opacity-0"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Stats badge */}
                    <div
                      ref={(el) => {
                        if (el) statsBadgeRefs.current[index] = el
                      }}
                      className="absolute bottom-6 right-6 rounded-xl border border-white/30 bg-white/95 dark:bg-slate-900/95 dark:border-slate-700 backdrop-blur-sm px-4 py-3 shadow-lg"
                    >
                      <div className="flex items-baseline gap-2">
                        <span
                          ref={(el) => {
                            if (el) statsValueRefs.current[index] = el
                          }}
                          className={`font-display text-2xl font-black bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}
                        >
                          {service.stats.value}
                        </span>
                        <span className="text-xs font-bold text-brand-deep/70 dark:text-muted-foreground uppercase">
                          {service.stats.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content with staggered animations */}
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <div
                    ref={(el) => {
                      if (el) contentRefs.current[index] = el
                    }}
                  >
                    {/* Category badge */}
                    <div
                      ref={(el) => {
                        if (el) categoryBadgeRefs.current[index] = el
                      }}
                      className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-azure/30 bg-brand-azure/10 dark:bg-brand-azure/20 px-3 py-1 bg-opacity-50"
                    >
                      <Star className="h-3 w-3 text-blue-500 fill-blue-500" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">{t('servicesPage.premiumService')}</span>
                    </div>

                    <h2
                      ref={(el) => {
                        if (el) titleTextRefs.current[index] = el
                      }}
                      className="mb-4 font-display text-3xl font-black text-brand-deep dark:text-foreground sm:text-4xl lg:text-5xl"
                    >
                      {service.title}
                    </h2>

                    <p
                      ref={(el) => {
                        if (el) descriptionTextRefs.current[index] = el
                      }}
                      className="mb-8 text-base leading-relaxed text-brand-forest/80 dark:text-muted-foreground sm:text-lg"
                    >
                      {service.description}
                    </p>

                    {/* Features with stagger */}
                    <div className="mb-8 space-y-3">
                      {service.features.map((feature, idx) => (
                        <div
                          key={`feature-${index}-${idx}`}
                          ref={(el) => {
                            if (!featureRefs.current[index]) {
                              featureRefs.current[index] = []
                            }
                            if (el) featureRefs.current[index][idx] = el
                          }}
                          className="group flex items-center gap-3 rounded-lg border border-transparent p-3 transition-all hover:border-brand-azure/20 hover:bg-brand-azure/5 dark:hover:bg-brand-azure/10 hover:shadow-md"
                        >
                          <div
                            ref={(el) => {
                              if (!featureIconRefs.current[index]) {
                                featureIconRefs.current[index] = []
                              }
                              if (el) featureIconRefs.current[index][idx] = el
                            }}
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${service.color} shadow-md`}
                          >
                            <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={2.5} aria-hidden="true" />
                          </div>
                          <span className="text-sm font-semibold text-brand-forest/80 dark:text-muted-foreground/80 transition-colors group-hover:text-brand-deep dark:group-hover:text-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                      <Button
                        onClick={onContactClick}
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-azure via-brand-sand to-brand-azure px-6 py-4 font-bold uppercase tracking-wide text-brand-deep dark:text-slate-900 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-azure/50"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {t('servicesPage.requestService')}
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                        <div
                          ref={(el) => {
                            if (el) buttonHoverRefs.current[index * 2] = el
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-brand-sand to-brand-azure"
                          aria-hidden="true"
                        />
                      </Button>

                      <Button
                        variant="outline"
                        className="group rounded-xl border-2 border-brand-deep/20 dark:border-white/20 bg-white/50 dark:bg-slate-800/50 px-6 py-4 font-bold uppercase tracking-wide text-brand-deep dark:text-white bg-opacity-50 transition-all hover:border-brand-azure hover:bg-brand-azure/10"
                      >
                        <span className="flex items-center gap-2">
                          <Clock className="h-5 w-5" aria-hidden="true" />
                          {t('common.learnMore')}
                        </span>
                      </Button>
                    </div>

                    {/* Quality badge */}
                    <div className="mt-6 flex items-center gap-2 text-sm text-brand-forest/60 dark:text-muted-foreground/60">
                      <Award className="h-5 w-5 text-blue-500" aria-hidden="true" />
                      <span className="font-medium">{t('servicesPage.certifiedQuality')}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div ref={ctaSectionRef} className="mt-24 overflow-hidden rounded-3xl border border-brand-azure/20 dark:border-brand-azure/10 bg-gradient-to-br from-brand-deep via-brand-forest to-brand-moss dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-12 text-center shadow-2xl sm:p-16">
          <div className="relative">
            <h3 ref={ctaTitleRef} className="mb-4 font-display text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              {t('servicesPage.cta.title')}
            </h3>
            <p ref={ctaDescriptionRef} className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-brand-cream/90 dark:text-slate-300">
              {t('servicesPage.cta.description')}
            </p>
            <Button
              ref={ctaButtonRef}
              onClick={onContactClick}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-azure via-brand-sand to-brand-azure px-10 py-5 text-lg font-black uppercase tracking-wide text-brand-deep dark:text-slate-900 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-azure/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('servicesPage.contactNow')}
                <div ref={arrowRef}>
                  <ArrowRight className="h-6 w-6" aria-hidden="true" />
                </div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-sand to-brand-azure opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            </Button>

            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-azure/20 opacity-50" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-brand-sand/20 opacity-50" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Trusted Partner Section */}
      <TrustedPartner />
    </div>
  )
}
