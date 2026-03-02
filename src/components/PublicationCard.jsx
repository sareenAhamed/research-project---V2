import React from 'react';
import './PublicationCard.css';

const PublicationCard = ({ title, description, link, img }) => {
  return (
    <div className="publication-card">
      <img src={img} alt={title} className="publication-img" />
      <h3 className="publication-title">{title}</h3>
      <p className="publication-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="publication-link">
        View / Download
      </a>
    </div>
  );
};

export default PublicationCard;