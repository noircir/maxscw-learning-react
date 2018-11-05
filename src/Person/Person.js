import React from 'react';
import Radium from 'radium';

// The App passed down props as state, but this "dumb" component doesn't care 
// what these props are and what they represent.

const person = ( props ) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
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

export default Radium(person);