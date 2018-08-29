import React, {Component} from 'react';
import {connect} from 'react-redux';

class Form extends Component{

    handleSubmitForm(e){
        e.preventDefault();

    }

    render(){
        return (
            <form className=" clearfix" id="newTaskForm" method="POST">
                <div className="form-group">
                    <input className="form-control" type="text" id="newItemInput" placeholder="New Item" ref="newList"/>
                </div>
                <div className="pull-right">
                    <button type="submit" className="btn btn-primary">Save</button> <button type="button" className="btn btn-secondary" >Cancel</button>
                </div>

            </form>
        )
    }
}

export default connect(function(state){
    return {

    }
})(Form);