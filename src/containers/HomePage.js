import { connect } from 'react-redux';
import React from 'react';
import '../App.css'
import { logout, getUserCredentials } from '../actions/auth.js';
import  Header  from '../components/Header'
import  Background  from '../components/Background'
import  Info  from '../components/Info'
import  Offer  from '../components/Offer'
import  Footer  from '../components/Footer'

const HomePage = (props) => {

    //TODO Maybe think and refactor amount of variable
    const {isAuthenticated, getUserData, logout, state } = props;
    getUserData();
    return (
        <div>
            <Header />
            <Background />
            <Info />
            <Offer />
            <Footer />
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