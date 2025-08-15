import ProjectCard from '../../components/ProjectCard';

const excelProjectData = [
  {
    imageSrc: '/Excel_Screenshot.png',
    imageAlt: 'Excel Coffee Dashboard',
    title: 'Coffee Orders Dashboard',
    goal: 'Build an interactive Excel dashboard to explore trends in coffee orders and practice turning raw data into something useful and visual.',
    skills: 'Data cleaning, pivot tables, formulas like INDEX-MATCH, and dashboard design to make the insights easy to explore and understand.',
    linkUrl: '/Coffee_Orders_Portfolio.xlsx',
    linkText: 'Download Coffee Orders Dashboard (.xlsx)',
    skillsLabel: 'Excel Skills',
    download: true
  }
];

function ExcelProjects() {
  return (
    <div>
      <h2>Excel Projects</h2>
      <div className="project-grid">
        {excelProjectData.map((project) => (
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