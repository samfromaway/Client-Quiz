import React, { useState, createContext } from 'react';

export const QuizContext = createContext();

export const QuizProvider = (props) => {
  const titles = props.children.props.questions.map(
    (question) => question.title
  );

  console.log(titles);

  const [quizSummary, setQuizSummary] = useState(titles);

  return (
    <QuizContext.Provider value={[quizSummary, setQuizSummary]}>
      {props.children}
    </QuizContext.Provider>
  );
};
