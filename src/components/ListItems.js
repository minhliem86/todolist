import React from 'react';

export const ListItems = (props) => {
    let eleItem = null;
    if(props.items){
        eleItem = props.items.map((e, index)=>
            <li className="list-group-item clearfix" key={e.id}>
                {e.name}
                <div>
                    <button className="btn btn-xs btn-danger" onClick={() => props.handleRemoveItem(e.id)}>Remove</button>  <button className="btn btn-xs btn-success">Process</button>
                </div>
            </li>
        )
    }
    return(
        <ul className="list-group" id='newList'>
            {eleItem}
        </ul>
    );
}