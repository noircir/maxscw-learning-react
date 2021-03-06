import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Dashboard from '../components/Dashboard/Dashboard';

class App extends Component {
  state = {
    persons: [
      { id: 'fsfs', name: 'Bob', age: 46 },
      { id: 'esygsherg', name: 'Dmitri', age: 15 },
      { id: 'dfgdfgsw', name: 'Connor', age: 32 }
    ], 
    showPersons: false,
    inputLength: 0,
    keyStrokeArr: []
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    // create a copy of the found person object:
    const personCopy = {
      ...this.state.persons[personIndex]
    }
    // Or:
    // const person = Object.assign({}, this.state.persons[personIndex]);
    personCopy.name = event.target.value;
    // create a copy of the state array of persons:
    const personsCopy = [...this.state.persons];
    personsCopy[personIndex]= personCopy;
    this.setState({ persons: personsCopy })
  }

  deletePersonHandler = (person) => {
    const personsCopy = [...this.state.persons]  // spread operator creates a copy of the original array
    personsCopy.splice(person, 1);
    this.setState({ persons: personsCopy })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons});
  }

  inputLengthHandler = (event) => {
    this.setState({ keyStrokeArr: [...event.target.value] })
    // console.log(this.state.keyStrokeArr)
    this.setState({ inputLength: event.target.value.length });
    // console.log(this.state.inputLength)
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <div className={styles.App}>
        <Dashboard 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          sloganChanged={this.inputLengthHandler}
          inputLength={this.state.inputLength}
          keyStrokeArr={this.state.keyStrokeArr} />
        { persons }
      </div>
    );
  }
}

export default App;
