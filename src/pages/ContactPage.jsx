import React, { useState, useEffect } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // Honeypot field
    formLoadTime: Date.now() // Track when form loaded
  });
  const [status, setStatus] = useState(''); // To display success/error messages

  // Update formLoadTime when component mounts
  useEffect(() => {
    setFormData(prev => ({ ...prev, formLoadTime: Date.now() }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...'); // Provide feedback to the user

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ 
          name: '', 
          email: '', 
          message: '', 
          website: '',
          formLoadTime: Date.now() 
        }); // Reset form
      } else {
        const data = await response.json();
        setStatus(data.msg || data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

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
            {/* Honeypot field - hidden from users, bots will fill it */}
            <input 
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            <button type="submit">Send Message</button>
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
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
