import React from 'react';
import { thoughtsData } from '../data/mockData';
import './Thoughts.css';

export const Thoughts: React.FC = () => {
  return (
    <div className="thoughts-page bg-light py-section">
      <div className="container">
        <h1 className="page-title highlight-green" style={{ display: 'inline-block' }}>THOUGHTS</h1>
        
        <div className="thoughts-list">
          {thoughtsData.map(thought => (
            <article key={thought.id} className="thought-item">
              <div className="thought-meta mono">
                <span>{thought.date}</span>
                <span>•</span>
                <span>{thought.readTime}</span>
              </div>
              <h2 className="thought-title">{titleCheck(thought.title)}</h2>
              <p className="thought-excerpt">{thought.excerpt}</p>
              
              <div className="thought-tags">
                 {thought.tags.map(tag => (
                    <span key={tag} className="tag mono">#{tag.toLowerCase()}</span>
                 ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const titleCheck = (title: string) => {
    return title;
};
