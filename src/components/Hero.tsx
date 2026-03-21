import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import he from "@/assets/hero0.png";
import he3 from "@/assets/hero00.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${he3})` }} />
      <div className="absolute inset-0 bg-primary/50" />
      

      <div className="container relative z-10 mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.img src={logo} alt="Mystic Vigyan Logo" className="w-28 h-28 md:w-36 md:h-36 mb-8" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} />
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Where vastu Aligns Your Space & <span className="text-gold">Astrology Guides your destiny </span>
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl font-light" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          Expert Vastu and Astrology guidance to align your spaces and destiny for prosperity and well-being.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <Link to="/contact" className="px-8 py-4 bg-gold text-gold-foreground font-semibold rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg">
              Book Consultation
            </Link>
            <Link to="/about" className="px-8 py-4 border border-gold/50 text-primary-foreground font-semibold rounded-lg hover:bg-gold/10 transition-all duration-300">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
