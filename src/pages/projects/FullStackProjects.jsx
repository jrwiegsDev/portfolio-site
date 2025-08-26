import ProjectCard from '../../components/ProjectCard';
import { Link } from 'react-router-dom';

function FullStackProjects() {
  return (
    <div>
      <h2>Full-Stack Projects</h2>
      <p>Welcome to my full-stack projects! Here you'll find projects that combine front-end and back-end technologies to create functional web applications.</p>
      <div className="project-grid">

        {/* Markdown Previewer Project Card */}
        <ProjectCard
          imageSrc="/markdown-previewer.png"
          imageAlt="Markdown Previewer Project"
          title="React Markdown Previewer"
          linkUrl="https://markdown-previewer-x5q6.onrender.com"
          linkText="View Live Project"
        >
          <p><strong>Goal:</strong> A real-time Markdown editor built with React. Users can type Markdown in a text area and see the formatted HTML output rendered instantly on the page.</p>
        </ProjectCard>

        {/* Harry Potter API App Card */}
        <ProjectCard
          imageSrc="/hp-api-app.png"
          imageAlt="Harry Potter API App Project"
          title="Harry Potter Character & Spell Finder"
          linkUrl="https://hp-api-app.onrender.com"
          linkText="View Live Project"
        >
          <p><strong>Goal:</strong> A dynamic single-page application that fetches and displays data from the Harry Potter API, featuring real-time search, filtering, and a custom magic wand cursor effect.</p>
        </ProjectCard>

        {/* Naruto API App Card */}
        <ProjectCard
          imageSrc="/naruto-api-app.png"
          imageAlt="Naruto API App Project"
          title="Naruto Character API App"
          linkUrl="https://naruto-api-app-g29x.onrender.com/"
          linkText="View Live Project"
        >
          <p><strong>Goal:</strong> A responsive web application that fetches and displays character data from a public Naruto API, built using React and Node.js.</p>
        </ProjectCard>

        {/* Digital Business Card Card */}
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
    </div>
  );
}

export default FullStackProjects;
