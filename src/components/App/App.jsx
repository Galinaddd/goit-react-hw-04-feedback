import { useState } from 'react';
import { Container } from './App.styled';

import {
  FeedbackOptions,
  FeedbackStatistics,
  Notification,
  Section,
} from '../FeedbackWidget';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleStateUpdate = key => {
    switch (key) {
      case 'good':
        setGood(prev => prev + 1);
        return;
      case 'neutral':
        setNeutral(prev => prev + 1);
        return;
      case 'bad':
        setBad(prev => prev + 1);
        return;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const feedback = { good, neutral, bad };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? ((good / total) * 100).toFixed(0) : 0;
  };

  return (
    <Container>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleStateUpdate}
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
};
