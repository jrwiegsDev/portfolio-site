import ProjectCard from '../../components/ProjectCard';

const tableauProjectData = [
  {
    imageSrc: '/british_airways_reviews.png',
    imageAlt: 'British Airways Tableau Dashboard',
    title: 'British Airways Reviews Dashboard',
    goal: 'Analyze British Airways customer reviews to uncover insights into passenger satisfaction and identify areas for service improvement.',
    skills: 'Tableau, data connection and preparation, calculated fields, heat maps, bar charts, and interactive dashboard design.',
    linkUrl: 'https://public.tableau.com/app/profile/joe.wiegert/viz/British_Airways_Reviews_17433707890850/Dashboard1',
    linkText: 'View Interactive Dashboard on Tableau Public',
    skillsLabel: 'Skills Used'
  }
];

function TableauProjects() {
  return (
    <div>
      <h2>Tableau Projects</h2>
      <div className="project-grid">
        {tableauProjectData.map((project) => (
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