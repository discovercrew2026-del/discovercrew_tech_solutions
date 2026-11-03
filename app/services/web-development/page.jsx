import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'Web Application Development Services | Discover Crew Technologies',
  description: 'Discover Crew Technologies builds fast, secure, and scalable web applications using Next.js, React, and modern full-stack technologies in India and worldwide.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/services/web-development',
  },
  openGraph: {
    title: 'Web Application Development Services | Discover Crew Technologies',
    description: 'Custom web application development, enterprise web platforms, and responsive Next.js web solutions.',
    url: 'https://discovercrewtechnologies.com/services/web-development',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Web Application Development Services',
  'provider': {
    '@type': 'Organization',
    'name': 'Discover Crew Technologies',
    'url': 'https://discovercrewtechnologies.com'
  },
  'serviceType': 'Web Development',
  'description': 'Custom web application development engineered for high performance, accessibility, SEO, and cloud scalability.',
  'areaServed': [
    { '@type': 'Country', 'name': 'India' },
    { '@type': 'AdministrativeArea', 'name': 'Worldwide' }
  ]
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
      'name': 'Services',
      'item': 'https://discovercrewtechnologies.com/services'
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'name': 'Web Development',
      'item': 'https://discovercrewtechnologies.com/services/web-development'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What technologies do you use for web development?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'We primarily build with Next.js, React, JavaScript/TypeScript, Node.js, and cloud backend infrastructure (Firebase, Supabase, AWS).'
      }
    },
    {
      '@type': 'Question',
      'name': 'Will our web application be optimized for mobile and search engines?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Every project includes responsive mobile layout design, technical SEO optimization, meta tags, Core Web Vitals tuning, and accessibility adherence.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How long does it take to build a web application?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Timeline depends on the scope and complexity of the project. A simple web application typically takes 4–8 weeks. More complex platforms with custom backends, integrations, or dashboards can take 2–4 months. We provide a detailed timeline estimate after reviewing your requirements.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can you build web applications that integrate with third-party APIs?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We regularly integrate web applications with payment gateways (Stripe, Razorpay), CRMs, analytics platforms, email services, AI APIs, and custom REST or GraphQL backends.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do you provide ongoing support after the website is launched?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We offer ongoing technical maintenance, security monitoring, performance updates, and feature development after launch. Support terms are discussed as part of the project agreement.'
      }
    }
  ]
};

export default function WebDevelopmentPage() {
  return (
    <div className="subpage-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
          <Link href="/services" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>Services</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>Web Development</span>
        </div>

        <div className="eyebrow"><span className="eyebrow-dot"></span> WEB ENGINEERING</div>
        <h1 className="subpage-h1">Web Application <span className="acc">Development Services</span></h1>
        <p className="subpage-lead">
          We engineer high-performance, secure, and scalable web applications that deliver exceptional user experiences and drive measurable business results. From enterprise portals to SaaS web apps, we build with Next.js and modern Web standards.
        </p>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Common Challenges Businesses Face
          </h2>
          <div className="subpage-grid-3">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--cyan)', marginBottom: '0.5rem' }}>Slow Loading Speeds</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.9rem', lineHeight: 1.6 }}>Legacy tech stacks and unoptimized code result in lost users, poor Core Web Vitals, and lower search rankings.</p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--purple)', marginBottom: '0.5rem' }}>Poor Mobile Experience</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.9rem', lineHeight: 1.6 }}>Unresponsive layouts break on smaller screens, degrading user trust and causing high bounce rates.</p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.5rem' }}>Scalability Bottlenecks</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.9rem', lineHeight: 1.6 }}>Rigid architectures crash during traffic spikes and fail to integrate cleanly with third-party business APIs.</p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            What Discover Crew Provides
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Full-Stack Web Architecture</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                We design frontend and backend architectures using Next.js, Node.js, and modern cloud databases to ensure lightning-fast rendering and secure data management.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Performance & Technical SEO</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Every web application is engineered with server-side rendering (SSR), optimized bundle sizes, automated sitemaps, and structured JSON-LD data for search engines.
              </p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Our Web Development Process
          </h2>
          <div className="subpage-grid-3">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1rem', color: 'var(--cyan)' }}>1. Architecture & UX</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Wireframing, UI component design, and API data-flow mapping tailored to business objectives.</p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1rem', color: 'var(--purple)' }}>2. Iterative Building</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Agile development Sprints with clean component modularity, security audits, and continuous review.</p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1rem', color: 'var(--gold)' }}>3. Launch & Optimization</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Production deployment, performance benchmarking, SEO verification, and ongoing maintenance.</p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Frequently Asked Questions
          </h2>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>What technologies do you use for web development?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>We primarily build with Next.js, React, JavaScript/TypeScript, Node.js, and cloud backend infrastructure (Firebase, Supabase, AWS).</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Will our web application be optimized for mobile and search engines?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. Every project includes responsive mobile layout design, technical SEO optimization, meta tags, Core Web Vitals tuning, and accessibility adherence.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>How long does it take to build a web application?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Timeline depends on the scope and complexity. A straightforward web application typically takes 4–8 weeks. More complex platforms with custom backends, integrations, or dashboards can take 2–4 months. We provide a detailed timeline estimate after reviewing your requirements.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Can you build web applications that integrate with third-party APIs?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We regularly integrate web applications with payment gateways (Stripe, Razorpay), CRMs, analytics platforms, email services, AI APIs, and custom REST or GraphQL backends.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Do you provide ongoing support after the website is launched?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We offer ongoing technical maintenance, security updates, performance improvements, and feature development after launch. Support terms are agreed upon as part of the project.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to Build Your Web Application?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Discuss your project requirements with Discover Crew Technologies today.</p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Start Your Web Project &rarr;
          </Link>
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
