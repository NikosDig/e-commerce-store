import React, { useState } from 'react';
import './css/ContactPage.css'; // Your CSS file

function App() {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); 

  function validateForm() {
    const newErrors = {};
    if (fullName.length < 3) newErrors.fullName = 'Full Name must be at least 3 characters long.';
    if (subject.length < 3) newErrors.subject = 'Subject must be at least 3 characters long.';
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) newErrors.email = 'Email must be a valid email address.';
    if (body.length < 3) newErrors.body = 'Message body must be at least 3 characters long.';

    return newErrors;
  }

  function onFormSubmit(event) {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      const formData = { fullName, subject, email, body };
      console.log('Form Submitted:', formData);
      setFullName(''); setSubject(''); setEmail(''); setBody('');
      setErrors({});
      setSubmitted(true); 
    } else {
      setErrors(newErrors);
      setSubmitted(false); 
    }
  }

  return (
    <div className="contact-container"> {/* Wrapping class for scoping */}
      <h1>Contact Us</h1>
      <form onSubmit={onFormSubmit} className="contact-form"> {/* Form-specific class */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            name="fullName"
            className="input-field"
            value={fullName}
            placeholder="Your full name"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          {errors.fullName && <p className="error-message">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            className="input-field"
            value={subject}
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          {errors.subject && <p className="error-message">{errors.subject}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="input-field"
            value={email}
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="body">Message</label>
          <textarea
            name="body"
            className="textarea-field"
            value={body}
            placeholder="Your message"
            onChange={(e) => setBody(e.target.value)}
            required
          />
          {errors.body && <p className="error-message">{errors.body}</p>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {submitted && <p className="confirmation-message">Your form has been submitted successfully!</p>}
    </div>
  );
}

export default App;
