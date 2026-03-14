import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import founder1 from "@/assets/founder1.jpeg";
import founder3 from "@/assets/founder3.jpeg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background mandala-bg">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            The Science of Sacred Spaces
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              At <strong className="text-primary">Mystic Vigyan</strong>, we bridge the timeless wisdom of
              Vedic Vastu Shastra with modern architectural understanding. Our approach blends
              scientific analysis with spiritual insight to create spaces that nurture well-being,
              prosperity, and harmony.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With years of dedicated practice, we have helped hundreds of families
              and businesses transform their environments. Our consultations address the subtle
              energies within a space — balancing the five elements to promote health, wealth,
              and spiritual growth.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
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
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="space-y-4">
              <img
                src={founder1}
                alt="Mystic Vigyan Consultant"
                className="rounded-lg shadow-lg w-full h-64 object-cover object-top"
              />
            </div>
            <div className="pt-8">
              <img
                src={founder3}
                alt="Mystic Vigyan Consultant"
                className="rounded-lg shadow-lg w-full h-64 object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
