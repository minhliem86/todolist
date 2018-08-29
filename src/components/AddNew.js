import React, {Component} from 'react';
import Form from './addnews/Form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ToggleFormAction from '../actions/toggle_form';
// import ListItems from './ListItems';

class AddNew extends Component{

    handleToggleForm(e){
        e.preventDefault();
    }
    render() {
        // console.log(this.props.ListToDo);
        let control_form = null;
        if(this.props.toggleForm){
            control_form = <Form />;
        }else{
            control_form = <div className='new-item-header'>
                <span id="newHeading">New</span>
                <a href="#newItem" className="pull-right pencil" id="newListItem" onClick={() => this.props.ToggleFormAction()} >&#9783;</a>
            </div>;
        }

        return (
            <section className="col-md-4">
                <div className="panel panel-danger ">
                    <div className="panel-heading">
                        {control_form}
                    </div>
                    <div className="panel-body">
                        {/*<ListItems items={this.props.items}/>*/}
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state){
    return {
        toggleForm: state.toggleForm
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        ToggleFormAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);