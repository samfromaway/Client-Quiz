import React, { useState, useContext, Fragment } from 'react';
import QuizQuestion from './QuizQuestion';
import Thanks from './Thanks';
import { QuizContext } from '../context/QuizContext';
import { QuizProgressContext } from '../context/QuizProgressContext';
import { ThanksContext } from '../context/ThanksContext';
import PropTypes from 'prop-types';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = ({ questions, nrOfQuizes }) => {
  const [quizSummary] = useContext(QuizContext);
  const [thanksBox, setThanksBoxState] = useContext(ThanksContext);
  const [quizProgress] = useContext(QuizProgressContext);

  const [name, setName] = useState({ name: '' });
  const [email, setEmail] = useState({ email: '' });
  const [message, setMessage] = useState({ message: '' });

  const formatQuizAnswers = quizSummary.map((answers) => answers.answer);

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...name,
        ...email,
        ...message,
        answer: formatQuizAnswers,
      }),
    })
      .then(() => setThanksBoxState(true))
      .then(() => clearContactForm())
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const nameChange = (e) => setName({ name: e.target.value });
  const emailChange = (e) => setEmail({ email: e.target.value });
  const messageChange = (e) => setMessage({ message: e.target.value });

  const clearContactForm = () => {
    setName({ name: '' });
    setEmail({ email: '' });
    setMessage({ message: '' });
  };

  const questionsToGo = nrOfQuizes - quizProgress;

  const wrapContactStyle =
    questionsToGo !== 0 ? 'wrap-contact wrap-contact-block' : 'wrap-contact';

  const fillOutMessage = () => {
    if (nrOfQuizes - quizProgress < 1) {
      return 'Almost Finished 😃';
    }
    if (nrOfQuizes - quizProgress === 1) {
      return `You have 1 Question to go 🤔`;
    } else {
      return `You have  ${questionsToGo} Questions to go 🤔`;
    }
  };

  return (
    <Fragment>
      <Thanks />
      <form className='quiz-form' onSubmit={handleSubmit}>
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
        <div className={wrapContactStyle}>
          <h2 className='contact-form-title'>Last Step</h2>
          <p className='contact-form-title'>{fillOutMessage()}</p>
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
    </Fragment>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  questions: PropTypes.array,
  nrOfQuizes: PropTypes.number,
};
