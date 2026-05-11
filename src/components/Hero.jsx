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
          <p className="hero-eyebrow">Premium Events & Equipment Hire</p>

          <h1>Creating Unforgettable Moments With Expert Event Management</h1>

          <p className="hero-description">
            Opium Events delivers world-class event planning, production, and equipment hire for corporate functions, weddings, parties, and festivals. We bring your vision to life.
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