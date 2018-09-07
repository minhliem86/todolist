import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {closeFormAction, addItemAction} from '../actions';
const uuidv4 = require('uuid/v4');

class FormAdding extends  Component{
    handleSubmit(e){
        e.preventDefault();
        let value = this.refs.item_name.value;
        let data = {
            id: uuidv4(),
            name: value,
        }
        if(value){
            this.props.addItemAction(data);
        }
        this.props.closeFormAction();
    }
    render(){
        return (
            <form className=" clearfix" id="newTaskForm" onSubmit={this.handleSubmit.bind(this)} >
                <div className="form-group">
                    <input className="form-control" type="text" id="newItemInput" placeholder="New Item" ref="item_name" />
                </div>
                <div className="pull-right">
                    <button type="submit" className="btn btn-primary">Save</button> <button type="button" className="btn btn-secondary" onClick={this.props.closeFormAction}>Cancel</button>
                </div>
            </form>
        )
    }
}

function mapDispatchToProp(dispatch){
    return bindActionCreators({
        closeFormAction,
        addItemAction
    }, dispatch);
}

export default connect(null, mapDispatchToProp)(FormAdding);