import React, { useState } from 'react';
import './Body7.css';

const Body7 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: "But don't just take our word for it—hear what our satisfied clients have to say. From Fortune 500 companies to small",
      name: 'Amir Jamil',
      position: 'Vp,Daily Naws',
     image: '/tes1-img2.webp'
    },
    {
      id: 2,
      rating: 5,
      quote: "Our dedication to excellence, and commitment to building long-lasting partnerships have",
      name: 'Usman Khan',
      position: 'Co Funder',
     image: '/tes1-img2.webp'
    },
    {
      id: 3,
      rating: 5,
      quote: "The team exceeded our expectations with their professionalism and attention to detail. Highly recommended!",
      name: 'Sarah Johnson',
      position: 'CEO, Tech Corp',
      image: '/tes1-img2.webp'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <svg key={index} width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FF8C00"/>
      </svg>
    ));
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Header */}
        <div className="testimonial-header">
          <div className="testimonial-badge">Testimonial</div>
          
          <h2 className="testimonial-title">Real Stories, Real Results</h2>
          
          <p className="testimonial-description">
            Discover why businesses trust us to find the right talent and candidates trust 
            us to find the perfect fit.
          </p>
        </div>

        {/* Slider Container */}
        <div className="slider-wrapper">
          {/* Navigation Buttons */}
          <button 
            className="slider-nav slider-nav-prev" 
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button 
            className="slider-nav slider-nav-next" 
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Testimonial Cards */}
          <div className="testimonial-slider">
            <div 
              className="testimonial-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="testimonial-stars">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="testimonial-quote">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="testimonial-author">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-position">{testimonial.position}</p>
                      </div>
                    </div>
                    
                    <div className="testimonial-image-wrapper">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="testimonial-image"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body7;