import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleFormAction} from "../../actions";

class Form extends Component{
    handleCloseForm(e){
        e.preventDefault();
        let {dispatch} = this.props;
        dispatch(toggleFormAction());
    }

    handleSubmitForm(e){
        e.preventDefault();

    }

    render(){
        return (
            <form className="form-group" id="newTaskForm" method="POST">
                <div className="input-group" >
                    <div className="input-group-addon" id="saveNewItem"><a href="">Save</a></div>
                    <div className="input-group-addon" id="cancel"><a href="#closeForm" onClick={this.handleCloseForm.bind(this)}>Cancel</a></div>
                    <input className="form-control" type="text" id="newItemInput" placeholder="New Item" ref="newList"/>
                </div>
            </form>
        )
    }
}

export default connect(function(state){
    return {
        toggleForm : state.toggleForm
    }
})(Form);