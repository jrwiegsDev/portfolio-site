import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './RootLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

import FullStackProjects from './pages/projects/FullStackProjects.jsx';
import PythonProjects from './pages/projects/PythonProjects.jsx';
import SqlProjects from './pages/projects/SqlProjects.jsx';
import ExcelProjects from './pages/projects/ExcelProjects.jsx';
import TableauProjects from './pages/projects/TableauProjects.jsx';
import DigitalBusinessCard from './pages/projects/DigitalBusinessCard.jsx'; // Import the new page

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      {
        path: 'projects',
        element: <ProjectsPage />,
        children: [
          { path: 'fullstack', element: <FullStackProjects /> },
          { path: 'python', element: <PythonProjects /> },
          { path: 'sql', element: <SqlProjects /> },
          { path: 'excel', element: <ExcelProjects /> },
          { path: 'tableau', element: <TableauProjects /> },
        ],
      },
      // Add a new, separate route for the business card project
      { path: 'projects/digital-business-card', element: <DigitalBusinessCard /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);