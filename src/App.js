import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import HomePage  from "./components/pages/HomePage";
import LoginPage  from "./components/pages/LoginPage";
import SignupPage  from "./components/pages/SignupPage";
import PropTypes from 'prop-types';

const App = ({location}) => {
    return (
      <div>
        <Route location={location} path="/" exact component={HomePage}> HomePage </Route>
        <Route location={location} path="/login" exact component={LoginPage}>Login</Route>
        <Route location={location} path="/signup" exact component={SignupPage} />
      </div>
    );
}

App.PropTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}


export default App;
