import statusAction from "../constants/statusAction";

const initValue = [];


const cartReducer = (state = { items: [], amount: 0 }, action) => {
    switch (action.type) {
        case statusAction.cart.CART_FETCH:
            return action.payload

        default:
            return state;
    }
}

export default cartReducer;