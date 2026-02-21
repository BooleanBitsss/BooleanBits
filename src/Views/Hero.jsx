import React, { useState } from 'react';
import './Hero.css';
import logo from '../assets/logo.png';

const Hero = () => {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToServices = () => {
    document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`hero-page-wrapper ${isDark ? 'theme-dark' : 'theme-light'}`} role="document">
      {/* Navbar */}
      <header>
        <nav className="navbar" aria-label="Main navigation">
          <a href="/" className="nav-brand" aria-label="BooleanBits Home">
            <img src={logo} alt="BooleanBits Logo" className="nav-logo" width="75" height="75" />
            <span className="nav-brand-name">BooleanBits</span>
          </a>
          <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`} role="navigation">
            <a href="#product" onClick={closeMenu}>Product</a>
            <a href="#solutions" onClick={closeMenu}>Solutions</a>
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
            <a href="#developers" onClick={closeMenu}>Developers</a>
          </div>
          <div className="nav-right">
            <button className="btn-theme-toggle" onClick={toggleTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
              {isDark ? '◑' : '◐'}
            </button>
            <button className="btn-get-quote" aria-label="Book a meeting with BooleanBits">Book a Meeting</button>
            <button className="btn-hamburger" onClick={toggleMenu} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main>
        <section className="hero-main" aria-labelledby="hero-heading">
          <div className="hero-text-container">
            <h1 className="hero-title" id="hero-heading">
              Build.<br />
              Modern.<br />
              Scalable.
            </h1>
            
            <div className="hero-bottom-row">
               <p className="hero-description">
                 BooleanBits helps businesses, startups, and creators build 
                 professional websites and web applications.
               </p>
               <button className="btn-work" onClick={scrollToServices} aria-label="View our services">
                 View Services <span aria-hidden="true">→</span>
               </button>
            </div>
        </div>

        {/* The Large Visual Element from the Image */}
        <div className="hero-visual-box">
          <div className="visual-gradient-bg">
            {/* This mimics the ripple/texture in the image */}
            <div className="ripple-texture"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Trusted Brands Bar */}
      <aside className="brand-bar" aria-label="Trusted by leading companies">
        <span className="brand-logo">RAKUTEN</span>
        <span className="brand-logo">NCR</span>
        <span className="brand-logo">monday.com</span>
        <span className="brand-logo">Disney</span>
        <span className="brand-logo">Dropbox</span>
      </aside>
    </div>
  );
};

export default Hero;