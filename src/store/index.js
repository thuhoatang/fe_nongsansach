import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import cartReducer from "../reducers/cartReducer";
import categoriesReducer from "../reducers/categoriesReducer";
const store = combineReducers({
    categories: categoriesReducer,
    auth: authReducer,
    cart: cartReducer
});

export default store;