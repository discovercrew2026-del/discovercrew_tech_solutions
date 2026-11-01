import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'About Discover Crew Technologies | Software & Digital Engineering',
  description: 'Learn about Discover Crew Technologies — a technology company focused on custom software development, web & mobile applications, AI automation, and SaaS products.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/about',
  },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  'name': 'About Discover Crew Technologies',
  'url': 'https://discovercrewtechnologies.com/about',
  'description': 'Discover Crew Technologies is a technology company focused on building custom software, web and mobile applications, AI-powered automation, and SaaS products for businesses.',
  'inLanguage': 'en',
  'isPartOf': {
    '@type': 'WebSite',
    'name': 'Discover Crew Technologies',
    'url': 'https://discovercrewtechnologies.com'
  },
  'about': {
    '@type': 'Organization',
    'name': 'Discover Crew Technologies',
    'url': 'https://discovercrewtechnologies.com',
    'description': 'Technology company building custom software, web and mobile applications, AI automation, and SaaS products.',
    'founders': [
      { '@type': 'Person', 'name': 'Rohith', 'jobTitle': 'Founder & Full Stack Developer' }
    ]
  }
};


const teamMembers = [
  { name: 'Rohith', role: 'Founder & Full Stack Developer', img: '/Paul New.png', desc: 'Focuses on web architecture, Next.js application development, cloud infrastructure, and full-stack software engineering.' },
];

export default function AboutPage() {
  return (
    <div className="subpage-container">
      <Navigation />

      <main className="subpage-hero">
        <div className="eyebrow"><span className="eyebrow-dot"></span> ABOUT THE COMPANY</div>
        <h1 className="subpage-h1">Discover Crew <span className="acc">Technologies</span></h1>
        <p className="subpage-lead">
          Discover Crew Technologies is a technology company focused on building custom software, AI-powered solutions, business automation systems, and digital products for businesses.
        </p>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem' }}>
            Who We Are & What We Do
          </h2>
          <p style={{ color: 'var(--w80)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '850px' }}>
            We work across custom software development, web and mobile applications, AI integration, SaaS development, automation, and AI marketing. Alongside client engineering projects, we build and maintain our own proprietary software products, including Ventura AI and Event OS.
          </p>
          <p style={{ color: 'var(--w80)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '850px' }}>
            Our mission is straightforward: understand a business problem, design the right software solution, build it properly with modern frameworks, and ensure it delivers tangible operational value.
          </p>

          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--cyan)' }}>Client Software Engineering</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                We partner with startups, growing businesses, and enterprises to build tailored web applications, cross-platform mobile apps, internal dashboards, and custom APIs.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--purple)' }}>In-House Software Products</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                We engineer proprietary products like <strong>Ventura AI</strong> (AI business management platform) and <strong>Event OS</strong> (event ticketing & management platform).
              </p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Company Leadership & Founder
          </h2>
          <div className="subpage-grid-2">
            {teamMembers.map(m => (
              <div key={m.name} className="subpage-card" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <img 
                  src={m.img} 
                  alt={`${m.name} - ${m.role} at Discover Crew Technologies`} 
                  style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0 }}
                />
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{m.name}</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--cyan)', fontWeight: 600, marginBottom: '0.4rem', textTransform: 'uppercase' }}>{m.role}</div>
                  <p style={{ color: 'var(--w50)', fontSize: '0.85rem', lineHeight: 1.5 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Work With Discover Crew</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Let's discuss how our technology team can help build your software or grow your business online.</p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Contact Our Team &rarr;
          </Link>
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
