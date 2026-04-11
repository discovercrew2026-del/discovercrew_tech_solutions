import React, { useRef, useState, useEffect } from 'react';

const services = [
  { id: 'web', title: 'Web Development', icon: '⚡', color: 'cyan', tag: 'FULL STACK', desc: 'Blazing-fast, pixel-perfect web applications built with modern frameworks. From landing pages to enterprise SaaS.' },
  { id: 'mobile', title: 'Mobile Development', icon: '📱', color: 'blue', tag: 'IOS & ANDROID', desc: 'Turn your idea into a powerful mobile experience. We design and develop native and cross-platform apps for iOS and Android — intuitive interfaces and smooth performance.' },
  { id: 'marketing', title: 'Digital Marketing', icon: '🎯', color: 'purple', tag: 'GROWTH', desc: 'Visibility without strategy is just noise. We run targeted SEO, paid ad campaigns, content marketing, and social media that bring in real leads.' },
  { id: 'ai', title: 'AI & Automation', icon: '🤖', color: 'gold', tag: 'AI-POWERED', desc: 'Work smarter, not harder. We integrate AI into your business to automate repetitive workflows and personalise customer experiences.' },
  { id: 'software', title: 'Software Dev', icon: '💻', color: 'indigo', tag: 'CUSTOM BUILT', desc: 'Off-the-shelf software holds your business back. We build fully custom software solutions — internal tools, APIs, and dashboards.' },
  { id: 'saas', title: 'SaaS Platform', icon: '☁️', color: 'teal', tag: 'CLOUD-BASED', desc: 'Build your own software product and make it a business. We develop end-to-end SaaS platforms — multi-tenant architecture and subscription billing.' }
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
      setActiveSubId(services[0].id);
    }
  }, [isActive]);

  return (
    <div className="panel" id="panel-1">
      <div className="services-content">
        <div className={`services-header glass fade-left ${isActive ? 'vis' : ''}`} data-panel="1">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>WHAT WE DO
          </div>
          <h2 className="section-h2">Our <span className="acc">Services</span></h2>
          <p className="section-sub">
            We design and develop high-performance websites and web applications that combine stunning visuals with rock-solid engineering. From business platforms to custom AI solutions — we build with modern frameworks like React and Next.js.
          </p>
        </div>
        <div className={`services-grid-wrapper fade-up d2 ${isActive ? 'vis' : ''}`}>
          
          <div className="services-sub-nav">
            {services.map(s => (
              <div 
                key={s.id} 
                className={`sub-nav-item ${activeSubId === s.id ? 'active' : ''}`}
                onClick={() => scrollToService(s.id)}
              >
                {s.title.split(' ')[0]}
              </div>
            ))}
          </div>

          <div className="services-grid-scroll-container" ref={scrollRef} onScroll={handleScroll}>
            <div className="services-grid">
              {services.map((s, idx) => (
                <div 
                  key={s.id} 
                  id={`scard-${s.id}`}
                  className={`scard ${s.color} fade-up d${Math.min(idx + 1, 6)} ${isActive ? 'vis' : ''}`} 
                  data-panel="1"
                >
                  <div className={`sicon ${s.color}`}>{s.icon}</div>
                  <div className="stitle">{s.title}</div>
                  <div className="sdesc">{s.desc}</div>
                  <span className={`stag ${s.color}`}>{s.tag}</span>
                </div>
              ))}
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
