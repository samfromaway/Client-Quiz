import React from 'react';
import Navbar from './assets/scripts/components/Navbar';
import ProgressBar from './assets/scripts/components/ProgressBar';
import QuizQuestion from './assets/scripts/components/QuizQuestion';
import QuizContact from './assets/scripts/components/QuizContact';
import {
  QuizProvider,
  QuizContext,
} from './assets/scripts/context/QuizContext';
import design from './images/design01.png';
import fluidtechnik from './images/fluidtechnik01.png';
import howToExpat from './images/how-to-expat01.png';
import howToMedellin from './images/howtomedellin01.png';
import './App.css';

//when adding questions, edits have to be done in ProgressBar.js
const questions = [
  {
    title: 'Which color do you like best?',
    _id: 1,
    options: {
      img1: design,
      desc1: 'This is a design1',
      id1: 'a1',
      img2: fluidtechnik,
      desc2: 'This is a design2',
      id2: 'a2',
      img3: howToExpat,
      desc3: 'This is a design3',
      id3: 'a3',
      img4: howToMedellin,
      desc4: 'This is a design4',
      id4: 'a4',
    },
  },
  {
    title: 'Which brand do you like better?',
    _id: 2,
    options: {
      img1: design,
      desc1: 'This is a design11',
      id1: 'b1',
      img2: fluidtechnik,
      desc2: 'This is a design12',
      id2: 'b2',
      img3: howToExpat,
      desc3: 'This is a design13',
      id3: 'b3',
      img4: howToMedellin,
      desc4: 'This is a design14',
      id4: 'b4',
    },
  },
];

function App() {
  return (
    <QuizProvider>
      <div className='App'>
        <Navbar />
        <ProgressBar nrOfQuizes={questions.length} questions={questions} />
        <h2 className='welcome-title'>Thanks for working with us</h2>
        <p className='welcome-desc'>
          Please fill out the quiz so we know how to desing your website or
          grahics
        </p>
        <form className='quiz-form' action='' netlify>
          {questions.map((questions) => (
            <QuizQuestion
              key={questions._id}
              id1={questions.options.id1}
              id2={questions.options.id2}
              id3={questions.options.id3}
              id4={questions.options.id4}
              title={questions.title}
              img1={questions.options.img1}
              img2={questions.options.img2}
              img3={questions.options.img3}
              img4={questions.options.img4}
              desc1={questions.options.desc1}
              desc2={questions.options.desc2}
              desc3={questions.options.desc3}
              desc4={questions.options.desc4}
            />
          ))}
          <QuizContact />
        </form>
      </div>
    </QuizProvider>
  );
}

export default App;
