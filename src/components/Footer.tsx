import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark">
      <div className="border-checker"></div>
      <div className="footer-content container">
        <div className="footer-top">
          <h2>Let's Do An Incredible<br/> <span className="highlight-green">Project Together</span></h2>
          <a href="mailto:hello@example.com" className="btn btn-green">Are you ready? =)</a>
        </div>
        <div className="footer-bottom mono">
          <div className="socials">
             <a href="#">Github</a>
             <a href="#">LinkedIn</a>
             <a href="#">Twitter</a>
          </div>
          <p>© {new Date().getFullYear()} Gokul. All logic reserved.</p>
        </div>
      </div>
    </footer>
  );
};
