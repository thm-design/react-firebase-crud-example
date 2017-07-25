import React, { Component } from 'react';

import { _deleteItem } from '../../API';

export default class Header extends Component {
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
        <button className="btn btn-danger" onClick={this._handleDeleteItem}>
          delete item
        </button>
      </div>
    );
  }

  _handleDeleteItem = event => {
    const { itemId } = this.props;
    _deleteItem(event, itemId);
  };
}
