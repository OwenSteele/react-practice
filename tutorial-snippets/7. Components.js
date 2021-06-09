// PascalCase for Components (React is case sensitive)
// We call this a function component because the Component is defined as a function.

function Hero() {
    return (<>
        <h1>Welcome to our supermarket</h1>
        <p>Start shopping</p>
        </>);
}

render(<Hero></Hero>, document.querySelector("#react-root"));

// Can use self-closing for childless components

function Navbar() {
    return (<>
            <h3>Supermarket</h3>
            <p>Start shopping</p>
        </>);
}
const root = document.querySelector("#react-root");
render(<Navbar />, root);

// One component per file

// Hero.js
import React from "react";

export default function Hero() {
    return (<>
            <h1 class="title">Supermarket</h1>
            <p>Start shopping</p>
    </>);
}

//index.js
import Hero from "./Hero.js";

const root = document.querySelector("#react-root");

render(<Hero />, root);

// App root component - only render once to prevent overwriting

// Link.js
export default function Link() {
    return <a>Link text</a>;
}
// Button.js
export default function Button () {
    return (<button>Button text</button>);
}

//index.js
import Button from "./Button.js"; import Link from "./Link.js";

function App() {
    return (<>
        <Button /><Button /><Link />
        </>);
}

render(<App />, document.querySelector("#react-root"));