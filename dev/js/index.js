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
// Provider will be the new root component, Under which the App component will reside.
// Store will be passed as a property to provider to make it 
// available throughout the application.

// To make data available to components, We need container.
// Component is a piece of dumb html.
// Container is a component hooked up with a store.	


ReactDOM.render(
	<Provider store= {store}>
		<App />
	</Provider>
	, document.getElementById('root'));