import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomePage  from "./containers/HomePage";
import DashboardPage from './containers/DashboardPage'
import LoginPage  from "./containers/LoginPage";
import SignupPage  from "./containers/SignupPage";
import BookTicketPage  from "./containers/BookTicketPage";
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
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



export default App;
