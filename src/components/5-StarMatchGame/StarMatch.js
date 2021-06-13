import React from "react";
import "./StarMatch.css";
import NumberButton from "./NumberButton.js";
import NewGameButton from "./NewGameButton.js";
import StarImage from "./StarImage.js";
import utils from "./starMatchUtils.js";
import useGameState from "./useGameState.js";

const StarMatch = ({ startNewGame }) => {

  const  {stars, availableNumbers, selectedNumbers, secondsLeft, setGameState}
  = useGameState();

  const validSelection = utils.sum(selectedNumbers) <= stars;
  const gameStatus = availableNumbers.length === 0
    ? "won"
    : secondsLeft === 0 ? "lost" : "active";

  const numberStatus = (numberId) => {
    if (!availableNumbers.includes(numberId)
      || gameStatus !== "active") {
      return 'used';
    }
    if (selectedNumbers.includes(numberId)) {
      return validSelection ? 'valid' : "invalid";
    }
    return 'available';
  }

  const handleNumberClick = (numberId) => {

    const newSelectedNumbers = selectedNumbers.includes(numberId)
      ? selectedNumbers.filter(n => n !== numberId)
      : selectedNumbers.concat(numberId);

      setGameState(newSelectedNumbers);
  }

  return (
    <div className="game">
      <div className="body">
        <div className="left">
          {gameStatus !== "active"
            ? <NewGameButton onClick={startNewGame} text={`You ${gameStatus}, New Game`} />
            : <StarImage count={stars} />}
        </div>
        <div className="right">
          {utils.range(1, 9).map(numberId =>
            <NumberButton
              key={numberId}
              numberId={numberId}
              status={numberStatus(numberId)}
              onClick={handleNumberClick} />)}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
      <NewGameButton onClick={startNewGame} text="Start Again?" />
    </div>
  );
};

export default StarMatch;