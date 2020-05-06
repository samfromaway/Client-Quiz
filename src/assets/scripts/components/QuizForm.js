import React, { useState } from 'react';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = () => {
  const [state, setState] = useState({ name: '', email: '', message: '' });

  /* Here’s the juicy bit for posting the form submission */

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

  const { name, email, message } = state;
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Your Name:
          <input type='text' name='name' value={name} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your Email:
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Message:
          <textarea name='message' value={message} onChange={handleChange} />
        </label>
      </p>
      <p>
        <button type='submit'>Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
