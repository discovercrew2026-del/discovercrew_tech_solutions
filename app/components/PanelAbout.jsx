'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function PanelAbout({ isActive }) {
  const scrollRef = useRef(null);
  const innerTrackRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const team = [
    { name: 'Rohith', role: 'FULL STACK DEVELOPER & FOUNDER', img: '/Paul New.png' },
  ];

  const handleScroll = () => {
    if (scrollRef.current && !isDragging) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const scrollableHeight = scrollHeight - clientHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollPercent(progress);
    }
  };

  const startDragging = (e) => {
    setIsDragging(true);
    updateScrollFromMouse(e);
  };

  const updateScrollFromMouse = (e) => {
    if (innerTrackRef.current && scrollRef.current) {
      const rect = innerTrackRef.current.getBoundingClientRect();
      const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));
      const ratio = y / rect.height;
      const scrollableHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      scrollRef.current.scrollTop = ratio * scrollableHeight;
      setScrollPercent(ratio * 100);
    }
  };

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e) => updateScrollFromMouse(e);
    const onUp = () => setIsDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (isActive && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      setScrollPercent(0);
    }
  }, [isActive]);

  return (
    <div className="panel" id="panel-3">
      <div className="about-container">
        <div className="about-scroll-container" ref={scrollRef} onScroll={handleScroll}>
          <div className="about-inner">
            
            <div className="about-architectural">
              <div className={`about-left-content fade-left ${isActive ? 'vis' : ''}`}>
                <div className="eyebrow">
                  <span className="eyebrow-dot"></span> ABOUT DISCOVER CREW
                </div>
                <h2 className="about-h2-large">
                  Engineering Software<br />
                  <span className="acc">Built for Growth.</span>
                </h2>
                <p className="about-desc-p">
                  Discover Crew Technologies is a software company focused on building custom web applications, mobile apps, AI automation, and SaaS products for businesses.
                  Our goal is simple: understand your business challenge, design the right solution, build it cleanly, and support your growth.
                </p>
                
                <div className="about-actions">
                  <Link href="/about" className="btn-white" style={{ textDecoration: 'none' }}>Read Our Story</Link>
                  <Link href="/contact" className="btn-outline" style={{ textDecoration: 'none' }}>Get in Touch</Link>
                </div>

                <div className="stats-row">
                  <div className="stat-item">
                    <span className="stat-val" style={{ fontSize: '1.2rem', color: 'var(--cyan)' }}>Modern Web</span>
                    <span className="stat-lab">Next.js & React</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-val" style={{ fontSize: '1.2rem', color: 'var(--purple)' }}>AI Integrations</span>
                    <span className="stat-lab">Automated Workflows</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-val" style={{ fontSize: '1.2rem', color: 'var(--gold)' }}>Custom SaaS</span>
                    <span className="stat-lab">Ventura AI & Event OS</span>
                  </div>
                </div>
              </div>

              <div className={`team-columns-wrapper fade-right d2 ${isActive ? 'vis' : ''}`}>
                <div className="team-columns">
                  {team.map((member, i) => (
                    <div key={i} className="team-col-item">
                      <div className="team-col-img">
                        <img 
                          src={member.img} 
                          alt={`${member.name} - ${member.role} at Discover Crew Technologies`}
                          style={{ objectPosition: 'center top', filter: 'grayscale(0%) contrast(1.05)' }}
                        />
                      </div>
                      <div className="team-col-overlay"></div>
                      <div className="team-col-info" style={{ opacity: 1, visibility: 'visible', transform: 'none' }}>
                        <p className="col-role">{member.role}</p>
                        <p className="col-name">{member.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Visual Scroll Indicator */}
        <div 
          className="scroll-indicator-v" 
          ref={innerTrackRef}
          onMouseDown={startDragging}
          style={{ height: '70vh', top: '15vh' }}
        >
          <div 
            className={`thumb-v ${isDragging ? 'dragging' : ''}`} 
            style={{ top: `${scrollPercent}%` }}
          ></div>
        </div>

      </div>
    </div>
  );
}

