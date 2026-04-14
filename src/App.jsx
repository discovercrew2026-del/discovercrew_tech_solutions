import React from 'react';
import './index.css';

import ThreeBackground from './components/ThreeBackground';
import Navigation from './components/Navigation';
import HeroPanel from './components/HeroPanel';
import PanelAbout from './components/PanelAbout';
import ServicesPanel from './components/ServicesPanel';
import PanelProducts from './components/PanelProducts';
import ContactPanel from './components/ContactPanel';

const SECTIONS = 5;

function App() {
  const [currentSec, setCurrentSec] = React.useState(0);
  const trackRef = React.useRef(null);
  const progRef = React.useRef(null);
  
  const currentXPosRef = React.useRef(0);
  const targetXRef = React.useRef(0);

  const isScrollBlocked = React.useRef(false);
  const touchStart = React.useRef({ x: 0, y: 0 });

  const scrollTo = React.useCallback((idx) => {
    const nextIdx = Math.max(0, Math.min(SECTIONS - 1, idx));
    setCurrentSec(nextIdx);
    targetXRef.current = nextIdx * window.innerWidth;
  }, []);

  // Update animated x position outside of React render loop
  React.useEffect(() => {
    let animationFrame;
    const scrollLoop = () => {
      // Lerp
      currentXPosRef.current += (targetXRef.current - currentXPosRef.current) * 0.082;
      if (Math.abs(targetXRef.current - currentXPosRef.current) < 0.2) {
        currentXPosRef.current = targetXRef.current;
      }
      
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${-currentXPosRef.current}px)`;
      }
      
      if (progRef.current) {
        const maxScroll = window.innerWidth * (SECTIONS - 1);
        const p = maxScroll === 0 ? 0 : currentXPosRef.current / maxScroll;
        progRef.current.style.width = `${p * 100}%`;
      }

      animationFrame = requestAnimationFrame(scrollLoop);
    };
    
    animationFrame = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Handle events
  React.useEffect(() => {
    const handleWheel = (e) => {
      // If we're on certain panels, prioritize internal scrolling
      if (currentSec === 1 || currentSec === 2 || currentSec === 3) {
        let selector = '';
        if (currentSec === 1) selector = '.services-grid-scroll-container';
        else if (currentSec === 2) selector = '.products-grid-scroll-container';
        else if (currentSec === 3) selector = '.about-scroll-container';

        const scrollable = document.querySelector(selector);
        if (scrollable) {
          const { scrollTop, scrollHeight, clientHeight } = scrollable;
          const canScrollDown = e.deltaY > 0 && scrollTop + clientHeight < scrollHeight - 1;
          const canScrollUp = e.deltaY < 0 && scrollTop > 1;

          if (canScrollDown || canScrollUp) {
            // If mouse is not directly over the list, manually scroll it
            if (!e.target.closest(selector)) {
              scrollable.scrollTop += e.deltaY;
            } else {
              // Mouse is over the list, let native scroll happen
              return;
            }
            e.preventDefault();
            return;
          }
        }
      }

      e.preventDefault();
      if (isScrollBlocked.current) return;
      isScrollBlocked.current = true;
      scrollTo(currentSec + (e.deltaY > 0 ? 1 : -1));
      setTimeout(() => { isScrollBlocked.current = false; }, 850);
    };

    const handleTouchStart = (e) => {
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const handleTouchEnd = (e) => {
      const dx = touchStart.current.x - e.changedTouches[0].clientX;
      const dy = touchStart.current.y - e.changedTouches[0].clientY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        scrollTo(currentSec + (dx > 0 ? 1 : -1));
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') scrollTo(currentSec + 1);
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   scrollTo(currentSec - 1);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSec, scrollTo]);


  return (
    <>
      <ThreeBackground currentPanel={currentSec} />
      
      <Navigation currentSec={currentSec} scrollTo={scrollTo} />

      <div className="scroll-outer">
        <div 
          className="scroll-track" 
          id="track"
          ref={trackRef}
        >
          <HeroPanel isActive={currentSec === 0} scrollTo={scrollTo} />
          <ServicesPanel isActive={currentSec === 1} />
          <PanelProducts isActive={currentSec === 2} />
          <PanelAbout isActive={currentSec === 3} />
          <ContactPanel isActive={currentSec === 4} />
        </div>
      </div>

      {/* Progress bar */}
      <div 
        className="progress-bar" 
        id="prog"
        ref={progRef}
      ></div>

      {/* Section dots */}
      <div className="section-dots" id="dots">
        {[0, 1, 2, 3, 4].map(idx => (
          <div 
            key={idx} 
            className={`dot ${currentSec === idx ? 'active' : ''}`} 
            onClick={() => scrollTo(idx)}
          ></div>
        ))}
      </div>

      {/* Scroll hint */}
      <div 
        className="scroll-hint" 
        id="hint"
        style={{ opacity: currentSec === 0 ? 1 : 0 }}
      >
        <span>Scroll to explore</span>
        <div className="hint-arrows">
          <div className="hint-arrow"></div>
          <div className="hint-arrow"></div>
          <div className="hint-arrow"></div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        className="whatsapp-float"
        href="https://wa.me/919500607705?text=Hello%20DiscoverCrew%0AName:%20%0AEmail:%20%0AMessage:%20"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* WhatsApp SVG Icon */}
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="whatsapp-icon">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.489-2.001A15.926 15.926 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm8.293 22.979c-.344.968-1.703 1.77-2.793 2.003-.744.158-1.715.284-4.985-1.071-4.181-1.706-6.873-5.944-7.082-6.218-.2-.273-1.679-2.236-1.679-4.265 0-2.029 1.062-3.024 1.44-3.44.344-.372.748-.465 1-.465l.716.013c.23.01.538-.087.842.641.312.748 1.062 2.577 1.156 2.767.093.19.155.413.03.667-.124.254-.186.413-.373.636-.186.224-.392.5-.56.673-.186.19-.38.397-.163.779.217.382.963 1.588 2.067 2.573 1.42 1.263 2.617 1.654 2.999 1.839.382.186.604.155.826-.093.223-.248.956-1.116 1.212-1.499.254-.382.508-.317.857-.19.348.127 2.213 1.043 2.594 1.232.382.19.636.285.73.444.093.158.093.914-.252 1.882z"/>
        </svg>
      </a>
    </>
  );
}

export default App;
