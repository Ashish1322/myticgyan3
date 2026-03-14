import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Factory, Building2, Home, Star, Layout } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Astrology",
    slug: "astrology",
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
    points: [
      "Boost prosperity for offices, shops, and hotels",
      "Strategic placement of cabins and cash counters",
      "Improve financial flow and customer footfall",
    ],
  },
  {
    icon: Home,
    title: "Vedic Vastu",
    slug: "vedic-vastu",
    points: [
      "Traditional consultation for holistic harmony",
      "Energy correction without structural demolition",
      "Alignment with the five natural elements",
    ],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-champagne/50">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Comprehensive Vastu Solutions
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-background rounded-xl p-8 border border-gold/20 shadow-md hover:shadow-xl transition-shadow duration-500 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
