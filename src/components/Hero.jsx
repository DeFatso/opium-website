// src/components/Hero.jsx
import "../styles/Hero.css";

function Hero() {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-eyebrow">Hydraulic & Engineering Solutions</p>

          <h1>Powering Industry With Reliable Hydraulic Solutions</h1>

          <p className="hero-description">
            Hyses provides professional hydraulic repairs, engineering support,
            system maintenance, and industrial solutions built for performance.
          </p>

          <div className="hero-actions">
            <a href="/services" className="hero-btn hero-btn-primary">
              Explore Services
            </a>

            <a href="/contact" className="hero-btn hero-btn-secondary">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;