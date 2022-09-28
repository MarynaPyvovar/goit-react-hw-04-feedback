import { useState } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Stats } from './Stats/Stats';
import { Notification } from './Notification/Notification';

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = (good / total) * 100;
    return Number(result.toFixed(0));
  }

  const handleFeedback = (vote) => {
    switch (vote) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      default:
        setGood(0)
        setNeutral(0)
        setBad(0)
    }
  }

  const total = countTotalFeedback();
  const positivePercent = countPositiveFeedbackPercentage();

  return <>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} handler={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {!total ?
        <Notification message="There is no feedback :(" /> :
        <Stats
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercent={positivePercent} />}
      </Section>
    </>
}