import React from 'react';
import './TeamCard.css';

const TeamCard = ({ name, role, affiliation, email, img }) => {
  return (
    <div className="team-card">
      <img src={img} alt={name} className="team-img" />
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
      <p className="team-affiliation">{affiliation}</p>
      <a href={`mailto:${email}`} className="team-email">{email}</a>
    </div>
  );
};

export default TeamCard;