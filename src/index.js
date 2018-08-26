import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './MyApp';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
