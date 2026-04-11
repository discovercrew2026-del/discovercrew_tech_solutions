import React from 'react';

export default function Navigation({ currentSec, scrollTo }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNav = (idx) => {
    scrollTo(idx);
    setIsOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => handleNav(0)}>Discover<span>Crew</span></div>
      
      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a className={currentSec === 0 ? 'active' : ''} onClick={() => handleNav(0)}>Home</a></li>
        <li><a className={currentSec === 1 ? 'active' : ''} onClick={() => handleNav(1)}>Services</a></li>
        <li><a className={currentSec === 2 ? 'active' : ''} onClick={() => handleNav(2)}>Products</a></li>
        <li><a className={currentSec === 3 ? 'active' : ''} onClick={() => handleNav(3)}>About</a></li>
        <li><a className={currentSec === 4 ? 'active' : ''} onClick={() => handleNav(4)}>Contact</a></li>
        <li className="mobile-only"><button className="nav-cta" style={{ display: 'block', width: '100%' }} onClick={() => handleNav(4)}>Get Started</button></li>
      </ul>
      
      <button className="nav-cta" onClick={() => handleNav(4)}>Get Started</button>
    </nav>
  );
}
