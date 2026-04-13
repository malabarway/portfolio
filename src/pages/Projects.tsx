import React from 'react';
import { projectsData } from '../data/mockData';
import './Projects.css';

export const Projects: React.FC = () => {
  return (
    <div className="projects-page bg-light py-section">
      <div className="container">
        <h1 className="page-title">PROJECTS</h1>
        
        <div className="projects-grid">
          {projectsData.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-img-wrapper" style={{ backgroundImage: `url(${project.image})` }}>
                 <div className="project-overlay">
                    <span className="mono bg-dark">{project.id.toUpperCase()}</span>
                 </div>
              </div>
              
              <div className="project-info">
                <h2>{project.title}</h2>
                <p className="project-desc font-bold">{project.shortDesc}</p>
                
                <div className="project-details mono">
                  <div className="detail-section">
                     <span className="highlight-red">Problem:</span>
                     <p>{project.problem}</p>
                  </div>
                  <div className="detail-section">
                     <span className="highlight-green">Methods:</span>
                     <p>{project.methods}</p>
                  </div>
                  <div className="detail-section">
                     <span className="bg-dark" style={{color: '#fff', padding: '0 4px'}}>Results:</span>
                     <p>{project.results}</p>
                  </div>
                </div>
                
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} className="link-btn">[&lt;/&gt;] Code</a>
                  )}
                  {project.links.paper && (
                    <a href={project.links.paper} className="link-btn">[📄] Paper</a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} className="link-btn">[↗] Demo</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
