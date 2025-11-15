import ProjectCard from '../../components/ProjectCard';
import { pythonProjects } from '../../data/projectsData';
import { HEADINGS, LINK_TEXT } from '../../constants';

function PythonProjects({ filter = 'professional' }) {
  const projectsToShow = filter === 'professional' ? pythonProjects.professional : pythonProjects.skills;
  const heading = filter === 'professional' ? HEADINGS.PROFESSIONAL_PROJECTS : HEADINGS.SKILLS_PROJECTS;

  return (
    <div>
      <h2>{heading}</h2>
      <div className="project-grid">
        {projectsToShow.map(project => (
          <ProjectCard
            key={project.title}
            imageSrc={project.imageSrc}
            imageAlt={project.title}
            title={project.title}
            linkUrl={project.linkUrl}
            linkText={LINK_TEXT.VIEW_NOTEBOOK}
          >
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
}

export default PythonProjects;