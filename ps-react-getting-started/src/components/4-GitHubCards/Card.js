import React from "react";
import "./Card.css"

class Card extends React.Component {    
    render() {
    const profile = this.props;
        return (
        <div className="github-profile">
            <img src={profile.avatar_url} className="placeholder-img" alt=""/>
            <div className="info">
                <div className="name">{profile.name} ({profile.login})</div>
                <div className="company">{profile.company}</div>
                <div className="bio">{profile.bio}</div>
                <a href={profile.repos_url} className="repos">Public Repos: {profile.public_repos}</a>
            </div>
      </div>
      );
    }
}

export default Card;