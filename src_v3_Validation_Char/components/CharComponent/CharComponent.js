import React from 'react';

const charComponent = (props) => {
    const style = {
        display: 'inline-block', 
        padding: '16px',
        textAlign: 'center',
        margin: '12px',
        border: '1px solid black'
    }

    return (
        <div style={style}>
            <p> {props.char} </p>
        </div>
    )
}

export default charComponent;