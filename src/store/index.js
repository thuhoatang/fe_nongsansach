import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import cartReducer from "../reducers/cartReducer";
import categoriesReducer from "../reducers/categoriesReducer";
import spinnerReducer from "../reducers/spinnerReducer";
const store = combineReducers({
    categories: categoriesReducer,
    auth: authReducer,
    cart: cartReducer,
    spinner: spinnerReducer
});
export default store;