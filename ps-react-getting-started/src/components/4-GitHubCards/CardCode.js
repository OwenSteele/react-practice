import React from "react";
import Code from "../code/Code.js";

const CardCode = () => {

    const card = `// Card.js

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
    }`;
    const cardList = `// CardList.js
    const CardList = (props) => {
        return (<div>
            {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
        </div>);`;
    const form = `// Form.js

    class Form extends React.Component {   
    
    state = {username: '', message: ''};

    handleSubmit = async (event) => {
        event.preventDefault();

        const response = await (
            await axios.get('https://api.github.com/users/$ {this.state.username}')
        .catch(function (error){
            if(error.response){
                this.setSate({message: 'Username was not found.'});
                console.log(this.state.message);
            }
            else if(error.request){
                this.setSate({message: 'GitHub could not be reach at this time.'});
                console.log(this.state.message);
            }
        }));

        this.props.onSubmit(response.data);
        this.setState({username: ''});
    };

    render() {
        return (<>
            <div id="message">{this.state.message}</div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="GitHub Username" 
            value={this.state.username} 
            onChange={event => this.setState({ username: event.target.value})} 
            required/>
            <button type="submit">Add User Card</button>
        </form>
        </>
      );
    }
}`;
    const githubCards = `// GitHubCards.js --- PARENT

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
    }`;

    const snippets =[card,cardList,form,githubCards];

    return(<Code snippets={snippets} />);
};

export default CardCode;