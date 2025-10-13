import { Link, Outlet } from 'react-router-dom';
import './ProjectsPage.css'; // <-- Add this import

function ProjectsPage() {
  return (
    <div className="projects-container"> {/* Using a more specific class now */}
      <h1>Projects</h1>
      <p>Here are my projects. Click any of the folders below to see the projects I've done with these respective tools:</p>

      <div className="tool-buttons">
        <Link to="/projects/fullstack" className="tool-button">Full-Stack</Link>
        <Link to="/projects/python" className="tool-button">Python</Link>
        <Link to="/projects/sql" className="tool-button">SQL</Link>
        <Link to="/projects/excel" className="tool-button">Excel</Link>
        <Link to="/projects/tableau" className="tool-button">Tableau</Link>
      </div>

      <hr />

      {/* This Outlet will render the sub-page content (e.g., the project cards) */}
      <Outlet />

    </div>
  );
}

export default ProjectsPage;
