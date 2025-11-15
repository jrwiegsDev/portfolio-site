import React from 'react';
import './AboutPage.css'; // Make sure to import the new CSS file

function AboutPage() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <section className="about-section">
        <div className="image-container">
          <img src="/Me_Sunglasses.png" alt="Joe wearing sunglasses" />
        </div>
        <div className="text-container">
          <p>
            Hello! I'm Joe, a software engineer passionate about building intuitive, impactful web applications. My journey has taken me from civil engineering and data analysis to full-stack development, and I've found my calling in creating software that solves real problems.
          </p>
          <p>
            I specialize in the <strong>MERN stack (MongoDB, Express.js, React, Node.js)</strong> and bring a strong analytical foundation through my experience with <strong>Python and SQL</strong>. This combination allows me to approach development with both creative problem-solving and data-driven decision-making.
          </p>
          <p>
            I've built three full-stack applications: a Congressional campaign website, a volunteer signup and management system for that campaign, and my local Democratic Club's website. I've also been approached about building another campaign site for a County Board seat and a Democratic Club website for southern Illinois. I'm eager to bring this blend of technical skill and purpose-driven development to a forward-thinking team.
          </p>
        </div>
      </section>

      <hr />

      <h2>A History</h2>
      <section className="about-section">
        <div className="image-container">
          <img src="/Me_No_Sunglasses.png" alt="Joe not wearing sunglasses" />
        </div>
                <div className="text-container">
          <p>
            After earning my <strong>Bachelor's in Civil Engineering</strong>, I began my career in roles that sharpened my eye for <strong>process, research, and data</strong>. When COVID-related cuts shifted my path, I pivoted toward data-focused roles that refined my analytical thinking.
          </p>
          <p>
            As a Patient Case Auditor managing large data volumes with over <strong>99% accuracy</strong>, I discovered my affinity for systematic problem-solving. While taking data analysis courses through Alex the Analyst's platform, I completed the Python for Data Analysis course...and everything changed. What started as a tool for data analysis became a gateway to programming itself. I fell in love with building, not just analyzing.
          </p>
          <p>
            My internship with <strong>Relentless</strong> exposed me to the fast-paced world of political campaigns, working across multiple teams and managing competing priorities. This experience, combined with my newfound passion for programming, led me to pursue software engineering full-time.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;