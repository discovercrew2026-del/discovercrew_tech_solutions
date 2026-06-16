'use client';

import React from 'react';

export default function Navigation({ currentSec, scrollTo }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNav = (idx) => {
    scrollTo(idx);
    setIsOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => handleNav(0)}>DiscoverCrew<span>Technologies</span></div>

      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <a
            href="#home"
            className={currentSec === 0 ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNav(0);
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={currentSec === 1 ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNav(1);
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#products"
            className={currentSec === 2 ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNav(2);
            }}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={currentSec === 3 ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNav(3);
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={currentSec === 4 ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNav(4);
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      <button className="nav-cta" onClick={() => handleNav(4)}>Get Started</button>
    </nav>
  );
}
