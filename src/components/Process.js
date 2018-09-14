import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, createUser, removeUser} from '../actions/usersAction';
import ListUsers from './ListUsers';

class Process extends Component{
    componentDidMount(){
        this.props.getUsers();
    }

    handleSubmit(e){
        e.preventDefault();
        let name = this.refs.name.value;
        let username = this.refs.username.value;
        let email = this.refs.email.value;
        let phone = this.refs.phone.value;
        let data = {
            method : 'POST',
            body: JSON.stringify({
                id: 11,
                name,
                username,
                email,
                phone,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        this.props.addUsers(data);
        this.refs.name.value = '';
        this.refs.username.value = '';
        this.refs.email.value= '';
        this.refs.phone.value = '';
    }

    render() {
        return (
            <section className="col-md-4">
                <div className="panel panel-warning ">
                    <div className="panel-heading">
                        List User API
                    </div>
                    <div className="panel-body">
                        <ListUsers listUsers = {this.props.users.users} handleRemoveUser={this.props.removeUser}/>
                    </div>
                    <div className="panel-footer">
                        <h4>Add User</h4>
                        <form method="POST" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <input type="text" className="form-control" ref="name"
                                       placeholder="Name" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" ref="username"
                                       placeholder="UserName" required/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" ref="email"
                                       placeholder="Email" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" ref="phone"
                                       placeholder="Phone" required/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Create</button>
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
        },
        addUsers: (data) => {
            dispatch(createUser(data))
        },
        removeUser: id => {
            dispatch(removeUser(id))
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Process);