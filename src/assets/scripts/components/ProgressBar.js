import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const title1 = 'Which color do you like best?';
const title2 = 'Which brand do you like better?';

const ProgressBar = (props) => {
  const [quizSummary] = useContext(QuizContext);

  const checkProgressQuiz1 = quizSummary.some(
    (answer) => answer.title === title1
  );
  const checkProgressQuiz2 = quizSummary.some(
    (answer) => answer.title === title2
  );

  function countAnsweredQuizes() {
    const isQuizOneAnswered = checkProgressQuiz1 ? 1 : 0;
    const isQuizTwoAnswered = checkProgressQuiz2 ? 1 : 0;
    const allQuizes = [isQuizTwoAnswered, isQuizOneAnswered];
    let total = allQuizes.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return total;
  }

  console.log(props.questions.map((e) => e.title));

  const quizProgress = countAnsweredQuizes();
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
