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
          Premium <span>Event</span>
          <br />
          Services & Equipment Hire
        </h1>

        <div className="services-hero-underline"></div>

        <p className="services-hero-text">
          From event planning and wedding coordination to corporate functions,
          festivals, and premium equipment hire — Opium Events delivers exceptional
          experiences built around creativity, precision, and flawless execution.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;