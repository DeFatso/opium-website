// src/components/ServicesShowcase.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/ServicesShowcase.css";
import { ArrowRight, Wrench, Settings, Zap, Shield, CheckCircle, Award, Clock } from "lucide-react";

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
    { icon: CheckCircle, text: "Precision Engineering", color: "#f85f1c" },
    { icon: Award, text: "Industry Leaders", color: "#19253a" },
    { icon: Clock, text: "Rapid Response", color: "#f85f1c" },
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
                <img src="/showcase1.jpg" alt="Hydraulic Engineering" />
                <div className="image-glow"></div>
              </div>
              <div className="floating-badge badge-1">
                <div className="badge-icon">
                  <Wrench size={16} />
                </div>
                <span>Hydraulic Repairs</span>
              </div>
              <div className="floating-badge badge-2">
                <div className="badge-icon">
                  <Settings size={16} />
                </div>
                <span>System Integration</span>
              </div>
            </div>

            {/* Secondary images */}
            <div className="secondary-images">
              <div className="sec-img-wrapper">
                <img src="/showcase2.jpg" alt="Industrial Service" />
                <div className="sec-overlay"></div>
              </div>
              <div className="sec-img-wrapper">
                <div className="stats-preview">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Projects Completed</div>
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
            Engineering Excellence
          </div>

          {/* Main Heading */}
          <h2>
            Industrial Solutions
            <span className="orange-text"> Built Around</span>
            <br />
            <span className="orange-text">Reliability & Performance</span>
          </h2>

          {/* Description */}
          <p className="description">
            Hyses delivers trusted hydraulic and engineering services for industrial operations, 
            maintenance and automation systems. Our experienced team ensures dependable support, 
            quality workmanship and long-term performance across all sectors.
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
              <div className="stat-desc">Emergency Support</div>
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