import React from "react";
import Code from "../code/Code.js";

const BasicsCode = () => {

    const counter = `// Counter.js
    export default function Counter({onClickFunction, increment}){
const clickHandler = () => onClickFunction(increment);

return (<button onClick={clickHandler}>Click me +{increment}</button>);
}`;
    const display = `// Display.js
    function Display({message}) {
        return (<div>Value: {message}</div>);
    }
    export default Display;`;
    const basics = `// Basics.js --- PARENT
    const [counter, setCounter] = useState(0);
    const incrementCounter = (incrVal) => setCounter(counter + incrVal);}
   
    // ...
   
    <Counter onClickFunction={incrementCounter} increment={1} />
         <Counter onClickFunction={incrementCounter} increment={2} />
         <Display message={counter} />`;

    const snippets =[counter,display,basics];

    return(<Code snippets={snippets} />);
};

export default BasicsCode;