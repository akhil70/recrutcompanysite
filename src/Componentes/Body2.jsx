import React from 'react';
import './Body2.css';

const Body2 = () => {
  const companies = [
    {
      name: 'Office',
      logo: (
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
          <rect x="8" y="8" width="24" height="24" fill="#D83B01"/>
          <text x="38" y="26" fontFamily="Arial" fontSize="18" fontWeight="400" fill="#ffffff">Office</text>
        </svg>
      )
    },
    {
      name: 'Razorpay',
      logo: (
        <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
          <path d="M10 10l8 8-8 8z" fill="#3395FF"/>
          <text x="24" y="26" fontFamily="Arial" fontSize="16" fontWeight="700" fill="#3395FF" fontStyle="italic">Razorpay</text>
        </svg>
      )
    },
    {
      name: 'FanRuan',
      logo: (
        <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
          <rect x="8" y="10" width="20" height="20" rx="4" fill="#2E7EE8"/>
          <text x="32" y="26" fontFamily="Arial" fontSize="14" fontWeight="700" fill="#2E7EE8">FanRuan</text>
          <text x="32" y="32" fontFamily="Arial" fontSize="8" fill="#7BA3D8">FINE REPORT - FINE BI</text>
        </svg>
      )
    },
    {
      name: 'Socure',
      logo: (
        <svg width="90" height="40" viewBox="0 0 90 40" fill="none">
          <rect x="8" y="12" width="16" height="16" rx="3" fill="#FF6B35"/>
          <text x="28" y="26" fontFamily="Arial" fontSize="16" fontWeight="700" fill="#ffffff">Socure</text>
        </svg>
      )
    },
    {
      name: 'Cockroach Labs',
      logo: (
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
          <path d="M15 20c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5z" fill="#ffffff"/>
          <circle cx="20" cy="20" r="8" stroke="#ffffff" strokeWidth="2" fill="none"/>
          <text x="32" y="22" fontFamily="Arial" fontSize="12" fontWeight="700" fill="#ffffff">Cockroach</text>
          <text x="32" y="30" fontFamily="Arial" fontSize="10" fill="#8BA3B8">LABS</text>
        </svg>
      )
    },
    {
      name: 'GitHub',
      logo: (
        <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
          <circle cx="20" cy="20" r="10" fill="#ffffff"/>
          <path d="M20 12c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.5.4 3.2-1.1 5.5-4.1 5.5-7.6 0-4.4-3.6-8-8-8z" fill="#0D1117"/>
          <text x="34" y="26" fontFamily="Arial" fontSize="18" fontWeight="600" fill="#ffffff">GitHub</text>
        </svg>
      )
    },
    {
      name: 'Workday',
      logo: (
        <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
          <circle cx="16" cy="20" r="8" fill="#FF6B35"/>
          <circle cx="24" cy="20" r="6" fill="#FFB84D"/>
          <text x="34" y="26" fontFamily="Arial" fontSize="16" fontWeight="400" fill="#ffffff">workday</text>
        </svg>
      )
    }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-track">
          {/* First set of logos */}
          {companies.map((company, index) => (
            <div key={`company-1-${index}`} className="partner-logo">
              {company.logo}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {companies.map((company, index) => (
            <div key={`company-2-${index}`} className="partner-logo">
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Body2;