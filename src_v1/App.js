import React, { Component } from 'react';
import styles from './App.css';
import './Person/Person.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

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

  // ====================
  // CHANGE NAME HANDLER     
  // ====================

  nameChangedHandler = (event, id) => {
    // find array index of a person with this id:
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    // create a copy of the found person object:
    const personCopy = {
      ...this.state.persons[personIndex]
    }
    // Or:
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // assign a new submitted name to that copy person:
    personCopy.name = event.target.value;
    // create a copy of the state array of persons:
    const personsCopy = [...this.state.persons];
    // update the copy array with a new submitted person:
    personsCopy[personIndex]= personCopy;
    // update state:
    this.setState({ persons: personsCopy })
  }

  // =======================
  // DELETE PERSON HANDLER     
  // =======================

  deletePersonHandler = (person) => {
    const personsCopy = [...this.state.persons]  // spread operator creates a copy of the original array
    personsCopy.splice(person, 1);
    this.setState({ persons: personsCopy })
  }

  // =======================
  // TOGGLE PERSONS HANDLER     
  // =======================

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons});
  }

  // =======================
  // LENGTH DISPLAY HANDLER     
  // =======================

  inputLengthHandler = (event) => {
    this.setState({ keyStrokeArr: [...event.target.value] })
    // console.log(this.state.keyStrokeArr)
    this.setState({ inputLength: event.target.value.length });
  }

  // =============================================
  // =============================================
  //                   RENDER     
  // =============================================
  // =============================================

  render() {
    // inline style rendering for the button
    // const style = {
    //   backgroundColor: 'rgba(173, 230, 147, 0.788)',
    //   font: 'inherit',
    //   border: '1px solid gray',
    //   padding: '8px',
    //   cursor: 'pointer'
    // }

    let persons = null;
    let charBoxes = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div >
          {
            this.state.persons.map((person) => {
              return <Person
                key={person.id}
                onDeletePerson={this.deletePersonHandler.bind(person)}
                name={person.name}
                age={person.age}
                changeName={(event) => this.nameChangedHandler(event, person.id)} 
                />
              }
            )
          }
        </div> 
      )

      // Change button color to red only if the list of people is displayed
      // style.backgroundColor ='red';

      // Even though 'Red' is available only some sub-selectors (in App.css file), 
      // it is available on 'styles' import. 
      btnClass = styles.Red;
      
    }

    if (this.state.keyStrokeArr !== []) {
      // console.log(this.state.keyStrokeArr)
      charBoxes = (
        <div>
          {
            this.state.keyStrokeArr.map((char, i) => {
              return <CharComponent key={i} char={char} />
            })
          }
        </div>
      )
    }
    
    // let classes = ['red', 'bold'].join(' ');  // red bold
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push(styles.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={styles.App}>
        <h1>Create-React-App is running</h1>

        {/* ==================
            SHOW INPUT LENGTH
            ==================   */}
        <span>
          <input type="text" onChange={event => this.inputLengthHandler(event)} />
          <p>The length of the input above is:  {this.state.inputLength}</p>
          <ValidationComponent length={this.state.inputLength} />
          {charBoxes}
        </span>
        
        {/* Dynamically assign styles to the paragraph */}
        <p className={classes.join(' ')}>Please notice the length of the list of people</p>

        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>
          Toggle People
        </button>

        {/* ============
            TOGGLE
            ============ */}
        { persons }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app!!'));
  }
}

export default App;
