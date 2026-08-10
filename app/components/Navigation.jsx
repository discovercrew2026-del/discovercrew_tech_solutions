'use client';

import React from 'react';
import Link from 'next/link';

export default function Navigation({ currentSec = 0, scrollTo }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNav = (idx, fallbackUrl) => {
    if (typeof scrollTo === 'function') {
      scrollTo(idx);
    } else if (typeof window !== 'undefined') {
      window.location.href = fallbackUrl;
    }
    setIsOpen(false);
  };

  return (
    <nav className="nav" aria-label="Main Navigation">
      <Link 
        href="/" 
        className="nav-logo" 
        style={{ textDecoration: 'none', color: 'inherit' }}
        onClick={(e) => {
          if (typeof scrollTo === 'function') {
            e.preventDefault();
            handleNav(0, '/');
          }
        }}
      >
        DiscoverCrew<span>Technologies</span>
      </Link>

      <button 
        className={`burger ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link
            href="/"
            className={currentSec === 0 ? 'active' : ''}
            onClick={(e) => {
              if (typeof scrollTo === 'function') {
                e.preventDefault();
                handleNav(0, '/');
              }
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={currentSec === 1 ? 'active' : ''}
            onClick={(e) => {
              if (typeof scrollTo === 'function') {
                e.preventDefault();
                handleNav(1, '/services');
              }
            }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className={currentSec === 2 ? 'active' : ''}
            onClick={(e) => {
              if (typeof scrollTo === 'function') {
                e.preventDefault();
                handleNav(2, '/products');
              }
            }}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={currentSec === 3 ? 'active' : ''}
            onClick={(e) => {
              if (typeof scrollTo === 'function') {
                e.preventDefault();
                handleNav(3, '/about');
              }
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={currentSec === 4 ? 'active' : ''}
            onClick={(e) => {
              if (typeof scrollTo === 'function') {
                e.preventDefault();
                handleNav(4, '/contact');
              }
            }}
          >
            Contact
          </Link>
        </li>
      </ul>

      <button 
        className="nav-cta" 
        onClick={() => handleNav(4, '/contact')}
      >
        Start a Project
      </button>
    </nav>
  );
}

