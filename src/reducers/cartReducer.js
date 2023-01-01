import statusAction from "../constants/statusAction";

const initValue = { items: [], amount: 0, expanded: false };


const cartReducer = (state = initValue, action) => {
    switch (action.type) {
        case statusAction.cart.EXPANDED:

            return { ...state, expanded: action.payload ?? (!state.expanded) }
        case statusAction.cart.CART_FETCH:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

export default cartReducer;