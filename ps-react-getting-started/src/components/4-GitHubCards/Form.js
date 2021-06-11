import React from "react";
import axios from "axios";

class Form extends React.Component {   
    
    state = {username: '', message: ''};

    handleSubmit = async (event) => {
        event.preventDefault();

        const response = await (
            await axios.get(`https://api.github.com/users/${this.state.username}`)
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
}

export default Form;