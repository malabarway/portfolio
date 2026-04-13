import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export const Navigation: React.FC = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container nav-container">
        <NavLink to="/" className="nav-logo">
          <span className="mono highlight-green" style={{ color: '#000' }}>[</span>
          Gokul
          <span className="mono highlight-green" style={{ color: '#000' }}>]</span>
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/thoughts" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              Thoughts
            </NavLink>
          </li>
          <li>
            <NavLink to="/travel" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              Travel
            </NavLink>
          </li>
          <li>
             <a href="mailto:gokul@example.com" className="btn btn-green nav-cta">Let's Talk</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
