import React, { Component } from 'react';

import AddNew from './containers/AddNew';
import Process from './components/Process';
import Archive from './components/Archive';

class MyApp extends Component{
    render(){
        return (
            <div className="container">
                <div className="col-lg-12">
                    <AddNew/>
                    <Process/>
                    <Archive/>
                </div>
            </div>
        )
    }
}

export default MyApp;

