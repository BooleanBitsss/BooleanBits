import React from 'react';
import './Services.css';
import { useTheme } from '../ThemeContext';

const services = [
  {
    number: '01',
    title: 'Website Development',
    description:
      'High-performance, SEO-optimized websites built with React, Next.js, and modern frameworks. Fast load times, responsive design, and pixel-perfect execution.',
    tags: ['React', 'Next.js', 'SEO', 'Responsive'],
  },
  {
    number: '02',
    title: 'App Development',
    description:
      'Custom SaaS platforms and internal tools built with scalable cloud architecture. From MVPs to full-scale production applications.',
    tags: ['SaaS', 'Firebase', 'Node.js', 'REST APIs'],
  },
  {
    number: '03',
    title: 'UI/UX & Branding',
    description:
      'User-centered design that converts. We craft intuitive interfaces, design systems, and brand identities that make your product stand out.',
    tags: ['Figma', 'Prototyping', 'Design Systems', 'Branding'],
  },
];

const techStack = [
  'React', 'Next.js', 'Node.js', 'Firebase',
  'MongoDB', 'Tailwind', 'Figma', 'Vercel',
];

const processSteps = [
  { step: '01', title: 'Discovery', description: 'We understand your goals, audience, and requirements.' },
  { step: '02', title: 'Design', description: 'Wireframes and prototypes for a pixel-perfect vision.' },
  { step: '03', title: 'Development', description: 'Clean, scalable code built with modern technologies.' },
  { step: '04', title: 'Launch', description: 'Deployment, testing, and ongoing support.' },
];

const Services = () => {
  const { isDark } = useTheme();

  return (
    <section className={`services-section ${isDark ? 'theme-dark' : 'theme-light'}`} id="services-section">
      {/* Section Header */}
      <div className="services-header">
        <span className="services-label">What We Do</span>
        <h2 className="services-title">Services</h2>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>
            <h3 className="service-name">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span className="service-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="tech-section">
        <span className="services-label">Built With</span>
        <h2 className="tech-title">Our Tech Stack</h2>
        <div className="tech-grid">
          {techStack.map((tech) => (
            <div className="tech-item" key={tech}>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process */}
      <div className="process-section">
        <span className="services-label">How We Work</span>
        <h2 className="process-title">Our Process</h2>
        <div className="process-grid">
          {processSteps.map((item) => (
            <div className="process-card" key={item.step}>
              <span className="process-step-number">{item.step}</span>
              <h4 className="process-step-title">{item.title}</h4>
              <p className="process-step-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonial-row">
        <div className="avatar-group">
          <img src="https://i.pravatar.cc/150?u=1" alt="Client" loading="lazy" />
          <img src="https://i.pravatar.cc/150?u=2" alt="Client" loading="lazy" />
          <img src="https://i.pravatar.cc/150?u=3" alt="Client" loading="lazy" />
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