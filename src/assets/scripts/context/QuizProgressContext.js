import React, { useState, createContext, useContext, useEffect } from 'react';
import { QuizContext } from '../context/QuizContext';

export const QuizProgressContext = createContext();

export const QuizProgressProvider = (props) => {
  const [quizSummary] = useContext(QuizContext);
  const [quizProgress, setQuizProgress] = useState(0);

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

  useEffect(() => {
    setQuizProgress(countAnsweredQuizes());
  });

  return (
    <QuizProgressContext.Provider value={[quizProgress, setQuizProgress]}>
      {props.children}
    </QuizProgressContext.Provider>
  );
};
