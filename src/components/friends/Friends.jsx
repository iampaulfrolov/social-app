import React from "react"

const Friends = (props) => {

    let friendsElements = props.state.friends.map(f => <Friends name={f.name} avatar={f.avatar}/> );
    return (
        <div >
            { friendsElements }
        </div>

    )
};
export default Friends;
