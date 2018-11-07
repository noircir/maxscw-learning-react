import React, { PureComponent } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Dashboard from '../components/Dashboard/Dashboard';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props)
    // Can have state inside the constructor, though it's an older way
    this.state = {
      persons: [
        { id: 'fsfs', name: 'Bob', age: 46 },
        { id: 'esygsherg', name: 'Dmitri', age: 15 },
        { id: 'dfgdfgsw', name: 'Connor', age: 32 }
      ],
      showPersons: false,
      inputLength: 0,
      keyStrokeArr: []
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // This is how to stop unnecessary lifecycle execution.
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js Inside shouldComponentUpdate', nextProps, nextState)
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons ||
  //     nextState.keyStrokeArr !== this.state.keyStrokeArr ||
  //     nextState.inputLength !== this.state.inputLength;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js Inside componentDidUpdate')
  }

  // state = {
  //   persons: [
  //     { id: 'fsfs', name: 'Bob', age: 46 },
  //     { id: 'esygsherg', name: 'Dmitri', age: 15 },
  //     { id: 'dfgdfgsw', name: 'Connor', age: 32 }
  //   ], 
  //   showPersons: false,
  //   inputLength: 0,
  //   keyStrokeArr: []
  // }

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
    console.log('[App.js] inside render()')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <div className={styles.App}>
        <button 
          onClick={() => {this.setState({showPersons: true})}}>
          Show Persons
        </button>
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
