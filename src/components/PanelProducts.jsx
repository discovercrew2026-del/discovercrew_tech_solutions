import React, { useRef, useState, useEffect } from 'react';

export default function PanelProducts({ isActive }) {
  const scrollRef = useRef(null);
  const innerTrackRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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
    <div className="panel" id="panel-2">
      <div className="services-content">
        <div className={`services-header glass fade-left ${isActive ? 'vis' : ''}`} data-panel="2">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>Our Flagships
          </div>
          <h2 className="section-h2">Our <span className="acc">Products</span></h2>
          <p className="section-sub">
            Proprietary SaaS solutions built in-house to solve complex industry challenges with artificial intelligence.
          </p>
        </div>
        
        <div className={`products-grid-wrapper fade-up d2 ${isActive ? 'vis' : ''}`} data-panel="2">
          <div className="products-grid-scroll-container" ref={scrollRef} onScroll={handleScroll}>
            <div className="products-list">
              <div className={`product-card fade-up d1 ${isActive ? 'vis' : ''}`} data-panel="2">
                <div className="product-info">
                  <div className="product-tagline">PLATFORM</div>
                  <div className="product-name">⚡ Ventura AI</div>
                  <div className="product-desc">
                    Ventura AI is an all-in-one AI platform that helps businesses automate tasks, manage leads, generate content, and get smart insights — all from one premium dashboard.
                  </div>
                  <div className="product-tags">
                    <span className="stag cyan">AI-POWERED</span>
                    <span className="stag purple">AUTOMATION</span>
                  </div>
                </div>
                <a 
                  href="https://ventura-ai-9af62.web.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="product-cta"
                >
                  Open App &rarr;
                </a>
              </div>
              
              <div className={`product-card fade-up d2 ${isActive ? 'vis' : ''}`} data-panel="2">
                <div className="product-info">
                  <div className="product-tagline">MANAGEMENT</div>
                  <div className="product-name acc">🗓️ Event OS</div>
                  <div className="product-desc">
                    A complete event management platform for organizers. Create events, sell tickets, manage registrations, track attendance, and coordinate your team — all in one unified place.
                  </div>
                  <div className="product-tags">
                    <span className="stag gold">EVENT TECH</span>
                    <span className="stag cyan">TICKETING</span>
                  </div>
                </div>
                <button className="product-cta" disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>🚧 Under Development</button>
              </div>
            </div>
          </div>
          {/* Visual Scroll Indicator / Draggable Track */}
          <div 
            className="scroll-indicator-v" 
            ref={innerTrackRef}
            onMouseDown={startDragging}
          >
            <div 
              className={`thumb-v ${isDragging ? 'dragging' : ''}`} 
              style={{ top: `${scrollPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
