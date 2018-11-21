'use strict';

//  use an object literal for embeded styling
const friendStyle = {
    padding: '10px',
    border: '1px solid #ddd'
}


//  Passing simple props to the component
const Friend = (props) => {
    const {friendData} = props;
    return (
        <div style={friendStyle}>
            <img src={friendData.avatar}/>
            <div>{friendData.firstName} {friendData.lastName}</div>
            <div>{friendData.email}</div>
        </div>
    );
}