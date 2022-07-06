import React, { Component } from 'react';
import { List } from './List/';
import { Container } from './Container/';
import { birthdayData } from './data';
import css from './App.module.css';

class App extends Component {
  state = {
    birthdays: [],
  };

  componentDidMount() {
    this.setState({
      birthdays: [...birthdayData],
    });
  }

  onRemoveButtonClick = () => {
    this.setState({
      birthdays: [],
    });
  };

  render() {
    const { birthdays } = this.state;
    return (
      <main>
        <section className={css.section}>
          <Container>
            <List birthdays={birthdays} title="Birthdays today: " />
            <button
              className={css.ClearButton}
              onClick={this.onRemoveButtonClick}
            >
              Clear the list
            </button>
            <p className={css.projectDescription}>
              This project focused on basic class components that have some
              state, which is handled via the onClick handler. Computed
              properties
            </p>
          </Container>
        </section>
      </main>
    );
  }
}

export default App;
