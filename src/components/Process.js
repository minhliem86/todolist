import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../actions/usersAction';
import ListUsers from './ListUsers';

class Process extends Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        this.props.getUsers();
    }

    render() {
        return (
            <section className="col-md-4">
                <div className="panel panel-warning ">
                    <div className="panel-heading">
                        List User API
                    </div>
                    <div className="panel-body">
                        <ListUsers listUsers = {this.props.users.users}/>
                    </div>
                    <div className="panel-footer">
                        <form action="">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <button type="button" className="btn btn-primary">Create</button>
                                    </div>
                                    <input type="text" className="form-control" ref="name" id="validationCustomUsername"
                                           placeholder="Name" required/>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state){
    return {
        users: state.usersReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        getUsers: () => {
            dispatch(getUsers())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Process);