'use strict';

//  use an object literal for embeded styling
const friendListStyle = {
    padding: '10px',
    border: '1px solid #ddd'
}


//  Passing simple props to the component
const FriendList = (props) => {
    const {friends} = props;
    const friendComps = friends.map((f, idx) => 
        <li key={idx}><Friend friendData={f}/></li>
    );
    return (
        <ul style={friendListStyle}>
            {friendComps}    
        </ul>
    );
}