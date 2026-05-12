import React from "react";
import "../styles/HomeServices.css";
import { ArrowRight } from "lucide-react";
import {
  Calendar,
  PartyPopper,
  Mic,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: <Calendar size={34} />,
    title: "Event Planning & Management",
  },
  {
    icon: <PartyPopper size={34} />,
    title: "Weddings & Parties",
  },
  {
    icon: <Mic size={34} />,
    title: "Corporate Events & Conferences",
  },
  {
    icon: <Truck size={34} />,
    title: "Equipment Hire & Logistics",
  },
];

const HomeServices = () => {
  return (
    <section className="home-services">

      <div className="home-services-container">

        {/* LEFT */}

        <div className="home-services-content">

          <span className="home-services-label">
            // Our Services
          </span>

          <h2>
            Premium Event Services
            <br />
            & Equipment Hire
          </h2>

          <p>
            Opium Events delivers professional event planning, production, and equipment hire for all occasions. From intimate gatherings to large-scale festivals, we bring your vision to life with precision and flair.
          </p>

          <a href="/services" className="home-services-button">
            View All Services
            <ArrowRight size={20} />
          </a>

        </div>

        {/* RIGHT */}

        <div className="home-services-grid">

          {services.map((service, index) => (
            <div className="home-service-card" key={index}>

              <div className="home-service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HomeServices;