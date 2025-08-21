import React, { useState } from 'react';
import './DigitalBusinessCard.css';

function DigitalBusinessCard() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="card-page-container">
      <div className="db-card">
        <img 
          src="/Me_Sunglasses.jpg" 
          alt="Joe Wiegert Headshot" 
          className="db-card-headshot" 
        />
        <h1>Joe Wiegert</h1>
        <h3>Software Engineer</h3>
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
          <h4>Full-Stack Skills</h4>
          <ul className="db-skills-list">
            <li className="db-skill-item">React</li>
            <li className="db-skill-item">Node.js</li>
            <li className="db-skill-item">Express</li>
            <li className="db-skill-item">MongoDB</li>
            <li className="db-skill-item">JavaScript (ES6+)</li>
            <li className="db-skill-item">HTML5 & CSS3</li>
            <li className="db-skill-item">REST APIs</li>
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
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {status && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default DigitalBusinessCard;
