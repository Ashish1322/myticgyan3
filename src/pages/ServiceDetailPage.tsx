import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Factory, Building2, Sparkles, ScrollText, Brain, Moon, Map, Star, Layout, CheckCircle, ArrowLeft } from "lucide-react";
import astrologyBanner from "@/assets/services/astro.webp";
import vedicBanner from "@/assets/services/vedic.jpg";
import nundi from "@/assets/services/nundi.jpg";
import kp from "@/assets/services/kp.jpg";
import nk from "@/assets/services/nakshatra.webp";
import residential from "@/assets/services/residential.jpg";
import comm from "@/assets/services/commercial.jpg";
import ind from "@/assets/services/industry.jpg";
import land from "@/assets/services/land.jpg";

const serviceData: Record<string, {
  icon: any;
  title: string;
  tagline: string;
  bannerImage: string;
  description: string | string[];
  benefits: string[];
  process: string[];
}> = {
  "astrology": {
    icon: Star,
    title: "Astrology",
    tagline: "Align your life path with the celestial movements",
    bannerImage: astrologyBanner,
    description: "Astrology is an ancient Vedic science that studies the movement and position of celestial bodies to understand their influence on human life. By analyzing your birth chart (kundli), astrology provides deep insights into your personality, career, relationships, health, and life path. It helps you make informed decisions by identifying favorable periods, challenges, and opportunities. With the guidance of astrology, you can align your actions with cosmic energies, overcome obstacles, and create a more balanced and fulfilling life.",
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
    bannerImage: vedicBanner,
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
    bannerImage: nundi,
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
    bannerImage: kp,
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
    bannerImage:nk,
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
    bannerImage: residential,
    description: "Residential Vastu is a time-tested Vedic science that focuses on creating a harmonious living environment by aligning your home with natural energies and the five essential elements—Earth, Water, Fire, Air, and Space. A well-balanced home not only enhances positivity but also plays a vital role in improving health, relationships, financial stability, and overall well-being. By understanding the energy flow within your living space, Residential Vastu helps eliminate negative influences and brings balance, peace, and prosperity into your daily life. Whether you are building a new home, purchasing a property, or experiencing challenges in your current residence, applying Vastu principles can create a powerful shift in your environment, making your home a place of comfort, growth, and positive transformation.",
    benefits: [
      "Promotes peace, positivity, and emotional well-being",
      "Enhances financial growth and career opportunities",
      "Strengthens relationships and family harmony",
      "Improves health and sleep quality",
      "Balances energy flow throughout the home",
      "Helps remove negative energies and obstacles",
      "Provides practical solutions without major structural changes"
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
    bannerImage: comm,
    description: "Commercial Vastu is a powerful application of Vedic science that focuses on optimizing business spaces to attract growth, success, and financial stability. Every commercial establishment—whether it’s an office, shop, showroom, or factory—carries energy that directly influences productivity, decision-making, and profitability. By aligning your workspace with the natural forces and the five elements—Earth, Water, Fire, Air, and Space—Commercial Vastu helps create a balanced and positive environment that supports business expansion and smooth operations. It not only enhances employee performance and customer experience but also minimizes obstacles, financial losses, and instability. Whether you are starting a new business, relocating, or facing challenges in your current setup, applying Vastu principles can significantly improve the flow of opportunities and overall success of your venture.",
    benefits: [
      "Attracts business growth, profits, and new opportunities",
      "Enhances productivity and efficiency of employees",
      "Improves decision-making and leadership clarity",
      "Creates a positive impression on clients and customers",
      "Reduces financial losses and operational obstacles",
      "Promotes stability and long-term business success",
      "Provides practical solutions without major structural changes"
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
    bannerImage: ind,
    description: "Industrial Vastu is a specialized branch of Vedic science that focuses on optimizing factories, manufacturing units, warehouses, and industrial spaces to ensure smooth operations, increased productivity, and sustained growth. In an industrial setup, the flow of energy directly impacts machinery performance, workforce efficiency, production output, and overall profitability. By aligning your industrial space with the five natural elements—Earth, Water, Fire, Air, and Space—Industrial Vastu helps create a balanced and powerful environment that minimizes disruptions, reduces losses, and enhances operational stability. Proper placement of machinery, raw materials, administrative areas, and energy zones ensures better coordination, fewer breakdowns, and improved workflow. Whether you are setting up a new unit or facing recurring issues like financial losses, labor problems, or production delays, implementing Vastu principles can bring structure, balance, and long-term success to your industrial operations.",
    benefits: [
      "Improves production efficiency and workflow",
      "Reduces machine breakdowns and operational issues",
      "Enhances workforce productivity and coordination",
      "Minimizes financial losses and unexpected obstacles",
      "Supports smooth and uninterrupted business operations",
      "Promotes long-term stability and industrial growth",
      "Offers practical solutions without major structural changes"
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
    bannerImage: land,
    description: "Land Selection Vastu is a crucial step in ensuring long-term success, prosperity, and stability for any construction, whether residential, commercial, or industrial. The energy of a space begins from the land itself, and choosing the right plot with proper orientation, soil quality, shape, and surroundings plays a significant role in shaping the future outcomes of that property. According to Vastu principles, every piece of land carries its own energy field, which can either support growth and positivity or lead to obstacles and imbalance. By carefully analyzing factors such as direction, slope, location, nearby structures, and natural elements, Land Selection Vastu helps in identifying plots that attract positive vibrations and eliminate potential challenges. Whether you are planning to build a home, start a business, or develop an industrial unit, selecting a Vastu-compliant land ensures a strong and successful foundation for everything that follows.",
    benefits: [
      "Helps choose land with positive and supportive energy",
      "Ensures better financial growth and future stability",
      "Reduces risks of obstacles, losses, and delays",
      "Guides proper orientation and plot selection",
      "Enhances long-term success of construction projects",
      "Aligns land with natural elements and energy flow",
      "Provides clarity and confidence before investment decisions"
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
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.bannerImage})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            {service.title}
          </h1>

          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            {service.title}
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            {service.description}
          </p>
          
          <br />
          <ul style={{listStyleType: "disc"}} className="text-gray-600 leading-relaxed text-lg">
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
