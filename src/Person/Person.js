import React from 'react';
import styles from './Person.css';

// The App passed down props as state, but this "dumb" component doesn't care 
// what these props are and what they represent.

const person = ( props ) => {
    // Testing Error Boundary.

    // const rnd = Math.random();

    // if (rnd > 0.7 ) {
    //     throw new Error ('somehting went wrong: random number > 0.7');
    // }

    return (
        <div className={styles.Person}>
            <p onClick={props.onDeletePerson}>
                I'm {props.name} and I'm {props.age} years old.
            </p>

            {/* Nice!  A way to pass any inner HTML */}
            <p>{props.children}</p>

            {/* Two-way binding: 'onChange' sends updated info to the root; 
            the root sends back the updated state and sets it as 'value') */}
            <input type="text" onChange={props.changeName} value={props.name} />
        </div>
    )
};

export default person;