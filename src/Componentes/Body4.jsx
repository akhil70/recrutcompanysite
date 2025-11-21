import React from 'react';
import './Body4.css';

const Body4 = () => {
  const services = [
    {
      id: 1,
      image: '/service1-img1.webp',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="12" width="24" height="16" rx="2" stroke="white" strokeWidth="2" fill="none"/>
          <circle cx="14" cy="20" r="2" fill="white"/>
          <circle cx="20" cy="20" r="2" fill="white"/>
          <circle cx="26" cy="20" r="2" fill="white"/>
          <path d="M14 24v4M20 24v4M26 24v4M12 28h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'HR Consulting & Staffing',
      description: 'Whether you\'re looking for temporary staffing, direct hire placements, or executive search services.'
    },
    {
      id: 2,
      image: '/service1-img2.webp',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 8v24M12 16l8-8 8 8M28 24l-8 8-8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="4" fill="white"/>
        </svg>
      ),
      title: 'Recruitment Process',
      description: 'Streamline your hiring with our comprehensive recruitment process and talent acquisition solutions.'
    },
    {
      id: 3,
      image: '/service1-img3.webp',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="10" width="24" height="20" rx="2" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M8 16h24M14 10v6M26 10v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="16" cy="22" r="2" fill="white"/>
          <circle cx="24" cy="22" r="2" fill="white"/>
        </svg>
      ),
      title: 'Talent Management',
      description: 'Expert guidance in managing and developing your workforce for long-term organizational success.'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="services-badge">Our Service</div>
          
          <h2 className="services-title">
            Tailored Solutions for Your Hiring Needs
          </h2>
          
          <p className="services-description">
            With our proven track record and commitment to excellence, we're here to support your 
            organization's growth and help you achieve your hiring goals.
          </p>
        </div>

        {/* Service Cards */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card ${index === 1 ? 'service-card-highlight' : ''}`}
            >
              <div className="service-image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-image"
                />
                {index === 1 && (
                  <div className="service-overlay">
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-description">{service.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="services-cta">
          Let's Get Started
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Body4;