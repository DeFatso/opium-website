import React from "react";
import "../styles/ServicesShowcase.css";
import { ArrowRight } from "lucide-react";

const ServicesShowcase = () => {
  return (
    <section className="services-showcase">
      <div className="services-showcase-container">

        {/* LEFT SIDE */}
        <div className="services-showcase-left">

          <div className="showcase-card">

            <div className="showcase-image image-top">
              <img src="/showcase1.jpg" alt="Engineering work" />
            </div>

            <div className="showcase-text top-text">
              <p>
                Precision hydraulic engineering solutions designed for
                industrial reliability and performance.
              </p>
            </div>

            <div className="showcase-text bottom-text">
              <p>
                Experienced technicians delivering quality repairs,
                manufacturing and system support.
              </p>
            </div>

            <div className="showcase-image image-bottom">
              <img src="/showcase2.jpg" alt="Forklift work" />
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="services-showcase-right">

          <span className="showcase-label">
            // Engineering Excellence
          </span>

          <h2>
            Industrial Solutions
            <br />
            Built Around Reliability
          </h2>

          <p>
            Hyses delivers trusted hydraulic and engineering services for
            industrial operations, maintenance and automation systems.
            Our experienced team ensures dependable support, quality
            workmanship and long-term performance.
          </p>

          <button className="showcase-button">
            View Projects
            <ArrowRight size={22} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default ServicesShowcase;