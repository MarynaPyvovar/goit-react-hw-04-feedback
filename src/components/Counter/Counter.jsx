import { useState } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Stats } from './Stats/Stats';
import { Notification } from './Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
}

export default function Counter() {
  const [state, setState] = useState(initialState);

  const countTotalFeedback = () => {
    const { good, neutral, bad, } = state;
    return (good + neutral + bad);
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = (state.good / total) * 100;
    return Number(result.toFixed(0));
  }

  const handleFeedback = (vote) => {
    setState(prev => ({
      ...prev,
      [vote]: prev[vote] + 1,
    }))
  }

  const total = countTotalFeedback();
  const positivePercent = countPositiveFeedbackPercentage();

  return <>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={Object.keys(state)} handler={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {!total ?
        <Notification message="There is no feedback :(" /> :
        <Stats
        good={state.good}
        neutral={state.neutral}
        bad={state.bad}
        total={total}
        positivePercent={positivePercent} />}
      </Section>
    </>
}