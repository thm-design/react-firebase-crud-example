import React, { PureComponent } from 'react';

import { _deleteItem } from '../../API';

export default class PortfolioBox extends PureComponent {
  render() {
    const { href, imgSrc, text, isLoggedIn } = this.props;

    const deleteButton = isLoggedIn
      ? <button className="btn btn-danger" onClick={this._handleDeleteItem}>
          delete item
        </button>
      : null;

    return (
      <div className="col-md-3 portfolio-item">
        <a href={href} target="_blank">
          <img className="img-responsive" src={imgSrc} alt="" />
        </a>
        <p>
          {text}
        </p>
        {deleteButton}
      </div>
    );
  }

  _handleDeleteItem = event => {
    const { itemId } = this.props;
    _deleteItem(event, itemId);
  };
}
