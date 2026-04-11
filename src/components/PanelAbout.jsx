import React, { useRef, useState, useEffect } from 'react';

export default function PanelAbout({ isActive }) {
  const scrollRef = useRef(null);
  const innerTrackRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const team = [
    { name: 'Aravinth', role: 'CYBER TECH & CO-FOUNDER', img: '/T1.jpg' },
    { name: 'Tharun', role: 'DIGITAL MARKETING & CO-FOUNDER', img: '/T2.jpg' },
    { name: 'Rohith', role: 'FULL STACK DEVELOPER & FOUNDER', img: '/T3.png' },
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
                  <span className="eyebrow-dot"></span> ARCHITECTURAL INTEGRITY
                </div>
                <h2 className="about-h2-large">
                  The Discover Crew:<br />
                  <span className="acc">Building the Digital Future.</span>
                </h2>
                <p className="about-desc-p">
                  We engineer the foundational systems that power the next century of digital evolution. 
                  Discover Crew is not just a software firm; we are the architects of the silent 
                  protocols that sustain global connectivity and decentralized intelligence.
                </p>
                
                <div className="about-actions">
                  <button className="btn-white">View Documentation</button>
                  <button className="btn-outline">Contact Sales</button>
                </div>

                <div className="stats-row">
                  <div className="stat-item">
                    <span className="stat-val">99.9%</span>
                    <span className="stat-lab">Uptime SLA</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-val">2.4PB</span>
                    <span className="stat-lab">Data Processed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-val">12ms</span>
                    <span className="stat-lab">Global Latency</span>
                  </div>
                </div>
              </div>

              <div className={`team-columns fade-right d2 ${isActive ? 'vis' : ''}`}>
                {team.map((member, i) => (
                  <div key={i} className="team-col-item">
                    <div className="team-col-img">
                      <img src={member.img} alt={member.name} />
                    </div>
                    <div className="team-col-overlay"></div>
                    <div className="team-col-info">
                      <p className="col-role">{member.role}</p>
                      <p className="col-name">{member.name}</p>
                    </div>
                  </div>
                ))}
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
