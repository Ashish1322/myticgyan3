import Hero from "@/components/Hero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Factory,
  Building2,
  Home,
  Star,
  Layout,
  Award,
  Users,
  Shield,
  Sparkles,
  BookOpen,
} from "lucide-react";
import geoVastuCertificate from "@/assets/geo-vastu-certificate.jpeg";
import vastuPractice from "@/assets/vastu-practice.jpeg";
import vedicVastuCertificate from "@/assets/vedic-vastu-certificate.png";
import vedicVastuVideo from "@/assets/vedic-vastu.mp4";
import aboutHero from "@/assets/about-hero.png";

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

const whyChooseUs = [
  {
    icon: Award,
    title: "Expert Consultants",
    description: "Our certified Vastu experts bring years of experience and deep knowledge of Vedic principles to every consultation.",
  },
  {
    icon: BookOpen,
    title: "Ancient Wisdom, Modern Application",
    description: "We blend time-tested Vastu Shastra with practical solutions suited to contemporary spaces and lifestyles.",
  },
  {
    icon: Shield,
    title: "Proven Results",
    description: "Thousands of satisfied clients have experienced positive transformations in their homes and businesses.",
  },
  {
    icon: Users,
    title: "Personalized Consultations",
    description: "Every space and client is unique. We tailor our recommendations to your specific needs, goals, and property layout.",
  },
  {
    icon: Sparkles,
    title: "Holistic Energy Correction",
    description: "Beyond layout changes, we offer remedies and corrections that enhance positive energy flow without major renovations.",
  },
];

const Index = () => {
  const aboutRef = useRef(null);
  const whatIsRef = useRef(null);
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-80px" });
  const whatIsInView = useInView(whatIsRef, { once: true, margin: "-80px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-80px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });

  return (
    <>
      <Hero />

      {/* About Us */}
      <section className="py-20 md:py-28 bg-champagne/50" ref={aboutRef}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-14">
              <motion.div
                className="relative order-2 md:order-1 overflow-hidden rounded-2xl shadow-lg ring-1 ring-primary/10 min-h-[320px] md:min-h-[380px] flex items-center bg-champagne/30"
                initial={{ opacity: 0, x: -24 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={aboutHero}
                  alt="Mystic Vigyan - Vedic Vastu and holistic space consulting"
                  className="w-full h-full object-contain rounded-2xl"
                />
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 via-white/15 to-transparent pointer-events-none"
                  aria-hidden
                />
                <div className="absolute -bottom-2 -right-2 w-24 h-24 border-2 border-gold/40 rounded-2xl -z-10" aria-hidden />
              </motion.div>
              <div className="order-1 md:order-2 space-y-6">
                <motion.div
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
                    Who We Are
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                    About Us
                  </h2>
                  <div className="w-20 h-0.5 bg-gold md:mx-0 mx-auto" />
                </motion.div>
                <motion.div
                  className="space-y-4 text-center md:text-left"
                  initial={{ opacity: 0, y: 24 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    At <strong className="text-primary">Mystic Vigyan</strong>, we bridge the timeless wisdom of Vedic Vastu Shastra with modern architectural understanding. Our approach blends scientific analysis with spiritual insight to create spaces that nurture well-being, prosperity, and harmony.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With years of dedicated practice, we have helped hundreds of families and businesses transform their environments. Our consultations address the subtle energies within a space — balancing the five elements to promote health, wealth, and spiritual growth.
                  </p>
                </motion.div>
                <motion.div
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                { num: "500+", label: "Consultations" },
                { num: "15+", label: "Years Experience" },
                { num: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gold">{stat.num}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
              </div>
            </div>
           
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={aboutInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/about"
                className="inline-block text-gold font-semibold hover:underline"
              >
                Learn more about us →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Vastu */}
      <section className="py-20 md:py-28 bg-background" ref={whatIsRef}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={whatIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
                Knowledge
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                What is Vastu?
              </h2>
              <div className="w-20 h-0.5 bg-gold mx-auto" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="prose prose-lg text-muted-foreground space-y-4 order-2 md:order-1"
                initial={{ opacity: 0, x: -24 }}
                animate={whatIsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <p>
                  <strong className="text-primary">Vastu Shastra</strong> is an ancient Indian science of architecture and design that harmonizes built spaces with natural and cosmic energies. Rooted in the Vedas, it guides the placement of rooms, entrances, and objects to promote health, prosperity, and peace.
                </p>
                <p>
                  When your space aligns with Vastu principles, energy flows freely—supporting success in business, harmony at home, and overall well-being. Whether you are building new or correcting an existing space, Vastu offers time-tested solutions for a balanced life.
                </p>
                <Link
                  to="/about"
                  className="inline-block mt-6 text-gold font-semibold hover:underline"
                >
                  Learn more about our approach →
                </Link>
              </motion.div>
              <motion.div
                className="rounded-xl overflow-hidden shadow-xl border border-gold/20 order-1 md:order-2 max-h-[320px] md:max-h-[380px]"
                initial={{ opacity: 0, x: 24 }}
                animate={whatIsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <img src={vastuPractice} alt="Traditional Vastu practice and energy alignment" className="w-full h-full max-h-[320px] md:max-h-[380px] object-cover object-center" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-champagne/50" ref={servicesRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              From industrial facilities to homes, we offer comprehensive Vastu solutions tailored to your space.
            </p>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.slice(0, 3).map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-background rounded-xl p-8 border border-gold/20 shadow-md hover:shadow-xl transition-shadow duration-500 group"
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-gold font-semibold text-sm hover:underline"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={servicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to="/services"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary relative overflow-hidden" ref={whyRef}>
        <div className="absolute inset-0 sacred-geometry opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              The Mystic Vigyan Difference
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-4">
              We are committed to bringing authentic Vastu wisdom and measurable positive change to your space.
            </p>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </motion.div>

          <div className="flex flex-col lg:grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-12 max-w-6xl mx-auto lg:items-stretch">
            <motion.div
              className="w-full max-w-[240px] mx-auto lg:max-w-none lg:mx-0 lg:min-h-0 lg:h-full flex justify-center lg:block"
              initial={{ opacity: 0, x: -24 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full aspect-[9/16] lg:aspect-[9/16] lg:h-full lg:w-[auto] rounded-xl overflow-hidden border border-gold/20 shadow-xl lg:max-h-full">
                <video
                  src={vedicVastuVideo}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </motion.div>
            <div className="w-full flex flex-col gap-6 lg:min-h-0">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-primary-foreground/10 backdrop-blur rounded-xl p-8 border border-gold/20 text-center lg:text-left hover:bg-primary-foreground/15 transition-colors flex items-center gap-6"
                  initial={{ opacity: 0, y: 36 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <div className="w-14 h-14 shrink-0 rounded-full bg-gold/20 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-champagne/70">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a consultation and let our experts guide you toward a more harmonious, prosperous environment.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gold text-gold-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
