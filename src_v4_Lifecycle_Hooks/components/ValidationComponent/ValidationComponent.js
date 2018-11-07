import React from 'react';
import CharComponent from '../CharComponent/CharComponent';

const validationComponent = (props) => {
    let charBoxes = null;
    if (props.keyStrokeArr !== []) {
        charBoxes = props.keyStrokeArr.map((char, i) => <CharComponent key={i} char={char} />)
    }

    return (
        <div>
            <input type="text" onChange={ props.sloganChanged } />
            <p>The length of the input above is:  {props.inputLength}</p>
            <p> {props.inputLength < 5 ? 'Text too short' : 'Text long enough'} </p>
            {charBoxes}
        </div>
    )
}

export default validationComponent;