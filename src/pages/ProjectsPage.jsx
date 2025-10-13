import React, { useState } from 'react';
import './ProjectsPage.css';

// Import all the individual project components
import SoftwareEngineeringProjects from './projects/SoftwareEngineeringProjects';
import PythonProjects from './projects/PythonProjects';
import SqlProjects from './projects/SqlProjects';
import ExcelProjects from './projects/ExcelProjects';
import TableauProjects from './projects/TableauProjects';

function ProjectsPage() {
  // Main filter: 'swe' or 'data'
  const [mainFilter, setMainFilter] = useState('swe');
  // Sub-filter for data analysis tools. 'python' is the default if data is selected.
  const [dataSubFilter, setDataSubFilter] = useState('python');

  // When a main filter is clicked, reset the sub-filter
  const handleMainFilterClick = (filter) => {
    setMainFilter(filter);
    if (filter === 'data') {
      setDataSubFilter('python'); // Default to showing Python projects first
    }
  };

  return (
    <div className="projects-container">
      <h1>My Work</h1>
      <p>A collection of my projects showcasing my skills in full-stack development and data analysis. Select a category below to view my projects!</p>

      {/* --- Main Filter Buttons --- */}
      <div className="tool-buttons">
        <button
          className={`tool-button ${mainFilter === 'swe' ? 'active' : ''}`}
          onClick={() => handleMainFilterClick('swe')}
        >
          Software Engineering
        </button>
        <button
          className={`tool-button ${mainFilter === 'data' ? 'active' : ''}`}
          onClick={() => handleMainFilterClick('data')}
        >
          Data Analysis
        </button>
      </div>

      {/* --- Conditionally Render Sub-Filter Buttons --- */}
      {mainFilter === 'data' && (
        <div className="tool-buttons sub-filter-buttons">
          <button
            className={`tool-button ${dataSubFilter === 'python' ? 'active' : ''}`}
            onClick={() => setDataSubFilter('python')}
          >
            Python
          </button>
          <button
            className={`tool-button ${dataSubFilter === 'sql' ? 'active' : ''}`}
            onClick={() => setDataSubFilter('sql')}
          >
            SQL
          </button>
          <button
            className={`tool-button ${dataSubFilter === 'excel' ? 'active' : ''}`}
            onClick={() => setDataSubFilter('excel')}
          >
            Excel
          </button>
          <button
            className={`tool-button ${dataSubFilter === 'tableau' ? 'active' : ''}`}
            onClick={() => setDataSubFilter('tableau')}
          >
            Tableau
          </button>
        </div>
      )}

      <hr />

      {/* --- Conditionally Render Projects --- */}
      <div className="projects-display-area">
        {/* If main filter is 'swe', show SWE projects */}
        {mainFilter === 'swe' && <SoftwareEngineeringProjects />}

        {/* If main filter is 'data', check the sub-filter */}
        {mainFilter === 'data' && dataSubFilter === 'python' && <PythonProjects />}
        {mainFilter === 'data' && dataSubFilter === 'sql' && <SqlProjects />}
        {mainFilter === 'data' && dataSubFilter === 'excel' && <ExcelProjects />}
        {mainFilter === 'data' && dataSubFilter === 'tableau' && <TableauProjects />}
      </div>
    </div>
  );
}

export default ProjectsPage;

