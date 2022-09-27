import React, { Component } from 'react';
import { StatisticsWrapper, StatisticsList, Accent } from './Statistics.styled';
import PropTypes from 'prop-types';

export default class Statistics extends Component {
  render() {
    return (
      <StatisticsWrapper>
        <StatisticsList>
          <li>
            <Accent>Good</Accent>:{this.props.good}😊
          </li>
          <li>
            <Accent>Neutral</Accent>:{this.props.neutral}🤨
          </li>
          <li>
            <Accent>Bad</Accent>:{this.props.bad}☹️
          </li>
          <li>
            <Accent>Total</Accent> :{this.props.total()}
          </li>
          <li>
            <Accent>Positive feedback</Accent> :
            {this.props.positivePercentage()}%
          </li>
        </StatisticsList>
      </StatisticsWrapper>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};
