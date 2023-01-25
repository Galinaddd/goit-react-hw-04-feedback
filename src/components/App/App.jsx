import { Component } from 'react';
import { Container } from './App.styled';

import {
  FeedbackOptions,
  FeedbackStatistics,
  Notification,
  Section,
} from '../FeedbackWidget';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateUpdate = key => {
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? ((this.state.good / total) * 100).toFixed(0) : 0;
  };

  render() {
    const { state, countPositiveFeedbackPercentage, countTotalFeedback } = this;
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={this.stateUpdate}
          />
        </Section>
        <Section title="Statistic">
          {countTotalFeedback() ? (
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}
