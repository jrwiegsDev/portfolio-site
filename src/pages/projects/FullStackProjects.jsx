import ProjectCard from '../../components/ProjectCard';
import { Link } from 'react-router-dom';

function FullStackProjects() {
  return (
    <div>
      <h2>Full-Stack Projects</h2>
      <p>Welcome to my full-stack projects! Here you'll find projects that combine front-end and back-end technologies to create functional web applications.</p>
      <div className="project-grid">

        {/* Naruto API App Card */}
        <ProjectCard
          imageSrc="/naruto-api-app.png"
          imageAlt="Naruto API App Project"
          title="Naruto Character API App"
          linkUrl="https://naruto-api-app.onrender.com" // <-- IMPORTANT: Replace this with your live Naruto app's URL from Render
          linkText="View Live Project"
        >
          <p><strong>Goal:</strong> A dynamic web application that fetches and displays character data from a Naruto API, built with React and Node.js.</p>
        </ProjectCard>

        {/* Digital Business Card Card */}
        <ProjectCard
          imageSrc="/digitalBusinessCard.png"
          imageAlt="Digital Business Card Project"
          title="Digital Business Card"
          linkUrl="/projects/digital-business-card"
          linkText="View Live Project"
        >
          <p><strong>Goal:</strong> A responsive digital business card built with HTML and CSS, featuring a functional back-end contact form.</p>
        </ProjectCard>
        
      </div>
    </div>
  );
}

export default FullStackProjects;