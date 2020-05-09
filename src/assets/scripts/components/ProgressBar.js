import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const ProgressBar = (props) => {
  const [quizSummary] = useContext(QuizContext);

  const titles = props.questions.map((e) => e.title);

  const checkProgressQuiz1 = quizSummary.some(
    (answer) => answer.title === titles[0]
  );

  const checkProgressQuiz2 = quizSummary.some(
    (answer) => answer.title === titles[1]
  );

  const checkProgressQuiz3 = quizSummary.some(
    (answer) => answer.title === titles[2]
  );

  const checkProgressQuiz4 = quizSummary.some(
    (answer) => answer.title === titles[3]
  );

  const checkProgressQuiz5 = quizSummary.some(
    (answer) => answer.title === titles[4]
  );

  function countAnsweredQuizes() {
    const isQuizOneAnswered = checkProgressQuiz1 ? 1 : 0;
    const isQuizTwoAnswered = checkProgressQuiz2 ? 1 : 0;
    const isQuizThreeAnswered = checkProgressQuiz3 ? 1 : 0;
    const isQuizFourAnswered = checkProgressQuiz4 ? 1 : 0;
    const isQuizFiveAnswered = checkProgressQuiz5 ? 1 : 0;
    const allQuizes = [
      isQuizTwoAnswered,
      isQuizOneAnswered,
      isQuizThreeAnswered,
      isQuizFourAnswered,
      isQuizFiveAnswered,
    ];
    let total = allQuizes.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return total;
  }

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
