import React, { Component } from 'react';
import styles from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props)

    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }
    componentWillUnmount() {
        console.log('[Person.js] Inside componentWillUnmount()');
    }

    render() {
        console.log('[Person.js] inside render()')
        return (
            <Aux>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age} years old.
            </p>

                {/* Nice!  A way to pass any inner HTML */}
                <p>{this.props.children}</p>

                {/* Two-way binding: 'onChange' sends updated info to the root; 
            the root sends back the updated state and sets it as 'value') */}
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }
}

export default withClass(Person, styles.Person);