import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { _listenToAuthEvents, _listenToPostEvents } from './API';

import Login from './components/admin/Login';
import Navbar from './components/navbar/Navbar';
import PageHeader from './components/pageheader/PageHeader';
import PortfolioBox from './components/portfoliobox/PortfolioBox';
import PortfolioForm from './components/admin/PortfolioForm';

export default class App extends PureComponent {
  state = {
    portfolioItems: [],
    isLoggedIn: null,
    userObject: null
  };

  componentWillMount() {
    _listenToPostEvents(this);
    _listenToAuthEvents(this);
  }

  render() {
    const { isLoggedIn, userObject } = this.state;

    const Home = () =>
      <span>
        <div className="row">
          {this._renderPortfolioItems()}
        </div>
        {this._renderPortfolioForm()}
      </span>;

    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <PageHeader />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/login"
                render={props => <Login {...props} userObject={userObject} isLoggedIn={isLoggedIn} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }

  _renderPortfolioItems = () => {
    const { portfolioItems, isLoggedIn } = this.state;
    const items = portfolioItems.map(({ href, imgSrc, text, key }, index) =>
      <PortfolioBox isLoggedIn={isLoggedIn} href={href} imgSrc={imgSrc} text={text} key={key} itemId={key} />
    );

    return items;
  };

  _renderPortfolioForm = () => {
    const { isLoggedIn } = this.state;
    return isLoggedIn
      ? <div className="row">
          <PortfolioForm />
        </div>
      : null;
  };
}
