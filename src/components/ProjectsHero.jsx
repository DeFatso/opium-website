import { Link } from "react-router-dom";
import "../styles/ProjectsHero.css";

function ProjectsHero() {
  return (
    <section className="projects-hero" id="projects">
      <div className="projects-hero-container">
        <div className="projects-hero-text">
          <p className="projects-hero-eyebrow">
            Our Portfolio & Success Stories
          </p>

          <h1>Delivering Excellence Through Every Project</h1>

          <p className="projects-hero-description">
            Explore our completed hydraulic and engineering projects. From
            system installations to major repairs, see how Hyses delivers
            reliable results for industrial clients.
          </p>

          <div className="projects-hero-actions">
            <a
              href="#rock-breaker-repair"
              className="projects-hero-btn projects-hero-btn-primary"
            >
              View Projects
            </a>

            <Link
              to="/contact"
              className="projects-hero-btn projects-hero-btn-secondary"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsHero;