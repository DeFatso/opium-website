// src/components/ProjectsStats.jsx
import React, { useEffect, useState, useRef } from "react";
import "../styles/ProjectsStats.css";

function ProjectsStats() {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    percentage: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const images = [
    "/gallery/image-01.png",
    "/gallery/image-02.png",
    "/gallery/image-03.png",
    "/gallery/image-04.png",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Start counting animation
          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepDuration = duration / steps;
          
          let currentStep = 0;
          const targetYears = 6;
          const targetProjects = 150;
          const targetPercentage = 100;
          
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            setCounts({
              years: Math.min(targetYears, Math.ceil(targetYears * progress)),
              projects: Math.min(targetProjects, Math.ceil(targetProjects * progress)),
              percentage: Math.min(targetPercentage, Math.ceil(targetPercentage * progress))
            });
            
            if (currentStep >= steps) {
              clearInterval(interval);
              setCounts({
                years: targetYears,
                projects: targetProjects,
                percentage: targetPercentage
              });
            }
          }, stepDuration);
          
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="projects-stats-section" ref={sectionRef}>
      <div className="projects-stats-container">
        <div className="projects-stats-collage">
          <div className="collage-corner collage-corner-orange"></div>
          <div className="collage-corner collage-corner-navy"></div>

          <div className="collage-grid">
            <div className="collage-img collage-img-large">
              <img src={images[0]} alt="HYSES industrial hydraulic project" />
            </div>

            <div className="collage-img collage-img-tall">
              <img src={images[1]} alt="HYSES on-site hydraulic work" />
            </div>

            <div className="collage-img collage-img-bottom">
              <img src={images[2]} alt="HYSES workshop hydraulic equipment" />
            </div>

            <div className="collage-img collage-img-small">
              <img src={images[3]} alt="HYSES field service vehicle" />
            </div>
          </div>
        </div>

        <div className="projects-stats-content">
          <p className="projects-stats-label">Our Project Impact</p>

          <h2>
            Delivering reliable <span>hydraulic solutions</span> for demanding
            industrial environments
          </h2>

          <p className="projects-stats-description">
            From workshop repairs to field support and system maintenance, HYSES
            helps businesses keep their hydraulic equipment operating safely,
            efficiently, and with minimal downtime.
          </p>

          <div className="projects-stats-numbers">
            <div className="projects-stat-item">
              <h3>{counts.years}+</h3>
              <p>YEARS EXPERIENCE</p>
            </div>

            <div className="projects-stat-item">
              <h3>{counts.projects}+</h3>
              <p>PROJECTS COMPLETED</p>
            </div>

            <div className="projects-stat-item">
              <h3>{counts.percentage}%</h3>
              <p>CLIENT FOCUSED</p>
            </div>
          </div>

          <div className="projects-stats-badge">
            YOUR HYDRAULICS PARTNERS
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsStats;