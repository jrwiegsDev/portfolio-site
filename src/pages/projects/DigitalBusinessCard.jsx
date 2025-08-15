import React from 'react';
import './DigitalBusinessCard.css'; // Import the dedicated CSS file

function DigitalBusinessCard() {
  
  // A simple handler for the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading
    alert("Thank you for your message!"); // Placeholder action
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
        <h3>Junior Full-Stack Developer</h3>

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
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
}

export default DigitalBusinessCard;
