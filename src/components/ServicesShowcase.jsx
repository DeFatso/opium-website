// src/components/ServicesShowcase.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/ServicesShowcase.css";
import { ArrowRight, Calendar, PartyPopper, Mic, CheckCircle, Award, Clock, Sparkles } from "lucide-react";

const ServicesShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const servicePoints = [
    { icon: CheckCircle, text: "Creative Excellence", color: "#40E0D0" },
    { icon: Award, text: "Industry Leaders", color: "#19253a" },
    { icon: Clock, text: "Rapid Response", color: "#40E0D0" },
  ];

  return (
    <section className="services-showcase" ref={sectionRef}>
      {/* Radiant Background Elements */}
      <div className="radiant-bg radiant-1"></div>
      <div className="radiant-bg radiant-2"></div>
      <div className="radiant-bg radiant-3"></div>

      <div className="services-showcase-container">
        {/* LEFT SIDE - MODERN VISUAL */}
        <div className={`services-visual ${isVisible ? "animate" : ""}`}>
          <div className="visual-container">
            {/* Main featured image */}
            <div className="featured-image-wrapper">
              <div className="featured-image">
                <img src="/showcase1.jpg" alt="Event Production" />
                <div className="image-glow"></div>
              </div>
              <div className="floating-badge badge-1">
                <div className="badge-icon">
                  <Calendar size={16} />
                </div>
                <span>Event Planning</span>
              </div>
              <div className="floating-badge badge-2">
                <div className="badge-icon">
                  <Sparkles size={16} />
                </div>
                <span>Full Production</span>
              </div>
            </div>

            {/* Secondary images */}
            <div className="secondary-images">
              <div className="sec-img-wrapper">
                <img src="/showcase2.jpg" alt="Event Setup" />
                <div className="sec-overlay"></div>
              </div>
              <div className="sec-img-wrapper">
                <div className="stats-preview">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Events Hosted</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="decor-circle decor-1"></div>
            <div className="decor-circle decor-2"></div>
            <div className="decor-dots"></div>
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className={`services-content ${isVisible ? "animate" : ""}`}>
          {/* Simple Label - No icon, no background */}
          <div className="content-label">
            Event Excellence
          </div>

          {/* Main Heading */}
          <h2>
            Premium Event Solutions
            <span className="turquoise-text"> Built Around</span>
            <br />
            <span className="turquoise-text">Creativity & Precision</span>
          </h2>

          {/* Description */}
          <p className="description">
            Opium Events delivers trusted event planning, production, and equipment hire services
            for all occasions. Our experienced team ensures flawless execution, creative excellence,
            and unforgettable experiences for every client.
          </p>

          {/* Service Points Grid */}
          <div className="service-grid">
            {servicePoints.map((point, idx) => (
              <div className="service-point" key={idx}>
                <div className="point-icon" style={{ backgroundColor: `${point.color}10`, color: point.color }}>
                  <point.icon size={16} />
                </div>
                <span>{point.text}</span>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="stats-row">
            <div className="stat-block">
              <div className="stat-value">24/7</div>
              <div className="stat-desc">Event Support</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-block">
              <div className="stat-value">ISO 9001</div>
              <div className="stat-desc">Certified</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-block">
              <div className="stat-value">100%</div>
              <div className="stat-desc">Client Focused</div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="showcase-button">
            <span>Explore Our Work</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;