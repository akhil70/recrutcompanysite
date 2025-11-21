import React from 'react';
import './Body3.css';

const Body3 = () => {
  const stats = [
    {
      id: 1,
      percentage: '98%',
      label: 'Successful Client',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="10" width="32" height="28" rx="2" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
          <path d="M14 10v-4h20v4M8 18h32M8 26h32" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="32" y="20" width="6" height="16" rx="1" fill="#1a1a1a"/>
        </svg>
      )
    },
    {
      id: 2,
      percentage: '79%',
      label: 'Team Advisors',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="18" r="8" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
          <path d="M12 38c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="34" cy="32" r="6" fill="#1a1a1a"/>
          <path d="M30 32h8M34 28v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 3,
      percentage: '12+',
      label: 'Years Experience',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="18" cy="18" r="8" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
          <circle cx="30" cy="18" r="8" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
          <path d="M12 30c0-4 3-7 6-7M26 23c3 0 6 3 6 7" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="36" cy="32" r="6" fill="#1a1a1a"/>
          <circle cx="36" cy="32" r="3" fill="#fff"/>
        </svg>
      )
    }
  ];

  const features = [
    { id: 1, text: 'Range Of Services' },
    { id: 2, text: 'Professional Expertise' },
    { id: 3, text: 'Online Recourses' },
    { id: 4, text: 'Client Success Stories' }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side - Stats */}
        <div className="stats-column">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-percentage">{stat.percentage}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Center - Image */}
        <div className="image-column">
          <img 
            src="/choose1-img.webp" 
            alt="Professional team meeting in modern office" 
            className="about-image"
          />
        </div>

        {/* Right Side - Content */}
        <div className="content-column">
          <div className="content-badge">Why Choose Us</div>
          
          <h2 className="content-title">
            Choose Excellence Elevate Your Hiring Experience
          </h2>
          
          <p className="content-description">
            Our team of industry experts is dedicated to understanding your unique needs 
            and delivering tailored solutions that propel your business forward.
          </p>
          
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="check-icon">
                  <circle cx="10" cy="10" r="10" fill="#1a1a1a"/>
                  <path d="M6 10l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="feature-text">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <button className="about-button">
            About US
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Body3;