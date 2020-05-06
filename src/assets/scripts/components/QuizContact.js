import React from 'react';

const QuizContact = () => {
  return (
    <div>
      <div class='wrap-input'>
        <input class='input' type='text' name='name' required />
        <label for='name' class='label'>
          <span class='label-input'>Name*</span>
        </label>
      </div>
      <div class='wrap-input'>
        <input class='input' type='text' name='email' required />
        <label for='email' class='label'>
          <span class='label-input'>Email*</span>
        </label>
      </div>
      <div class='wrap-input'>
        <label for='message' class='label-textfield'>
          <span class='label-input-textfield'>Message*</span>
        </label>
        <textarea class='input-textfield' name='message' required></textarea>
      </div>
      <button class='button contact-btn'>Submit</button>
    </div>
  );
};

export default QuizContact;
