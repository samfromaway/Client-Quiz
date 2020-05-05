import React from 'react';

const ProgressBar = (props) => {
  const nrOfQuizes = props.nrOfQuizes;
  const quizProgress = 2;

  const progressBarLevelLenght = (nrOfQuizes, quizProgress) => {
    return (100 / nrOfQuizes) * quizProgress;
  };

  console.log(progressBarLevelLenght(nrOfQuizes, quizProgress));

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
