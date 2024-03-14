import { useState } from "react";
import { playerdetails } from '../utilis/constants';

const CricketGame = () => {
    const [currentPlayer, setCurrentPlayer] = useState(null);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [showhints , setshowhints] = useState(false);
    const[timerRunning , setTimerRunning] = useState(false);
    const [timeLeft , setTimeLeft] = useState(30);
  
      
  
    //console.log(playerdetails.length);
  
    const startGame = () => {
      const player = getRandomPlayer();
      setCurrentPlayer(player);
      setshowhints(true);
      setMessage('');
      setGuess('');
      setTimeLeft(30);
      StartTimer();
    };
  
     const StartTimer = () =>{
        setTimerRunning(true);
        const interval = setInterval(() =>{
          setTimeLeft( prevTime => {
            if(prevTime === 0){
              clearInterval(interval);
              setTimerRunning(false);
              return 30;
            }else{
              return prevTime-1;
            }
          })
        }, 1000);
     }
  
    const getRandomPlayer = () => {
      return playerdetails[Math.floor(Math.random() * playerdetails.length)];
    };
  
    const handleGuess = () => {
      if (guess.toLowerCase() === currentPlayer.name.toLowerCase()) {
        setMessage('Congratulations! You guessed it right!');
        setGuess('');
        setCurrentPlayer(getRandomPlayer());
      } else {
        setMessage('Sorry, wrong guess. Try again.');
      }
    };
  
  
    const handleInputChange = (event) => {
      setGuess(event.target.value);
    };
  
   
  
    const handleStart =() =>{
      startGame();
    }
   
  
    const hintsToShow = currentPlayer ? currentPlayer.hints.join(', ') : '';
  
    return (
      <div className="App">
        <h1 className="font-bold bg-gray-300 w-48 centre">Cricket Guessing Game</h1>
        {!currentPlayer ? (
           <button onClick={handleStart}>Start</button>
        ):(
          <>
          <p>{showhints && hintsToShow}</p>
          <input  className="border border-black" type="text" value={guess} onChange={handleInputChange} />
          <button className="border border-green bg-green-200" onClick={handleGuess}>Guess</button>
          <p className="font-bold ">{message}</p>
          <p>Time left {timeLeft} seconds</p>
          </>
        )}
      </div>
    );
  }

  export default CricketGame;