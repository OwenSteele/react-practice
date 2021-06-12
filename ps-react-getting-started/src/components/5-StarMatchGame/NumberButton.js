import React from "react";
import "./StarMatch.css";
import "./NumberButton.css"

const NumberButton = ({numberId,status,onClick}) => {
    const isUsed = status !== 'used';
    return (<button key={numberId} className={`number ${status} btn` }
    onClick={() => isUsed ? onClick(numberId) : null} >{numberId}</button>);
};

export default NumberButton;