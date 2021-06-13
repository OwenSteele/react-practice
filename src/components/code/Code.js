import React, { useState } from "react";
import "../code/codeCollapse.js"
import "../code/Code.css"

const Code = ({snippets}) => {

    const [showCode, setShowCode] = useState("code-content-hidden")
    const handleShowCode = () => {
        if(showCode === "code-content"){
            setShowCode("code-content-hidden")
        } else {
            setShowCode("code-content")
        }
    }

    console.log(snippets);

    const codeOutput = snippets.map(snip => <pre><code>{snip}</code></pre>)

    return(<>
     <button className="code-collapse-button" onClick={handleShowCode}>See Code</button>
      <div className={showCode}>
          {codeOutput}
        </div> 
    </>);
};

export default Code;