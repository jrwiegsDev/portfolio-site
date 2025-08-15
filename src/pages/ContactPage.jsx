import React from 'react';

function ContactPage() {
  return (
    <div className="home-container">
      <h1>Contact</h1>

      <div className="contact-section">
        <div className="contact-row">
          <span className="contact-label">Email:</span>
          <a className="contact-link" href="mailto:jrwiegs@gmail.com">jrwiegs@gmail.com</a>
        </div>

        <div className="contact-row">
          <span className="contact-label">LinkedIn:</span>
          <img src="/LinkedIn_Logo.png" alt="LinkedIn" className="contact-icon" />
          <a className="contact-link" href="https://www.linkedin.com/in/jrwiegs/" target="_blank" rel="noopener noreferrer">/in/jrwiegs</a>
        </div>

        <div className="contact-row">
          <span className="contact-label">GitHub:</span>
          <img src="/GitHub_logo.png" alt="GitHub" className="contact-icon" />
          <a className="contact-link" href="https://github.com/jrwiegsDev" target="_blank" rel="noopener noreferrer">jrwiegsDev</a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;