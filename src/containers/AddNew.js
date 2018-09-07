import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {openFormAction, removeItemAction} from '../actions';
import {ListItems} from '../components/ListItems';
import Form from './FormAdding';

class AddNew extends Component{
    handleOpenForm(e){
        e.preventDefault();
        this.props.openFormAction();
    }

    render() {
        // console.log(this.props.items.arr);
        let control_form = null;
        if(this.props.status.isShow){
            control_form = <Form  />;
        }else{
            control_form = <div className='new-item-header'>
                <span id="newHeading">New</span>
                <a href="#open" className="pull-right pencil" id="newListItem" onClick={this.handleOpenForm.bind(this)} >&#9783;</a>
            </div>;
        }

        return (
            <section className="col-md-4">
                <div className="panel panel-danger ">
                    <div className="panel-heading">
                        {control_form}
                    </div>
                    <div className="panel-body">
                        <ListItems items={this.props.items.arr} handleRemoveItem = {this.props.removeItemAction}/>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state){
    return {
        status: state.toggleReducer,
        items: state.itemReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        openFormAction,
        removeItemAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);