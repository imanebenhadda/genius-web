import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
    // Prevent scrolling when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; 
        </div>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link smooth to="/#services">Services</Link>
            </li>
            <li>
              <Link smooth to="/#about">About</Link>
            </li>
            <li>
              <Link smooth to="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <button className="close-menu" onClick={toggleMenu}>
            &times;
          </button>
          <Link smooth to="/#services" onClick={toggleMenu}>
            Services
          </Link>
          <Link smooth to="/#about" onClick={toggleMenu}>
            About
          </Link>
          <Link smooth to="/#contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;