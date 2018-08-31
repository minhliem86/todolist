import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './MyApp';
import {Provider} from 'react-redux';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <MyApp />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
