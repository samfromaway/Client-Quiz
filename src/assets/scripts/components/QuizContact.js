import React from 'react';

const QuizContact = () => {
  return (
    <div className='wrap-contact'>
      <h2 className='contact-form-title'>Last Step</h2>
      <div className='wrap-input'>
        <input className='input' type='text' name='name' required />
        <label htmlFor='name' className='label'>
          <span className='label-input'>Name*</span>
        </label>
      </div>
      <div className='wrap-input'>
        <input className='input' type='text' name='email' required />
        <label htmlFor='email' className='label'>
          <span className='label-input'>Email*</span>
        </label>
      </div>
      <div className='wrap-input'>
        <textarea
          className='input-textfield'
          name='message'
          required
        ></textarea>
        <label htmlFor='message' className='label-textfield'>
          <span className='label-textfield-input'>Message*</span>
        </label>
      </div>
      <button className='button contact-btn'>Submit</button>
    </div>
  );
};

export default QuizContact;
