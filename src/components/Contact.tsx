import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 sacred-geometry opacity-20" />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Begin Your Transformation
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto grid gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {[
            { icon: Phone, text: "Call for a consultation", detail: "+91-XXXXX XXXXX" },
            { icon: Mail, text: "Email us", detail: "mysticvigyanm@gmail.com" },
            { icon: MapPin, text: "Based in India", detail: "Serving clients worldwide" },
          ].map(({ icon: Icon, text, detail }) => (
            <div
              key={text}
              className="flex items-center gap-5 bg-primary-foreground/5 border border-gold/20 rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-primary-foreground font-medium">{text}</p>
                <p className="text-primary-foreground/60 text-sm">{detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
