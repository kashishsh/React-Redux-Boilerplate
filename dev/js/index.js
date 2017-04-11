import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from "redux";

const store = createStore(); // Creating store for application
// The data that gets saved in the store is determined by the reducers.