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
            Hello! I’m Joe, a software engineer with a passion for building intuitive and impactful web applications. My journey has taken me from a background in civil engineering and data analysis to a deep dive into full-stack development.
          </p>
          <p>
            I thrive on turning complex problems into clean, efficient code and have hands-on experience building projects with the <strong>MERN stack (MongoDB, Express.js, React, Node.js)</strong>, alongside a strong foundation in <strong>Python and SQL</strong>.
          </p>
          <p>
            I'm eager to bring my unique blend of analytical thinking and development skills to a team where I can contribute to meaningful projects and continue to grow as an engineer.
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
            After earning my <strong>Bachelor’s in Civil Engineering</strong>, I began my career in roles that sharpened my eye for <strong>process, research, and data</strong>. When COVID-related cuts shifted my path, I pivoted toward roles that refined my analytical and organizational skills.
          </p>
          <p>
            My work as a Patient Case Auditor involved managing large volumes of data with over <strong>99% accuracy</strong>, while my internship experience with Relentless utilizing voter files and polling data reignited my passion for using technology to facilitate positive change.
          </p>
          <p>
            These experiences inspired me to focus entirely on software development. Most recently, I am currently developing full-stack applications for a political candidates and my local area Democratic Club, putting my skills to practical use. I'm excited to take this next step and join a forward-thinking company as a full-time <strong>software developer/engineer</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;