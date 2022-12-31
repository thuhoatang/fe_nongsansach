import statusAction from '../constants/statusAction';
import { checkAuth, signIn } from '../service/authService';

export const signInAction = (values) => async (dispatch, getState) => {
    const data = await signIn(values);
    dispatch({
        type: statusAction.auth.SIGN_IN,
        payload: data,
    });
}

export const checkAuthAction = (values) => async (dispatch, getState) => {
    const data = await checkAuth();
    if (data.error !== false) {
        console.log(data !== false);
        dispatch({
            type: statusAction.auth.SIGN_IN,
            payload: data.profile,
        });
        dispatch({
            type: statusAction.cart.CART_FETCH,
            payload: data.cart,
        });
    }

}