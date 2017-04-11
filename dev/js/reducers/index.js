/*
 combineReducers is a function that is used to combine all reducers and make one object.
*/
import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-acive-user';

const allReducers = combineReducers({
	users: UserReducer,
	activeUser: ActiveUserReducer
});

export default allReducers;