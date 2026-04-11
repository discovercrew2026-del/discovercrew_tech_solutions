import React from 'react';

function AnimatedNumber({ target, suffix, isActive }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }

    let start = null;
    let animationFrame;
    const duration = 2000;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      
      setCount(Math.floor(ease * target));
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    // small delay to sync with CSS fade-up animation (delay is 0.5s for d4)
    const timeout = setTimeout(() => {
      animationFrame = window.requestAnimationFrame(step);
    }, 500);

    return () => {
      clearTimeout(timeout);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [target, isActive]);

  return <>{count}{suffix}</>;
}

export default function HeroPanel({ isActive, scrollTo }) {
  return (
    <div className="panel" id="panel-0">
      <div className="hero-content glass">
        <div className={`eyebrow fade-left ${isActive ? 'vis' : ''}`} data-panel="0">
          <span className="eyebrow-dot"></span>AI-Powered Digital Innovation
        </div>
        <h1 className={`h1 fade-left d1 ${isActive ? 'vis' : ''}`} data-panel="0">
          We Build<br /><span className="acc">Tomorrow's</span><br />Digital Reality
        </h1>
        <p className={`hero-sub fade-left d2 ${isActive ? 'vis' : ''}`} data-panel="0">
          Discover Crew delivers cutting-edge web development, strategic digital marketing,
          and AI automation — plus our own proprietary product, <strong>Ventura AI</strong>.
        </p>
        <div className={`hero-actions fade-left d3 ${isActive ? 'vis' : ''}`} data-panel="0">
          <button className="btn-primary" onClick={() => scrollTo(1)}>Explore Services</button>
          <button className="btn-ghost" onClick={() => scrollTo(2)}>View Ventura AI &rarr;</button>
        </div>
        <div className={`hero-stats fade-up d4 ${isActive ? 'vis' : ''}`} data-panel="0">
          <div><div className="stat-num"><AnimatedNumber target={2} suffix="+" isActive={isActive} /></div><div className="stat-label">Projects Delivered</div></div>
          <div><div className="stat-num"><AnimatedNumber target={2} suffix="+" isActive={isActive} /></div><div className="stat-label">Happy Clients</div></div>
          <div><div className="stat-num"><AnimatedNumber target={98} suffix="%" isActive={isActive} /></div><div className="stat-label">Satisfaction Rate</div></div>
        </div>
      </div>
    </div>
  );
}
