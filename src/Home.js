import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';
import './App.css';
import logo from './logo.svg';

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login() {
    await this.props.oktaAuth.signInWithRedirect();
  }

  async logout() {
    await this.props.oktaAuth.signOut();
  }

  render() {
    let body = null;
    if (this.props.authState?.isAuthenticated) {
      body = (
        <div className="Buttons">
          <button onClick={this.logout}>SignOut</button>
          {<link href="/" ></link>}
        </div>
      );
    } else {
      body = (
        <div className="Buttons">
          <button onClick={this.login}>Login</button>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            My Second React App.
          </p>
          <a href="/profile">
            User's Profile
          </a>
          {body}
        </header>
      </div>
    );
  }
});
