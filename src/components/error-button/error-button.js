import React, { Component } from 'react';

import './error-button.css';

export default class ErrorButton extends Component {
  state = {
    renderError: false,
  };

  throwError = () => {
    this.setState({ renderError: true });
  };
  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={this.throwError}
      >
        Throw Error
      </button>
    );
  }
}
