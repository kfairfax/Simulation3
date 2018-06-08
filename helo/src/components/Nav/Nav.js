import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = (props) => {
    console.log(props);
  
    return (

        <div>Nav
            <br/>
            <img src={props.profilePic}/>
            <br/>
            <span>{props.username}</span>
            
            <Link to='/dashboard'>
                <button>Home</button>
            </Link>

            <Link to='/new'>
                <button>New Post</button>
            </Link>

            <Link to='/'>
                <button>Logout</button>
            </Link>
               
        </div>
    )

};

function mapStateToProps(state) {
    return {
        username: state.username,
        profilePic: state.profilePic
    }
} 

export default connect(mapStateToProps)(Nav);
