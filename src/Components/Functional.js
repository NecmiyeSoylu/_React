import React from 'react';
// Hocam bu arkadaşta functional component olyor

//keyword ise rfc
const UserApp=(props)=>
{
    return(
        <div >
            <h3>{props.title}</h3>
            <hr/>
        </div>
    );
}
export default UserApp;