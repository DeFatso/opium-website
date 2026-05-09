import React from "react";
import "../styles/ServicesHero.css";

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="services-hero-overlay"></div>

      <div className="services-hero-content">
        <div className="services-hero-label-row">
          <span></span>
          <p>// OUR SERVICES</p>
          <span></span>
        </div>

        <h1>
          Hydraulic & <span>Engineering</span>
          <br />
          Services Built For Industry
        </h1>

        <div className="services-hero-underline"></div>

        <p className="services-hero-text">
          From hydraulic cylinder refurbishment to power packs, pumps, hoses,
          control panels and PLC solutions, Hyses delivers reliable industrial
          support built around performance and precision.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;