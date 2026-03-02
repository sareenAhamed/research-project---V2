import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import thesisPDF from '../assets/pdf/thesis.pdf';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Home = () => {
  return (
    <section className="home-container">

      {/* Hero Section */}
      {/* Hero Section */}
  <div className="hero-wrapper">

  {/* Background Image Layer */}
  <div className="hero-background"></div>
  <div className="hero-overlay"></div>

  <motion.div 
    className="hero-section"
    initial="hidden"
    animate="visible"
    variants={fadeUp}
  >
    <div className="hero-text">
      <h1>Enhancing Degraded Tamil Inscription Recognition Using Generative AI</h1>
      <p className="hero-tagline">
        Digitizing and restoring historical Tamil inscriptions using AI.
      </p>
      <div className="hero-buttons">
  <Link to="/about" className="cta-btn primary-btn">
    Explore Research
  </Link>

  <a 
    href={thesisPDF} 
    target="_blank" 
    rel="noopener noreferrer"
    className="cta-btn secondary-btn"
  >
    View Thesis
  </a>
</div>
    </div>
  </motion.div>

</div>

      {/* Why Research */}
      <motion.div 
        className="home-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Why This Research?</h2>
        <p>
          Tamil inscriptions are invaluable cultural heritage, but many are degraded over time. 
          This research leverages generative AI to reconstruct and preserve these inscriptions, 
          ensuring historical records remain accessible for scholars and future generations.
        </p>
      </motion.div>

      {/* How This Research Helps Others */}
      <motion.div 
        className="home-section alternate"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>How This Research Helps Others</h2>
        <p>
          By improving the accuracy of text recognition in degraded inscriptions, this research 
          aids historians, linguists, and researchers in extracting reliable data. 
          It supports educational initiatives, archival digitization, and AI-based heritage projects.
        </p>
      </motion.div>

      {/* Impact */}
      <motion.div 
        className="home-section alternate"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Impact of This Research</h2>
        <p>
          The project contributes to preserving Tamil heritage, advancing AI applications 
          in cultural preservation, and providing an academic reference framework 
          for further research in historical text restoration.
        </p>
      </motion.div>

    </section>
  );
};

export default Home;