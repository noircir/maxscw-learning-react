import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props)
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js Inside componentWillReceiveProps', nextProps)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js Inside shouldComponentUpdate', nextProps, nextState)
    //     // the next line will always be True though, because these are two
    //     // different objects: this.props.persons is a state, and 
    //     // nextProps.persons array was created by making a copy with spread 
    //     // operator in 'deletePersonHandler'.

    //     // BUT in other components it may be potentially a good tool to stop execution...
    //     // But they only work with stateful components, and it goes against the mantra
    //     // "try to use stateless components as much as possible"

    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js Inside componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js Inside componentDidUpdate')
    }

    render() {
        console.log('[Persons.js] inside render()')
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} 
            />
        });
    }
} 

export default Persons;