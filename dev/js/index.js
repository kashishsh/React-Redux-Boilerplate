import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from "redux";
import allReducers from "./reducers";

const store = createStore(); // Creating store for application.
// Store is one big javascript object.
// We can pass only one object in store.
// The data that gets saved in the store is determined by the reducers.