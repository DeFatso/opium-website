import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  const images = [
    "/gallery/image-01.jpg",
    "/gallery/image-02.jpg",
    "/gallery/image-03.jpg",
    "/gallery/image-04.jpg",
  ];

  return (
    <section className="about" id="about">
      <div className="about-main">
        <div className="about-collage">
          <div className="about-collage-corner about-collage-corner-turquoise"></div>
          <div className="about-collage-corner about-collage-corner-navy"></div>

          <div className="about-collage-grid">
            <div className="about-collage-img about-collage-img-large">
              <img src={images[0]} alt="Opium Events corporate event setup" />
            </div>

            <div className="about-collage-img about-collage-img-tall">
              <img src={images[1]} alt="Opium Events wedding decoration" />
            </div>

            <div className="about-collage-img about-collage-img-bottom">
              <img src={images[2]} alt="Opium Events equipment hire" />
            </div>

            <div className="about-collage-img about-collage-img-small">
              <img src={images[3]} alt="Opium Events live event production" />
            </div>
          </div>
        </div>

        <div className="about-content">
          <h4>About Opium Events</h4>
          <h2>Creating Unforgettable Experiences Through Expert Event Management</h2>

          <p>
            Opium Events is a premier event management and equipment hire company, dedicated to delivering exceptional experiences for every occasion — from intimate gatherings to large-scale festivals.
          </p>

          <ul>
            <li>Full-Service Event Planning</li>
            <li>Premium Equipment Hire</li>
            <li>Corporate & Private Events</li>
          </ul>

          <Link to="/about" className="about-btn">
            Read More <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;