import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";


import { Factory, Building2, Map, Star, Layout, Sparkles, ScrollText, Brain, Moon } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Astrology",
    slug: "astrology",
    description:
      "Decode celestial alignments to gain clarity on your life path, career, and personal growth.",
    points: [
      "In-depth Horoscope & Kundali analysis",
      "Guidance on career, health, and relationships",
      "Effective Vedic remedies for planetary balance",
    ],
  },
  {
    icon: Sparkles,
    title: "Vedic Astrology",
    slug: "vedic-astrology",
    description:
      "Ancient Indian astrology system offering deep insights into destiny, karma, and life events.",
    points: [
      "Detailed Janam Kundali analysis",
      "Predictions based on planetary positions",
      "Remedies using mantras, gemstones, and rituals",
    ],
  },
  {
    icon: ScrollText,
    title: "Bhrigu Nandi Nadi",
    slug: "bhrigu-nandi-nadi",
    description:
      "A unique Nadi astrology system that provides highly accurate predictions based on planetary combinations.",
    points: [
      "Insights into past, present, and future",
      "Precise timing of life events",
      "Advanced predictive astrology techniques",
    ],
  },
  {
    icon: Brain,
    title: "K.P Astrology",
    slug: "kp-astrology",
    description:
      "Krishnamurti Paddhati astrology offers scientific and precise predictions using sub-lord theory.",
    points: [
      "Highly accurate event predictions",
      "Sub-lord based analysis",
      "Best for career, marriage, and finance guidance",
    ],
  },
  {
    icon: Moon,
    title: "Nakshatra Analysis",
    slug: "nakshatra-analysis",
    description:
      "Understand your personality, strengths, and destiny through the power of your birth star (Nakshatra).",
    points: [
      "Personality and behavioral insights",
      "Life path and karmic analysis",
      "Relationship and career guidance",
    ],
  },
  {
    icon: Layout,
    title: "Residential Vastu",
    slug: "residential-vastu",
    description:
      "Tailored Vastu solutions for modern homes to ensure health, happiness, and family prosperity.",
    points: [
      "Optimize home layouts for peace and harmony",
      "Directional mapping for rooms and spaces",
      "Remove negative energy influences",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Vastu",
    slug: "commercial-vastu",
    description:
      "Design business environments that attract growth, success, and financial stability.",
    points: [
      "Strategic placement for offices and shops",
      "Improve customer flow and engagement",
      "Enhance financial prosperity",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Vastu",
    slug: "industrial-vastu",
    description:
      "Boost productivity and reduce operational challenges in industrial and manufacturing setups.",
    points: [
      "Optimize machinery and workflow layout",
      "Reduce downtime and workplace issues",
      "Balance energy for large-scale operations",
    ],
  },
  {
    icon: Map,
    title: "Land Selection",
    slug: "land-selection",
    description:
      "Choose the right plot based on Vastu principles to ensure long-term prosperity and success.",
    points: [
      "Analyze plot direction and surroundings",
      "Soil and energy evaluation",
      "Ensure positive energy before construction",
    ],
  },
];

const ServicesPage = () => {
  const ref = useRef(null);
  const servicesRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-80px" });

  return (
    <>
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 sacred-geometry opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Our Services</h1>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
        </div>
      </section>

      <section className="py-24 bg-champagne/50" ref={servicesRef}>
        <div className="container mx-auto px-6">
          

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
  <motion.div
    key={service.title}
    className="bg-[#f3f8f5] rounded-lg p-10 text-center 
    border border-[#e0ebe5]
    transition-all duration-500 group 
    hover:-translate-y-2 hover:shadow-xl"
    initial={{ opacity: 0, y: 40 }}
    animate={servicesInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
  >
    {/* Icon Circle */}
    <div className="flex justify-center mb-6">
      <div className="w-20 h-20 rounded-full border border-dashed border-[#c9a13b]/40 
      flex items-center justify-center group-hover:border-[#c9a13b] transition-all">
        
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center 
        group-hover:bg-[#c9a13b]/10 transition-all duration-500">
          
          <service.icon className="w-7 h-7 text-[#c9a13b]" />
        </div>
      </div>
    </div>

    {/* Title */}
    <h3 className="text-lg font-semibold text-[#1f4d3a] mb-3">
      {service.title}
    </h3>

    {/* Underline */}
    <div className="w-10 h-[2px] bg-[#c9a13b] mx-auto mb-4 
    group-hover:w-16 transition-all duration-300"></div>

    {/* CTA */}
    <Link
      to={`/services/${service.slug}`}
      className="text-[#c9a13b] text-sm font-semibold tracking-wide 
      hover:underline"
    >
      READ MORE
    </Link>
  </motion.div>
))}
          </div>
         
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
