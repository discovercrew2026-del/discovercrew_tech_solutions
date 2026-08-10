'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

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
            <span className="eyebrow-dot"></span>PROPRIETARY PRODUCTS
          </div>
          <h2 className="section-h2">Our <span className="acc">Products</span></h2>
          <p className="section-sub">
            In addition to custom software engineering for clients, Discover Crew Technologies builds and maintains in-house software products tailored for modern business operations.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/products" className="btn-ghost" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
              View All Products &rarr;
            </Link>
          </div>
        </div>
        
        <div className={`products-grid-wrapper fade-up d2 ${isActive ? 'vis' : ''}`} data-panel="2">
          <div className="products-grid-scroll-container" ref={scrollRef} onScroll={handleScroll}>
            <div className="products-list">
              <div className={`product-card fade-up d1 ${isActive ? 'vis' : ''}`} data-panel="2">
                <div className="product-info">
                  <div className="product-tagline">AI BUSINESS PLATFORM</div>
                  <h3 className="product-name">⚡ Ventura AI</h3>
                  <div className="product-desc">
                    Ventura AI is Discover Crew's AI-powered business platform designed to help teams manage tasks, leads, content, and business workflows from one central dashboard.
                  </div>
                  <div className="product-tags">
                    <span className="stag cyan">AI PLATFORM</span>
                    <span className="stag purple">WORKFLOW AUTOMATION</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link href="/products/ventura-ai" className="product-cta" style={{ textDecoration: 'none' }}>
                    View Overview &rarr;
                  </Link>
                  <a 
                    href="https://ventura-ai-kappa.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontSize: '0.85rem', color: 'var(--w50)', textDecoration: 'none' }}
                  >
                    Open Live App ↗
                  </a>
                </div>
              </div>
              
              <div className={`product-card fade-up d2 ${isActive ? 'vis' : ''}`} data-panel="2">
                <div className="product-info">
                  <div className="product-tagline">EVENT MANAGEMENT PLATFORM</div>
                  <h3 className="product-name acc">🗓️ Event OS</h3>
                  <div className="product-desc">
                    Event OS is an event management platform currently under development. It is engineered to help organizers handle event creation, ticketing, registration, attendance, and team coordination.
                  </div>
                  <div className="product-tags">
                    <span className="stag gold">UNDER DEVELOPMENT</span>
                    <span className="stag cyan">EVENT TICKETING</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link href="/products/event-os" className="product-cta" style={{ textDecoration: 'none' }}>
                    View Overview &rarr;
                  </Link>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gold)', opacity: 0.8 }}>🚧 In Active Development</span>
                </div>
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

