import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
