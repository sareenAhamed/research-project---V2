import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Message submitted (placeholder).');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text" name="name" placeholder="Name"
        value={form.name} onChange={handleChange}
        className="w-full p-2 border rounded" required
      />
      <input
        type="email" name="email" placeholder="Email"
        value={form.email} onChange={handleChange}
        className="w-full p-2 border rounded" required
      />
      <input
        type="text" name="subject" placeholder="Subject"
        value={form.subject} onChange={handleChange}
        className="w-full p-2 border rounded" required
      />
      <textarea
        name="message" placeholder="Message" rows="5"
        value={form.message} onChange={handleChange}
        className="w-full p-2 border rounded" required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;