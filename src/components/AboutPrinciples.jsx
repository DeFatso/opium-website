import "../styles/AboutPrinciples.css";
import { FaBullseye, FaRegEye } from "react-icons/fa";
import { MdFactCheck } from "react-icons/md";

function AboutPrinciples() {
  return (
    <section className="about-principles">
      <div className="about-principles-container">
        <h2>
          Guiding <span>Principles</span>
        </h2>

        <div className="principles-grid">
          <div className="principle-card">
            <div className="principle-icon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              To deliver exceptional event planning and equipment hire solutions
              that create unforgettable experiences, tailored to each client's
              unique vision while upholding the highest standards of creativity
              and professionalism.
            </p>
          </div>

          <div className="principle-card">
            <div className="principle-icon">
              <FaRegEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To be the leading event management company in Africa, recognized
              for our creative excellence, client-first approach, and commitment
              to making every occasion truly remarkable.
            </p>
          </div>

          <div className="principle-card">
            <div className="principle-icon">
              <MdFactCheck />
            </div>

            <h3>Core Values</h3>

            <ul>
              <li>Creativity</li>
              <li>Excellence</li>
              <li>Integrity</li>
              <li>Reliability</li>
              <li>Client Satisfaction</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPrinciples;