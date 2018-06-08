import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer'


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
    }).then(res => {
      this.props.getUser({
        id: res.data[0].user_id,
        username: res.data[0].user_name,
        profilePic: res.data[0].profile_pic
      })
      this.props.history.push('/dashboard')
    })
  }


  login() {
    axios.post('/api/login', {
      username: this.state.username,
      password: this.state.password,
    }).then(res => {
      this.props.getUser({
        id: res.data[0].user_id,
        username: res.data[0].user_name,
        profilePic: res.data[0].profile_pic
      })
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
      <div>
        Auth
        <input value={username} onChange={(e) => { this.handleUsernameChange(e.target.value) }} />
        <input value={password} onChange={(e) => { this.handlePasswordChange(e.target.value) }} />

        <button onClick={(e) => { this.login() }}>Login</button>
        <button onClick={(e) => { this.createUser() }}>Register</button>
      </div>
    );
  }
}

export default connect(null, { getUser })(Auth);

