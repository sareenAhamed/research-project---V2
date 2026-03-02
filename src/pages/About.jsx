import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-container">
      <h2 className="about-title">About the Research</h2>

      <div className="about-cards">
        {/* Research Problem */}
        <div className="about-card">
          <h3 className="card-title">Research Problem</h3>
          <p className="card-text">
            Historical Tamil inscriptions are often degraded due to weathering, erosion, and aging. This research addresses the challenge of restoring these inscriptions and improving recognition accuracy for historical and linguistic studies.
          </p>
        </div>

        {/* Motivation */}
        <div className="about-card">
          <h3 className="card-title">Motivation</h3>
          <p className="card-text">
            Preserving historical inscriptions digitally enables scholars to study ancient scripts efficiently. AI-based restoration reduces manual transcription effort and enhances accessibility of cultural heritage.
          </p>
        </div>

        {/* Significance */}
        <div className="about-card">
          <h3 className="card-title">Significance</h3>
          <p className="card-text">
            This research provides a systematic method to restore degraded Tamil inscriptions, creating accurate digital records. It supports historians, linguists, and researchers in preserving and analyzing Tamil cultural heritage.
          </p>
        </div>
      </div>

      <motion.div
  className="research-gap-section"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2>Research Gap</h2>

  <div className="gap-grid">

    <div className="gap-card">
      <h3>1. Limited Restoration Accuracy</h3>
      <p>
        Existing inscription restoration methods rely heavily on
        traditional image enhancement techniques, which fail to
        reconstruct severely degraded or partially missing characters.
      </p>
    </div>

    <div className="gap-card">
      <h3>2. Weak Detection in Degraded Contexts</h3>
      <p>
        Many object detection frameworks struggle with low-contrast,
        weathered stone textures, leading to reduced localization
        accuracy in historical inscriptions.
      </p>
    </div>

    <div className="gap-card">
      <h3>3. High Recognition Error Rates</h3>
      <p>
        OCR models trained on modern Tamil scripts show poor
        generalization when applied to ancient or inscription-style
        character forms.
      </p>
    </div>

    <div className="gap-card highlight">
      <h3>4. Lack of Integrated End-to-End Framework</h3>
      <p>
        There is no unified pipeline combining generative restoration,
        deep detection models, and sequence-based recognition specifically
        tailored for degraded Tamil inscriptions.
      </p>
    </div>

  </div>

  <div className="gap-conclusion">
    <p>
      This research addresses these limitations by integrating GAN-based
      restoration, YOLOv8 detection, and CRNN recognition into a unified,
      expert-validated framework optimized for degraded Tamil inscriptions.
    </p>
  </div>

</motion.div>
    </section>
  );
};

export default About;