import "../styles/AboutInfo.css";

function AboutInfo() {
  return (
    <section className="about-info">
      <div className="about-info-stats">
        <div className="about-info-stat">
          <span></span>
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>

        <div className="about-info-stat">
          <span></span>
          <h3>24/7</h3>
          <p>Event Support</p>
        </div>

        <div className="about-info-stat">
          <span></span>
          <h3>Level 1</h3>
          <p>B-BBEE Provider</p>
        </div>

        <div className="about-info-stat iso-stat">
          <span></span>
          <h3>ISO</h3>
          <p>Certified Standards</p>

        </div>
      </div>

      <div className="about-info-main">
        <div className="about-info-images">
          <div className="dots dots-left"></div>

          <img
            src="/about-info-main.jpg"
            alt="Event setup and planning"
            className="about-info-img-main"
          />

          <img
            src="/about-info-small.jpg"
            alt="Equipment hire showcase"
            className="about-info-img-small"
          />
        </div>

        <div className="about-info-content">
          <h2>Experience Premium Event Planning & Equipment Hire</h2>

          <p>
            Opium Events delivers exceptional event management and equipment hire solutions
            built around creativity, precision, and flawless execution for every occasion
            — from intimate gatherings to large-scale productions.
          </p>

          <a href="/#contact" className="about-info-btn">
            Contact Us <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutInfo;