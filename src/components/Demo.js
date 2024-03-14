import { useState } from "react";

const Demo = ({ playerdetails }) => {
    const [randomPlayer, setRandomPlayer] = useState(null);
    const [randomHint, setRandomHint] = useState('');
  
    const getRandomPlayer = () => {
      const randomIndex = Math.floor(Math.random() * playerdetails.length);
      setRandomPlayer(playerdetails[randomIndex]);
    }
  
    const getRandomHint = () => {
      if (randomPlayer) {
        const randomHintIndex = Math.floor(Math.random() * randomPlayer.hints.length);
        setRandomHint(randomPlayer.hints[randomHintIndex]);
      }
    }
  
    return (
      <div>
        <h2>Random Player: {randomPlayer?.name}</h2>
        <h3>Random Hint: {randomHint}</h3>
        <button  className="border border-black" onClick={getRandomPlayer}>Generate Random Player</button>
        <button onClick={getRandomHint}>Generate Random Hint</button>
      </div>
    );
  }
  
  export default Demo;