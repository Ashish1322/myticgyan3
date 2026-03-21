import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.png";
import consultantLobby from "@/assets/consult-lobby.jpeg";
import consultantEvent from "@/assets/consultant-event.jpeg";
import geoVastuCertificate from "@/assets/geo-vastu-certificate.jpeg";
import vedicVastuCertificate from "@/assets/vedic-vastu-temp.jpeg";
import vedicVastuVideo from "@/assets/vedic-vastu.mp4";
import astro from "@/assets/about/astrologer.jpeg";
import vastu from "@/assets/about/vastu.jpeg";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 sacred-geometry opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">The Science of Sacred Spaces</h1>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
        </div>
      </section>

      <section className="py-24 bg-background mandala-bg" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div className="order-1  md:order-2" initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                At <strong className="text-primary">Mystic Vigyan</strong>, we bridge the timeless wisdom of Vedic Vastu Shastra with modern architectural understanding. Our approach blends scientific analysis with spiritual insight to create spaces that nurture well-being, prosperity, and harmony.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With years of dedicated practice, we have helped hundreds of families and businesses transform their environments. Our consultations address the subtle energies within a space — balancing the five elements to promote health, wealth, and spiritual growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team brings deep knowledge of ancient texts combined with practical, actionable recommendations. Whether you are building a new home, renovating an office, or optimizing a factory, we provide holistic guidance that respects tradition while embracing modern needs.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { num: "5800+", label: "Consultations" },
                  { num: "16+", label: "Years Experience" },
                  { num: "100%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-gold">{stat.num}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link to="/services" className="inline-block mt-8 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:brightness-110 transition-all">
                Explore Our Services
              </Link>
            </motion.div>

            <motion.div
              className="order-2 md:order-3 w-full grid grid-cols-2 gap-3 sm:gap-4"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="rounded-xl overflow-hidden shadow-xl border border-gold/20 bg-muted/30">
                <img
                  src={astro}
                  alt="Welcome to Mystic Vigyan — astrological guidance and soul path discovery"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl border border-gold/20 bg-muted/30">
                <img
                  src={vastu}
                  alt="Vedic Vastu Shastra — sacred space and architectural harmony"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team & Environment */}
      <section className="py-24 bg-champagne/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Our Space & Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Our Experts</h2>
              <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              
              <motion.div className="rounded-xl overflow-hidden shadow-lg border border-gold/20 bg-background" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <img src={consultantLobby} alt="Mystic Vigyan consultation environment" className="w-full h-96 object-cover" />
                <div className="p-4 text-center">
                  <p className="text-primary font-semibold">Anshu Saggi (Vastu Expert)</p>
                  <p className="text-muted-foreground text-sm">Helping you create balanced spaces that attract prosperity, peace, and positive energy.</p>
                </div>
              </motion.div>
              <motion.div className="rounded-xl overflow-hidden shadow-lg border border-gold/20 bg-background" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <img src={consultantEvent} alt="Mystic Vigyan at professional events" className="w-full h-96 object-cover" />
                <div className="p-4 text-center">
                  <p className="text-primary font-semibold">Munish Saggi (Astrologer & Researcher)</p>
                  <p className="text-muted-foreground text-sm">Decoding cosmic patterns to provide accurate guidance for life decisions and spiritual growth.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-background mandala-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Credentials</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Real Results, Real Spaces</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">A glimpse of how we’ve transformed spaces with Vastu.</p>
              <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
            </motion.div>
            <div className="grid md:grid-cols-3 gap-10">
              <motion.div className="rounded-xl overflow-hidden shadow-xl border-2 border-gold/20 bg-background" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img src={geoVastuCertificate} alt="8-Day Geo Vastu Advance & Industrial Training Program - Certificate of Completion" className="w-full object-cover object-top aspect-[3/4]" />
               
              </motion.div>
              <motion.div className="rounded-xl overflow-hidden shadow-xl border-2 border-gold/20 bg-background" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <video src={vedicVastuVideo} className="w-full aspect-[3/4] object-cover object-top" controls playsInline muted loop />
               
              </motion.div>
              <motion.div className="rounded-xl overflow-hidden shadow-xl border-2 border-gold/20 bg-background" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img src={vedicVastuCertificate} alt="Vedic Vastu Expert certification from Sahasra MahaVaastu" className="w-full object-cover object-top aspect-[3/4]" />
              
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
