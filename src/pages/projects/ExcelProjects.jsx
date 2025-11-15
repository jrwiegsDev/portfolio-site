import ProjectCard from '../../components/ProjectCard';
import { excelProjects } from '../../data/projectsData';
import { HEADINGS } from '../../constants';

function ExcelProjects() {
  return (
    <div>
      <h2>{HEADINGS.EXCEL_PROJECTS}</h2>
      <div className="project-grid">
        {excelProjects.map((project) => (
          <ProjectCard
            key={project.title}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            title={project.title}
            linkUrl={project.linkUrl}
            linkText={project.linkText}
            download={project.download}
          >
            <p><strong>Goal:</strong> {project.goal}</p>
            <p><strong>{project.skillsLabel}:</strong> {project.skills}</p>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
}

export default ExcelProjects;