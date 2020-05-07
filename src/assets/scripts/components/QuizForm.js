import React, { useState, useContext } from 'react';
import QuizQuestion from './QuizQuestion';
import { QuizContext } from '../context/QuizContext';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = ({ questions }) => {
  const [quizSummary] = useContext(QuizContext);
  const [name, setName] = useState({ name: '' });
  const [email, setEmail] = useState({ email: '' });
  const [message, setMessage] = useState({ message: '' });

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...name,
        ...email,
        ...message,
        ...QuizContext,
      }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const nameChange = (e) => setName({ name: e.target.value });
  const emailChange = (e) => setEmail({ email: e.target.value });
  const messageChange = (e) => setMessage({ message: e.target.value });

  // Only contact not checkboxes // Not finished yet
  const clearContactForm = () => {
    setName({ name: '' });
    setEmail({ email: '' });
    setMessage({ message: '' });
  };

  return (
    <form className='quiz-form' onSubmit={handleSubmit} netlify>
      {questions.map((questions) => (
        <QuizQuestion
          key={questions._id}
          id1={questions.options.id1}
          id2={questions.options.id2}
          id3={questions.options.id3}
          id4={questions.options.id4}
          title={questions.title}
          img1={questions.options.img1}
          img2={questions.options.img2}
          img3={questions.options.img3}
          img4={questions.options.img4}
          desc1={questions.options.desc1}
          desc2={questions.options.desc2}
          desc3={questions.options.desc3}
          desc4={questions.options.desc4}
        />
      ))}
      <div className='wrap-contact'>
        <h2 className='contact-form-title'>Last Step</h2>
        <div className='wrap-input'>
          <input
            className='input'
            type='text'
            name='name'
            value={name.name}
            onChange={nameChange}
            required
          />
          <label htmlFor='name' className='label'>
            <span className='label-input'>Name*</span>
          </label>
        </div>
        <div className='wrap-input'>
          <input
            className='input'
            type='text'
            name='email'
            value={email.email}
            onChange={emailChange}
            required
          />
          <label htmlFor='email' className='label'>
            <span className='label-input'>Email*</span>
          </label>
        </div>
        <div className='wrap-input'>
          <textarea
            className='input-textfield'
            name='message'
            value={message.message}
            onChange={messageChange}
            required
          ></textarea>
          <label htmlFor='message' className='label-textfield'>
            <span className='label-textfield-input'>Message*</span>
          </label>
        </div>
        <button className='button contact-btn'>Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
