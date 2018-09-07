import React from "react";

const ListUsers = (props) => {
    let eleUsers = null;
    if(props.listUsers){
        eleUsers = props.listUsers.map((ele, ind) =>{
            return (
                <li className="list-group-item" key={ele.id}>
                    {ele.name}
                </li>
            )
        })
    }

    return (
        <ul className="list-group" id="currentList">
            {eleUsers}
        </ul>
    )
}

export default ListUsers;

