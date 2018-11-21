'use strict';

//  use an object literal for embeded styling
const greetingStyle = {
    color: 'blue'
}


//  Passing simple props to the component
const Greeting = (props) => {
    return <div style={greetingStyle}>Hello {props.name}</div>;
}