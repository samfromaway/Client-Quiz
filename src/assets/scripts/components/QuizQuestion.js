import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import PropTypes from 'prop-types';

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
  desc1IsChecked,
  desc2IsChecked,
  desc3IsChecked,
  desc4IsChecked,
  id1,
  id2,
  id3,
  id4,
  mainId,
}) => {
  const [quizSummary, setQuizSummary] = useContext(QuizContext);

  const updateCheckbox = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    const id = e.target.id;
    const value = e.target.value;
    updateQuizSummary(id, value, checked);
  };

  const updateQuizSummary = (id, value, checked) => {
    console.log(quizSummary);
    setQuizSummary(quizSummary.filter((answer) => answer.title !== mainId));
    setQuizSummary((prevAnswers) => [
      ...prevAnswers,
      {
        title: title,
        _id: mainId,
        options: {
          img1: 'h',
        },
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
              onChange={updateCheckbox}
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
              onChange={updateCheckbox}
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
              onChange={updateCheckbox}
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
              onChange={updateCheckbox}
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

QuizQuestion.propTypes = {
  title: PropTypes.string,
  img1: PropTypes.string,
  img2: PropTypes.string,
  img3: PropTypes.string,
  img4: PropTypes.string,
  desc1: PropTypes.string,
  desc2: PropTypes.string,
  desc3: PropTypes.string,
  desc4: PropTypes.string,
  desc1IsChecked: PropTypes.bool,
  desc2IsChecked: PropTypes.bool,
  desc3IsChecked: PropTypes.bool,
  desc4IsChecked: PropTypes.bool,
  id1: PropTypes.string,
  id2: PropTypes.string,
  id3: PropTypes.string,
  id4: PropTypes.string,
  id: PropTypes.string,
};
