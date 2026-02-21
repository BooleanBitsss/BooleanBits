import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section" id="services-section" aria-labelledby="services-heading">
      <h2 className="sr-only" id="services-heading">Our Services</h2>
      <div className="services-grid-layout">
        
        {/* Websites Column */}
        <div className="service-column border-right">
          <h2 className="service-stat">Websites</h2>
          <p className="service-stat-sub">High Performance & SEO Ready</p>
          <div className="service-links">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="pill-link">Live Examples <span aria-hidden="true">→</span></a>
            <a href="#payment" className="pill-link">Payment Systems <span aria-hidden="true">→</span></a>
          </div>
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500" alt="Professional website design showcase - clean dashboard interface" className="static-preview-img" width="500" height="333" loading="lazy" />
        </div>

        {/* Apps Column */}
        <div className="service-column">
          <h3 className="service-heading">App Development</h3>
          <p className="service-description">
            Custom SaaS and internal applications built with React and modern cloud infrastructure.
          </p>
          <div className="service-links">
             <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="pill-link">App Showcase <span aria-hidden="true">→</span></a>
             <a href="#payment" className="pill-link">Subscriptions <span aria-hidden="true">→</span></a>
          </div>
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500" alt="Modern web application with data analytics dashboard" className="static-preview-img" width="500" height="333" loading="lazy" />
        </div>

      </div>

      {/* Social Proof / Testimonial Row */}
      <div className="testimonial-row">
        <div className="avatar-group">
          <img src="https://i.pravatar.cc/150?u=1" alt="Happy client testimonial avatar" width="40" height="40" loading="lazy" />
          <img src="https://i.pravatar.cc/150?u=2" alt="Happy client testimonial avatar" width="40" height="40" loading="lazy" />
          <img src="https://i.pravatar.cc/150?u=3" alt="Happy client testimonial avatar" width="40" height="40" loading="lazy" />
        </div>
        <p className="testimonial-text">
          "The BooleanBits team delivered our MVP in record time. Professional and scalable code."
          <br /><strong>Daniel, Tech Lead @Google</strong>
        </p>
      </div>
    </section>
  );
};

export default Services;