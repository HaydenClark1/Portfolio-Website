import { useEffect, useState } from "react";
import Player from "../player/player";
import Barrior from "../Barrior/Barrior";
import '../Flight/Flight.css';
import GameOver from "../GameOver/GameOver";

function Flight() {
  const [playerStatus, setStatus] = useState('alive');
  const [barriorsTop, setBarriorsTop] = useState([]);
  const [barriorsBottom, setBarriorsBottom] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighScore] = useState(0);

  const handleAnimationChange = () => {
    // handle animation change logic
  }

  const handleBarriors = (barriorBottom, barriorTop) => {
    setBarriorsTop(barriorTop);
    setBarriorsBottom(barriorBottom);
  }

  const handlePlayerCollision = () => {
    setStatus('dead');
  }
  const handleScore = (score) =>{
    setScore(score);
    if(score > highscore){
        setHighScore(score);
    }
  }
  const handleRestart = ()=>{
    setStatus('alive');
  }


  return (
    <>
      <div className="playable-area">
        {playerStatus === 'alive' && <Player 
          onAnimationChange={handleAnimationChange}
          handleCollision={handlePlayerCollision}
          barriorsTop={barriorsTop} 
          barriorsBottom={barriorsBottom} 
          handleScore={handleScore}/>}
        {playerStatus === 'alive' && <Barrior onUpdateBarriors={handleBarriors} />} 
        {playerStatus === 'dead' && <GameOver score={score} highscore={highscore} onRestart={handleRestart}/>}
      </div>
    </>
  );
}

export default Flight;
