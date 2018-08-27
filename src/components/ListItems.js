import React, {Component} from 'react';
import Item from '../mocks/item';
import {connect} from 'react-redux';
import ListToDo from "../reducers/ListToDo";

class ListItems extends Component{
    render(){
        let eleItem = Item.map((e, index)=>
            <li className="list-group-item clearfix" key={e.id}>
                {e.name}
                <div>
                    <button className="btn btn-xs btn-danger">Remove</button>  <button className="btn btn-xs btn-success">Process</button>
                </div>
            </li>
        )
        return (
            <ul className="list-group" id='newList'>
                {eleItem}
            </ul>
        );
    }
}

export default connect(function(state){
    return {
        items : state.ListToDo
    }
})(ListItems);