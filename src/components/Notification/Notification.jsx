import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends Component {
  render() {
    return <h3>{this.props.message}</h3>;
  }
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
