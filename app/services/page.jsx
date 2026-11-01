import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Technology & Software Development Services | Discover Crew Technologies',
  description: 'Explore custom software development, web applications, mobile apps, AI automation, SaaS platforms, and AI marketing services by Discover Crew Technologies.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/services',
  },
};

const serviceItems = [
  {
    slug: 'web-development',
    title: 'Web Application Development',
    tag: 'Full Stack & Next.js',
    desc: 'High-performance web applications built with Next.js, React, and modern backend systems engineered for speed, security, and scalability.',
    color: 'var(--cyan)'
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Application Development',
    tag: 'iOS & Android',
    desc: 'Cross-platform and native mobile software tailored to deliver smooth user experiences, offline functionality, and secure backend sync.',
    color: 'var(--blue)'
  },
  {
    slug: 'software-development',
    title: 'Custom Software Engineering',
    tag: 'APIs & Internal Tools',
    desc: 'Bespoke business tools, internal administration dashboards, workflow engines, and REST/GraphQL APIs built to meet unique business requirements.',
    color: 'var(--indigo)'
  },
  {
    slug: 'ai-automation',
    title: 'AI Integration & Automation',
    tag: 'AI Workflows & LLMs',
    desc: 'Automate manual business tasks, integrate custom AI models, build intelligent chat systems, and streamline internal operational processes.',
    color: 'var(--gold)'
  },
  {
    slug: 'saas-development',
    title: 'SaaS Platform Development',
    tag: 'Multi-Tenant & Cloud',
    desc: 'Turn software ideas into scalable products with multi-tenant architectures, payment gateway integrations, user role management, and analytics.',
    color: 'var(--teal)'
  },
  {
    slug: 'ai-marketing',
    title: 'AI Marketing & Growth Automation',
    tag: 'AI Marketing & SEO',
    desc: 'Strategic AI-driven search engine optimization, predictive customer modeling, automated marketing workflows, and conversion rate optimization.',
    color: 'var(--purple)'
  }
];

export default function ServicesPage() {
  return (
    <div className="subpage-container">
      <Navigation />
      
      <main className="subpage-hero">
        <div className="eyebrow"><span className="eyebrow-dot"></span> OUR CAPABILITIES</div>
        <h1 className="subpage-h1">Software & Technology <span className="acc">Services</span></h1>
        <p className="subpage-lead">
          Discover Crew Technologies provides end-to-end software development, mobile engineering, AI integration, and digital growth services tailored to help modern businesses operate efficiently and scale predictably.
        </p>

        <div className="subpage-grid-2">
          {serviceItems.map((item) => (
            <article key={item.slug} className="subpage-card">
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: item.color, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                {item.tag}
              </div>
              <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.8rem' }}>
                {item.title}
              </h2>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {item.desc}
              </p>
              <Link 
                href={`/services/${item.slug}`} 
                style={{ color: 'var(--cyan)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}
              >
                Explore Service &rarr;
              </Link>
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
