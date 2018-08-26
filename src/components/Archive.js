import React, {Component} from 'react';

class Archive extends Component{
    render() {
        return (
            <section className="col-md-4">
                <div className="panel panel-success ">
                    <div className="panel-heading">
                        Archived
                    </div>
                    <div className="panel-body">
                        <ul className="list-group" id="archivedList"></ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Archive;