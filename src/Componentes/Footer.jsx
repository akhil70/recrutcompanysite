import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Staff Management', href: '#staff-management' },
    { name: 'Leadership Training', href: '#leadership-training' },
    { name: 'Corporate Program', href: '#corporate-program' },
    { name: 'Staffing Solutions', href: '#staffing-solutions' },
    { name: 'Blog Standard', href: '#blog-standard' }
  ];

  const exploreLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'Contact US', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* CTA Section */}
        <div className="footer-cta">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Power up your Savings and Reliability?
            </h2>
            <p className="cta-description">
              Feel free to customize this paragraph to better reflect the specific 
              services offered by your IT solution & the unique
            </p>
          </div>
          
        
        </div>

        <div className="footer-divider"></div>

        {/* Footer Main Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M8 8h24v24H8z" fill="#FF8C00"/>
                <path d="M12 12v16M12 20h8M20 12v16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="footer-logo-text">Recrute</span>
            </div>
            
            <p className="footer-brand-description">
              Our goal is to demystify the process, address your concerns, and empower 
              you with the knowledge to embark.
            </p>
            
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7h3v10H5V7zm1.5-4.5C7.3 2.5 8 3.2 8 4s-.7 1.5-1.5 1.5S5 4.8 5 4s.7-1.5 1.5-1.5zM11 7h2.8v1.4c.4-.8 1.4-1.5 2.8-1.5 3 0 3.5 2 3.5 4.6V17h-3v-4.5c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4V17h-3V7z" fill="currentColor"/>
                </svg>
              </a>
              
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter/X">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15.5 3.5h2.5l-5.5 6.3 6.5 8.7h-5l-4-5.2-4.5 5.2H3l5.9-6.7L3 3.5h5.2l3.6 4.8 4.7-4.8zm-.9 13h1.4L6.8 5H5.3l9.3 11.5z" fill="currentColor"/>
                </svg>
              </a>
              
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M19 6s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C13.4 3 10 3 10 3s-3.4 0-6.2.1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S1 7.6 1 9.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.1 6 .2 6 .2s3.4 0 6.2-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2V9.2c0-1.6-.2-3.2-.2-3.2zM8 13V7l5 3-5 3z" fill="currentColor"/>
                </svg>
              </a>
              
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="15" cy="5" r="1" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-links-title">Quick Links</h3>
            <ul className="footer-links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div className="footer-links">
            <h3 className="footer-links-title">Explore</h3>
            <ul className="footer-links-list">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-contact">
            <h3 className="footer-links-title">Contact Us</h3>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17 12.5c-1.2 0-2.4-.2-3.5-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.7-6.5-6.5l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H2c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-2.5c0-.6-.4-1-1-1z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="contact-text">+880 123 456 789</span>
              </li>
              
              <li className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18 4H2c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="contact-text">info@mail.com</span>
              </li>
              
              <li className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2c-2.8 0-5 2.2-5 5 0 3.8 5 11 5 11s5-7.2 5-11c0-2.8-2.2-5-5-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="contact-text">8502 Preston Rd.<br/>Inglewoo Maine 98380</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© Copyright 2024 -Recrute. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;