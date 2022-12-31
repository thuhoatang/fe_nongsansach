import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import categoriesReducer from "../reducers/categoriesReducer";
const store = combineReducers({
    categories: categoriesReducer,
    auth: authReducer
});

export default store;