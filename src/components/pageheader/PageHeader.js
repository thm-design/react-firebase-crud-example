import React, { Component } from 'react';

export default class PageHeader extends Component {
  render() {
    return (
      <div className="col-lg-12">
        <h1 className="page-header">
          Page Heading
          <small>Secondary Text</small>
        </h1>
      </div>
    );
  }
}
