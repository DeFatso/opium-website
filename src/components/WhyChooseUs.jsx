// src/components/WhyChooseUs.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WhyChooseUs.css";

import WhyChooseUsImage from "../assets/why-choose-us-main.jpg";
import QualityIcon from "../assets/icons/quality.svg";
import SupportIcon from "../assets/icons/support.svg";
import InnovationIcon from "../assets/icons/innovation.svg";
import ExpertiseIcon from "../assets/icons/expertise.svg";

import HydraulicMaintenanceImg from "../assets/hydraulic-maintenance.jpg";
import IndustrialEquipmentImg from "../assets/industrial-equipment.jpg";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      icon: QualityIcon,
      title: "Premium Equipment",
      description:
        "Top-of-the-line event equipment and audio-visual gear maintained to the highest standards for flawless execution.",
      delay: "0.1s",
    },
    {
      id: 2,
      icon: SupportIcon,
      title: "24/7 Event Support",
      description:
        "Round-the-clock coordination and on-site technical assistance to ensure your event runs perfectly from start to finish.",
      delay: "0.2s",
    },
    {
      id: 3,
      icon: InnovationIcon,
      title: "Creative Innovation",
      description:
        "Cutting-edge event design and production techniques that bring fresh, memorable experiences to every occasion.",
      delay: "0.3s",
    },
    {
      id: 4,
      icon: ExpertiseIcon,
      title: "Expert Planners",
      description:
        "10+ years of combined experience with certified event professionals dedicated to bringing your vision to life.",
      delay: "0.4s",
    },
  ];

  const stats = [
    { value: "500+", label: "Events Hosted", delay: "0.2s" },
    { value: "99%", label: "Client Satisfaction", delay: "0.3s" },
    { value: "25+", label: "Industry Partners", delay: "0.4s" },
    { value: "24/7", label: "On-Site Support", delay: "0.5s" },
  ];

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>

          <h2 className="section-title">
            Setting New Standards In
            <span className="gradient-text"> Event Excellence</span>
          </h2>

          <p className="section-subtitle">
            Discover why clients trust Opium Events for their most important
            occasions — from intimate gatherings to large-scale productions.
          </p>
        </div>

        <div className="why-choose-content">
          <div className="content-left">
            <div className="image-grid">
              <div className="main-image-wrapper">
                <img
                  src={WhyChooseUsImage}
                  alt="Event planning professional at work"
                  className="main-image"
                  loading="lazy"
                />

                <div className="experience-badge">
                  <span className="years">10+</span>
                  <span className="text">Years of Excellence</span>
                </div>
              </div>

              <div className="image-stack">
                <div className="stack-item">
                  <img
                    src={HydraulicMaintenanceImg}
                    alt="Event equipment setup"
                    loading="lazy"
                  />
                </div>

                <div className="stack-item">
                  <img
                    src={IndustrialEquipmentImg}
                    alt="Live event production"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="stats-wrapper">
              {stats.map((stat, index) => (
                <div
                  className="stat-item"
                  key={index}
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="cta-wrapper">
              <button className="cta-button" onClick={handleLearnMore}>
                Learn More About Us
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="content-right">
            <div className="features-grid">
              {features.map((feature) => (
                <div
                  className="feature-card"
                  key={feature.id}
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="feature-icon">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="feature-icon-svg"
                    />
                  </div>

                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;