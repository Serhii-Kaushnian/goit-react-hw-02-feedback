import React, { Component } from 'react';
import shortid from 'shortid';
import { StatisticsWrapper, StatisticsList, Accent } from './Statistics.styled';
import PropTypes from 'prop-types';

export default class Statistics extends Component {
  render() {
    this.propsValues = Object.values(this.props.state);
    this.propsNames = Object.keys(this.props.state);
    return (
      <StatisticsWrapper>
        <StatisticsList>
          {this.propsValues.map((value, index) => {
            return (
              <li key={shortid.generate()}>
                <Accent>{this.propsNames[index]}</Accent> : {value}
              </li>
            );
          })}
          <li key={shortid.generate()}>
            <Accent>Total</Accent> :{this.props.total()}
          </li>
          <li key={shortid.generate()}>
            <Accent>Positive feedback</Accent> :{' '}
            {this.props.positivePercentage()}%
          </li>
        </StatisticsList>
      </StatisticsWrapper>
    );
  }
}

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }),
};
