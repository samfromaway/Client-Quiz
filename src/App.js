import React from 'react';
import Navbar from './assets/scripts/components/Navbar';
import ProgressBar from './assets/scripts/components/ProgressBar';
import QuizForm from './assets/scripts/components/QuizForm';
import { QuizProvider } from './assets/scripts/context/QuizContext';
import { QuizProgressProvider } from './assets/scripts/context/QuizProgressContext';
import { ThanksProvider } from './assets/scripts/context/ThanksContext';
import adidas from './images/Quiz/adidas.png';
import amazon from './images/Quiz/amazon.png';
import apple from './images/Quiz/apple.png';
import blue from './images/Quiz/blue.png';
import green from './images/Quiz/green.png';
import hm from './images/Quiz/h&m.png';
import lacoste from './images/Quiz/lacoste.png';
import logo01 from './images/Quiz/logo01.png';
import logo02 from './images/Quiz/logo02.png';
import logo03 from './images/Quiz/logo03.png';
import logo04 from './images/Quiz/logo04.png';
import nike from './images/Quiz/nike.png';
import openSans from './images/Quiz/open-sans.png';
import purple from './images/Quiz/purple.png';
import red from './images/Quiz/red.png';
import samsung from './images/Quiz/samsung.png';
import comic from './images/Quiz/comic.png';
import times from './images/Quiz/times.png';
import verdana from './images/Quiz/verdana.png';
import windows from './images/Quiz/windows.png';

import './App.css';

//when adding questions, edits have to be done in ProgressProgressContext.js
const questions = [
  {
    title: 'Which brand do you like?',
    _id: 'a',
    options: {
      img1: adidas,
      desc1: 'Adidas',
      id1: 'a1',
      img2: lacoste,
      desc2: 'Lacoste',
      id2: 'a2',
      img3: nike,
      desc3: 'Nike',
      id3: 'a3',
      img4: hm,
      desc4: 'H&M',
      id4: 'a4',
    },
  },
  {
    title: 'Which color do you like?',
    _id: 'b',
    options: {
      img1: blue,
      desc1: 'Blue',
      id1: 'b1',
      img2: green,
      desc2: 'Green',
      id2: 'b2',
      img3: red,
      desc3: 'Red',
      id3: 'b3',
      img4: purple,
      desc4: 'Purple',
      id4: 'b4',
    },
  },
  {
    title: 'Which font do you like?',
    _id: 'c',
    options: {
      img1: openSans,
      desc1: 'Open Sans',
      id1: 'c1',
      img2: times,
      desc2: 'Times',
      id2: 'c2',
      img3: comic,
      desc3: 'Comic',
      id3: 'c3',
      img4: verdana,
      desc4: 'Verdana',
      id4: 'c4',
    },
  },
  {
    title: 'Which logo do you like?',
    _id: 'd',
    options: {
      img1: logo01,
      desc1: 'Minimal',
      id1: 'd1',
      img2: logo02,
      desc2: 'Classic',
      id2: 'd2',
      img3: logo03,
      desc3: 'Modern',
      id3: 'd3',
      img4: logo04,
      desc4: 'Playful',
      id4: 'd4',
    },
  },

  {
    title: 'Which of the brands do you like?',
    _id: 'e',
    options: {
      img1: apple,
      desc1: 'Apple',
      id1: 'e1',
      img2: windows,
      desc2: 'Windows',
      id2: 'e2',
      img3: amazon,
      desc3: 'Amazon',
      id3: 'e3',
      img4: samsung,
      desc4: 'Samsung',
      id4: 'e4',
    },
  },
];

function App() {
  return (
    <ThanksProvider>
      <QuizProvider>
        <QuizProgressProvider questions={questions}>
          <div className='App'>
            <Navbar />
            <ProgressBar nrOfQuizes={questions.length} questions={questions} />
            <h2 className='welcome-title'>Thanks for working with us</h2>
            <p className='welcome-desc'>
              Please fill out the quiz so we know how to desing your website or
              grahics
            </p>
            <QuizForm
              questions={questions}
              key={questions._id}
              nrOfQuizes={questions.length}
            />
          </div>
        </QuizProgressProvider>
      </QuizProvider>
    </ThanksProvider>
  );
}

export default App;

// v.0.1.0 works

//NICE TO HAVE
// step one of four progess bar
// answer sort
// see results
