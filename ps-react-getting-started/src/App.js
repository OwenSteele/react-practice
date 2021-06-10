import './App.css';
import Basics from "./components/Basics.js";
import ModernJs from "./components/ModernJs.js";
import Overview from "./components/Overview.js";
import GitHubCards from "./components/GitHubCards.js";
import React from "react";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img className="me-image" src="https://owensteele.co.uk/pictures/me2.PNG" alt="Me"/>
          <h1>Owen's React Practice</h1>
          <a href="https://github.com/OwenSteele/react-practice/tree/master/ps-react-getting-started"
          target="_blank" rel="noopener noreferrer"><div id="gh-repo"></div></a>
        </div>
        
      </header>
      <div className="App-body">
        <Overview />
        <Basics />
        <ModernJs />
        <GitHubCards />
      </div>
    </div>
  );
}

export default App;
