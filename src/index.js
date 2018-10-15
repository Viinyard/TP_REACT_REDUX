import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



//ReactDOM.render(<TableCost />, document.getElementById('root'));
