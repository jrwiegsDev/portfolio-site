import React from 'react';
import HoneypotField from '../components/HoneypotField';
import { useContactForm, CONTACT_LIMITS } from '../hooks/useContactForm';
import './ContactPage.css';

function ContactPage() {
  const { formData, status, isSubmitting, handleChange, handleSubmit } = useContactForm('contact_page');

  return (
    <div className="home-container">
      <h1>Contact Me</h1>
      <div className="contact-page-layout">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              maxLength={CONTACT_LIMITS.NAME}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              maxLength={CONTACT_LIMITS.EMAIL}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              maxLength={CONTACT_LIMITS.MESSAGE}
              required
            ></textarea>
            {/* Honeypot field - hidden from users, bots will fill it */}
            <HoneypotField value={formData.website} onChange={handleChange} />
            <button type="submit" disabled={isSubmitting}>Send Message</button>
            {status && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{status}</p>}
          </form>
        </div>
        <div className="contact-links-container">
          <h3>Or Find Me Here:</h3>
          <div className="contact-row">
            <span className="contact-label">LinkedIn:</span>
            <img src="/LinkedIn_Logo.png" alt="LinkedIn" className="contact-icon" />
            <a className="contact-link" href="https://www.linkedin.com/in/jrwiegs/" target="_blank" rel="noopener noreferrer">Let's connect!</a>
          </div>
          <div className="contact-row">
            <span className="contact-label">GitHub:</span>
            <img src="/GitHub_logo.png" alt="GitHub" className="contact-icon" />
            <a className="contact-link" href="https://github.com/jrwiegsDev" target="_blank" rel="noopener noreferrer">View my profile!</a>
          </div>
          <div className="coffee-section">
            <a 
              href="https://buymeacoffee.com/jrwiegsdev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="coffee-link"
            >
              ☕ Buy Me a Coffee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
