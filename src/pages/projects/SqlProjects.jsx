import ProjectCard from '../../components/ProjectCard';
import { sqlProjects } from '../../data/projectsData';
import { HEADINGS } from '../../constants';

function SqlProjects() {
  return (
    <div>
      <h2>{HEADINGS.SQL_PROJECTS}</h2>
      <div className="project-grid">
        {sqlProjects.map((project) => (
          <ProjectCard
            key={project.title}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            title={project.title}
            linkUrl={project.linkUrl}
            linkText={project.linkText}
          >
            <p><strong>Goal:</strong> {project.goal}</p>
            <p><strong>{project.skillsLabel}:</strong> {project.skills}</p>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
}

export default SqlProjects;