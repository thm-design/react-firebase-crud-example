import React, { Component } from 'react';

import { _deleteItem } from '../../API';
import firebase from 'firebase';

export default class Header extends Component {
  state = {
    isLoggedIn: null
  };

  componentWillMount() {
    // real time auth change listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: null });
      }
    });
  }

  render() {
    const { href, imgSrc, text } = this.props;
    return (
      <div className="col-md-3 portfolio-item">
        <a href={href} target="_blank">
          <img className="img-responsive" src={imgSrc} alt="" />
        </a>
        <p>
          {text}
        </p>
        {this.state.isLoggedIn
          ? <button className="btn btn-danger" onClick={this._handleDeleteItem}>
              delete item
            </button>
          : null}
      </div>
    );
  }

  _handleDeleteItem = event => {
    const { itemId } = this.props;
    _deleteItem(event, itemId);
  };
}
