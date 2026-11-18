import React from 'react';
import './AboutPage.css'; // Make sure to import the new CSS file
import { portraits } from '../data/photosData';

function AboutPage() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <section className="about-section">
        <div className="image-container">
          <img src={portraits.sunglasses.src} srcSet={portraits.sunglasses.srcSet} sizes="200px" alt="Joe wearing sunglasses" />
        </div>
        <div className="text-container">
          <p>
            Hello! I'm Joe, a <strong>backend developer</strong> who cares about building software that's reliable, secure, and solves real problems. My path has taken me from civil engineering to data analysis to web development, and along the way I found that the part I enjoy most is the backend: the APIs, data, and infrastructure that everything else depends on. I didn't get here through a computer science degree. I taught myself, because I wanted to be as useful as possible to the progressive causes I care about, and that is still what drives me to keep learning and to do things the right way.
          </p>
          <p>
            I've been coding since 2024. I started with <strong>Node.js, Express, React, and MongoDB</strong>, on top of a foundation in <strong>Python and SQL</strong> from my data work, and today I build backend-first in <strong>Python with FastAPI and PostgreSQL</strong>. I keep deepening those skills through <strong>Boot.dev's backend path</strong>, with a focus on the habits that keep software healthy in production: automated tests, CI, infrastructure as code, and careful handling of people's data.
          </p>
          <p>
            My flagship project is <a href="https://dopolitics.org" target="_blank" rel="noopener noreferrer"><strong>DoPolitics</strong></a>, a live site where anyone can enter their address and see how their members of Congress vote, how often they show up, and what the bills behind those votes do. It runs on Render with managed Postgres and nightly data jobs, and every change goes through a pull request with hundreds of automated tests. Before that, I shipped a Congressional campaign website and a volunteer management system that coordinated 340+ volunteers, plus a newsletter and website system for my local Democratic Club.
          </p>
        </div>
      </section>

      <hr />

      <h2>A History</h2>
      <section className="about-section">
        <div className="image-container">
          <img src={portraits.noSunglasses.src} srcSet={portraits.noSunglasses.srcSet} sizes="200px" alt="Joe not wearing sunglasses" />
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
            In 2026 I returned to Relentless, first as a Program Organizer and then as the organization's <strong>first manual QA tester</strong>, a role I helped define. As a <strong>QA Associate</strong> on the Product &amp; Engineering team, I ran regression and pull-request testing, wrote the test documentation the team relied on, and reviewed AI-generated test cases before they were trusted. It taught me to read systems I didn't build, and to treat "done" as something a stranger can reproduce.
          </p>
          <p>
            As that contract wrapped up in November 2026, I launched <strong>DoPolitics</strong>, the project that brings all of it together: the data work, the backend, the testing, and the deployment. Next, I want to bring that same care to a team building software that matters, as a <strong>backend or DevOps engineer</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;