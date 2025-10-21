import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import ImageModal from '../../components/ImageModal';

const professionalProjects = [
  {
    imageSrc: '/OADC.png',
    imageAlt: 'OADC Website Project',
    title: "O'Fallon Area Democratic Club Website",
    linkUrl: 'https://ofallonildems.org/',
    linkText: 'Visit Live Site',
    description: 'Commissioned to build the entire website for our local Democratic Club after creating their newsletter management system. This full-stack application serves as the online hub of information and events, featuring dynamic content management, event calendars, and member resources powered by a custom Node.js/Express backend.'
  },
  {
    imageSrc: '/Newsletter-Events_App.png',
    imageAlt: 'Newsletter and Events Management App',
    title: 'Newsletter & Events Management App',
    linkUrl: null, // Special case - will use modal
    linkText: 'Click Photo for Details',
    description: 'After noticing the local Democratic Club was manually sending individual emails from a personal Gmail account, I proactively built a comprehensive solution to streamline their community outreach. This full-stack application manages subscriber lists, automates newsletter distribution, and tracks events. Built with React, Node.js, Express, and MongoDB. The success of this initiative led to being commissioned to build their entire website.',
    useModal: true
  },
  {
    imageSrc: '/Pledge-to-Vote-2026.png',
    imageAlt: 'Pledge to Vote 2026 Project',
    title: 'Pledge to Vote 2026',
    linkUrl: 'https://pledgetovote2026.com/',
    linkText: 'Visit Live Site',
    description: 'A personal project to encourage participation in our civic process by pledging to make your voices heard in the 2026 Midterm Elections. Built with React and features an interactive pledge form with real-time validation.'
  }
];

const skillsProjects = [
  {
    imageSrc: '/survey-app.png',
    imageAlt: 'Survey & Polling App',
    title: 'Survey & Polling App',
    linkUrl: 'https://survey-app-zuvw.onrender.com',
    linkText: 'View Live Project',
    description: 'A full-stack polling application where users can vote on various topics and see the results update instantly. Built with a React front-end, a Node.js/Express back-end, and a MongoDB database.'
  },
  {
    imageSrc: '/markdown-previewer.png',
    imageAlt: 'Markdown Previewer Project',
    title: 'React Markdown Previewer',
    linkUrl: 'https://markdown-previewer-x5q6.onrender.com',
    linkText: 'View Live Project',
    description: 'A real-time Markdown editor built with React. Users can type Markdown in a text area and see the formatted HTML output rendered instantly on the page.'
  },
  {
    imageSrc: '/hp-api-app.png',
    imageAlt: 'Harry Potter API App Project',
    title: 'Harry Potter Character & Spell Finder',
    linkUrl: 'https://hp-api-app.onrender.com',
    linkText: 'View Live Project',
    description: 'A dynamic single-page application that fetches and displays data from the Harry Potter API, featuring real-time search, filtering, and a custom magic wand cursor effect.'
  },
  {
    imageSrc: '/naruto-api-app.png',
    imageAlt: 'Naruto API App Project',
    title: 'Naruto Character API App',
    linkUrl: 'https://naruto-api-app.onrender.com',
    linkText: 'View Live Project',
    description: 'A responsive web application that fetches and displays character data from a public Naruto API, built using React and Node.js.'
  },
  {
    imageSrc: '/digitalBusinessCard.png',
    imageAlt: 'Digital Business Card Project',
    title: 'Digital Business Card',
    linkUrl: '/projects/digital-business-card',
    linkText: 'View This Project\'s Page',
    description: 'A responsive digital business card featuring a functional back-end contact form built with Node.js and Express.'
  }
];

function SoftwareEngineeringProjects({ filter = 'professional' }) {
  const [modalImage, setModalImage] = React.useState(null);
  
  const projectsToShow = filter === 'professional' ? professionalProjects : skillsProjects;
  const heading = filter === 'professional' ? 'Professional Projects' : 'Skills / Practice Projects';

  const handleImageClick = (imageSrc, imageAlt) => {
    setModalImage({ src: imageSrc, alt: imageAlt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <h2>{heading}</h2>
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