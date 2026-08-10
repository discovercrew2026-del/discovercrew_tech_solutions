'use client';

import React from 'react';

export default function HeroPanel({ isActive, scrollTo }) {
  return (
    <div className="panel" id="panel-0">
      <div className="hero-content glass">
        <div className={`eyebrow fade-left ${isActive ? 'vis' : ''}`}>
          <span className="eyebrow-dot"></span>Software Development & AI Solutions
        </div>
        <h1 className={`h1 fade-left d1 ${isActive ? 'vis' : ''}`}>
          Custom Software, <span className="acc">AI & Digital Solutions</span> for Businesses
        </h1>
        <p className={`hero-sub fade-left d2 ${isActive ? 'vis' : ''}`}>
          Discover Crew Technologies builds custom software, web and mobile applications, AI-powered automation, and SaaS platforms to streamline operations and accelerate business growth.
        </p>
        <div className={`hero-actions fade-left d3 ${isActive ? 'vis' : ''}`}>
          <button className="btn-primary" onClick={() => scrollTo(4)}>Start a Project</button>
          <button className="btn-ghost" onClick={() => scrollTo(2)}>Explore Our Products &rarr;</button>
        </div>
        <div className={`hero-stats fade-up d4 ${isActive ? 'vis' : ''}`}>
          <div>
            <div className="stat-num" style={{ fontSize: '1rem', color: 'var(--cyan)' }}>Custom Software</div>
            <div className="stat-label">Web & Mobile Apps</div>
          </div>
          <div>
            <div className="stat-num" style={{ fontSize: '1rem', color: 'var(--purple)' }}>AI & Automation</div>
            <div className="stat-label">Workflow Efficiency</div>
          </div>
          <div>
            <div className="stat-num" style={{ fontSize: '1rem', color: 'var(--gold)' }}>SaaS Platforms</div>
            <div className="stat-label">Ventura AI & Event OS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

