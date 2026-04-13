import React from 'react';
import { travelData } from '../data/mockData';
import { WindowBox } from '../components/WindowBox';
import './Travel.css';

export const Travel: React.FC = () => {
  return (
    <div className="travel-page bg-dark py-section">
      <div className="container">
        <h1 className="page-title highlight-red" style={{ display: 'inline-block', color: '#fff' }}>EXPLORATION</h1>
        
        <div className="travel-gallery">
           {travelData.map((spot, index) => (
             <div key={spot.id} className={`travel-card ${index % 2 !== 0 ? 'offset' : ''}`}>
               <WindowBox title={`📍 ${spot.location}`}>
                  <img src={spot.image} alt={spot.location} className="travel-img" />
                  <div className="travel-info">
                     <span className="mono highlight-green date-badge">{spot.date}</span>
                     <p className="travel-story">{spot.story}</p>
                  </div>
               </WindowBox>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
