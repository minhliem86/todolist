import React, {Component} from 'react';

class Process extends Component{
    render() {
        return (
            <section className="col-md-4">
                <div className="panel panel-warning ">
                    <div className="panel-heading">
                        In Progress
                    </div>
                    <div className="panel-body">
                        <ul className="list-group" id="currentList"></ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Process;