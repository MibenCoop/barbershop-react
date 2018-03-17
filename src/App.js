import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomePage  from "./components/pages/HomePage";
import DashboardPage from './components/pages/DashboardPage'
import LoginPage  from "./components/pages/LoginPage";
import SignupPage  from "./components/pages/SignupPage";
import BookTicketPage  from "./components/pages/BookTicketPage";
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Route location={location} path="/" exact component={HomePage}> HomePage </Route>
        <Route location={location} path="/login" exact component={LoginPage}>Login</Route>
        <Route location={location} path="/dashboard" exact component={DashboardPage}> Signup </Route>
        <Route location={location} path="/bookTicket" exact component={BookTicketPage}> Signup </Route>
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
