import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const QuizQuestion = ({
  title,
  img1,
  img2,
  img3,
  img4,
  desc1,
  desc2,
  desc3,
  desc4,
  id1,
  id2,
  id3,
  id4,
  id,
}) => {
  const [quizSummary, setQuizSummary] = useContext(QuizContext);

  const updateCheckbox1 = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    const id = e.target.id;
    const value = e.target.value;
    updateQuizSummary(id, name, value, checked);
  };

  const updateQuizSummary = (id, name, value, checked) => {
    const isAlreadyAnswered = quizSummary.some((answer) => {
      return answer.id === id;
    });

    if (isAlreadyAnswered) {
      setQuizSummary(quizSummary.filter((answer) => answer.id !== id));
    }
    //in the template expression ${checked} is only there to see if there is a mistake
    else
      setQuizSummary((prevAnswers) => [
        ...prevAnswers,
        {
          id: id,
          answer: `${name} -> Answer: ${value} Status: ${checked} || `,
          title: title,
        },
      ]);
  };

  return (
    <div className='quiz-question'>
      <h3 className='quiz-question-title'>{title}</h3>
      <div className='quiz-elements'>
        <div className='quiz-element'>
          <label className='quiz-label'>
            <input
              className='checkbox'
              id={id1}
              name={id1}
              value={desc1}
              type='checkbox'
              onChange={updateCheckbox1}
            />
            <img className='quiz-image' alt='Logo' src={img1} />
            <span className='quiz-span'>{desc1}</span>
          </label>
        </div>
        <div className='quiz-element'>
          <label className='quiz-label'>
            <input
              className='checkbox'
              id={id2}
              name={id2}
              value={desc2}
              type='checkbox'
              onChange={updateCheckbox1}
            />
            <img className='quiz-image' alt='Logo' src={img2} />
            <span className='quiz-span'>{desc2}</span>
          </label>
        </div>
        <div className='quiz-element'>
          <label className='quiz-label'>
            <input
              className='checkbox'
              name={id3}
              id={id3}
              value={desc3}
              type='checkbox'
              onChange={updateCheckbox1}
            />
            <img className='quiz-image' alt='Logo' src={img3} />
            <span className='quiz-span'>{desc3}</span>
          </label>
        </div>
        <div className='quiz-element'>
          <label className='quiz-label'>
            <input
              className='checkbox'
              name={id4}
              value={desc4}
              id={id4}
              type='checkbox'
              onChange={updateCheckbox1}
            />
            <img className='quiz-image' alt='Logo' src={img4} />
            <span className='quiz-span'>{desc4}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
