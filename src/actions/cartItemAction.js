import statusAction from "../constants/statusAction";
import { addCartItem, patchCartItem } from "../service/cartService";

export const changeCartItemAction = (id, amountChange) => async (dispatch, getState) => {
    dispatch({
        type: statusAction.spinner.CHANGE_STATUS,
        payload: true,
    });

    const data = await patchCartItem(id, amountChange);
    dispatch({
        type: statusAction.cart.CART_FETCH,
        payload: data,
    });
    dispatch({
        type: statusAction.spinner.CHANGE_STATUS,
        payload: false,
    });


}

export const addCartItemAction = (id, amount) => async (dispatch, getState) => {
    dispatch({
        type: statusAction.spinner.CHANGE_STATUS,
        payload: true,
    });
    const data = await addCartItem(id, amount);
    if (data?.Message === undefined) {
        dispatch({
            type: statusAction.cart.CART_FETCH,
            payload: data,
        });
        dispatch({
            type: statusAction.cart.EXPANDED,
            payload: true,
        });
    } else {

    }

    dispatch({
        type: statusAction.spinner.CHANGE_STATUS,
        payload: false,
    });

}

export const expandedCartAction = (data) => {

    return {
        type: statusAction.cart.EXPANDED,
        payload: data,
    };


}


