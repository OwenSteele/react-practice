import React, { useState } from "react";
import Display from "./2-Basics/Display.js";
import Counter from "./2-Basics/Counter.js";

export default function Basics() {

  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrVal) => setCounter(counter + incrVal);

  return (<>
    <div className="course-section">
      <h3>2. Basics</h3>

      <pre>

        {`// Counter.js
        export default function Counter({onClickFunction, increment}){
const clickHandler = () => onClickFunction(increment);

return (<button onClick={clickHandler}>Click me +{increment}</button>);
}`}
      </pre>
      <pre>
            {`// Display.js
function Display({message}) {
    return (<div>Value: {message}</div>);
}
export default Display;`}
      </pre>
      <pre>
{`// Basics.js
 const [counter, setCounter] = useState(0);
 const incrementCounter = (incrVal) => setCounter(counter + incrVal);}

 // ...

 <Counter onClickFunction={incrementCounter} increment={1} />
      <Counter onClickFunction={incrementCounter} increment={2} />
      <Display message={counter} />`}
      </pre>

      <Counter onClickFunction={incrementCounter} increment={1} />
      <Counter onClickFunction={incrementCounter} increment={2} />
      <Display message={counter} />
    </div>
  </>);
}