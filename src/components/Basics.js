import React, { useState } from "react";
import Display from "./2-Basics/Display.js";
import Counter from "./2-Basics/Counter.js";
import BasicsCode from "./2-Basics/BasicsCode.js";

export default function Basics() {

  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrVal) => setCounter(counter + incrVal);

  return (<>
    <div className="course-section">
      <h3>2. Basics</h3>

      <Counter onClickFunction={incrementCounter} increment={1} />
      <Counter onClickFunction={incrementCounter} increment={2} />
      <Display message={counter} />
      <BasicsCode />
        </div>
  </>);
}