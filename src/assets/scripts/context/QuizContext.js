import React, { useState, createContext } from 'react';

export const QuizContext = createContext();

export const QuizProvider = (props) => {
  const [quizSummary, setQuizSummary] = useState([]);

  return (
    <QuizContext.Provider value={[quizSummary, setQuizSummary]}>
      {props.children}
    </QuizContext.Provider>
  );
};
