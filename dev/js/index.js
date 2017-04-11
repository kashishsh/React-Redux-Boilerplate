import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import App from './components/App';

const store = createStore(allReducers); // Creating store for application.
// Store is one big javascript object.
// We can pass only one object in store.
// The data that gets saved in the store is determined by the reducers.

// Provider makes data of stores available to all components

ReactDOM.render(<App />, document.getElementById('root'));