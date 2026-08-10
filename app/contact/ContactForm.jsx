'use client';

import React from 'react';

export default function ContactForm() {
  const [btnText, setBtnText] = React.useState('Send Message →');
  const [btnStyle, setBtnStyle] = React.useState({});

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('userName'),
      email: formData.get('userEmail'),
      company: formData.get('userCompany'),
      message: formData.get('userMessage'),
      timestamp: Date.now()
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.name || !data.email || !data.message) {
      setBtnText('Please fill all required fields');
      setBtnStyle({ background: '#ef4444' });
      setTimeout(() => { setBtnText('Send Message →'); setBtnStyle({}); }, 3000);
      return;
    }
    if (!emailRegex.test(data.email)) {
      setBtnText('Please enter a valid email');
      setBtnStyle({ background: '#ef4444' });
      setTimeout(() => { setBtnText('Send Message →'); setBtnStyle({}); }, 3000);
      return;
    }

    setBtnText('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      let responseData;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
      } else {
        throw new Error('Server error');
      }

      if (!response.ok || !responseData.success) {
        throw new Error(responseData.error || 'Failed to send message');
      }
      
      setBtnText('✓ Message Sent!');
      setBtnStyle({ background: 'var(--cyan)', color: '#050811' });
      setTimeout(() => {
        setBtnText('Send Message →');
        setBtnStyle({});
        e.target.reset();
      }, 3000);
    } catch (error) {
      console.error("Submission Error:", error);
      setBtnText('Error - Try Again');
      setBtnStyle({ background: '#ef4444' });
      setTimeout(() => {
        setBtnText('Send Message →');
        setBtnStyle({});
      }, 3000);
    }
  };

  return (
    <div className="subpage-card">
      <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Project Inquiry Form</h2>
      <form onSubmit={handleForm} aria-label="Project inquiry contact form">
        <div className="fg" style={{ marginBottom: '1rem' }}>
          <label htmlFor="nameInput" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--w50)', marginBottom: '0.3rem' }}>Your Name *</label>
          <input id="nameInput" className="fi" type="text" name="userName" placeholder="John Doe" aria-label="Your full name" required />
        </div>
        <div className="fg" style={{ marginBottom: '1rem' }}>
          <label htmlFor="emailInput" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--w50)', marginBottom: '0.3rem' }}>Email Address *</label>
          <input id="emailInput" className="fi" type="email" name="userEmail" placeholder="john@example.com" aria-label="Your email address" required />
        </div>
        <div className="fg" style={{ marginBottom: '1rem' }}>
          <label htmlFor="companyInput" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--w50)', marginBottom: '0.3rem' }}>Company / Organization (Optional)</label>
          <input id="companyInput" className="fi" type="text" name="userCompany" placeholder="Acme Corp" aria-label="Your company name (optional)" />
        </div>
        <div className="fg" style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="messageInput" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--w50)', marginBottom: '0.3rem' }}>Project Details *</label>
          <textarea id="messageInput" className="ft" name="userMessage" placeholder="Tell us about your software or web app requirements..." aria-label="Project details and requirements" required></textarea>
        </div>
        <button type="submit" className="fsub" style={{ width: '100%', ...btnStyle }}>{btnText}</button>
      </form>
    </div>
  );
}
