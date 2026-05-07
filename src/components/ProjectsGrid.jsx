import { ArrowRight } from "lucide-react";
import "../styles/ProjectsGrid.css";

function ProjectsGrid() {
  const projects = [
    {
      title: "Rock breaker hydraulic cylinders repair",
      image: "/gallery/grid-02.png",
      link: "#rock-breaker-repair",
    },
    {
      title: "Hydraulic system inspection and testing",
      image: "/gallery/grid-01.png",
      link: "#hydraulic-inspection",
    },
    {
      title: "Refurbishment of stacker crawling undercarriage",
      image: "/gallery/grid-03.png",
      link: "#undercarriage-refurbishment",
    },
  ];

  return (
    <section className="projects-grid-section">
      <div className="projects-grid-container">
        <div className="projects-grid-header">
          <p className="projects-grid-label">Our Work</p>

          <h2>Recent Hydraulic Projects</h2>

          <p>
            A look at some of the industrial, workshop, and field-service
            projects completed by HYSES across hydraulic repair, maintenance,
            and engineering support.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="project-card-overlay">
                <a
                  href={project.link}
                  className="project-card-arrow"
                  aria-label={project.title}
                >
                  <ArrowRight size={34} strokeWidth={2.4} />
                </a>

                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsGrid;