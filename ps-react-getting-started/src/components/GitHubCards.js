import React from "react";
import CardList from "./4-GitHubCards/CardList.js";
import Form from "./4-GitHubCards/Form.js";

class GitHubCards extends React.Component {    

    state = {
        profiles: []
    };

    addNewProfile = (profileData) => {
        console.log(profileData);
        this.setState(previousState => ({
            profiles: [...previousState.profiles, profileData]
        }));
    };

    render() {
        return (<div className="course-section">
        <h3>4. GitHub Card App</h3>
        <p>Built using class components</p>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
        </div>);
    };
}

export default GitHubCards;