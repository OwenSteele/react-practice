import React from "react";

// function logRandom() {
//     console.log(Math.random());
// }

export default function Counter({onClickFunction, increment}){

    //const [counter, setCounter] = useState(0);
    //const clickHandler = () => setCounter(counter + 1);

    //return (<button onClick={() => setCounter(counter + 1)}>Value: {counter}</button>);

    //best to use click handler instead of inline arrow
    const clickHandler = () => onClickFunction(increment);

    return (<button onClick={clickHandler}>Click me +{increment}</button>);

}