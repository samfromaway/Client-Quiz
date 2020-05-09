import React, { useContext } from 'react';
import { ThanksContext } from '../context/ThanksContext';
import check from '../../../images/check.png';

const Thanks = () => {
  const [thanksBox, setThanksBoxState] = useContext(ThanksContext);

  const thanksWrapperStyle = thanksBox
    ? 'thanks-wrapper-show'
    : 'thanks-wrapper';

  const closeThanksBox = () => setThanksBoxState(false);

  return (
    <div className={thanksWrapperStyle}>
      <div className='thanks-box'>
        <h3>Thanks</h3>
        <h4>Sent successfully</h4>
        <img className='thanks-img' src={check} alt='' />
        <p>We will get back to you soon</p>
        <button className='button' onClick={closeThanksBox}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Thanks;
