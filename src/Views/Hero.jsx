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
          <div className="hero-content-grid">
            {/* Left Column - Text */}
            <div className="hero-text-container">
              <h1 className="hero-title" id="hero-heading">
                Build.<br />
                Modern.<br />
                Scalable.
              </h1>
              
              <p className="hero-description">
                BooleanBits helps businesses, startups, and creators build 
                professional websites and web applications.
              </p>

              <div className="hero-cta-desktop">
                <button className="btn-work" onClick={scrollToServices} aria-label="View our services">
                  View Services <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            {/* Right Column - Browser Mockup */}
            <div className="browser-mockup">
              <div className="browser-topbar">
                <div className="browser-dots">
                  <span className="b-dot red"></span>
                  <span className="b-dot yellow"></span>
                  <span className="b-dot green"></span>
                </div>
                <div className="browser-url-bar">
                  <span>booleanbitss.web.app</span>
                </div>
              </div>
              <div className="browser-content">
                {/* Mini dashboard UI */}
                <div className="dash-sidebar">
                  <div className="dash-logo-placeholder"></div>
                  <div className="dash-nav-item active"></div>
                  <div className="dash-nav-item"></div>
                  <div className="dash-nav-item"></div>
                  <div className="dash-nav-item"></div>
                </div>
                <div className="dash-main">
                  <div className="dash-header-bar"></div>
                  <div className="dash-cards">
                    <div className="dash-card card-blue">
                      <div className="card-label"></div>
                      <div className="card-value"></div>
                    </div>
                    <div className="dash-card card-green">
                      <div className="card-label"></div>
                      <div className="card-value"></div>
                    </div>
                    <div className="dash-card card-purple">
                      <div className="card-label"></div>
                      <div className="card-value"></div>
                    </div>
                  </div>
                  <div className="dash-chart">
                    <div className="chart-bar" style={{height: '40%'}}></div>
                    <div className="chart-bar" style={{height: '65%'}}></div>
                    <div className="chart-bar" style={{height: '50%'}}></div>
                    <div className="chart-bar" style={{height: '80%'}}></div>
                    <div className="chart-bar" style={{height: '60%'}}></div>
                    <div className="chart-bar" style={{height: '90%'}}></div>
                    <div className="chart-bar" style={{height: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile-only CTA - appears below mockup */}
            <div className="hero-cta-mobile">
              <button className="btn-work" onClick={scrollToServices} aria-label="View our services">
                View Services <span aria-hidden="true">→</span>
              </button>
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