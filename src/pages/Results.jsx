import React, { useState } from 'react';
import './Results.css';
import expertImg from '../assets/images/expert.jfif';
import sampleInput1 from '../assets/images/input1.png';
import sampleOutput1 from '../assets/images/output1.png';
import sampleInput2 from '../assets/images/input2.png';
import sampleOutput2 from '../assets/images/output2.png';

const sampleResults = [
  { input: sampleInput1, output: sampleOutput1 },
  { input: sampleInput2, output: sampleOutput2 },
];

// Expert validation info
const expert = {
  name: 'Dr. MM Jayaseelan',
  designation: 'Senior Lecturer',
  institute: 'Department of Tamil, University of Peradeniya',
  img: expertImg,
};

const Results = () => {
  const [current, setCurrent] = useState(0);

  const nextItem = () => setCurrent(current === sampleResults.length - 1 ? 0 : current + 1);
  const prevItem = () => setCurrent(current === 0 ? sampleResults.length - 1 : current - 1);

  return (
    <section className="results-container">
      <h2 className="results-title">Research Results & Metrics</h2>

      {/* Metrics Table */}
      <div className="metrics-table">
        <h3>Evaluation Metrics</h3>
        <table>
          <thead>
            <tr>
              <th>Module</th>
              <th>Metric</th>
              <th>Value</th>
              <th>Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GAN</td>
              <td>PSNR</td>
              <td>28.75</td>
              <td>High reconstruction quality of degraded images</td>
            </tr>
            <tr>
              <td>GAN</td>
              <td>SSIM</td>
              <td>0.92</td>
              <td>Structural similarity preserved</td>
            </tr>
            <tr>
              <td>YOLOv8</td>
              <td>mAP50</td>
              <td>0.995</td>
              <td>High precision in text detection</td>
            </tr>
            <tr>
              <td>CRNN</td>
              <td>CER (Character Error Rate)</td>
              <td>~12%</td>
              <td>Low recognition errors in extracted text</td>
            </tr>
            <tr>
              <td>Expert Validation</td>
              <td>Accuracy</td>
              <td>20%</td>
              <td>Confirmed by domain expert</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Expert Validation Card */}
      <div className="expert-validation">
        <h3>Expert Validation</h3>
        <div className="expert-card">
          <img src={expert.img} alt={expert.name} className="expert-img" />
          <div className="expert-info">
            <h4>{expert.name}</h4>
            <p>{expert.designation}</p>
            <p>{expert.institute}</p>
          </div>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="results-carousel">
        <button className="carousel-btn prev" onClick={prevItem}>&#10094;</button>
        {sampleResults.map((item, index) => (
          <div key={index} className={index === current ? 'results-slide active' : 'results-slide'}>
            {index === current && (
              <div className="image-pair">
                <div>
                  <img src={item.input} alt="Input Inscription" />
                  <p>Input</p>
                </div>
                <div>
                  <img src={item.output} alt="Recognized Text" />
                  <p>Output</p>
                </div>
              </div>
            )}
          </div>
        ))}
        <button className="carousel-btn next" onClick={nextItem}>&#10095;</button>
      </div>
    </section>
  );
};

export default Results;