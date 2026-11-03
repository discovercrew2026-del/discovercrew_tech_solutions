import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'Ventura AI — AI Business Management Platform | Discover Crew',
  description: 'Ventura AI is Discover Crew Technologies’ AI-powered business platform designed to help teams manage tasks, leads, content generation, and business workflows.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/products/ventura-ai',
  },
  openGraph: {
    title: 'Ventura AI — AI Business Management Platform',
    description: 'Manage tasks, leads, content, and business workflows with Ventura AI by Discover Crew Technologies.',
    url: 'https://discovercrewtechnologies.com/products/ventura-ai',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': 'Ventura AI',
  'applicationCategory': 'BusinessApplication',
  'operatingSystem': 'Web Browser',
  'description': 'AI-powered business platform designed to assist teams with workflow management, lead organization, task tracking, and AI content generation.',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD'
  },
  'author': {
    '@type': 'Organization',
    'name': 'Discover Crew Technologies',
    'url': 'https://discovercrewtechnologies.com'
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://discovercrewtechnologies.com'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Products',
      'item': 'https://discovercrewtechnologies.com/products'
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'name': 'Ventura AI',
      'item': 'https://discovercrewtechnologies.com/products/ventura-ai'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is Ventura AI?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Ventura AI is an AI-powered business platform built by Discover Crew Technologies that unifies task tracking, lead organization, AI content drafting, and business metrics in a single interface.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How can our team access Ventura AI?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'You can access the live Ventura AI application directly via the web app link, or contact Discover Crew Technologies for custom setup and integration.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can Ventura AI be customized for custom enterprise workflows?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Discover Crew Technologies offers custom engineering services to extend Ventura AI, connect existing database backends, or build tailored workflow modules for your team.'
      }
    }
  ]
};

export default function VenturaAIPage() {
  return (
    <div className="subpage-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      <main className="subpage-hero">
        <div style={{ fontSize: '0.85rem', color: 'var(--w50)', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <Link href="/products" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>Products</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>Ventura AI</span>
        </div>

        <div className="eyebrow"><span className="eyebrow-dot"></span> FLAGSHIP PRODUCT</div>
        <h1 className="subpage-h1">⚡ Ventura AI <span className="acc">Business Platform</span></h1>
        <p className="subpage-lead">
          Ventura AI is Discover Crew Technologies’ AI-powered business platform designed to help teams manage tasks, organize customer leads, generate marketing content, and track operational workflows from a single unified dashboard.
        </p>

        <div style={{ marginBottom: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a 
            href="https://ventura-ai-kappa.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Launch Ventura AI Application ↗
          </a>
        </div>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Product Overview & Core Capabilities
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Workflow & Task Dashboard</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Centralized dashboard providing real-time task tracking, project milestones, team activity logs, and automated status updates.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Lead & Contact Organization</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Streamlined lead tracking system that organizes client contact details, interaction history, and follow-up reminders.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>AI Content Generation Tools</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Integrated AI writing tools to draft marketing copy, email outreach drafts, blog outlines, and social media posts.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Business Analytics</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Clear operational visual metrics, task completion reports, and activity insights to keep team productivity on target.
              </p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Who Ventura AI Is Built For
          </h2>
          <div className="subpage-grid-3">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--cyan)' }}>Growing Teams</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Small to mid-size teams needing unified task and lead tracking without complicated enterprise tools.</p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--purple)' }}>Agencies & Freelancers</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Creators and client-facing teams organizing outreach, content creation, and project delivery.</p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)' }}>Founders & Managers</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Business leaders looking to streamline internal operations and maintain visibility across workflows.</p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Frequently Asked Questions
          </h2>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>What is Ventura AI?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Ventura AI is an AI-powered business platform built by Discover Crew Technologies that unifies task tracking, lead organization, AI content drafting, and business metrics in a single interface.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>How can our team access Ventura AI?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>You can access the live Ventura AI application directly via the web app link, or contact Discover Crew Technologies for custom setup and integration.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Can Ventura AI be customized for custom enterprise workflows?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. Discover Crew Technologies offers custom engineering services to extend Ventura AI, connect existing database backends, or build tailored workflow modules for your team.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Experience Ventura AI Today</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Access the live web platform or consult with Discover Crew for custom enterprise integrations.</p>
          <a 
            href="https://ventura-ai-kappa.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary" 
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Launch Ventura AI App ↗
          </a>
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
