import React from 'react';
import './Body6.css';

const Body6 = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="8" width="20" height="16" rx="2" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M6 12h20M10 8v4M22 8v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="18" r="1.5" fill="white"/>
          <circle cx="16" cy="18" r="1.5" fill="white"/>
          <circle cx="20" cy="18" r="1.5" fill="white"/>
        </svg>
      ),
      title: 'Sourcing the Best',
      description: 'Stay tuned for regular updates and valuable insights from our team of staffing experts.'
    },
    {
      id: 2,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
          <circle cx="10" cy="22" r="3" stroke="white" strokeWidth="2" fill="none"/>
          <circle cx="22" cy="22" r="3" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M16 16v4M16 20l-4 2M16 20l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Volume Hiring',
      description: 'Remember to keep your blog content informative, engaging, and relevant to your target audience'
    },
    {
      id: 3,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="8" y="10" width="16" height="12" rx="2" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M12 14h8M12 18h5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 10l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Partners in Team Building',
      description: 'This will help drive traffic to your website & establish your agency as a trusted authority'
    }
  ];

  return (
    <section className="technology-section">
      <div className="technology-container">
        {/* Left Side - Image */}
        <div className="technology-image-wrapper">
          <img 
            src="/work1-image.webp" 
            alt="Team discussing recruitment technology solutions" 
            className="technology-image"
          />
        </div>

        {/* Right Side - Content */}
        <div className="technology-content">
          <div className="technology-badge">Recruitment Technologies</div>
          
          <h2 className="technology-title">
            Solving Recruitment Using Technology
          </h2>
          
          <p className="technology-description">
            Whether you're seeking temporary assignments, placements, or executive-level 
            positions, our curated
          </p>

          {/* Features List */}
          <div className="features-list">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body6;