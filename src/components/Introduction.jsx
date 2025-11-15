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
          <p>I'm a <strong>Software Engineer</strong> who loves building things for the web and solving complex problems with clean code.</p>
          <p>When I'm not coding, I love to play the piano, get lost in my Steam library, and go on adventures with my partner Joshua, and our two dogs, Daisy and Milo!</p>
          <p>My journey into tech began with data analytics, where I discovered Python for data analysis. Writing my first code in Python sparked a deeper curiosity for programming. I didn't just want to analyze data anymore, I wanted to build the systems that power it. This passion led me to dive into full-stack development, and I haven't looked back.</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;