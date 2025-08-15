import ProjectCard from '../../components/ProjectCard';

const sqlProjectsData = [
  {
    imageSrc: '/polling_analyst_sql.png',
    imageAlt: 'Polling Analyst SQL',
    title: 'Polling Analyst: AI & Misinformation',
    goal: 'Analyze public sentiment around AI-generated political content, trust, and misinformation by demographic groups using simulated survey data.',
    skills: 'Complex JOINs, aggregations, CASE logic for custom age bucketing, CTEs, subqueries, percentage breakdowns, and View creation for reusable cleaned data.',
    linkUrl: '/Polling_Analyst_SQL.pdf',
    linkText: 'View Full PDF Report',
    skillsLabel: 'SQL Skills'
  },
  {
    imageSrc: '/political_project_sql.png',
    imageAlt: 'Campaign Data Analysis SQL',
    title: 'Campaign Strategy SQL Analysis',
    goal: 'Identify which campaign factors most strongly predict election wins (fundraising, outreach, events, or turnout).',
    skills: 'Joins, CTEs, aggregations, conditional logic, window functions, and data validation across multiple tables.',
    linkUrl: '/Political_Project_SQL.pdf',
    linkText: 'View Full PDF Report',
    skillsLabel: 'SQL Skills'
  }
];

function SqlProjects() {
  return (
    <div>
      <h2>SQL Projects</h2>
      <div className="project-grid">
        {sqlProjectsData.map((project) => (
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