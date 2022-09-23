import React, { Component } from 'react';
import shortid from 'shortid';
import {
  FeedbackOptionsWrapper,
  OptionList,
  OptionButton,
} from './Feedback.styled';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  propsNames = Object.keys(this.props.options);
  propsValues = Object.values(this.props.options);

  render() {
    return (
      <FeedbackOptionsWrapper>
        <OptionList>
          {console.log(this.props.options)}
          {this.propsNames.map(value => {
            return (
              <li key={shortid.generate()}>
                <OptionButton
                  name={value}
                  type="button"
                  onClick={this.props.onLeaveFeedback}
                >
                  {value}
                </OptionButton>
              </li>
            );
          })}
        </OptionList>
      </FeedbackOptionsWrapper>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }),
};
