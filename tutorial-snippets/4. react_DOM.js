// react DOM 1

import React from "react";
import {render} from "react-dom";

const element = React.createElement("p", {}, "Hello World");
const root = document.querySelector("#react-root");
render(element,root);

// react DOM 2

//import React from "react";
//import {render} from "react-dom"

const element = React.createElement("h1",null,"Online Supermarket");
const root = document.querySelector("#react-root");

render(element, root);

// react DOM 3

//import React from "react";
//import {render} from "react-dom";

const element = React.createElement("h1", {className: "title"}, "Online Supermarket");
const root = document.querySelector("#react-root");

render(element,root);