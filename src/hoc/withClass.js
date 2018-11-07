import React,  {Component} from 'react';

// Passing unknown props.
//========================

// this is a regular javascript function.
// It doesn't qualify as a component => the file name starts with small letter.

// Nice way to pass on props with a spread operator.
// const withClass = (WrappedComponent, className) => {

//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

// Wrapping a stateful component, if you need to use lifecycle hooks 
// (like waiting for a user from a http request).

const withClass = (WrappedComponent, className) => {

    // No class name, this creates a class on demand (on the fly) => a class factory.
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
    
}

export default withClass;