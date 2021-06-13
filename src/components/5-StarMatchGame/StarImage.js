import React from "react";
import "./StarMatch.css";
import utils from "./starMatchUtils.js";

const StarImage = ({count}) => {
 return (<>
{utils.range(1, count).map(starId => 
 <div key={starId} className="star"></div>)}
 </>);
};

export default StarImage;