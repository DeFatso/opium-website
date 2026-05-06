import "../styles/AboutPartners.css";

function AboutPartners() {
  const partners = [
    {
      name: "Black Strength",
      logo: "/partners/black-strength.png",
    },
    {
      name: "Phola Coal",
      logo: "/partners/phola-coal.png",
    },
    {
      name: "Eskom",
      logo: "/partners/eskom.png",
    },
    {
      name: "Thungela",
      logo: "/partners/thungela.png",
    },
    {
      name: "Msobo Coal",
      logo: "/partners/msobo-coal.png",
    },
  ];

  return (
    <section className="about-partners">
      <div className="partners-banner">
        <div className="partners-banner-overlay"></div>

        <div className="partners-banner-content">
          <div className="partners-banner-text">
            <h2>
              Reliable <span>Hydraulic</span> Support <br />
              For Industrial Operations
            </h2>

            <p>
              We support companies that rely on dependable hydraulic systems,
              responsive service, and long-term engineering performance.
            </p>
          </div>

          <a href="/#contact" className="partners-banner-btn">
            Get a Quote
          </a>
        </div>
      </div>

      <div className="partners-main">
        <p className="partners-label">Trusted By Industry</p>

        <h2>Clients We’ve Partnered With</h2>

        <div className="partners-logo-grid">
          {partners.map((partner) => (
            <div className="partner-card" key={partner.name}>
              <div className="partner-logo-circle">
                <img src={partner.logo} alt={`${partner.name} logo`} />
              </div>
            </div>
          ))}
        </div>

        <p className="partners-description">
          We are proud to partner with a diverse range of clients across mining,
          manufacturing, engineering, and industrial sectors. These partnerships
          reflect the trust placed in our service, workmanship, and technical
          reliability.
        </p>
      </div>
    </section>
  );
}

export default AboutPartners;