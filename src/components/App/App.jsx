import React, { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';
import { Feedback } from './App.styles';
export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onStateChange = prevState => {
    this.setState(
      {
        [prevState.target.name]: this.state[prevState.target.name] + 1,
      },
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };
  countTotalFeedback = () => {
    const totalFeedbackValue = Object.values(this.state);
    let total = totalFeedbackValue.reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const statsAmount = this.countTotalFeedback()
      ? Math.floor((this.state.good * 100) / this.countTotalFeedback())
      : 0;
    return statsAmount;
  };
  render() {
    return (
      <Feedback>
        <Section title="Please leave Your feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onStateChange}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              state={this.state}
              total={() => {
                return this.countTotalFeedback();
              }}
              positivePercentage={() => {
                return this.countPositiveFeedbackPercentage();
              }}
            ></Statistics>
          ) : (
            'No feedback given'
          )}
        </Section>
      </Feedback>
    );
  }
}
