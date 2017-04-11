/*
 combineReducers is a function that is used to combine all reducers and make one object.
*/
import { combineReducers } from "redux";
import UserReducer from "./reducer-users";

export const allReducers = combineReducers({
	users: UserReducer
});