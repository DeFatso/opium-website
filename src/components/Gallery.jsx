import React from "react";
import "../styles/Gallery.css";

const Gallery = () => {
  const images = Array.from({ length: 43 }, (_, index) => {
    const number = 7415 + index;
    return `/gallery/IMG_${number}.JPG`;
  });

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <p className="gallery-label">Our Work</p>
        <h2>Gallery</h2>
        <p className="gallery-intro">
          A visual look at our hydraulic and engineering work, equipment,
          workshop activity, and field services.
        </p>

        <div className="gallery-scroll">
          {images.map((image, index) => (
            <div className="gallery-card" key={index}>
              <img src={image} alt={`Hyses gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;