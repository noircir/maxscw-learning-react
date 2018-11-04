import React from 'react';

// The App passed down props as state, but this component doesn't care HOW, 
// as long as some props were passed down to it.

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
            {/* Nice!  A way to pass any inner HTML */}
            <p>{props.children}</p>

            {/* Two-way binding: on change in the input box, all three names change.
            But also the value in the input boxes are set to the names tht are in the state. */}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;