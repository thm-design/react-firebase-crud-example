import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import PageHeader from './components/pageheader/PageHeader';
import PortfolioBox from './components/portfoliobox/PortfolioBox';
import PortfolioForm from './components/admin/PortfolioForm';
import { _listenToPostEvent } from './API';

export default class App extends Component {
  state = {
    portfolioItems: []
  };

  componentWillMount() {
    _listenToPostEvent(this);
    // _getData(this);
  }

  render() {
    const { portfolioItems } = this.state;

    let Home = () =>
      <div className="row">
        {portfolioItems.map(({ href, imgSrc, text, key }, index) =>
          <PortfolioBox href={href} imgSrc={imgSrc} text={text} key={key} itemId={key} />
        )}
      </div>;

    if (0) {
      Home = () =>
        <span>
          <div className="row">
            {portfolioItems.map(({ href, imgSrc, text, key }, index) =>
              <PortfolioBox href={href} imgSrc={imgSrc} text={text} key={key} itemId={key} />
            )}
          </div>
          <div className="row">
            <PortfolioForm />
          </div>
        </span>;
    }

    const Login = () => <h2>LOG IN PAGE</h2>;

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
}
