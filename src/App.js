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
import Header  from './components/Header'
import Footer  from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {isAuthenticated, getUserData, logout, location } = this.props;
    getUserData();
    return (
      <div className = "app">
        <div className = "app__content">
          <Header logout={logout} history={this.props.history} isAuthenticated={isAuthenticated}/>                      
          <Route location={location} path="/" exact component={HomePage}> HomePage </Route>
          <Route location={location} path="/login" exact component={LoginPage}>Login</Route>
          <Route location={location} path="/dashboard" exact component={DashboardPage}> Signup </Route>
          <Route location={location} path="/bookTicket" exact component={BookTicketPage}> Book ticket  </Route>
          <Route location={location} path="/signup" exact component={SignupPage}> Signup </Route>
        </div>
        <div className = "app__footer">
          <Footer />
        </div>
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
