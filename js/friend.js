'use strict';

//  use an object literal for embeded styling
const friendStyle = {
    
}


//  Passing simple props to the component
const Friend = (props) => {
    return (
        <div style={friendStyle}>
            <img src={props.avatar}/>
            <div>{props.firstName} {props.lastName}</div>
            <div>{props.email}</div>
        </div>
    );
}