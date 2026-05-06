import "../styles/AboutInfo.css";

function AboutInfo() {
  return (
    <section className="about-info">
      <div className="about-info-stats">
        <div className="about-info-stat">
          <span></span>
          <h3>8+</h3>
          <p>Years Experience</p>
        </div>

        <div className="about-info-stat">
          <span></span>
          <h3>24h</h3>
          <p>Field Support</p>
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
            alt="Hydraulic components"
            className="about-info-img-main"
          />

          <img
            src="/about-info-small.jpg"
            alt="Hydraulic testing equipment"
            className="about-info-img-small"
          />
        </div>

        <div className="about-info-content">
          <h2>Experience The Highest Quality In Hydraulics</h2>

          <p>
            Hyses delivers reliable hydraulic and engineering solutions built
            around precision, fast response times, and long-term performance for
            demanding industrial environments.
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