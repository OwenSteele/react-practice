import React from "react";
import CardList from "./4-GitHubCards/CardList.js";

class GitHubCards extends React.Component {    

    render() {
        return (<div className="course-section">
        <h3>4. GitHub Card App</h3>
        <p>Built using class components</p>
        <CardList />
        </div>);
    }
}

export default GitHubCards;