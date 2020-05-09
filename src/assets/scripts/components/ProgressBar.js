import React, { useContext } from 'react';
import { QuizProgressContext } from '../context/QuizProgressContext';

const ProgressBar = (props) => {
  const [quizProgress] = useContext(QuizProgressContext);

  const nrOfQuizes = props.nrOfQuizes;

  const progressBarLevelLenght = (nrOfQuizes, quizProgress) => {
    return (100 / nrOfQuizes) * quizProgress;
  };

  const progressBarLevelStyle = {
    width: `${progressBarLevelLenght(nrOfQuizes, quizProgress)}%`,
  };

  return (
    <div className='progress-bar'>
      <div style={progressBarLevelStyle} className='progress-bar-level'></div>
    </div>
  );
};

export default ProgressBar;
