import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {closeFormAction} from '../actions';

class FormAdding extends  Component{
    render(){
        return (
            <form className=" clearfix" id="newTaskForm" >
                <div className="form-group">
                    <input className="form-control" type="text" id="newItemInput" placeholder="New Item" />
                </div>
                <div className="pull-right">
                    <button type="submit" className="btn btn-primary">Save</button> <button type="button" className="btn btn-secondary" onClick={() => this.props.closeFormAction()}>Cancel</button>
                </div>
            </form>
        )
    }
}

function mapDispatchToProp(dispatch){
    return bindActionCreators({
        closeFormAction
    }, dispatch);
}

export default connect(null, mapDispatchToProp)(FormAdding);