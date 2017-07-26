import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/admin/Login';
import Navbar from './components/navbar/Navbar';
import PageHeader from './components/pageheader/PageHeader';
import PortfolioBox from './components/portfoliobox/PortfolioBox';
import PortfolioForm from './components/admin/PortfolioForm';
import { _listenToPostEvent } from './API';
import firebase from 'firebase';

export default class App extends Component {
  state = {
    portfolioItems: [],
    isLoggedIn: null
  };

  componentWillMount() {
    _listenToPostEvent(this);

    // real time auth change listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log('User is logged in', firebaseUser.email);
        this.setState({ isLoggedIn: true });
      } else {
        console.log('not loggedin', firebaseUser);
        this.setState({ isLoggedIn: null });
      }
    });
  }

  render() {
    const { portfolioItems } = this.state;
    console.log('_userIsLoggedIn', this._userIsLoggedIn());

    const Home = () =>
      <span>
        <div className="row">
          {portfolioItems.map(({ href, imgSrc, text, key }, index) =>
            <PortfolioBox href={href} imgSrc={imgSrc} text={text} key={key} itemId={key} />
          )}
        </div>
        {this.state.isLoggedIn
          ? <div className="row">
              <PortfolioForm />
            </div>
          : null}
      </span>;

    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <PageHeader />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }

  _userIsLoggedIn = () => localStorage.getItem('react-crud-user');
}
