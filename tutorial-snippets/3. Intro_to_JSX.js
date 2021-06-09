// Basic JSX

import React from "react";
import {render} from "react-dom";

const element = <p>My first JSX</p>
const root = document.querySelector("#react-root");

render(element,root);

// Attributes 1

import React from "react";
import {render} from "react-dom";

const element = <p id="promo" className="selected">Hello World</p>;
const root = document.querySelector("#react-root");

render(element,root);

// return JSX

function getTagline() {
    return <h2 className="subtitle">Grocery shopping simplified</h2>;
}

// conditional ops

function getLoginStatus(is_loggedin) {
    let text;
    if (is_loggedin){
        return <p>You are logged in</p>
    }
    else{
        return <a href="/login">Login</a>
    }
}