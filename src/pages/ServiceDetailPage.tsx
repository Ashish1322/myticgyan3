import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Factory, Building2, Sparkles, ScrollText, Brain, Moon, Map, Star, Layout, CheckCircle, ArrowLeft } from "lucide-react";

const serviceData: Record<string, {
  icon: any;
  title: string;
  tagline: string;
  bannerImage: string;
  description: string[];
  benefits: string[];
  process: string[];
}> = {
  "astrology": {
    icon: Star,
    title: "Astrology",
    tagline: "Align your life path with the celestial movements",
    bannerImage: "https://images.unsplash.com/photo-1506318137071-a8e063b4b47e?auto=format&fit=crop&q=80",
    description: [
      "Our Astrology services provide deep insights into your life's journey by analyzing planetary positions at birth.",
      "We guide you in career, relationships, health, and finances through detailed horoscope and predictive techniques."
    ],
    benefits: [
      "Clarity on life purpose and direction",
      "Relationship and compatibility insights",
      "Favorable timing (Mahadasha analysis)",
      "Effective remedies for planetary imbalances"
    ],
    process: [
      "Birth details collection",
      "Chart preparation and analysis",
      "Consultation session",
      "Remedy and follow-up guidance"
    ],
  },

  "vedic-astrology": {
    icon: Sparkles,
    title: "Vedic Astrology",
    tagline: "Ancient wisdom to decode your destiny and karma",
    bannerImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80",
    description: [
      "Vedic Astrology is a time-tested Indian system that reveals deep karmic patterns and life events.",
      "It provides accurate predictions and remedies based on planetary movements and ancient scriptures."
    ],
    benefits: [
      "Deep karmic insights",
      "Accurate life predictions",
      "Spiritual and practical remedies",
      "Guidance for major life decisions"
    ],
    process: [
      "Kundali creation",
      "Planetary position analysis",
      "Dasha and transit study",
      "Remedial guidance"
    ],
  },

  "bhrigu-nandi-nadi": {
    icon: ScrollText,
    title: "Bhrigu Nandi Nadi",
    tagline: "Highly precise predictions using Nadi principles",
    bannerImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80",
    description: [
      "Bhrigu Nandi Nadi is an advanced predictive system focusing on planetary combinations rather than houses.",
      "It provides highly accurate insights into life events and their timing."
    ],
    benefits: [
      "Accurate event predictions",
      "Deep understanding of life patterns",
      "Insights into past, present, and future",
      "Clarity on major decisions"
    ],
    process: [
      "Chart decoding using Nadi principles",
      "Planetary combination analysis",
      "Event timing prediction",
      "Consultation and remedies"
    ],
  },

  "kp-astrology": {
    icon: Brain,
    title: "K.P Astrology",
    tagline: "Scientific astrology with precise event prediction",
    bannerImage: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&q=80",
    description: [
      "KP Astrology (Krishnamurti Paddhati) is a modern system known for its accuracy.",
      "It uses sub-lord theory to predict events with high precision."
    ],
    benefits: [
      "Highly accurate predictions",
      "Clear yes/no answers",
      "Best for career and marriage queries",
      "Scientific approach"
    ],
    process: [
      "KP chart creation",
      "Sub-lord analysis",
      "Event prediction",
      "Guidance and remedies"
    ],
  },

  "nakshatra-analysis": {
    icon: Moon,
    title: "Nakshatra Analysis",
    tagline: "Understand your personality through your birth star",
    bannerImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80",
    description: [
      "Nakshatras represent subtle energies influencing your personality and life path.",
      "This analysis helps uncover your true nature, strengths, and karmic patterns."
    ],
    benefits: [
      "Deep personality insights",
      "Life path clarity",
      "Relationship understanding",
      "Emotional and spiritual growth"
    ],
    process: [
      "Nakshatra identification",
      "Behavioral analysis",
      "Life pattern study",
      "Guidance session"
    ],
  },

  "residential-vastu": {
    icon: Layout,
    title: "Residential Vastu",
    tagline: "Create a harmonious and peaceful living environment",
    bannerImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    description: [
      "Residential Vastu ensures your home promotes health, peace, and prosperity.",
      "We optimize layouts and directions for maximum positive energy flow."
    ],
    benefits: [
      "Better family harmony",
      "Improved health and well-being",
      "Positive environment",
      "Removal of negative energy"
    ],
    process: [
      "Layout analysis",
      "Directional mapping",
      "Remedy suggestions",
      "Final balancing"
    ],
  },

  "commercial-vastu": {
    icon: Building2,
    title: "Commercial Vastu",
    tagline: "Design spaces that attract growth and success",
    bannerImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    description: [
      "Commercial Vastu enhances business growth and financial success.",
      "We optimize layouts to improve customer experience and profitability."
    ],
    benefits: [
      "Increased revenue",
      "Better customer flow",
      "Improved team productivity",
      "Financial stability"
    ],
    process: [
      "Site analysis",
      "Energy audit",
      "Recommendations",
      "Implementation support"
    ],
  },

  "industrial-vastu": {
    icon: Factory,
    title: "Industrial Vastu",
    tagline: "Boost productivity and reduce operational challenges",
    bannerImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    description: [
      "Industrial Vastu focuses on optimizing production environments.",
      "We align machinery and workflow for maximum efficiency."
    ],
    benefits: [
      "Higher productivity",
      "Reduced downtime",
      "Safer work environment",
      "Efficient workflow"
    ],
    process: [
      "Site inspection",
      "Layout analysis",
      "Correction plan",
      "Execution support"
    ],
  },

  "land-selection": {
    icon: Map,
    title: "Land Selection",
    tagline: "Choose the right land for long-term prosperity",
    bannerImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
    description: [
      "Selecting the right plot is the foundation of success in Vastu.",
      "We analyze direction, soil, surroundings, and energy before construction."
    ],
    benefits: [
      "Strong foundation for success",
      "Positive energy from the beginning",
      "Avoid future Vastu defects",
      "Better long-term growth"
    ],
    process: [
      "Site evaluation",
      "Directional analysis",
      "Soil and energy testing",
      "Final recommendation"
    ],
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">Service Not Found</h1>
        <Link to="/services" className="text-gold hover:underline">← Back to Services</Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <section className="relative py-32 overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.bannerImage})` }}
        >
          {/* Dark Green Gradient Overlay to match your brand and Screenshot */}
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/90" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-2xl bg-gold/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 border border-gold/30"
          >
            <Icon className="w-10 h-10 text-gold" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-xl max-w-2xl mx-auto font-light"
          >
            {service.tagline}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background mandala-bg">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-gold hover:underline mb-10 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {service.description.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-5 text-lg">{para}</p>
            ))}
          </motion.div>

          <motion.div className="mt-14" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-2xl font-bold text-primary mb-6">Key Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 bg-champagne/50 rounded-lg p-4 border border-gold/10">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="mt-14" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <h2 className="text-2xl font-bold text-primary mb-6">Our Process</h2>
            <div className="space-y-4">
              {service.process.map((step, i) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold text-gold-foreground flex items-center justify-center shrink-0 font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="mt-14 text-center bg-primary rounded-xl p-10 relative overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <div className="absolute inset-0 sacred-geometry opacity-15" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">Ready to Transform Your Space?</h3>
              <p className="text-primary-foreground/70 mb-6">Book a consultation and experience the power of Vedic Vastu.</p>
              <Link to="/contact" className="inline-block px-8 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:brightness-110 transition-all">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
