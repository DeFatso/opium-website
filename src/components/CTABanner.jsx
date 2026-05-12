import React from "react";
import "../styles/CTABanner.css";

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-banner-container">

        <div className="cta-banner-content">
          <p className="cta-banner-label">
            Professional Event Planning & Equipment Hire
          </p>

          <h2>
            Ready to Create Unforgettable Moments?
          </h2>

          <p>
            From intimate gatherings to large-scale productions, Opium Events delivers
            exceptional service, premium equipment, and creative expertise to bring
            your vision to life. Let's make something amazing together.
          </p>
        </div>

        <div className="cta-banner-actions">
          <a href="contact" className="cta-primary-btn">
            Get a Quote
          </a>

          <a href="tel:+27123456789" className="cta-secondary-btn">
            Call Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default CTABanner;