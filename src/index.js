import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ul><li>one</li><li>two</li><li>three</li></ul>, document.getElementById('root'));

serviceWorker.unregister();
