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
              Professional <span>Event Planning</span> <br />
              For Every Occasion
            </h2>

            <p>
              We partner with organizations and individuals who demand
              exceptional event management, premium equipment hire, and flawless execution.
            </p>
          </div>

          <a href="/#contact" className="partners-banner-btn">
            Get a Quote
          </a>
        </div>
      </div>

      <div className="partners-main">
        <p className="partners-label">Trusted Partners</p>

        <h2>Clients We've Worked With</h2>

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
          We are proud to partner with a diverse range of clients across
          corporate, private, and public sectors. These partnerships reflect
          the trust placed in our creativity, professionalism, and commitment
          to delivering exceptional events.
        </p>
      </div>
    </section>
  );
}

export default AboutPartners;