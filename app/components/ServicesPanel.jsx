'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  { id: 'web', slug: 'web-development', title: 'Web Development', icon: '⚡', color: 'cyan', tag: 'FULL STACK', desc: 'Fast, secure, responsive web applications built with Next.js, React, and modern web frameworks. Built for performance and conversion.' },
  { id: 'mobile', slug: 'mobile-development', title: 'Mobile Development', icon: '📱', color: 'blue', tag: 'IOS & ANDROID', desc: 'Cross-platform and native mobile apps for iOS and Android. High-performance mobile experiences engineered for seamless user interaction.' },
  { id: 'marketing', slug: 'ai-marketing', title: 'AI Marketing', navLabel: 'AI Marketing', icon: '🎯', color: 'purple', tag: 'AI-DRIVEN GROWTH', desc: 'Data-driven AI SEO, automated marketing workflows, predictive audience targeting, and conversion optimization to scale your business.' },
  { id: 'ai', slug: 'ai-automation', title: 'AI & Automation', icon: '🤖', color: 'gold', tag: 'AI-POWERED', desc: 'Custom AI integrations and business process automation to eliminate repetitive tasks, optimize workflows, and enhance operational speed.' },
  { id: 'software', slug: 'software-development', title: 'Software Development', icon: '💻', color: 'indigo', tag: 'CUSTOM BUILT', desc: 'Tailored software solutions engineered for specific business challenges — including custom dashboards, internal tools, and robust APIs.' },
  { id: 'saas', slug: 'saas-development', title: 'SaaS Development', icon: '☁️', color: 'teal', tag: 'CLOUD-BASED', desc: 'End-to-end SaaS application engineering with multi-tenant architecture, automated subscription management, and enterprise-grade security.' }
];

export default function ServicesPanel({ isActive }) {
  const scrollRef = useRef(null);
  const innerTrackRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSubId, setActiveSubId] = useState(services[0].id);
  const [isDragging, setIsDragging] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current && !isDragging) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const scrollableHeight = scrollHeight - clientHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollPercent(progress);
      if (progress < 15) setActiveSubId(services[0].id);
      else if (progress < 45) setActiveSubId(services[2].id);
      else if (progress < 75) setActiveSubId(services[4].id);
      else setActiveSubId(services[5].id);
    }
  };

  const scrollToService = (id) => {
    const element = document.getElementById(`scard-${id}`);
    const container = scrollRef.current;
    if (element && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const relativeTop = elementRect.top - containerRect.top + container.scrollTop;
      container.scrollTo({ top: relativeTop - 10, behavior: 'smooth' });
      setActiveSubId(id);
    }
  };

  const startDragging = (e) => { setIsDragging(true); updateScrollFromMouse(e); };
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
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
  }, [isDragging]);

  useEffect(() => {
    if (isActive && scrollRef.current) { scrollRef.current.scrollTop = 0; setScrollPercent(0); setActiveSubId(services[0].id); }
  }, [isActive]);

  return (
    <div className="panel" id="panel-1">
      <div className="services-content">
        <div className={`services-header glass fade-left ${isActive ? 'vis' : ''}`}>
          <div className="eyebrow"><span className="eyebrow-dot"></span>WHAT WE DO</div>
          <h2 className="section-h2">Our <span className="acc">Services</span></h2>
          <p className="section-sub">We engineer web applications, mobile software, custom business tools, AI automation workflows, and SaaS platforms that solve real operational challenges for growing companies.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/services" className="btn-ghost" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
              View All Services &rarr;
            </Link>
          </div>
        </div>
        <div className={`services-grid-wrapper fade-up d2 ${isActive ? 'vis' : ''}`}>
          <div className="services-sub-nav">
            {services.map(s => (
              <div key={s.id} className={`sub-nav-item ${activeSubId === s.id ? 'active' : ''}`} onClick={() => scrollToService(s.id)}>
                {s.navLabel || s.title.split(' ')[0]}
              </div>
            ))}
          </div>
          <div className="services-grid-scroll-container" ref={scrollRef} onScroll={handleScroll}>
            <div className="services-grid">
              {services.map((s, idx) => (
                <div key={s.id} id={`scard-${s.id}`} className={`scard ${s.color} fade-up d${Math.min(idx + 1, 6)} ${isActive ? 'vis' : ''}`}>
                  <div className={`sicon ${s.color}`}>{s.icon}</div>
                  <h3 className="stitle">{s.title}</h3>
                  <div className="sdesc">{s.desc}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.5rem' }}>
                    <span className={`stag ${s.color}`}>{s.tag}</span>
                    <Link href={`/services/${s.slug}`} className="service-detail-link" style={{ fontSize: '0.8rem', color: 'var(--cyan)', textDecoration: 'none', fontWeight: 600 }}>
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="scroll-indicator-v" ref={innerTrackRef} onMouseDown={startDragging}>
            <div className={`thumb-v ${isDragging ? 'dragging' : ''}`} style={{ top: `${scrollPercent}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

