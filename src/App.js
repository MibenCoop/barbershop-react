import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import HomePage  from "./containers/HomePage";
import DashboardPage from './containers/DashboardPage'
import LoginPage  from "./containers/LoginPage";
import SignupPage  from "./containers/SignupPage";
import BookTicketPage  from "./containers/BookTicketPage";
import { logout, getUserCredentials } from './actions/auth.js';

import PropTypes from 'prop-types';
import  Header  from './components/Header'


class App extends Component {
  render() {
    const {isAuthenticated, getUserData, logout, state, location } = this.props;
    console.log('isA', isAuthenticated);
    getUserData();
    return (
      <div>
        <Header logout={logout} isAuthenticated={isAuthenticated}/>        
        <Route location={location} path="/" exact component={HomePage}> HomePage </Route>
        <Route location={location} path="/login" exact component={LoginPage}>Login</Route>
        <Route location={location} path="/dashboard" exact component={DashboardPage}> Signup </Route>
        <Route location={location} path="/bookTicket" exact component={BookTicketPage}> Book ticket  </Route>
        <Route location={location} path="/signup" exact component={SignupPage}> Signup </Route>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
