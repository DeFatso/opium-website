import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  useEffect(() => {
    const counter = document.getElementById("experience-count");
    let start = 0;
    const end = 8;

    const duration = 1500;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start++;

      if (counter) {
        counter.textContent = start;
      }

      if (start === end) {
        clearInterval(timer);

        if (counter) {
          counter.textContent = start + "+";
        }
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-main">
        <div className="about-images">
          <div className="dots"></div>

          <img
            src="/about-main.jpg"
            alt="Hydraulic equipment"
            className="about-img-main"
          />

          <img
            src="/about-small.png"
            alt="Hydraulic pump"
            className="about-img-small"
          />

          <div className="experience-box">
            <span id="experience-count">0</span>
            <p>
              Years of <br /> Experience
            </p>
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