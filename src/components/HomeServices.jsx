import React from "react";
import "../styles/HomeServices.css";
import { ArrowRight } from "lucide-react";
import {
  Wrench,
  Settings,
  Zap,
  Cog,
} from "lucide-react";

const services = [
  {
    icon: <Settings size={34} />,
    title: "Hydraulic Cylinders",
  },
  {
    icon: <Wrench size={34} />,
    title: "Valve Banks & Mono Blocks",
  },
  {
    icon: <Zap size={34} />,
    title: "Hydraulic Power Packs",
  },
  {
    icon: <Cog size={34} />,
    title: "Electrohydraulic Actuators",
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
            Industrial Hydraulic
            <br />
            Solutions You Can Trust
          </h2>

          <p>
            Hyses provides reliable hydraulic engineering, repairs,
            manufacturing and industrial support solutions designed
            for performance, safety and efficiency.
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