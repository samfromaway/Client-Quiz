import React from 'react';
import Navbar from './assets/scripts/components/Navbar';
import QuizQuestion from './assets/scripts/components/QuizQuestion';
import ProgressBar from './assets/scripts/components/ProgressBar';
import design from './images/design01.png';
import fluidtechnik from './images/fluidtechnik01.png';
import howToExpat from './images/how-to-expat01.png';
import howToMedellin from './images/howtomedellin01.png';
import pneumatikInfo from './images/pneumatikinfo01.png';
import portfolio from './images/portfolio01.png';

import './App.css';

const questions = [
  {
    title: 'Which color do you like best?',
    options: {
      img1: design,
      desc1: 'This is a design1',
      img2: fluidtechnik,
      desc2: 'This is a design2',
      img3: howToExpat,
      desc3: 'This is a design3',
      img4: howToMedellin,
      desc4: 'This is a design4',
    },
  },
  {
    title: 'Which brand do you like better?',
    options: {
      img1: design,
      desc1: 'This is a design11',
      img2: fluidtechnik,
      desc2: 'This is a design12',
      img3: howToExpat,
      desc3: 'This is a design13',
      img4: howToMedellin,
      desc4: 'This is a design14',
    },
  },
  {
    title: 'Which form do you like better?',
    options: {
      img1: design,
      desc1: 'This is a design21',
      img2: fluidtechnik,
      desc2: 'This is a design22',
      img3: howToExpat,
      desc3: 'This is a design23',
      img4: howToMedellin,
      desc4: 'This is a design24',
    },
  },
];

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
        <ProgressBar nrOfQuizes={questions.length} />
        <h2 className='welcome-title'>Thanks for working with us</h2>
        <p className='welcome-desc'>
          Please fill out the quiz so we know how to desing your website or
          grahics
        </p>
        {questions.map((questions) => (
          <QuizQuestion
            key={questions.title}
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
      </header>
    </div>
  );
}

export default App;
