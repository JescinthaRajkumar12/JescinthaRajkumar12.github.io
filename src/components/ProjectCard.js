import React from 'react';

const ProjectCard = ({ title, descriptionPoints, imageText }) => {
  return (
    <div className="card">
      <div className="card-image">{imageText}</div>
      <div className="card-content">
        <h3>{title}</h3>
        <ul>
          {descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;