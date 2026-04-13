import React from 'react';
import { NetworkBg } from '../components/NetworkBg';
import { WindowBox } from '../components/WindowBox';
import './Landing.css';

export const Landing: React.FC = () => {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero bg-dark">
        <NetworkBg />
        <div className="container hero-content">
          <div className="hero-text-block">
            <h1 className="hero-title">
              I am Gokul,<br/>
              <span className="highlight-green">exploring intelligence</span><br/>
              through computation<br/>
              and engineering.
            </h1>
            
            <div className="hero-bottom-grid">
              <WindowBox title="C:\Bio\neuro_eng.exe" className="bio-window">
                <p className="mono">
                  &gt; Loading bio modules...<br/><br/>
                  My main task is to bridge the gap between biological neural systems and artificial architectures.
                  I research computational models of the brain and build resilient engineering systems.
                  <br/><br/>
                  <span className="blink">_</span>
                </p>
              </WindowBox>
              
              <div className="hero-actions">
                <p className="action-text">Ready to dive into the data?</p>
                <div className="action-buttons">
                  <a href="/projects" className="btn">View Projects</a>
                  <a href="/thoughts" className="btn btn-green">Read Thoughts</a>
                  <a href="/travel" className="btn" style={{backgroundColor: 'var(--bg-light)', color: 'var(--text-dark)'}}>Explore Travel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-checker"></div>
      </section>

      {/* Featured Section */}
      <section className="featured bg-light py-section">
        <div className="container">
           <h2 className="section-header">DID YOU <span className="highlight-red">FIND</span> YOURSELF?</h2>
           <div className="featured-grid">
              <div className="featured-card bg-dark">
                 <h3 className="highlight-green">Neural Engineering</h3>
                 <p>Developing low-latency BCI architectures and analyzing noisy EEG datasets to decode motor functions.</p>
              </div>
              <div className="featured-card" style={{border: '4px solid var(--border-color)'}}>
                 <h3 className="highlight-red">Software Systems</h3>
                 <p>Building high-performance, resilient web platforms and tools to visualize complex multidimensional data.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
