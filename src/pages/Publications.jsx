import React from 'react';
import PublicationCard from '../components/PublicationCard';
import './Publications.css';

const publications = [
  {
    title: 'Enhancing Tamil Inscription Recognition Using GANs',
    description: 'Paper describing GAN-based restoration and recognition pipeline.',
    link: '/assets/pdfs/publication1.pdf',
    img: '/assets/images/publication1.jpg',
  },
  {
    title: 'AI for Historical Tamil Scripts',
    description: 'Poster presentation for international conference.',
    link: '/assets/pdfs/publication2.pdf',
    img: '/assets/images/publication2.jpg',
  },
  {
    title: 'Code Repository',
    description: 'GitHub repository for the research project.',
    link: 'https://github.com/example/tamil-inscription-ai',
    img: '/assets/images/publication3.jpg',
  },
];

const Publications = () => {
  return (
    <section className="publications-container">
      <h2 className="publications-title">Publications & Outputs</h2>
      <div className="publications-grid">
        {publications.map((pub, index) => (
          <PublicationCard
            key={index}
            title={pub.title}
            description={pub.description}
            link={pub.link}
            img={pub.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Publications;