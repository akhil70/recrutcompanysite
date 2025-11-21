import React from 'react';
import './Body1.css';

const Body1 = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            Staffing Power Your Success
          </div>
          
          <h1 className="hero-title">
            Growth Exceptional Talent Let's Build Success Together
          </h1>
          
          <p className="hero-description">
            Our tailored staffing solutions streamline the hiring process, 
            saving you time and resources while ensuring the perfect fit.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              Start Your Search
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button className="btn-secondary">
              Discover More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hero-image">
          {/* Decorative Elements */}
          <div className="deco-lines">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
          
          <div className="deco-star"></div>
          
          {/* Main Circle Container */}
          <div className="circle-container">
            <div className="team-members">
              {/* Placeholder for team images */}
              <div className="member member-1"></div>
              <div className="member member-2"></div>
              <div className="member member-3"></div>
            </div>
          </div>

          {/* Team Card */}
          <div className="team-card">
            <span className="team-card-text">We Have Awesome Team</span>
            <div className="team-avatars">
              <div className="avatar avatar-1"></div>
              <div className="avatar avatar-2"></div>
              <div className="avatar avatar-3"></div>
              <div className="avatar avatar-4"></div>
              <div className="avatar-more">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body1;