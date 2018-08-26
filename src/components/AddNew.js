import React, {Component} from 'react';

class AddNew extends Component{
    render() {
        return (
            <section className="col-md-4">
                <div className="panel panel-danger ">
                    <div className="panel-heading">
                        <form className="form-group" id="newTaskForm">
                            <div className="input-group" >
                                <div className="input-group-addon" id="saveNewItem"><a href="">Save</a></div>
                                <div className="input-group-addon" id="cancel"><a href="">Cancel</a></div>
                                <input className="form-control" type="text" id="newItemInput" placeholder="New Item"/>
                            </div>
                        </form>
                        <div className='new-item-header'>
                            <span id="newHeading">New</span>
                            <a href="#newItem" className="pull-right pencil" id="newListItem">&#9783;</a>
                        </div>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group" id='newList'></ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default AddNew;