import React, {Component} from 'react';
import { Container, MainTitle } from './App.styled';
import { Section } from 'components/Section';
import {FeedbackOptions} from 'components/FeedbackOptions'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  }

onUpdateStatus = (option) => {
this.setState((prevState)=> ({
  [option]: prevState[option] + 1,
}))
}



  render() {
    const options = Object.keys(this.state);
    return (<Container>
      <MainTitle>Cafe Expresso</MainTitle>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onUpdateStatus={this.onUpdateStatus}/>
      </Section>
    </Container>)
  };
};
