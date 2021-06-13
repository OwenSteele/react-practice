import React from "react";
import NewGameButton from "./NewGameButton.js";
import StarImage from "./StarImage.js";

const LeftSide = (isGameComplete, onclick, stars) => {
    if(isGameComplete){
        return (<NewGameButton onclick={onclick} text="New Game" />);
    } else {
        return (<StarImage count={stars} />);
    }    
};

export default LeftSide;