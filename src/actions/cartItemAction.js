import statusAction from "../constants/statusAction";
import { patchCartItem } from "../service/cartService";

export const changeCartItemAction = (id, amountChange) => async (dispatch, getState) => {

    const data = await patchCartItem(id, amountChange);
    dispatch({
        type: statusAction.cart.CART_FETCH,
        payload: data,
    });


}