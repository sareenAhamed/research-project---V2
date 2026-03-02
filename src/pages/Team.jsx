import React from 'react';
import TeamCard from '../components/TeamCard';
import './Team.css';
import sareen from '../assets/images/sareen.png';
import sameer from '../assets/images/sameer.png';
import saraf from '../assets/images/saraf.png';
import supervisorImg from '../assets/images/supervisor.jfif'; 

const teamMembers = [
  {
    name: 'Sareen Ahamed',
    role: 'ICT/21/803',
    affiliation: 'BICT, Software Technology, USJP',
    email: 'ict21803@fot.sjp.ac.lk',
    img: sareen,
  },
  {
    name: 'M.M.M. Sameer',
    role: 'ICT/21/910',
    affiliation: 'BICT, Software Technology, USJP',
    email: 'ict21910@fot.sjp.ac.lk',
    img: sameer,
  },
  {
    name: 'J.S. Samly',
    role: 'ICT/21/912',
    affiliation: 'BICT, Software Technology, USJP',
    email: 'ict21912@fot.sjp.ac.lk',
    img: saraf,
  },
];

const supervisor = {
  name: 'Mrs. Sankani Heenkenda',
  role: 'Lecturer',
  affiliation: 'Department of ICT, Faculty of Technology, USJP',
  email: 'sankaniheenkenda@sjp.ac.lk',
  img: supervisorImg,
};

const Team = () => {
  return (
    <section className="team-container">
      <h2 className="team-title">Team & Supervisor</h2>

      {/* Supervisor */}
      <div className="supervisor-section">
        <h3 className="section-title">Supervisor</h3>
        <TeamCard
          name={supervisor.name}
          role={supervisor.role}
          affiliation={supervisor.affiliation}
          email={supervisor.email}
          img={supervisor.img}
        />
      </div>

      {/* Team Members */}
      <div className="members-section">
        <h3 className="section-title">Research Team</h3>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              affiliation={member.affiliation}
              email={member.email}
              img={member.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;