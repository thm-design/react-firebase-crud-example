import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">
                Branding / Logo
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#">Navigation 1</a>
                </li>
                <li>
                  <a href="#">Navigation 2</a>
                </li>
                <li>
                  <a href="#">Navigation 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
