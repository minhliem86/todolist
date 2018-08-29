import React, {Component} from 'react';
// import {connect} from 'react-redux';

class ListItems extends Component{
    render(){
        let eleItem = null;
        if(this.props.items){
            eleItem = this.props.items.map((e, index)=>
                <li className="list-group-item clearfix" key={e.id}>
                    {e.name}
                    <div>
                        <button className="btn btn-xs btn-danger">Remove</button>  <button className="btn btn-xs btn-success">Process</button>
                    </div>
                </li>
            )
        }

        return (
            <ul className="list-group" id='newList'>
                {eleItem}
            </ul>
        );
    }
}

export default ListItems;

