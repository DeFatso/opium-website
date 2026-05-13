import React from "react";
import "../styles/Services.css";
import {
  Calendar,
  PartyPopper,
  Mic,
  Truck,
  Music,
  Camera,
  GlassWater,
  Sparkles,
  Users,
} from "lucide-react";

const services = [
  {
    icon: <Calendar size={40} />,
    title: "Event Planning",
    text: "Comprehensive event planning and coordination for corporate functions, weddings, and private celebrations.",
  },
  {
    icon: <PartyPopper size={40} />,
    title: "Weddings & Parties",
    text: "Beautifully crafted weddings and private parties tailored to your unique vision and style.",
  },
  {
    icon: <Mic size={40} />,
    title: "Corporate Events",
    text: "Professional conferences, product launches, and corporate galas with seamless execution.",
  },
  {
    icon: <Truck size={40} />,
    title: "Equipment Hire",
    text: "Premium event equipment including sound systems, lighting, staging, furniture, and decor.",
  },
  {
    icon: <Music size={40} />,
    title: "Live Entertainment",
    text: "Artist booking, DJ services, live bands, and entertainment coordination for any occasion.",
  },
  {
    icon: <Camera size={40} />,
    title: "Event Production",
    text: "Full-scale production services including audiovisual, lighting design, and stage management.",
  },
  {
    icon: <GlassWater size={40} />,
    title: "Catering & Bar",
    text: "Exquisite catering and bar services with customizable menus for any event size.",
  },
  {
    icon: <Sparkles size={40} />,
    title: "Decor & Styling",
    text: "Professional decor and styling services to create stunning, Instagram-worthy event spaces.",
  },
  {
    icon: <Users size={40} />,
    title: "Festivals",
    text: "Large-scale festival planning and production including crowd management and vendor coordination.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-bg-shape"></div>

      <div className="services-container">
        <div className="services-header">
          <p className="services-label">What We Do</p>
          <h2>Services</h2>
          <p>
            End-to-end event planning and equipment hire solutions built for creativity,
            precision, and unforgettable experiences.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <span></span>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;