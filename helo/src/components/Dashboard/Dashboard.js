import React, { Component } from 'react';
// import './App.css';

class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      search: ''
    }
  }
  render() {
    let{search}=this.state;
    return (
     
        <div className="App">Dashboard
        <br/>
        <br/>
        <button>Search</button>
        <input value={search} onChange={(e)=>{this.handleSearch(e.target.value)}}/>

        <button>Reset</button>
        </div>
    );
  }
}

export default Dashboard;

// Set up an input box for the search functionality. Make sure to store the value in state.