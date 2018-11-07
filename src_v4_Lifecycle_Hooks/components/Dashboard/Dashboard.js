import React from 'react';
import styles from './Dashboard.css';
import ValidationComponent from '../ValidationComponent/ValidationComponent';

const dashboard = (props) => {
    let classes = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    
    if (props.persons.length <= 2) {
        classes.push(styles.red); // classes = ['red']
    }

    if (props.persons.length <= 1) {
        classes.push(styles.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={styles.Dashboard}>
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
        </div>
    );
}

export default dashboard;
