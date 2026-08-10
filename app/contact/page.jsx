import React from 'react';
import Navigation from '../components/Navigation';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Discover Crew Technologies | Start a Software Project',
  description: 'Contact Discover Crew Technologies to discuss custom software development, mobile apps, AI automation, or SaaS development projects. Get in touch via form or WhatsApp.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/contact',
  },
  openGraph: {
    title: 'Contact Discover Crew Technologies | Start a Software Project',
    description: 'Reach out to our engineering team to discuss your software project, web application, or AI automation needs.',
    url: 'https://discovercrewtechnologies.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="subpage-container">
      <Navigation />

      <main className="subpage-hero">
        <div className="eyebrow"><span className="eyebrow-dot"></span> GET IN TOUCH</div>
        <h1 className="subpage-h1">Start Your Project with <span className="acc">Discover Crew</span></h1>
        <p className="subpage-lead">
          Have a software project, mobile application, or AI automation requirement? Fill out the contact form below or reach out directly via WhatsApp.
        </p>

        <div className="subpage-grid-2" style={{ alignItems: 'start', marginTop: '2rem' }}>
          <div className="subpage-card">
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Contact Information</h2>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Our engineering team responds to inquiries promptly to discuss project scopes, timelines, and technical architecture.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--cyan)', fontWeight: 700, textTransform: 'uppercase' }}>Direct Phone / WhatsApp</div>
                <div style={{ fontSize: '1rem', color: 'var(--white)', fontWeight: 600 }}>+91 95006 07705</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--purple)', fontWeight: 700, textTransform: 'uppercase' }}>Official Email</div>
                <div style={{ fontSize: '1rem', color: 'var(--white)', fontWeight: 600 }}>discovercrew2026@gmail.com</div>
              </div>
            </div>

            <a
              href="https://wa.me/919500607705?text=Hello%20DiscoverCrew%0AName:%20%0AEmail:%20%0AMessage:%20"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-contact-btn"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
                <path fill="currentColor" d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.489-2.001A15.926 15.926 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm8.293 22.979c-.344.968-1.703 1.77-2.793 2.003-.744.158-1.715.284-4.985-1.071-4.181-1.706-6.873-5.944-7.082-6.218-.2-.273-1.679-2.236-1.679-4.265 0-2.029 1.062-3.024 1.44-3.44.344-.372.748-.465 1-.465l.716.013c.23.01.538-.087.842.641.312.748 1.062 2.577 1.156 2.767.093.19.155.413.03.667-.124.254-.186.413-.373.636-.186.224-.392.5-.56.673-.186.19-.38.397-.163.779.217.382.963 1.588 2.067 2.573 1.42 1.263 2.617 1.654 2.999 1.839.382.186.604.155.826-.093.223-.248.956-1.116 1.212-1.499.254-.382.508-.317.857-.19.348.127 2.213 1.043 2.594 1.232.382.19.636.285.73.444.093.158.093.914-.252 1.882z"/>
              </svg>
              Chat Directly on WhatsApp
            </a>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>What to expect</h3>
              <ul style={{ color: 'var(--w50)', fontSize: '0.9rem', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
                <li>Response within 24 hours on business days</li>
                <li>Initial project consultation call</li>
                <li>Technical scope & timeline estimation</li>
                <li>Transparent pricing discussion</li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
