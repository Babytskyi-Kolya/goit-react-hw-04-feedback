import React, { useState } from 'react';
import  Statistics  from '../statistic/statistic';
import Section from '../section/section'
import FeedbackOptions from '../feedBackOptions/feedbackOptions';
import Notification from '../notification/notification';
import { Card } from './feedback.Styled';


export const Feedback = () => {
    const [feedback, setFeedback] = useState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  
  
    const handleFeedback = feedbackType => {
      setFeedback(prevFeedback => ({
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      }));
    };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  
  const countPositiveFeedbackPercentage = () => {
    const allFeedback = countTotalFeedback();
    return allFeedback === 0 ? 0 : Math.round((good / allFeedback) * 100);
  }

    const { good, neutral, bad } = feedback;
    const total = countTotalFeedback();
    const positiveFeedback = countPositiveFeedbackPercentage();
    const options = Object.keys(feedback);
    
    return (
        <Card>
        <Section  title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
        </Section>

          {total === 0 ? (<Notification message="There is no feedback" />
          ) : (
          <Section>
           <Statistics
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={total} 
            positivePercentage={positiveFeedback}  
            />
      </Section>)}
        </Card>
    )
}
