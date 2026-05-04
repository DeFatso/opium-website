import "../styles/Footer.css";
import {
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
  FaThreads,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer-container">

          {/* Brand */}
          <div className="footer-section footer-brand">
            <h2>HYSES</h2>
            <p>
              Leading provider of comprehensive hydraulic and engineering
              solutions.
            </p>

            {/* Social Icons */}
            <div className="footer-socials">
              <a
                href="https://wa.me/27662013689"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.facebook.com/hyseshydraulic"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              {/* Placeholder links */}
              <a href="#" aria-label="X">
                <FaXTwitter />
              </a>

              <a href="#" aria-label="Threads">
                <FaThreads />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>Contact</h3>

            <p>
              Office: <a href="tel:+27100234807">+27 10 023 4807</a>
            </p>
            <p>
              Leeroy: <a href="tel:+27662013689">+27 66 201 3689</a>
            </p>
            <p>
              Willing: <a href="tel:+27814707892">+27 81 470 7892</a>
            </p>
            <p>
              Email: <a href="mailto:info@hyses.co.za">info@hyses.co.za</a>
            </p>
            <p>
              Address:{" "}
              <a
                href="https://www.google.com/maps?q=67+Van+Rensburg+Avenue+Klipfontein+Witbank"
                target="_blank"
                rel="noreferrer"
              >
                67 Van Rensburg Avenue, Klipfontein, Witbank
              </a>
            </p>
          </div>

          {/* Business Info */}
          <div className="footer-section">
            <h3>Business Info</h3>
            <p>Registration No: 2020/264133/07</p>
            <p>VAT No: 4430293664</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} HYSES. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      <div className="sticky-footer-contact">
        <a href="tel:+27100234807">Call</a>
        <a href="mailto:info@hyses.co.za">Email</a>
        <a
          href="https://wa.me/27662013689"
          target="_blank"
          rel="noreferrer"
          className="whatsapp"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
};

export default Footer;