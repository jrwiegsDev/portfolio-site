import React from 'react';
import ProjectCard from '../../components/ProjectCard';

function SoftwareEngineeringProjects() {
  return (
    <div className="project-grid">

      <ProjectCard
        imageSrc="/survey-app.png"
        imageAlt="Survey & Polling App"
        title="Survey & Polling App"
        linkUrl="https://survey-app-zuvw.onrender.com"
        linkText="View Live Project"
      >
        <p><strong>Goal:</strong> A full-stack polling application where users can vote on various topics and see the results update instantly. Built with a React front-end, a Node.js/Express back-end, and a MongoDB database.</p>
      </ProjectCard>

      <ProjectCard
        imageSrc="/markdown-previewer.png"
        imageAlt="Markdown Previewer Project"
        title="React Markdown Previewer"
        linkUrl="https://markdown-previewer-x5q6.onrender.com"
        linkText="View Live Project"
      >
        <p><strong>Goal:</strong> A real-time Markdown editor built with React. Users can type Markdown in a text area and see the formatted HTML output rendered instantly on the page.</p>
      </ProjectCard>

      <ProjectCard
        imageSrc="/hp-api-app.png"
        imageAlt="Harry Potter API App Project"
        title="Harry Potter Character & Spell Finder"
        linkUrl="https://hp-api-app.onrender.com"
        linkText="View Live Project"
      >
        <p><strong>Goal:</strong> A dynamic single-page application that fetches and displays data from the Harry Potter API, featuring real-time search, filtering, and a custom magic wand cursor effect.</p>
      </ProjectCard>

      <ProjectCard
        imageSrc="/naruto-api-app.png"
        imageAlt="Naruto API App Project"
        title="Naruto Character API App"
        linkUrl="https://naruto-api-app.onrender.com"
        linkText="View Live Project"
      >
        <p><strong>Goal:</strong> A responsive web application that fetches and displays character data from a public Naruto API, built using React and Node.js.</p>
      </ProjectCard>

      <ProjectCard
        imageSrc="/digitalBusinessCard.png"
        imageAlt="Digital Business Card Project"
        title="Digital Business Card"
        linkUrl="/projects/digital-business-card"
        linkText="View This Project's Page"
      >
        <p><strong>Goal:</strong> A responsive digital business card featuring a functional back-end contact form built with Node.js and Express.</p>
      </ProjectCard>
      
    </div>
  );
}

export default SoftwareEngineeringProjects;