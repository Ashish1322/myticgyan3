import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 sacred-geometry opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Contact Us</h1>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
        </div>
      </section>

      <section className="py-24 bg-background mandala-bg">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-bold text-primary mb-6">Begin Your Transformation</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Reach out to us for a personalized Vastu consultation. We are here to help you harmonize your space and unlock its full potential.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Phone, text: "Call for a consultation", detail: "+91-98765 43210" },
                  { icon: Mail, text: "Email us", detail: "info@mysticvigyan.com" },
                  { icon: MapPin, text: "Based in India", detail: "Serving clients worldwide" },
                ].map(({ icon: Icon, text, detail }) => (
                  <div key={text} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">{text}</p>
                      <p className="text-muted-foreground text-sm">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">Full Name</label>
                <input id="name" type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">Email</label>
                <input id="email" type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">Phone</label>
                <input id="phone" type="tel" placeholder="+91-XXXXX XXXXX" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all resize-none" />
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:brightness-110 transition-all">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
