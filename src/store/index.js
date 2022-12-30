import { combineReducers } from "redux";
import categoriesReducer from "../reducers/categoriesReducer";
const store = combineReducers({
    categories: categoriesReducer
});

export default store;