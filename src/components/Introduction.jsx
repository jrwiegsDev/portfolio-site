import React from 'react';
import { portraits } from '../data/photosData';

function Introduction() {
  return (
    <div className="home-container">
      <h1>Welcome!</h1>
      <div className="intro-section">
        <div className="image-hover-container headshot">
          <img src={portraits.headshot.src} srcSet={portraits.headshot.srcSet} sizes="250px" alt="Joe's headshot" />
        </div>
        <div className="intro-text">
          <p>I'm a <strong>Backend Developer</strong> who enjoys building the parts of software people don't see: the APIs, data, and infrastructure everything else depends on, and the testing that keeps them working.</p>
          <p>When I'm not coding, I love to play the piano, get lost in my Steam library, and go on adventures with my partner Joshua, and our two dogs, Daisy and Milo!</p>
          <p>My journey into tech began in 2024 with data analytics, where I discovered Python for data analysis. Writing my first code in Python sparked a deeper curiosity for programming. I didn't just want to analyze data anymore, I wanted to build the systems that power it. I taught myself to code so I could do more for progressive causes, and since then I've shipped software for a congressional campaign and my local Democratic club, and spent 2026 as the first dedicated QA tester at Relentless, a civic tech nonprofit. My flagship project is <a href="https://dopolitics.org" target="_blank" rel="noopener noreferrer">DoPolitics</a>, a live site that shows anyone how their members of Congress vote, built in Python with FastAPI and PostgreSQL. I'm looking for my next role in backend or DevOps engineering.</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;