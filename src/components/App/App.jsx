import React, { Component } from 'react';
import { Container, MainTitle } from './App.styled';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onUpdateStatus = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotalFeadback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeadback();
    return good ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <MainTitle>Cafe Expresso</MainTitle>
        <Section title="Please leave feedback" shadow="true">
          <FeedbackOptions
            options={options}
            onUpdateStatus={this.onUpdateStatus}
          />
          <Section title="Statistics">
            {this.countTotalFeadback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeadback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Section>
      </Container>
    );
  }
}
