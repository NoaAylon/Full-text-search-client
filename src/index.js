import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import './style.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));

serviceWorker.unregister();
