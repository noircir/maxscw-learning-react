import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'fsfs', name: 'Bob', age: 46 },
      { id: 'esygsherg', name: 'Dmitri', age: 15 },
      { id: 'dfgdfgsw', name: 'Connor', age: 32 }
    ], 
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    // find array index of a person with this id:
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    // create a copy of the found person object:
    const person = {
      ...this.state.persons[personIndex]
    }
    // Or:
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // assign a new name to that copy person:
    person.name = event.target.value;
    // create a copy of the state array of persons:
    const persons = [...this.state.persons];
    // replace the old person with a new submitted one in that copy array:
    persons[personIndex]= person;
    // update state:
    this.setState({ persons })
  }

  deletePersonHandler = (personIndex) => {
    // If we splice the original state's array, we are mutating the state, 
    // which is a bad idea. Change state only with 'setState'.
    
    const persons = [...this.state.persons]  // spread operator creates a copy of the original array
    persons.splice(personIndex, 1);
    this.setState({ persons })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons});
  }

  render() {
    const style = {
      backgroundColor: 'rgba(173, 230, 147, 0.788)',
      font: 'inherit',
      border: '1px solid gray',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, i) => {
            return <Person
              key={person.id}
              click={this.deletePersonHandler.bind(person, i)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Create-React-App is running</h1>
        <h3>Building a React app from a boilerplate created by Facebook</h3>

        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle People
        </button>

        {/* What if we wanted to hide these rows of people when pressing the button above? */}
        { persons }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app!!'));
  }
}

export default App;
