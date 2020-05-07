import React, { useState } from 'react';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = () => {
  const [name, setName] = useState({ name: '' });
  const [email, setEmail] = useState({ email: '' });
  const [message, setMessage] = useState({ message: '' });

  /* Here’s the juicy bit for posting the form submission */

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const nameChange = (e) => setName({ name: e.target.value });
  const emailChange = (e) => setEmail({ name: e.target.value });
  const messageChange = (e) => setMessage({ name: e.target.value });

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Your Name:
          <input type='text' name='name' onChange={nameChange} />
        </label>
      </p>
      <p>
        <label>
          Your Email:
          <input type='email' name='email' onChange={emailChange} />
        </label>
      </p>
      <p>
        <label>
          Message:
          <textarea name='message' onChange={messageChange} />
        </label>
      </p>
      <p>
        <button type='submit'>Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
