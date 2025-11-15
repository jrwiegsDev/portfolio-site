import ProjectCard from '../../components/ProjectCard';
import { tableauProjects } from '../../data/projectsData';
import { HEADINGS } from '../../constants';

function TableauProjects() {
  return (
    <div>
      <h2>{HEADINGS.TABLEAU_PROJECTS}</h2>
      <div className="project-grid">
        {tableauProjects.map((project) => (
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

export default TableauProjects;