import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import thesisPDF from '../assets/pdf/thesis.pdf';
import demoVideo from '../assets/video/gan.mp4';

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Section */}
      <div className="footer-top">

        {/* Project Info */}
        <div className="footer-col project-info">
          <h3 className="footer-logo">TIProject</h3>
          <p>
            AI-powered restoration and recognition framework for degraded 
            Tamil inscriptions using Generative Adversarial Networks, 
            YOLOv8 detection, and CRNN-based text recognition.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/methodology">Methodology</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/media">Media</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>
              <a 
                href={thesisPDF}
                target="_blank" 
                rel="noopener noreferrer"
              >
                Thesis
              </a>
            </li>
              <li>
              <a 
                href={demoVideo}
                target="_blank" 
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </li>
          </ul>
        </div>

        {/* Organization */}
        <div className="footer-col">
          <h4>Organization</h4>
          <p>University of Sri Jayewardenepura</p>
        </div>

      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="department">
          Department of Information Communication Technology
        </p>
        <p className="faculty">
          Faculty of Technology · University of Sri Jayewardenepura
        </p>
        <p className="copyright">
          © 2026 Enhancing Degraded Tamil Inscription Recognition Using Generative AI for Historical Reconstruction  — Group 24
        </p>
      </div>

    </footer>
  );
};

export default Footer;