import React, { Component } from 'react';

export default class Test extends Component {
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
                Start Bootstrap
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">
                Page Heading
                <small>Secondary Text</small>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 portfolio-item">
              <a href="#">
                <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
              </a>
            </div>
            <div className="col-md-3 portfolio-item">
              <a href="#">
                <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
              </a>
            </div>
            <div className="col-md-3 portfolio-item">
              <a href="#">
                <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
              </a>
            </div>
            <div className="col-md-3 portfolio-item">
              <a href="#">
                <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 portfolio-item">
              <a href="#">
                <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
              </a>
            </div>
            <div className="col-md-3 portfolio-item">
              <a href="#">
                <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
              </a>
            </div>
            <div className="col-md-3 portfolio-item">
              <a href="#">
                <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
              </a>
            </div>
            <div className="col-md-3 portfolio-item">
              <a href="#">
                <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 portfolio-item">
              <a href="#">
                <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
              </a>
            </div>
            <div className="col-md-3 portfolio-item">
              <a href="#">
                <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
              </a>
            </div>
            <div className="col-md-3 portfolio-item">
              <a href="#">
                <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
              </a>
            </div>
            <div className="col-md-3 portfolio-item">
              <a href="#">
                <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
              </a>
            </div>
          </div>

          <hr />
          <div className="row text-center">
            <div className="col-lg-12">
              <ul className="pagination">
                <li>
                  <a href="#">&laquo;</a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">&raquo;</a>
                </li>
              </ul>
            </div>
          </div>

          <hr />
          <footer>
            <div className="row">
              <div className="col-lg-12">
                <p>Copyright &copy; Your Website 2014</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
