import React from "react";

const NewGameButton = ({text, onClick}) => {
    return (<div>
        <p></p>
        <button key={text} onClick={onClick}>{text}</button>
        </div>);
};

export default NewGameButton;