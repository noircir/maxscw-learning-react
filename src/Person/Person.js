import React from 'react';

// The App passed down props as state, but this component doesn't care HOW, 
// as long as some props were passed down to it.

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
            {/* Nice!  A way to pass any inner HTML */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
};

export default person;