import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 8h24v24H8z" fill="#FF8C00"/>
            <path d="M12 12v16M12 20h8M20 12v16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="logo-text">Recrute</span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#choose" className="nav-link">Choose</a>
          <a href="#service" className="nav-link">Service</a>
          <a href="#project" className="nav-link">Project</a>
          <a href="#works" className="nav-link">Works</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#blog" className="nav-link">Blog</a>
        </nav>

        {/* CTA Button */}
        <button className="cta-button">
          Get A Quote
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;