import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Factory, Building2, Map, Star, Layout } from "lucide-react";
import astrologyBanner from "@/assets/services/astro.webp";
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
  services: {
    title: string;
    description: string;
  }[];
}> = {
  "astrology": {
    icon: Star,
    title: "Astrology",
    tagline: "Align your life path with the celestial movements",
    bannerImage: astrologyBanner,
    description: "Astrology is an ancient Vedic science that studies the movement and position of celestial bodies to understand their influence on human life. By analyzing your birth chart (kundli), astrology provides deep insights into your personality, career, relationships, health, and life path. It helps you make informed decisions by identifying favorable periods, challenges, and opportunities. With the guidance of astrology, you can align your actions with cosmic energies, overcome obstacles, and create a more balanced and fulfilling life.",
    benefits: [
      "Offering a sense of comfort and reassurance during difficult times.",
      "Providing insights into our relationships with others.",
      "Predicting future events and trends.",
      "Offering guidance for spiritual growth and self-improvement.",
      "Identifying potential obstacles or challenges in our lives.",
      "Providing insights into our health and well-being.",
      "Understanding our career potential and possibilities.",
      "Helping us make important decisions in life.",
      "Supporting personal growth and transformation.",
      "Understanding our life purpose and destiny.",
    ],
    process: [
      "Birth details collection",
      "Chart preparation and analysis",
      "Consultation session",
      "Remedy and follow-up guidance"
    ],
    "services": [
      {
        title: "Vedic Astrology",
        description: "Vedic Astrology is a time-tested Indian system that reveals deep karmic patterns and life events.It provides accurate predictions and remedies based on planetary movements and ancient scriptures."
      },
      {
        title: "Bhrigu Nandi Nadi",
        description: "Bhrigu Nandi Nadi is an advanced predictive system focusing on planetary combinations rather than houses.It provides highly accurate insights into life events and their timing."
      },
      {
        title: "K.P Astrology",
        description: "KP Astrology (Krishnamurti Paddhati) is a modern system known for its accuracy.It uses sub-lord theory to predict events with high precision."
      },
      {
        title: "Nakshatra Analysis",
        description: "Nakshatras represent subtle energies influencing your personality and life path.This analysis helps uncover your true nature, strengths, and karmic patterns."
      },
    ]
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
    services: []
  },

  "commercial-vastu": {
    icon: Building2,
    title: "Commercial Vastu",
    tagline: "Design spaces that attract growth and success",
    bannerImage: comm,
    description: "Commercial Vastu is an ancient Indian science of architecture that focuses on creating a harmonious and balanced environment in commercial spaces such as offices, factories, restaurants, and shops. It involves the use of various principles and techniques to optimize the flow of energy in a space, which can have a positive impact on the success and prosperity of a business. Every commercial establishment—whether it’s an office, shop, showroom, or factory—carries energy that directly influences productivity, decision-making, and profitability. By aligning your workspace with the natural forces and the five elements—Earth, Water, Fire, Air, and Space—Commercial Vastu helps create a balanced and positive environment that supports business expansion and smooth operations. It not only enhances employee performance and customer experience but also minimizes obstacles, financial losses, and instability. Whether you are starting a new business, relocating, or facing challenges in your current setup, applying Vastu principles can significantly improve the flow of opportunities and overall success of your venture.",
    benefits: [
      "Supporting business expansion and growth.",
      "Enhancing productivity and efficiency.",
      "Promoting a sense of well-being and positivity among employees and customers.",
      "Reducing the impact of negative energies and influences.",
      "Boosting financial growth and prosperity.",
      "Improving customer satisfaction and loyalty.",
      "Creating a sense of harmony and balance.",
      "Enhancing the reputation and image of the business.",
      "Reducing conflicts and misunderstandings among employees.",
      "Improving the flow of energy and creating a positive environment.",
    ],
    process: [
      "Site analysis",
      "Energy audit",
      "Recommendations",
      "Implementation support"
    ],
    "services": [
      {
        "title": "Hotel Vastu",
        "description": "Hotel Vastu focuses on creating a positive and balanced environment that enhances guest satisfaction, staff efficiency, and overall profitability. By aligning your hotel with natural elements, it helps improve operations, attract more customers, and ensure long-term success."
      },
      {
        "title": "Office Vastu",
        "description": "Office Vastu helps design a workspace that boosts productivity, improves decision-making, and supports business growth. By balancing energy flow, it creates a positive environment for employees and enhances overall efficiency and success."
      },
      {
        "title": "Shop Vastu",
        "description": "Shop Vastu focuses on attracting customers, increasing sales, and creating a positive shopping environment. By aligning the shop layout with Vastu principles, it helps improve customer experience and business profitability."
      },
      {
        "title": "Mall Vastu",
        "description": "Mall Vastu focuses on designing shopping spaces to enhance customer flow, increase sales, and create a positive, prosperous business environment."
      },
      {
        "title": "Hospital Vastu",
        "description": "Hospital Vastu aims to create a healing and positive environment that supports patient recovery, staff efficiency, and smooth operations. It helps improve overall care quality and ensures a balanced energy flow within the space."
      }
    ]
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
    services: []
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
    services: []
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
        <div style={{zIndex: 10}}>
        <div className="ast-waves">
          <div className="ast-wave"></div>
          <div className="ast-wave"></div>
          <div className="ast-wave"></div>
        </div>
        <div className="ast-waves2">
          <div className="ast-wave"></div>
          <div className="ast-wave"></div>
          <div className="ast-wave"></div>
        </div>
        <div className="ast-waves3">
          <div className="ast-wave"></div>
          <div className="ast-wave"></div>
          <div className="ast-wave"></div>
        </div>
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.bannerImage})`, zIndex: -1 }}
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
          <br />
          <h2 className="text-2xl font-semibold text-green-800 mb-4">How it can help us ?</h2>
          <ul style={{ listStyleType: "disc" }} className="text-gray-600 leading-relaxed text-lg">
            {service.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>


          <br />
          <br />
          {service.services.map((service) => (
            <div key={service.title}>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              <br />
            </div>
          ))}

        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
