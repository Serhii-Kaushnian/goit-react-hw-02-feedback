import React, { Component } from 'react';
import { ComponentWrapper } from './Section.styled';
import PropTypes from 'prop-types';

export default class Section extends Component {
  render() {
    return (
      <ComponentWrapper>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </ComponentWrapper>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
