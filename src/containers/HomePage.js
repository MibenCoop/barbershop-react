import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import '../App.css'
import { logout, getUserCredentials } from '../actions/auth.js';
import  Header  from '../components/Header'
import  Background  from '../components/Background'


const HomePage = (props) => {

    //TODO Maybe think and refactor amount of variable
    const {isAuthenticated, getUserData, logout, state } = props;
    getUserData();
    return (
        <div>
            <Header />
            <Background />
            <h1>HomePage</h1>
            <span className="username">My username:</span>
            <div>My login: {state.email}</div>
            { isAuthenticated ?  
                (<div>
                        <button onClick={() => logout()}>Logout</button>
                        <Link to="/dashboard">My cabinet</Link>
                </div>) :
                (<div>
                        <Link to="/login">Login</Link> or <Link to="/signup">Signup </Link>
                </div>) 
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.user.token,
        state: state.user
     };
} 

const mapDispatchToProps = (dispatch) => ({
    getUserData: () => dispatch(getUserCredentials()),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);