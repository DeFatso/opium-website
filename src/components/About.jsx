import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  const images = [
    "/gallery/image-01.png",
    "/gallery/image-02.png",
    "/gallery/image-03.png",
    "/gallery/image-04.png",
  ];

  return (
    <section className="about" id="about">
      <div className="about-main">
        <div className="about-collage">
          <div className="about-collage-corner about-collage-corner-orange"></div>
          <div className="about-collage-corner about-collage-corner-navy"></div>

          <div className="about-collage-grid">
            <div className="about-collage-img about-collage-img-large">
              <img src={images[0]} alt="HYSES industrial hydraulic project" />
            </div>

            <div className="about-collage-img about-collage-img-tall">
              <img src={images[1]} alt="HYSES on-site hydraulic work" />
            </div>

            <div className="about-collage-img about-collage-img-bottom">
              <img src={images[2]} alt="HYSES workshop hydraulic equipment" />
            </div>

            <div className="about-collage-img about-collage-img-small">
              <img src={images[3]} alt="HYSES field service vehicle" />
            </div>
          </div>
        </div>

        <div className="about-content">
          <h4>About Hyses</h4>
          <h2>Delivering Precision Hydraulic & Engineering Solutions</h2>

          <p>
            Hyses is a trusted provider of hydraulic and engineering solutions,
            delivering reliable services across multiple industries.
          </p>

          <ul>
            <li>Hydraulic Hose & Fittings</li>
            <li>Hydraulic Cylinder Repair</li>
            <li>Hydraulic Specialist Field Services</li>
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