import React from 'react';

const QuizContact = () => {
  return (
    <div>
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
        <label htmlFor='message' className='label-textfield'>
          <span className='label-input-textfield'>Message*</span>
        </label>
        <textarea
          className='input-textfield'
          name='message'
          required
        ></textarea>
      </div>
      <button className='button contact-btn'>Submit</button>
    </div>
  );
};

export default QuizContact;
