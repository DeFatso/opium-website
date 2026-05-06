import { useState } from "react";
import "../styles/AboutHero.css";

function AboutHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="about-hero">
      <div className="about-hero-overlay"></div>

      <div className="about-hero-nav">
        <a href="/" className="about-hero-logo">
          HYSES
        </a>

        <ul className={`about-hero-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="/" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li>
            <a href="/about" className="active" onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="/#services" onClick={() => setIsOpen(false)}>Services</a>
          </li>
          <li>
            <a href="/#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>

        <button
          className={`about-menu-btn ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="about-hero-content">
        <h1>
          About <span>Us</span>
        </h1>

        <p>
          Hyses is a trusted provider of hydraulic and engineering solutions,
          delivering reliable services across multiple industries.
        </p>
      </div>
    </section>
  );
}

export default AboutHero;