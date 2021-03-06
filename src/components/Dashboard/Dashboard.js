import React from 'react';
import styles from './Dashboard.css';
import ValidationComponent from '../ValidationComponent/ValidationComponent';
import Aux from '../../hoc/Aux';

const dashboard = (props) => {
    let classes = [];
    let btnClass = styles.Button;
    if (props.showPersons) {
        btnClass = [styles.Button, styles.Red].join(' ');
    }
    
    if (props.persons.length <= 2) {
        classes.push(styles.red); // classes = ['red']
    }

    if (props.persons.length <= 1) {
        classes.push(styles.bold); // classes = ['red', 'bold']
    }

    return (
        <Aux>
            <h1>{ props.appTitle }</h1>
            {/* The first component receiving the result of 'onChange' event, sends the event up the chain. */}
            <ValidationComponent
                sloganChanged={(event) => props.sloganChanged(event)}
                inputLength={props.inputLength}
                keyStrokeArr={props.keyStrokeArr}
            />
            {/* Dynamically assign styles to the paragraph */}
            <p className={classes.join(' ')}>Please notice the length of the list of people</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle People
            </button>
        </Aux>
    );
}

export default dashboard;
