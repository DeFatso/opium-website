import "../styles/ProjectsDetails.css";

function ProjectsDetails() {
  const projects = [
    {
      id: "rock-breaker-repair",
      title: "Rock Breaker and Crusher Hydraulic Refurbishment",
      client: "PPC Cement Dwaalboom, South Africa",
      description:
        "Hydraulic refurbishment and maintenance support for rock breaker and crusher systems, including cylinder repairs, lubrication support, hydraulic power pack servicing, accumulator installation, electrical control rewiring, and cooling system repairs.",
      images: [
        "/gallery/grid-02.png",
        "/gallery/grid-02a.png",
        "/gallery/grid-02b.png",
      ],
      services: [
        "Rock breaker hydraulic cylinders repair",
        "Service and install hammer head",
        "Supply crusher and mill lube filters",
        "Service crusher feeder hydraulic power packs and drive motors",
        "Supply, install and pre-charge crusher accumulators",
        "Flush and filter bulk lubrication oil for mills and crushers",
        "Lubrication system oil sampling and condition monitoring",
        "Supply and install lube pumps and control valves",
        "Rewire new rock breaker electronic control system",
        "Flush, pressure test and repair crusher water coolers",
      ],
    },
    {
      id: "hydraulic-inspection",
      title: "Hydraulic Maintenance Contracts",
      client: "Anglo Phola Coal & Eskom Kusile Power Station",
      description:
        "Ongoing hydraulic maintenance contracts covering scheduled inspections, service work, shutdown repairs, inventory support, oil sampling, fault finding, RCA reporting, and 24-hour breakdown support across heavy industrial hydraulic systems.",
      images: [
        "/gallery/grid-01.png",
        "/gallery/grid-01a.png",
        "/gallery/grid-01b.png",
      ],
      services: [
        "Weekly inspections, monthly and quarterly servicing",
        "Maintenance on Larox and TH filter presses",
        "Maintenance on apron feeders, thickener drives, discards, loadout silos and drill rigs",
        "Hoses and fittings supply for plant and trackless mobile machines",
        "Hydraulic power pack shutdown repairs on HP bypass systems, coal mills, raw mills and rapid loading power packs",
        "Hydraulic critical inventory management for Phola",
        "Running system cylinder bypass testing",
        "Hose mean time to failure reports",
        "Oil sampling and condition monitoring",
        "Hydraulic system fault finding and RCA reporting",
        "24-hour call out and breakdown cover",
      ],
    },
    {
      id: "undercarriage-refurbishment",
      title: "Stacker Refurbishment Project",
      client: "Eskom Kendal",
      description:
        "Major stacker refurbishment project involving undercarriage work, hydraulic power pack rebuilds, control system installation, lubrication system commissioning, gearbox refurbishment, DCS wiring, and maintenance instruction development.",
      images: [
        "/gallery/grid-03.png",
        "/gallery/grid-03a.png",
        "/gallery/grid-03b.png",
      ],
      services: [
        "Refurbishment of stacker crawling undercarriage",
        "Rebuild and installation of luffing hydraulic power pack",
        "Control system and boom luffing cylinder work",
        "Installation and commissioning of dual-line auto-control lubrication system",
        "Refurbishment and installation of slew crawling planetary gearboxes",
        "Wiring of new stacker DCS control system",
        "Interface with the old SCADA system",
        "Maintenance and service instructions for ash stackers and auxiliaries",
      ],
    },
  ];

  return (
    <section className="projects-details-section">
      <div className="projects-details-container">
        {projects.map((project, index) => (
          <article
            className={`project-detail-card ${index % 2 !== 0 ? "reverse" : ""}`}
            id={project.id}
            key={project.id}
          >
            <div className="project-detail-images">
              <div className="project-main-image">
                <img src={project.images[0]} alt={project.title} />
              </div>

              <div className="project-small-images">
                <img src={project.images[1]} alt={`${project.title} detail 1`} />
                <img src={project.images[2]} alt={`${project.title} detail 2`} />
              </div>
            </div>

            <div className="project-detail-content">
              <p className="project-detail-label">Featured Project</p>
              <h2>{project.title}</h2>

              <p className="project-client">{project.client}</p>

              <p className="project-detail-description">
                {project.description}
              </p>

              <ul className="project-services-list">
                {project.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>{service}</li>
                ))}
              </ul>

              <div className="project-detail-tags">
                <span>Hydraulics</span>
                <span>Industrial</span>
                <span>Engineering</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsDetails;