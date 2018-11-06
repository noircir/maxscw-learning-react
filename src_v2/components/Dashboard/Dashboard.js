import React from 'react';
import styles from './Dashboard.css';
// import ValidationComponent from '../ValidationComponent/ValidationComponent';
// import CharComponent from '../CharComponent/CharComponent';

const dashboard = (props) => {

    // let charBoxes = null;
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

    // if (props.keyStrokeArr !== []) {
    //     // console.log(this.state.keyStrokeArr)
    //     charBoxes = (
    //         <div>
    //             {
    //                 props.keyStrokeArr.map((char, i) => {
    //                     return <CharComponent key={i} char={char} />
    //                 })
    //             }
    //         </div>
    //     )
    // }

    return (
        <div className={styles.Dashboard}>
            <h1>{ props.appTitle }</h1>

            {/* ==================
            SHOW INPUT LENGTH
            ==================   
            <span>
                <input type="text" onChange={event => props.inputLengthHandler(event)} />
                <p>The length of the input above is:  {props.inputLength}</p>
                {/* <ValidationComponent length={props.inputLength} />
                 {charBoxes} 
            </span> */}

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
