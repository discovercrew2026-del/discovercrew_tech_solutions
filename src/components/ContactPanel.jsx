import React from 'react';

export default function ContactPanel({ isActive }) {
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

    // 1. Strict Validation
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
      // 2. Trigger Email API
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
        throw new Error('Server did not return JSON. Is the API route configured?');
      }

      if (!response.ok || !responseData.success) {
        throw new Error(responseData.error || 'Failed to send message');
      }
      
      setBtnText('✓ Message Sent!');
      setBtnStyle({ background: 'var(--cyan)' });
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
    <div className="panel" id="panel-4">
      <div className="contact-content">
        <div className="testimonials-col">
          <div className={`fade-left ${isActive ? 'vis' : ''}`} data-panel="4">
            <p className="section-label">Client Stories</p>
            <h2 className="section-h2" style={{ marginBottom: '1.2rem' }}>What They Say</h2>
          </div>
          <div className={`tcard fade-left d2 ${isActive ? 'vis' : ''}`} data-panel="4">
            <div className="stars">★★★★★</div>
            <p className="ttext">"Discover Crew transformed our entire digital presence. Their AI automation saved us 30+ hours a week and the ROI was visible within the first month."</p>
            <div className="tauthor">
              <div className="tavatar cyan">AM</div>
              <div><div className="tname">Arjun Mehta</div><div className="trole">CEO, NexaTech Solutions</div></div>
            </div>
          </div>
          <div className={`tcard fade-left d3 ${isActive ? 'vis' : ''}`} data-panel="4">
            <div className="stars">★★★★★</div>
            <p className="ttext">"Ventura AI is genuinely revolutionary. The team didn't just build us a website — they built us a growth engine that runs on autopilot."</p>
            <div className="tauthor">
              <div className="tavatar purple">PR</div>
              <div><div className="tname">Priya Rajan</div><div className="trole">Founder, GrowthBloc</div></div>
            </div>
          </div>
          <div className={`tcard fade-left d4 ${isActive ? 'vis' : ''}`} data-panel="4">
            <div className="stars">★★★★★</div>
            <p className="ttext">"Our e-commerce conversion rate jumped 220% after their digital marketing overhaul. Exceptional team, exceptional results."</p>
            <div className="tauthor">
              <div className="tavatar gold">DC</div>
              <div><div className="tname">David Chen</div><div className="trole">CMO, UrbanCart</div></div>
            </div>
          </div>
        </div>
        <div className={`contact-col fade-right d2 ${isActive ? 'vis' : ''}`} data-panel="4">
          <div className="glass contact-box">
            <div className="ctitle">Let's Build Together</div>
            <p className="csub">Ready to transform your digital presence? Drop us a message — we respond within 24 hours.</p>
            <form onSubmit={handleForm}>
              <div className="fg"><input className="fi" type="text" name="userName" placeholder="Your Name" required /></div>
              <div className="fg"><input className="fi" type="email" name="userEmail" placeholder="Email Address" required /></div>
              <div className="fg"><input className="fi" type="text" name="userCompany" placeholder="Company (optional)" /></div>
              <div className="fg"><textarea className="ft" name="userMessage" placeholder="Tell us about your project..." required></textarea></div>
              <button type="submit" className="fsub" style={btnStyle}>{btnText}</button>
            </form>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#" style={{ color: 'var(--w50)', fontSize: '.8rem', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'var(--cyan)'} onMouseOut={(e) => e.target.style.color = 'var(--w50)'}>LinkedIn</a>
            <a href="#" style={{ color: 'var(--w50)', fontSize: '.8rem', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'var(--cyan)'} onMouseOut={(e) => e.target.style.color = 'var(--w50)'}>Twitter/X</a>
            <a href="#" style={{ color: 'var(--w50)', fontSize: '.8rem', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'var(--cyan)'} onMouseOut={(e) => e.target.style.color = 'var(--w50)'}>Instagram</a>
          </div>

          {/* WhatsApp CTA */}
          <a
            className="whatsapp-contact-btn"
            href="https://wa.me/919500607705?text=Hello%20DiscoverCrew%0AName:%20%0AEmail:%20%0AMessage:%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
              <path fill="currentColor" d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.489-2.001A15.926 15.926 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm8.293 22.979c-.344.968-1.703 1.77-2.793 2.003-.744.158-1.715.284-4.985-1.071-4.181-1.706-6.873-5.944-7.082-6.218-.2-.273-1.679-2.236-1.679-4.265 0-2.029 1.062-3.024 1.44-3.44.344-.372.748-.465 1-.465l.716.013c.23.01.538-.087.842.641.312.748 1.062 2.577 1.156 2.767.093.19.155.413.03.667-.124.254-.186.413-.373.636-.186.224-.392.5-.56.673-.186.19-.38.397-.163.779.217.382.963 1.588 2.067 2.573 1.42 1.263 2.617 1.654 2.999 1.839.382.186.604.155.826-.093.223-.248.956-1.116 1.212-1.499.254-.382.508-.317.857-.19.348.127 2.213 1.043 2.594 1.232.382.19.636.285.73.444.093.158.093.914-.252 1.882z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
