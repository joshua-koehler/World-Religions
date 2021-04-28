import './App.css';
import React, { Component } from 'react';
import DataDashboard from './DataDashboard';
import Login from './Login';

class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        logged_in: localStorage.getItem('token') ? true : false,
      }
    }

    handle_login = (e, data) => {
      e.preventDefault();
      fetch('http://localhost:8000/token-auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          this.setState({
            logged_in: true,
            displayed_form: '',
            username: json.username
            //username: json.user.username
          });
        });
    };

    render(){
      if(this.state.logged_in){
        return(
          <div>
            <DataDashboard/>
          </div>
        );
      }
      else{
        return(
          <div>
            <Login handle_login={this.handle_login} onLogin={() => {this.setState({logged_in: true})}}/>
          </div>
        )
      }
    }
}

export default App;