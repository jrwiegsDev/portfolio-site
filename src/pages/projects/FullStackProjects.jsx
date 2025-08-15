import ProjectCard from '../../components/ProjectCard';
import { Link } from 'react-router-dom';

function FullStackProjects() {
  return (
    <div>
      <h2>Full-Stack Projects</h2>
      <p>Welcome to my full-stack projects! Here you'll find projects that combine front-end and back-end technologies to create functional web applications.</p>
      <div className="project-grid">
        <ProjectCard
          imageSrc="/digitalBusinessCard.png"
          imageAlt="Digital Business Card Project"
          title="Digital Business Card"
          // Instead of a simple link, we render a Link component
          linkUrl="/projects/digital-business-card" 
          linkText="View Live Project"
        >
          <p><strong>Goal:</strong> A responsive digital business card built with HTML and CSS.</p>
        </ProjectCard>
      </div>
    </div>
  );
}

export default FullStackProjects;