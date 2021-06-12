import React, { useState} from "react";
import StarMatch from "./5-StarMatchGame/StarMatch.js";
import StarMatchCode from "./5-StarMatchGame/StarMatchCode.js";

const StarMatchGame = () => {

    const [gameId, setGameId] = useState(1);
    const [gameInitialized, setGameInitialized] = useState(false);

    const handleStartClick = () => {
        setGameInitialized(true);
    };

    return (
        <div className="course-section">
            <h3>5. Star Match Game</h3>
            <p>Game for match number of stars with </p>
          <div className="help">
            Pick 1 or more numbers that sum to the number of stars
          </div>
          <div>
            {gameInitialized 
            ? <StarMatch key={gameId} startNewGame={() => setGameId(gameId+1)}/>
            : <button className="startGameButton" onClick={handleStartClick}>Start Game</button>}
</div>
            <StarMatchCode />
        </div>
    );
};

export default StarMatchGame;