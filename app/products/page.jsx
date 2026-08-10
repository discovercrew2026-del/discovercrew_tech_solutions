import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Software Products & Platforms | Discover Crew Technologies',
  description: 'Explore proprietary software products built by Discover Crew Technologies, including Ventura AI business platform and Event OS event management software.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/products',
  },
};

const products = [
  {
    slug: 'ventura-ai',
    name: 'Ventura AI',
    tagline: 'AI Business Automation Platform',
    status: 'Production / Live',
    statusColor: 'var(--cyan)',
    desc: 'Ventura AI is Discover Crew’s AI-powered business platform designed to help teams manage tasks, leads, content, and business workflows from one unified dashboard.',
    features: ['AI Task Management', 'Lead Automation', 'Content Generation', 'Business Intelligence'],
    link: '/products/ventura-ai'
  },
  {
    slug: 'event-os',
    name: 'Event OS',
    tagline: 'Event Management Platform',
    status: 'Under Development',
    statusColor: 'var(--gold)',
    desc: 'Event OS is an all-in-one event management platform currently under active development. Engineered for event creation, ticketing, registration, and attendance tracking.',
    features: ['Event Ticketing', 'Registration Management', 'Attendance Tracking', 'Team Coordination'],
    link: '/products/event-os'
  }
];

export default function ProductsPage() {
  return (
    <div className="subpage-container">
      <Navigation />

      <main className="subpage-hero">
        <div className="eyebrow"><span className="eyebrow-dot"></span> PROPRIETARY SOFTWARE</div>
        <h1 className="subpage-h1">Discover Crew <span className="acc">Products</span></h1>
        <p className="subpage-lead">
          In addition to custom software engineering for clients, Discover Crew Technologies develops proprietary software platforms to solve specialized operational challenges.
        </p>

        <div className="subpage-grid-2">
          {products.map((p) => (
            <article key={p.slug} className="subpage-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--w50)', textTransform: 'uppercase' }}>
                  {p.tagline}
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: p.statusColor }}>
                  {p.status}
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.8rem' }}>
                {p.name}
              </h2>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {p.features.map(f => (
                  <span key={f} style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '4px', background: 'rgba(0,229,255,0.06)', color: 'var(--w80)' }}>
                    {f}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link href={p.link} style={{ color: 'var(--cyan)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                  View Overview &rarr;
                </Link>
                {p.slug === 'ventura-ai' && (
                  <a 
                    href="https://ventura-ai-kappa.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontSize: '0.85rem', color: 'var(--w50)', textDecoration: 'none' }}
                  >
                    Open Live App ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
