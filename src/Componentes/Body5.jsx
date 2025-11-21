import React from 'react';
import './Body5.css';

const Body5 = () => {
  const projects = [
    {
      id: 1,
      image: '/project1-img3.webp',
      category: '',
      title: '',
      hasOverlay: false
    },
    {
      id: 2,
      image: '/project1-img1.webp',
      category: 'Staffing Service',
      title: 'Demonstrating Our Expertise',
      hasOverlay: true
    },
    {
      id: 3,
      image: '/service1-img2.webp',
      category: '',
      title: '',
      hasOverlay: false
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <div className="projects-badge">Our Project</div>
          
          <h2 className="projects-title">
            Successes A Look at Our Projects
          </h2>
          
          <p className="projects-description">
            Explore our portfolio of successful projects that showcase the impact we've made 
            in connecting top talent with leading organizations. From small-scale placements
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title || 'Project showcase'} 
                  className="project-image"
                />
                {project.hasOverlay && (
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="overlay-category">{project.category}</span>
                      <h3 className="overlay-title">{project.title}</h3>
                    </div>
                    <button className="overlay-button" aria-label="View project details">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Body5;