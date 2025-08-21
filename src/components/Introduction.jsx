import React from 'react';

function Introduction() {
  return (
    <div className="home-container">
      <h1>Welcome!</h1>
      <div className="intro-section">
        <div className="image-hover-container headshot">
          <img src="/Me_Headshot.JPG" alt="Headshot" />
          <div className="image-hover-text">Headshot</div>
        </div>
        <div className="intro-text">
          <p>I’m a Patient Case Auditor by day, and a Software Engineer by night.</p>
          <p>I play piano by ear, and I love going on adventures with my partner, Joshua, and our two dogs, Daisy and Milo!</p>
          <p>Over the past year, I’ve embarked on a career journey that started with building my foundational analytical skills in Excel, SQL, and finally Tableau. After diving deeper into SQL, I decided to pursue Python. When I started learning Python, I realized how much I enjoyed programming and problem-solving. And now I've fallen in love with the possibilities of coding and developing! Now my goal is to transition into a full-time Software Engineer role so I can not only grow my career, but also gain more time and freedom to spend with my family.</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;