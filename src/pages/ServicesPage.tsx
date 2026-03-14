import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";


import { Factory, Building2, Home, Star, Layout, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Astrology",
    slug: "astrology",
    description: "Decode celestial alignments to gain clarity on your life path, career, and personal growth.",
    points: [
      "In-depth Horoscope & Kundali analysis",
      "Guidance on career, health, and relationships",
      "Effective Vedic remedies for planetary balance",
    ],
  },
  {
    icon: Layout,
    title: "Residential Vastu",
    slug: "residential-vastu",
    description: "Tailored Vastu solutions for modern homes to ensure health, happiness, and family prosperity.",
    points: [
      "Optimize home layouts for health and peace",
      "Directional mapping for bedrooms and kitchens",
      "Eliminate negative influences in living spaces",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Vastu",
    slug: "industrial-vastu",
    description: "Maximize operational efficiency and reduce workplace obstacles in manufacturing units.",
    points: [
      "Optimize machinery placement for efficiency",
      "Reduce workplace accidents and downtime",
      "Energy balance for large-scale manufacturing",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Vastu",
    slug: "commercial-vastu",
    description: "Design business spaces that attract high footfall, financial liquidity, and success.",
    points: [
      "Boost prosperity for offices, shops, and hotels",
      "Strategic placement of cabins and cash counters",
      "Improve financial flow and customer footfall",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Vedic Vastu",
    slug: "vedic-vastu",
    description: "Ancient energy correction techniques to harmonize your environment without structural changes.",
    points: [
      "Traditional consultation for holistic harmony",
      "Energy correction without structural demolition",
      "Alignment with the five natural elements",
    ],
  },
];

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

      <section className="py-24 bg-champagne/50" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div key={service.title} className="bg-background rounded-xl p-8 border border-gold/20 shadow-md hover:shadow-xl transition-shadow duration-500 group" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h2 className="text-xl font-bold text-primary mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${service.slug}`} className="inline-block px-6 py-2.5 bg-gold text-gold-foreground text-sm font-semibold rounded-lg hover:brightness-110 transition-all">
                  View Details
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
