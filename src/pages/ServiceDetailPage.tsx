import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Factory, Building2, Home, Star, Layout, CheckCircle, ArrowLeft } from "lucide-react";

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
      "Our Astrology services provide deep insights into your life's journey by analyzing the positions of celestial bodies at the time of your birth. We help you understand your strengths, challenges, and the timing of significant life events.",
      "Through detailed horoscope analysis and Prashna Kundali, we offer guidance on career, relationships, health, and financial stability, helping you make informed decisions aligned with your destiny."
    ],
    benefits: [
      "Clarity on life purpose and career path",
      "Guidance on relationship compatibility",
      "Identification of favorable time periods (Mahadashas)",
      "Effective Vedic remedies for planetary doshas"
    ],
    process: [
      "Birth detail collection and chart generation",
      "In-depth analysis of planetary positions",
      "One-on-one consultation for life guidance",
      "Remedial suggestions and follow-up support"
    ],
  },
  "residential-vastu": {
    icon: Layout,
    title: "Residential Vastu",
    tagline: "Infuse your living space with peace and prosperity",
    bannerImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    description: [
      "Residential Vastu focuses on creating a balanced environment within your home. By optimizing the flow of energy (Prana), we ensure that your living space supports the health and happiness of every family member.",
      "We provide specific layouts for bedrooms, kitchens, and entrances to eliminate negative influences and invite abundance into your household."
    ],
    benefits: [
      "Enhanced family harmony and mental peace",
      "Better physical health and vitality",
      "Positive environment for children's growth",
      "Removal of stagnant energy from the home"
    ],
    process: [
      "Home floor plan evaluation",
      "Directional energy mapping",
      "Practical remedy implementation (no demolition)",
      "Final energy balancing session"
    ],
  },
  "industrial-vastu": {
    icon: Factory,
    title: "Industrial Vastu",
    tagline: "Maximize efficiency and prosperity in your industrial facilities",
    bannerImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    description: [
      "Industrial Vastu focuses on aligning your factory, warehouse, or manufacturing unit with the cosmic energies that govern productivity. We optimize the placement of heavy machinery, raw materials, and administrative zones.",
      "Our consultations consider the direction of entrances, water elements, and fire elements (furnaces/boilers) to reduce accidents and increase output."
    ],
    benefits: [
      "Improved workflow and operational efficiency",
      "Reduced workplace accidents and downtime",
      "Optimal placement of heavy machinery",
      "Balanced energy flow for mass production"
    ],
    process: [
      "On-site inspection and measurement",
      "Analysis of directional alignments",
      "Detailed report with Vastu corrections",
      "Implementation guidance"
    ],
  },
  "commercial-vastu": {
    icon: Building2,
    title: "Commercial Vastu",
    tagline: "Attract prosperity and success to your business spaces",
    bannerImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    description: [
      "Transform offices, retail shops, and showrooms into spaces that attract customers and increase revenue. We analyze the layout from the reception to the cash counter.",
      "Proper directional alignment impacts employee productivity and customer experience, ensuring your brand identity is reflected in a high-vibration environment."
    ],
    benefits: [
      "Increased customer footfall",
      "Improved financial flow and cash liquidity",
      "Enhanced employee teamwork",
      "Strategic placement of executive cabins"
    ],
    process: [
      "Commercial property evaluation",
      "Business-specific energy audit",
      "Customized Vastu recommendations",
      "Follow-up support"
    ],
  },
  "vedic-vastu": {
    icon: Home,
    title: "Vedic Vastu",
    tagline: "Traditional science of living in harmony with nature",
    bannerImage: "https://images.unsplash.com/photo-1542601906970-14197b4c1510?auto=format&fit=crop&q=80",
    description: [
      "Vedic Vastu is the ancient science of aligning human-made structures with the five elements (Pancha Bhoota). This holistic approach ensures your space is a sanctuary of spiritual and physical well-being.",
      "We use ancient mathematical calculations to determine the most auspicious dimensions and orientations for any structure."
    ],
    benefits: [
      "Alignment with the five natural elements",
      "Spiritual growth and positive vibrations",
      "Energy correction without structural changes",
      "Long-term stability and success"
    ],
    process: [
      "Consultation on Vedic principles",
      "Assessment of elemental balance",
      "Personalized report with remedies",
      "Ongoing spiritual guidance"
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
