import { useState, useEffect } from "react";
import "./StarMatch.css";
import utils from "./starMatchUtils.js";

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

export default useGameState;