import ProjectCard from '../../components/ProjectCard';

const professionalProjects = [
  {
    imageSrc: '/python_project_parole_sim.png',
    title: 'Dynamic Parole Recommendation Simulator',
    description: 'Simulate 500 parole cases to analyze how adding dynamic variables changes release recommendations. This project explores responsible data-driven policy modeling using pandas and matplotlib.',
    linkUrl: 'https://github.com/select-joe-from-wiegs/joe_portfolio/blob/main/python/Project_Dynamic-Parole-Recommendation-Simulator.ipynb'
  },
  {
    imageSrc: '/python_project_web_scraper.png',
    title: 'Automated Web Scraper',
    description: 'Extract live cryptocurrency data using requests, BeautifulSoup, and store the results in a structured DataFrame.',
    linkUrl: 'https://github.com/select-joe-from-wiegs/joe_portfolio/blob/main/python/Project_Automated_Web_Scraper.ipynb'
  },
  {
    imageSrc: '/python_project_web_scraper_regex_pandas.png',
    title: 'Web Scraping + Regex + Pandas',
    description: 'Scrape sample HTML data, apply regex patterns for cleaning, and analyze results with pandas.',
    linkUrl: 'https://github.com/select-joe-from-wiegs/joe_portfolio/blob/main/python/Project_Web_Scraping_Regex_Pandas.ipynb'
  }
];

const skillsProjects = [
  {
    imageSrc: '/python_project_file_sorter.png',
    title: 'Automatic File Sorter',
    description: 'Organize and sort files in a folder based on file type using os, shutil, and Python automation.',
    linkUrl: 'https://github.com/select-joe-from-wiegs/joe_portfolio/blob/main/python/Project_Automatic_File_Sorter.ipynb'
  },
  {
    imageSrc: '/python_project_calculator.png',
    title: 'Calculator',
    description: 'A beginner-friendly CLI calculator that handles basic arithmetic operations with input validation.',
    linkUrl: 'https://github.com/select-joe-from-wiegs/joe_portfolio/blob/main/python/Project_Calculator.ipynb'
  },
  {
    imageSrc: '/python_project_unit_converter.png',
    title: 'Unit of Measurement Converter',
    description: 'Convert between units like length, weight, and temperature using reusable functions and clean user input.',
    linkUrl: 'https://github.com/select-joe-from-wiegs/joe_portfolio/blob/main/python/Project_Unit_of_Measurement_Converter.ipynb'
  }
];

function PythonProjects() {
  return (
    <div>
      <h2>Professional Projects</h2>
      <div className="project-grid">
        {professionalProjects.map(project => (
          <ProjectCard
            key={project.title}
            imageSrc={project.imageSrc}
            imageAlt={project.title}
            title={project.title}
            linkUrl={project.linkUrl}
            linkText="View Notebook on GitHub"
          >
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </div>

      <hr />

      <h2>Skills / Practice Projects</h2>
      <div className="project-grid">
        {skillsProjects.map(project => (
          <ProjectCard
            key={project.title}
            imageSrc={project.imageSrc}
            imageAlt={project.title}
            title={project.title}
            linkUrl={project.linkUrl}
            linkText="View Notebook on GitHub"
          >
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
}

export default PythonProjects;