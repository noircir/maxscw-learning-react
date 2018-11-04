import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Bob', age: 46 },
      { name: 'Dmitri', age: 15 },
      { name: 'Connor', age: 32 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
        { name: newName, age: 46 },
        { name: 'Guillermo	Lambert', age: 15 },
        { name: 'Delia	Harris', age: 32 }
      ]
    })
  }

  nameChangedHanler = (event) => {
    this.setState({
      persons: [
        { name: 'Bruce	Thompson', age: 46 },
        { name: event.target.value, age: 15 },
        { name: 'Delia	Harris', age: 32 }
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Create-React-App is running</h1>
        <h3>Building a React app from a boilerplate created by Facebook</h3>

        <button onClick={() => this.switchNameHandler('Tom Hanks')}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Angela Merkel')}
          changed={this.nameChangedHanler}>My hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app!!'));
  }
}

export default App;
