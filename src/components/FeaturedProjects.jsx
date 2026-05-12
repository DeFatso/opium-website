import React from "react";
import "../styles/FeaturedProjects.css";

const featuredImages = [
  "/gallery/IMG_7415.JPG",
  "/gallery/IMG_7422.JPG",
  "/gallery/IMG_7438.JPG",
];

const FeaturedProjects = () => {
  return (
    <section className="featured-projects">
      <div className="featured-projects-container">
        <div className="featured-projects-content">
          <p className="featured-projects-label">Our Work</p>

          <h2>Events That Leave a Lasting Impression</h2>

          <p>
            Take a closer look at Opium Events in action — from intimate weddings and
            sophisticated corporate galas to large-scale festivals and premier equipment hire.
          </p>

          <a href="/projects" className="featured-projects-btn">
            View Our Work
          </a>
        </div>

        <div className="featured-projects-grid">
          {featuredImages.map((image, index) => (
            <div className={`featured-project-card card-${index + 1}`} key={index}>
              <img src={image} alt={`Opium Events showcase ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;