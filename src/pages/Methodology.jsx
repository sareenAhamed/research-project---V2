import React from 'react';
import './Methodology.css';
import ganImg from '../assets/images/gan.webp';
import yoloImg from '../assets/images/yolo.jfif';
import crnnImg from '../assets/images/crnn.jpg';
import expertValidation from '../assets/images/expertValidation.jpg';

const methodologySteps = [
  {
    title: 'GAN-Based Reconstruction',
    description: 'Generative Adversarial Networks (GANs) are used to restore degraded Tamil inscriptions by learning the mapping from low-quality to high-quality images.',
    img: ganImg,
  },
  {
    title: 'YOLOv8 Detection',
    description: 'YOLOv8 detects text regions in the restored images, allowing precise localization of inscriptions for further processing.',
    img: yoloImg,
  },
  {
    title: 'CRNN Recognition',
    description: 'Convolutional Recurrent Neural Networks (CRNN) recognize the textual content from the detected regions, combining CNN feature extraction with BiLSTM sequence modeling.',
    img: crnnImg,
  },
  {
    title: 'Expert Validation & Verification',
    description: 'Recognized inscriptions are reviewed and validated by domain experts in Tamil epigraphy to ensure historical accuracy, linguistic correctness, and contextual authenticity. This human-in-the-loop verification strengthens the reliability of the proposed AI framework.',
    img: expertValidation,
  },
];

const Methodology = () => {
  return (
    <section className="methodology-container">
      <h2 className="methodology-title">Research Methodology</h2>

      <div className="methodology-cards">
        {methodologySteps.map((step, index) => (
          <div key={index} className="methodology-card">
            <img src={step.img} alt={step.title} className="methodology-img" />
            <h3 className="methodology-step-title">{step.title}</h3>
            <p className="methodology-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Methodology;