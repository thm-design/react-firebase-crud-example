import './login.css';

import React, { PureComponent } from 'react';

import firebase from 'firebase';

export default class Login extends PureComponent {
  state = {
    email: '',
    password: '',
    displayName: '',
    isLoggedIn: 'loading'
  };

  componentWillReceiveProps(props) {
    this.setState({ isLoggedIn: props.isLoggedIn });
  }

  render() {
    const { isLoggedIn } = this.state;
    let page = <div />;
    if (isLoggedIn === 'loading') {
      page = <div>loading ...</div>;
    } else if (isLoggedIn) {
      page = this._renderLoggedInPage();
    } else {
      page = this._renderLoginForm();
    }

    return page;
  }

  _handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  _handleLogin = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const promise = firebase.auth().signInWithEmailAndPassword(email, password);
    promise.then(() => history.push('/'));
    promise.catch(e => console.error(e));
  };

  _handleSignup = () => {
    // TODO: validate email
    const { email, password, displayName } = this.state;
    const { history } = this.props;
    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    promise.then(() => {
      const user = firebase.auth().currentUser;
      user.updateProfile({ displayName }).catch(e => {
        console.error(e);
      });
    });
    promise.then(() => history.push('/'));

    promise.catch(e => console.error(e));
  };

  _handleSignout = () => {
    const { history } = this.props;
    firebase.auth().signOut();
    history.push('/');
  };

  _renderLoginForm = () => {
    return (
      <div className="container portfolio-form">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-md-offset-4">
            <div className="account-wall">
              <img
                className="profile-img"
                src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                alt=""
              />
              <div className="form-signin">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  autoFocus
                  onChange={this._handleInputChange}
                />
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  onChange={this._handleInputChange}
                />
                <button className="btn btn-lg btn-primary btn-block" onClick={this._handleLogin}>
                  Sign in
                </button>
                <span className="clearfix" />
              </div>
            </div>
            <a href="#" className="text-center new-account" onClick={this._handleSignup}>
              Create an account
            </a>
          </div>
        </div>
      </div>
    );
  };

  _renderLoggedInPage = () => {
    const { displayName, email } = this.props.userObject || {};

    return (
      <div className="container portfolio-form ">
        <div className="col-lg-12">
          <div className="input-group row">
            <div className="input-group row">
              <label>Display Name:</label>
              <p>
                {displayName}
              </p>
            </div>
            <div className="input-group row">
              <label>Email:</label>
              <p>
                {email}
              </p>
              <button onClick={this._handleSignout} className="btn btn-warning">
                log out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
