import React from 'react';

function Introduction() {
  return (
    <div className="home-container">
      <h1>Welcome!</h1>
      <div className="intro-section">
        <div className="image-hover-container headshot">
          <img src="/Me_Headshot.png" alt="Joe's headshot" />
        </div>
        <div className="intro-text">
          <p>I’m a <strong>Software Engineer</strong> who loves building things for the web and solving complex problems with clean code.</p>
          <p>When I'm not coding, I love to play the piano, go on adventures with my partner, Joshua, and our two dogs, Daisy and Milo!</p>
          <p>My journey into tech started with a foundation in data analytics but quickly grew into a passion for programming. I fell in love with the endless possibilities of software development and am now focused on building a career where I can create useful, intuitive applications while having the flexibility to enjoy life with my family.</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;