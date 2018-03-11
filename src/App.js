import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage  from "./components/pages/HomePage";
import LoginPage  from "./components/pages/LoginPage";
import SignupPage  from "./components/pages/SignupPage";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Link to="/">HomePage</Link> */}

          <Route path="/" exact component={HomePage}> HomePage </Route>
          <Route path="/login" exact component={LoginPage}>Login</Route>
          <Route path="/signUp" exact component={SignupPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
