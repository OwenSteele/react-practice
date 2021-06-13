import React from "react";
import Code from "../code/Code.js";

const StarMatchCode = () => {

    const newGameButton = `// NewGameButton.js
    
    const NewGameButton = ({text, onClick}) => {
        return (<div>
            <p></p>
            <button key={text} onClick={onClick}>{text}</button>
            </div>);
    };`;
    const numberButton = `// NumberButton.js
    
    const NumberButton = ({numberId,status,onClick}) => {
        const isUsed = status !== 'used';
        return (<button key={numberId} className={'number $ {status} btn' }
        onClick={() => isUsed ? onClick(numberId) : null} >{numberId}</button>);
    };`;
    const numberButtonCss = `// NumberButtonCss.css
    
    .available {
        transition: .5s; 
    }
    .used {
        opacity: 0.3;
        transition: 2s;
    }
    .used:hover {
        text-decoration: none;
    }
    .valid {
        background-color: #4ec200;
        color: #ffffff;
        transition: .5s;    
    }
    .invalid {
        background-color: #ff0022;
        color: #ffffff;
        transition: .5s;  
    }    
    .btn {
        border-radius: 5px;
        transition: .7s;
    }
    .btn:hover {
        color: #ffae00;
        font-weight: bolder;
        transition: .3s;
    }`;
    const starImage = `// StarImage.js
    
    const StarImage = ({count}) => {
        return (<>
       {utils.range(1, count).map(starId => 
        <div key={starId} className="star"></div>)}
        </>);
       };`;
    const starMatchUtils = `// starMatchUtils.js
    
    const utils = {
        sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
      
        range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
      
        random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
      
        randomSumIn: (arr, max) => {
          const sets = [[]];
          const sums = [];
          for (let i = 0; i < arr.length; i++) {
            for (let j = 0, len = sets.length; j < len; j++) {
              const candidateSet = sets[j].concat(arr[i]);
              const candidateSum = utils.sum(candidateSet);
              if (candidateSum <= max) {
                sets.push(candidateSet);
                sums.push(candidateSum);
              }
            }
          }
          return sums[utils.random(0, sums.length - 1)];
        },
      };`;
    const starMatch = `// StarMatch.js 
    
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
            ? <NewGameButton onClick={startNewGame} text={'You $ {gameStatus}, New Game'} />
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
};`;
    const useGameState = `// useGameState.js
    const useGameState = () => {
      const [stars, setStars] = useState(utils.random(1, 9));
      const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
      const [selectedNumbers, setSelectedNumbers] = useState([]);
      const [secondsLeft, setSecondsLeft] = useState(10);
  
      useEffect(() => {
        if (secondsLeft > 0 && availableNumbers.length > 0) {
          const timer = setTimeout(() => {
            setSecondsLeft(secondsLeft - 1);
          }, 1000);
          return () => clearTimeout(timer);
        }
      });
  
      const setGameState = (newSelectedNumbers) => {
        if (utils.sum(newSelectedNumbers) === stars) {
  
          const newAvailableNumbers = availableNumbers.filter(n =>
            !newSelectedNumbers.includes(n));
  
          setAvailableNumbers(newAvailableNumbers);
          setStars(utils.random(1, 9));
  
          setSelectedNumbers([]);
        } else {
          setSelectedNumbers(newSelectedNumbers);
        }
      }
  
      return {stars, availableNumbers, selectedNumbers, secondsLeft, setGameState}
    }
    `;

    const snippets =
    [newGameButton,numberButton,numberButtonCss,
      starImage,starMatchUtils,starMatch,useGameState];

    return(<Code snippets={snippets} />);
};

export default StarMatchCode;