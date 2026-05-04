import { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["Home", "About Us", "Services", "Contact"];

  const formatLink = (item) => item.toLowerCase().replaceAll(" ", "-");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <img src="/logo.png" alt="Hyses logo" />
          <span>Hyses</span>
        </a>

        <nav className="nav-menu-desktop">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${formatLink(item)}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="nav-quote">
          Get a Quote
        </a>

        <button
          className="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`nav-menu-mobile ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links-mobile">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${formatLink(item)}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              className="mobile-quote"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;