import React, { Component } from 'react';

import firebase from 'firebase';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    isLoggedIn: null
  };

  componentWillMount() {
    // real time auth change listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        localStorage.setItem('react-crud-user', firebaseUser.email);
        this.setState({ isLoggedIn: true });
      } else {
        localStorage.setItem('react-crud-user', null);
        this.setState({ isLoggedIn: null });
      }
    });
  }

  render() {
    return (
      <div className="container portfolio-form ">
        <div className="col-lg-12">
          <div className="form-group row">
            <label>Email</label>
            <input
              className="form-control"
              onChange={this._handleInputChange}
              autoComplete="on"
              type="email"
              name="email"
            />
          </div>
          <div className="form-group row">
            <label>Password</label>
            <input
              className="form-control"
              onChange={this._handleInputChange}
              autoComplete="on"
              type="password"
              name="password"
            />
          </div>
          <div className="form-group row">
            <button onClick={this._handleLogin} className="form-control btn btn-primary">
              log in
            </button>
            <button onClick={this._handleSignup} className="form-control btn btn-danger">
              sign up
            </button>
            {this.state.isLoggedIn
              ? <button onClick={this._handleSignout} className="form-control btn btn-warning">
                  log out
                </button>
              : null}
          </div>
        </div>
      </div>
    );
  }

  _handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  _handleLogin = () => {
    const { email, password } = this.state;
    const promise = firebase.auth().signInWithEmailAndPassword(email, password);
    promise.catch(e => console.error(e));
  };

  _handleSignup = () => {
    // TODO: validate email
    const { email, password } = this.state;
    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.error(e));
  };

  _handleSignout = () => {
    const promise = firebase.auth().signOut();
  };
}
