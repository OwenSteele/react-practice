import React from "react";
import "./Card.css"

class Card extends React.Component {    

    render() {
        return (
        <div className="github-profile">
            <div id="placeholder-img"></div>
            <div className="info">
                <div className="name">Name here...</div>
                <div className="company">Company here...</div>
            </div>
      </div>
      );
    }
}

export default Card;