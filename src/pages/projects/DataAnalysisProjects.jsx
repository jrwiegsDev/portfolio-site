import React from 'react';
import ProjectCard from '../../components/ProjectCard';

function DataAnalysisProjects() {
  // Data from your original project files
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

  const professionalPythonProjects = [
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
  
  const skillsPythonProjects = [
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

  const excelProjectData = {
    imageSrc: '/Excel_Screenshot.png',
    imageAlt: 'Excel Coffee Dashboard',
    title: 'Coffee Orders Dashboard',
    goal: 'Build an interactive Excel dashboard to explore trends in coffee orders and practice turning raw data into something useful and visual.',
    skills: 'Data cleaning, pivot tables, formulas like INDEX-MATCH, and dashboard design to make the insights easy to explore and understand.',
    linkUrl: '/Coffee_Orders_Portfolio.xlsx',
    linkText: 'Download Coffee Orders Dashboard (.xlsx)',
    skillsLabel: 'Excel Skills',
    download: true
  };

  const tableauProjectData = {
    imageSrc: '/british_airways_reviews.png',
    imageAlt: 'British Airways Tableau Dashboard',
    title: 'British Airways Reviews Dashboard',
    goal: 'Analyze British Airways customer reviews to uncover insights into passenger satisfaction and identify areas for service improvement.',
    skills: 'Tableau, data connection and preparation, calculated fields, heat maps, bar charts, and interactive dashboard design.',
    linkUrl: 'https://public.tableau.com/app/profile/joe.wiegert/viz/British_Airways_Reviews_17433707890850/Dashboard1',
    linkText: 'View Interactive Dashboard on Tableau Public',
    skillsLabel: 'Skills Used'
  };

  return (
    <div>
      {/* --- SQL Section --- */}
      <h3>SQL</h3>
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

      {/* --- Python Section --- */}
      <h3 style={{ marginTop: '2rem' }}>Python</h3>
      <h4>Professional Projects</h4>
      <div className="project-grid">
        {professionalPythonProjects.map(project => (
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
      <h4 style={{ marginTop: '2rem' }}>Skills / Practice Projects</h4>
      <div className="project-grid">
        {skillsPythonProjects.map(project => (
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

      {/* --- Excel & Tableau Section --- */}
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
            <h3>Excel</h3>
            <ProjectCard
                imageSrc={excelProjectData.imageSrc}
                imageAlt={excelProjectData.imageAlt}
                title={excelProjectData.title}
                linkUrl={excelProjectData.linkUrl}
                linkText={excelProjectData.linkText}
                download={excelProjectData.download}
            >
                <p><strong>Goal:</strong> {excelProjectData.goal}</p>
                <p><strong>{excelProjectData.skillsLabel}:</strong> {excelProjectData.skills}</p>
            </ProjectCard>
        </div>
        <div style={{ flex: 1, minWidth: '300px' }}>
            <h3>Tableau</h3>
            <ProjectCard
                imageSrc={tableauProjectData.imageSrc}
                imageAlt={tableauProjectData.imageAlt}
                title={tableauProjectData.title}
                linkUrl={tableauProjectData.linkUrl}
                linkText={tableauProjectData.linkText}
            >
                <p><strong>Goal:</strong> {tableauProjectData.goal}</p>
                <p><strong>{tableauProjectData.skillsLabel}:</strong> {tableauProjectData.skills}</p>
            </ProjectCard>
        </div>
      </div>
    </div>
  );
}

export default DataAnalysisProjects;

