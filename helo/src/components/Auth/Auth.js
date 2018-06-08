import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  createUser() {
    axios.post('/api/user', {
      username: this.state.username,
      password: this.state.password,
    }).then(res=>{
      this.props.history.push('/dashboard')
    })
  }

  login() {
    axios.post('/api/login', {
      username: this.state.username,
      password: this.state.password,
    }).then(res=>{
      this.props.history.push('/dashboard')
    })
  }

  handleUsernameChange(val) {
    this.setState({ username: val })
  }

  handlePasswordChange(val) {
    this.setState({ password: val })
  }

  render() {

    const { username, password } = this.state;

    return (

      <div className="App">Auth

        <input value={username} onChange={(e) => { this.handleUsernameChange(e.target.value) }} />
        <input value={password} onChange={(e) => { this.handlePasswordChange(e.target.value) }} />

        <button onClick={()=>{this.login()}}>Login</button>
        <button onClick={(e)=>{this.createUser()}}>Register</button>

      </div>
    );
  }
}

export default Auth;

