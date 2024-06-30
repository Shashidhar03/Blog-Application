import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"
import App from './App.jsx';
import store from './store.js';
import { Provider } from 'react-redux';

// Render your root component to the DOM
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));