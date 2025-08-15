import React from 'react';

function ProjectCard(props) {
  // We now accept 'children' which will be any content you place inside the component tags
  const { imageSrc, imageAlt, title, linkUrl, linkText, download = false, children } = props;

  return (
    <div className="project-card">
      <img src={imageSrc} alt={imageAlt} className="project-image" />
      <h2>{title}</h2>

      {/* This will render any paragraphs or other elements we pass in */}
      {children} 

      <p>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" download={download}>
          {linkText}
        </a>
      </p>
    </div>
  );
}

export default ProjectCard;