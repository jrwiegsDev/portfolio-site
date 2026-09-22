import React from 'react';
import HoneypotField from '../../components/HoneypotField';
import { useContactForm, CONTACT_LIMITS } from '../../hooks/useContactForm';
import { portraits } from '../../data/photosData';
import './DigitalBusinessCard.css';

function DigitalBusinessCard() {
  const { formData, status, isSubmitting, handleChange, handleSubmit } = useContactForm('business_card');

  return (
    <div className="card-page-container">
      <div className="db-card">
        <img 
          src={portraits.sunglasses.src}
          srcSet={portraits.sunglasses.srcSet}
          sizes="150px"
          alt="Joe Wiegert Headshot" 
          className="db-card-headshot" 
        />
        <h1>Joe Wiegert</h1>
        <h3>Backend Developer</h3>
        <div className="db-action-buttons">
          <a 
            href="/Joe_Wiegert_Resume.pdf"
            download 
            className="db-action-btn db-btn-primary"
          >
            Download Resume
          </a>
          <a 
            href="https://github.com/jrwiegsDev"
            target="_blank" 
            rel="noopener noreferrer" 
            className="db-action-btn db-btn-secondary"
          >
            View GitHub
          </a>
        </div>
        <div className="db-skills-section">
          <h4>Skills</h4>
          <ul className="db-skills-list">
            <li className="db-skill-item">Node.js</li>
            <li className="db-skill-item">Express</li>
            <li className="db-skill-item">REST APIs</li>
            <li className="db-skill-item">Python</li>
            <li className="db-skill-item">SQL</li>
            <li className="db-skill-item">MongoDB</li>
            <li className="db-skill-item">JavaScript (ES6+)</li>
            <li className="db-skill-item">React</li>
            <li className="db-skill-item">QA & Testing</li>
            <li className="db-skill-item">Git & GitHub</li>
          </ul>
        </div>
        <form className="db-contact-form" onSubmit={handleSubmit}>
          <h4>Contact Me</h4>
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
    </div>
  );
}

export default DigitalBusinessCard;
