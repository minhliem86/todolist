import React from "react";

const ListUsers = (props) => {
    let eleUsers = null;
    if(props.listUsers){
        eleUsers = props.listUsers.map((ele, ind) =>{
            return (
                <li className="list-group-item" key={ele.id}>
                    {ele.name}
                    <div className="control-wrapper">
                        <button className="btn btn-warning btn-xs" onClick={() => props.handleEdit(ele.id)} >Edit</button> <button className="btn btn-danger btn-xs" onClick={() => props.handleRemoveUser(ele.id)}>Remove</button>
                    </div>
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

