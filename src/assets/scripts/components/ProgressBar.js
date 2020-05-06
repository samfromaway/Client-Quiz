import React, { useState, useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const ProgressBar = (props) => {
  const [quizSummary, setQuizSummary] = useContext(QuizContext);
  const quizProgress = quizSummary.length;
  const nrOfQuizes = props.nrOfQuizes;

  const progressBarLevelLenght = (nrOfQuizes, quizProgress) => {
    return (100 / nrOfQuizes) * quizProgress;
  };

  const progressBarLevelStyle = {
    backgroundColor: 'green',
    width: `${progressBarLevelLenght(nrOfQuizes, quizProgress)}%`,
    height: '10px',
  };

  return (
    <div className='progress-bar'>
      <div style={progressBarLevelStyle}></div>
    </div>
  );
};

export default ProgressBar;
