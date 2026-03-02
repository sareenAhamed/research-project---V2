import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo">
          <Link to="/">TIProject</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/methodology">Methodology</Link>
          <Link to="/results">Results</Link>
          <Link to="/team">Team</Link>
          {/* <Link to="/publications">Publications</Link> */}
          <Link to="/media">Media</Link>
          {/* <Link to="/contact">Contact</Link> */}
          {/* Thesis PDF Button */}
       
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          &#9776;
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/about" onClick={toggleMobileMenu}>About</Link>
          <Link to="/methodology" onClick={toggleMobileMenu}>Methodology</Link>
          <Link to="/results" onClick={toggleMobileMenu}>Results</Link>
          <Link to="/team" onClick={toggleMobileMenu}>Team</Link>
          {/* <Link to="/publications" onClick={toggleMobileMenu}>Publications</Link> */}
          <Link to="/media" onClick={toggleMobileMenu}>Media</Link>
          <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;