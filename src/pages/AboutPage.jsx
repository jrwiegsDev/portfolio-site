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
            Hello! I'm Joe, a <strong>backend developer</strong> who cares about building software that's reliable, secure, and solves real problems. My path has taken me from civil engineering to data analysis to web development, and along the way I found that the part I enjoy most is the backend: the APIs, data, and infrastructure that everything else depends on.
          </p>
          <p>
            I've been coding since 2024, building with <strong>Node.js, Express, JavaScript, React, and MongoDB</strong>, with a strong analytical foundation in <strong>Python and SQL</strong> from my data work. I'm now deepening my backend skills through <strong>Boot.dev's Python and TypeScript path</strong>, focusing on backend engineering and DevOps: testing, deployment, and keeping systems healthy in production.
          </p>
          <p>
            I've shipped production applications for real organizations: a Congressional campaign website and a volunteer management system that coordinated 340+ volunteers, plus a website and newsletter system for my local Democratic Club. Today, as a QA Associate, I test other people's code every day, and it's made me a more careful engineer. I'm eager to bring that blend of building and verifying to a forward-thinking engineering team.
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
            My 2024 internship with <strong>Relentless</strong> exposed me to the fast-paced world of political campaigns, working across multiple teams and managing competing priorities. After the 2024 election, I committed to teaching myself to code, and within a year I was building production software. As <strong>Deputy Campaign Manager</strong> and later <strong>Software Engineer</strong> for Julie Fortier's Congressional campaign, I built the campaign's website and the volunteer management system behind its grassroots organizing.
          </p>
          <p>
            In 2026 I returned to Relentless, first as a Program Organizer and then as the organization's <strong>first manual QA tester</strong>, a role I helped define. Now a <strong>QA Associate</strong> on the Product &amp; Engineering team, I run regression and pull-request testing, write the test documentation the team relies on, and review AI-generated test cases before they're trusted. It's taught me to read systems I didn't build, and to treat "done" as something a stranger can reproduce.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;