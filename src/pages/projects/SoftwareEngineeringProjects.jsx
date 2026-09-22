import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import ImageModal from '../../components/ImageModal';
import { softwareEngineeringProjects } from '../../data/projectsData';
import { FILTER_TYPES, HEADINGS } from '../../constants';

const HEADING_BY_FILTER = {
  [FILTER_TYPES.PROJECT_TYPE.PROFESSIONAL]: HEADINGS.PROFESSIONAL_PROJECTS,
  [FILTER_TYPES.PROJECT_TYPE.SKILLS]: HEADINGS.SKILLS_PROJECTS,
  [FILTER_TYPES.PROJECT_TYPE.ARCHIVED]: HEADINGS.ARCHIVED_PROJECTS
};

function SoftwareEngineeringProjects({ filter = FILTER_TYPES.PROJECT_TYPE.PROFESSIONAL }) {
  const [modalImage, setModalImage] = React.useState(null);

  const projectsToShow = softwareEngineeringProjects[filter] ?? softwareEngineeringProjects.professional;
  const heading = HEADING_BY_FILTER[filter] ?? HEADINGS.PROFESSIONAL_PROJECTS;

  const handleImageClick = (imageSrc, imageAlt) => {
    setModalImage({ src: imageSrc, alt: imageAlt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <h2>{heading}</h2>
      {filter === FILTER_TYPES.PROJECT_TYPE.ARCHIVED && (
        <p className="archived-note">
          Projects I built for organizations and have since handed off. I no longer maintain them, so live sites may have changed.
        </p>
      )}
      <div className="project-grid">
        {projectsToShow.map(project => {
          // Special handling for projects with modal
          if (project.useModal) {
            return (
              <div key={project.title} className="project-card">
                <img 
                  src={project.imageSrc} 
                  alt={project.imageAlt} 
                  className="project-image"
                  onClick={() => handleImageClick(project.imageSrc, project.imageAlt)}
                  style={{ cursor: 'pointer' }}
                />
                <h2>{project.title}</h2>
                <p><strong>Goal:</strong> {project.description}</p>
                <p>
                  <span 
                    onClick={() => handleImageClick(project.imageSrc, project.imageAlt)}
                    style={{ 
                      color: '#61dafb', 
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    {project.linkText}
                  </span>
                </p>
              </div>
            );
          }

          // Regular projects
          return (
            <ProjectCard
              key={project.title}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              title={project.title}
              linkUrl={project.linkUrl}
              linkText={project.linkText}
            >
              <p><strong>Goal:</strong> {project.description}</p>
            </ProjectCard>
          );
        })}
      </div>

      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default SoftwareEngineeringProjects;