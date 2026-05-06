import React from "react";
import "../styles/ServicesHero.css";

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="services-hero-overlay"></div>

      <div className="services-hero-content">
        <p className="services-hero-label">Our Services</p>

        <h1>
          Hydraulic & Engineering
          <br />
          Services Built For Industry
        </h1>

        <p className="services-hero-text">
          From hydraulic cylinder refurbishment to power packs, pumps, hoses,
          control panels and PLC solutions, Hyses delivers reliable industrial
          support built around performance and precision.
        </p>

        <div className="services-hero-buttons">
          <a href="#services-list" className="services-hero-btn primary">
            View Services
          </a>

          <a href="#contact" className="services-hero-btn secondary">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;