import "../styles/ProjectsStats.css";

function ProjectsStats() {
  const images = [
    "/gallery/image-01.png",
    "/gallery/image-02.png",
    "/gallery/image-03.png",
    "/gallery/image-04.png",
  ];

  return (
    <section className="projects-stats-section">
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
              <h3>6+</h3>
              <p>YEARS EXPERIENCE</p>
            </div>

            <div className="projects-stat-item">
              <h3>150+</h3>
              <p>PROJECTS COMPLETED</p>
            </div>

            <div className="projects-stat-item">
              <h3>100%</h3>
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