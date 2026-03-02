import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.subject) tempErrors.subject = 'Subject is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Message submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  return (
    <section className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-info">Reach us at: <strong>example@university.edu</strong></p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={errors.subject ? 'input-error' : ''}
          />
          {errors.subject && <span className="error-text">{errors.subject}</span>}
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'input-error' : ''}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
        <a href="https://orcid.org/example" target="_blank" rel="noopener noreferrer"> ORCID</a>
      </div>
    </section>
  );
};

export default Contact;