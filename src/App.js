import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useCallback} from 'react';

let min, max;
let blinkClass = "";

function App() 
{
  const maxNumber = 1000;

  // Generate a random number 
  const getRandomArbitrary = (min, max) => {
    return Math.round( Math.random() * (max - min) + min );
  }

  const [gameRunning, setGameRunning] = useState(true);
  const [inputValue, setInputValue] = React.useState("");

  // Client is writing a number
  const onChangeHandler = event => {
    setInputValue(event.target.value);
  };

  // Check if we got the correct answer 
  const checkAnswer = () => {

    let clientAnswer = Math.round(inputValue);
    let res = (number === clientAnswer);
    const element = document.querySelector("body");

    // Client answered wrong, give them a hint
    if(!res)
    {
      if(number > clientAnswer) {
        setUIanswer('Higher...');
        blinkClass = "blinking-border-green";
      }
      else {
        setUIanswer('Lower...');
        blinkClass = "blinking-border-red";
        console.log('blink: ' + blinkClass);
      }

      element.style.backgroundColor = '#09121D';
    }
    
    // Client got the correct answer, update scores and some UI 
    else 
    {
      blinkClass = "";
      let finalScore = (number - minMax[0]) + (minMax[1] - number);
      setScore(finalScore);

      if(finalScore < 1) finalScore = 1;
      if(finalScore > highScore) setHighscore(finalScore);

      setQuestion(number);
      setUIanswer('Correct!!');
      element.style.backgroundColor = '#055209ec';
    }
    
    setGameRunning(!res);
    return res;
  }

  // If enter key is pressed, call easeMinMax 
  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter' && gameRunning) {
      easeMinMax();
    }
  };

  // If client guesses wrong, make the hint easier 
  const easeMinMax = () => 
  {
    if(!gameRunning) return;
    let answerCorrect = checkAnswer();

    if(!answerCorrect)
    {
      let from, to;
      let arr = minMax;

      from = Math.round( ( (number - arr[0]) / 2 ) + arr[0] );
      to = Math.round( arr[1] - ( (arr[1] - number) / 2 ) );

      if(from === number) from = number -1;
      if(to === number) to = number +1;

      setMinMax( [from, to] );
    }
  }

  const [minMax, setMinMax] = useState( [0, 0] );
  const [number, setNumber] = useState( getRandomArbitrary(0, maxNumber) );

  const [score, setScore] = useState( [''] );
  const [highScore, setHighscore] = useState( [''] );

  const [question, setQuestion] = useState( ['???'] );
  const [wasCorrect, setUIanswer] = useState( ['Input something...'] );

  const getMinMax = useCallback( (num) => {
    min = getRandomArbitrary(0, num);
    max = getRandomArbitrary(num, maxNumber);
    return [min, max];
  }, [maxNumber]);

  // Restart the game 
  const restart = () => 
  {
    setScore('');
    blinkClass = "";
    setInputValue('');
    setQuestion('???');
    setUIanswer('Input something..');
    setGameRunning(true);

    const element = document.querySelector("body");
    element.style.backgroundColor = '#09121D';

    setNumber( getRandomArbitrary(0, maxNumber) );
    setMinMax( getMinMax(number) );
  }

  useEffect( () => {
    // For generating hint text [between x and x]
    setMinMax( getMinMax(number) );
  }, [getMinMax, number] );

  // Render the app
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <div className="App-header">
        <h4 className={`guess ${!gameRunning ? 'blinking-border' : ''}`} onClick={restart}>Again!</h4>
      </div>

      <div className="container">
        <h4 className="title">Guess the number</h4>
        <h4 className="current">{'< '}Between {minMax[0]} and {minMax[1]}{' >'}</h4>

        <div className="app-result">
          <div className="styled-line">
            <div className="result-box">
              <h4 className="result">
                {question}
              </h4>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="left">

            <h4 className={blinkClass}>{wasCorrect}</h4>
            <input
              className="userinput"
              type="number"
              name="name"
              onChange={onChangeHandler}
              onKeyDown={onKeyDownHandler}
              value={inputValue}
            />
            <h4 className="check" onClick={easeMinMax}>check</h4>
          </div>

          <div className="right">
            <h4 className="score">score: {score}</h4>
            <h4 className="highscore"> highscore: {highScore}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
