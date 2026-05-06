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
              To provide efficient and sustainable hydraulic and engineering
              solutions tailored to meet each client’s specific requirements
              while upholding the highest standards of safety and
              professionalism.
            </p>
          </div>

          <div className="principle-card">
            <div className="principle-icon">
              <FaRegEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To be a trusted leader in hydraulic and engineering services,
              recognized for our technical excellence, customer-first approach,
              and commitment to continuous improvement.
            </p>
          </div>

          <div className="principle-card">
            <div className="principle-icon">
              <MdFactCheck />
            </div>

            <h3>Core Values</h3>

            <ul>
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Quality</li>
              <li>Safety</li>
              <li>Customer Satisfaction</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPrinciples;