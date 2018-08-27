import React, {Component} from 'react';
import Form from './addnews/Form';
import {connect} from 'react-redux';
import {toggleFormAction} from '../actions';
import ListItems from './ListItems';

class AddNew extends Component{

    handleToggleForm(e){
        e.preventDefault();
        let {dispatch} = this.props;
        dispatch(toggleFormAction());
    }
    render() {
        let control_form = null;
        if(this.props.toggleForm){
            control_form = <Form />;
        }else{
            control_form = <div className='new-item-header'>
                <span id="newHeading">New</span>
                <a href="#newItem" className="pull-right pencil" id="newListItem" onClick={this.handleToggleForm.bind(this)}>&#9783;</a>
            </div>;
        }
        return (
            <section className="col-md-4">
                <div className="panel panel-danger ">
                    <div className="panel-heading">
                        {control_form}
                    </div>
                    <div className="panel-body">
                        <ListItems/>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(function(state){
    return {
        toggleForm : state.toggleForm
    }
})(AddNew);