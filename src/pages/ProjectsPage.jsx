import React from 'react';
import './ProjectsPage.css';

// Import all the individual project components
import SoftwareEngineeringProjects from './projects/SoftwareEngineeringProjects';
import PythonProjects from './projects/PythonProjects';
import SqlProjects from './projects/SqlProjects';
import ExcelProjects from './projects/ExcelProjects';
import TableauProjects from './projects/TableauProjects';

// Import custom hook and constants
import { useProjectFilters } from '../hooks/useProjectFilters';
import { FILTER_TYPES, FILTER_LABELS } from '../constants';

function ProjectsPage() {
  const {
    mainFilter,
    dataSubFilter,
    projectTypeFilter,
    handleMainFilterClick,
    handleDataSubFilterClick,
    handleProjectTypeFilterClick
  } = useProjectFilters();

  return (
    <div className="projects-container">
      <h1>My Work</h1>
      <p>A collection of my projects showcasing my skills in full-stack development and data analysis. Select a category below to view my projects!</p>

      {/* --- Main Filter Buttons --- */}
      <div className="tool-buttons">
        <button
          className={`tool-button ${mainFilter === FILTER_TYPES.MAIN.SWE ? 'active' : ''}`}
          onClick={() => handleMainFilterClick(FILTER_TYPES.MAIN.SWE)}
        >
          {FILTER_LABELS.MAIN.SWE}
        </button>
        <button
          className={`tool-button ${mainFilter === FILTER_TYPES.MAIN.DATA ? 'active' : ''}`}
          onClick={() => handleMainFilterClick(FILTER_TYPES.MAIN.DATA)}
        >
          {FILTER_LABELS.MAIN.DATA}
        </button>
      </div>

      {/* --- Conditionally Render Sub-Filter Buttons --- */}
      {mainFilter === FILTER_TYPES.MAIN.DATA && (
        <div className="tool-buttons sub-filter-buttons">
          <button
            className={`tool-button ${dataSubFilter === FILTER_TYPES.DATA_SUB.PYTHON ? 'active' : ''}`}
            onClick={() => handleDataSubFilterClick(FILTER_TYPES.DATA_SUB.PYTHON)}
          >
            {FILTER_LABELS.DATA_SUB.PYTHON}
          </button>
          <button
            className={`tool-button ${dataSubFilter === FILTER_TYPES.DATA_SUB.SQL ? 'active' : ''}`}
            onClick={() => handleDataSubFilterClick(FILTER_TYPES.DATA_SUB.SQL)}
          >
            {FILTER_LABELS.DATA_SUB.SQL}
          </button>
          <button
            className={`tool-button ${dataSubFilter === FILTER_TYPES.DATA_SUB.EXCEL ? 'active' : ''}`}
            onClick={() => handleDataSubFilterClick(FILTER_TYPES.DATA_SUB.EXCEL)}
          >
            {FILTER_LABELS.DATA_SUB.EXCEL}
          </button>
          <button
            className={`tool-button ${dataSubFilter === FILTER_TYPES.DATA_SUB.TABLEAU ? 'active' : ''}`}
            onClick={() => handleDataSubFilterClick(FILTER_TYPES.DATA_SUB.TABLEAU)}
          >
            {FILTER_LABELS.DATA_SUB.TABLEAU}
          </button>
        </div>
      )}

      {/* --- Third-level filter: Professional vs Skills/Practice --- */}
      {/* Show for Software Engineering OR for Python projects */}
      {(mainFilter === FILTER_TYPES.MAIN.SWE || (mainFilter === FILTER_TYPES.MAIN.DATA && dataSubFilter === FILTER_TYPES.DATA_SUB.PYTHON)) && (
        <div className="tool-buttons sub-filter-buttons">
          <button
            className={`tool-button ${projectTypeFilter === FILTER_TYPES.PROJECT_TYPE.PROFESSIONAL ? 'active' : ''}`}
            onClick={() => handleProjectTypeFilterClick(FILTER_TYPES.PROJECT_TYPE.PROFESSIONAL)}
          >
            {FILTER_LABELS.PROJECT_TYPE.PROFESSIONAL}
          </button>
          <button
            className={`tool-button ${projectTypeFilter === FILTER_TYPES.PROJECT_TYPE.SKILLS ? 'active' : ''}`}
            onClick={() => handleProjectTypeFilterClick(FILTER_TYPES.PROJECT_TYPE.SKILLS)}
          >
            {FILTER_LABELS.PROJECT_TYPE.SKILLS}
          </button>
        </div>
      )}

      <hr />

      {/* --- Conditionally Render Projects --- */}
      <div className="projects-display-area">
        {/* If main filter is 'swe', show SWE projects with filter */}
        {mainFilter === FILTER_TYPES.MAIN.SWE && <SoftwareEngineeringProjects filter={projectTypeFilter} />}

        {/* If main filter is 'data', check the sub-filter */}
        {mainFilter === FILTER_TYPES.MAIN.DATA && dataSubFilter === FILTER_TYPES.DATA_SUB.PYTHON && <PythonProjects filter={projectTypeFilter} />}
        {mainFilter === FILTER_TYPES.MAIN.DATA && dataSubFilter === FILTER_TYPES.DATA_SUB.SQL && <SqlProjects />}
        {mainFilter === FILTER_TYPES.MAIN.DATA && dataSubFilter === FILTER_TYPES.DATA_SUB.EXCEL && <ExcelProjects />}
        {mainFilter === FILTER_TYPES.MAIN.DATA && dataSubFilter === FILTER_TYPES.DATA_SUB.TABLEAU && <TableauProjects />}
      </div>
    </div>
  );
}

export default ProjectsPage;

