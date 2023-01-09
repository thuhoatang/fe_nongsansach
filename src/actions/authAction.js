import statusAction from '../constants/statusAction';
import { checkAuth, signIn, signOut } from '../service/authService';

export const signInAction = (values) => async (dispatch, getState) => {
    const data = await signIn(values);
    console.log(data);
    if (data.error) {

        dispatch({
            type: statusAction.auth.SIGN_IN,
            payload: { error: data.error },
        });
        return false;
    } else {
        dispatch({
            type: statusAction.auth.SIGN_IN,
            payload: data.user,
        });
        dispatch({
            type: statusAction.cart.CART_FETCH,
            payload: data.cart,
        });
        return true;

    }

}

export const checkAuthAction = () => async (dispatch, getState) => {
    const data = await checkAuth();
    if (data.error !== false) {
        dispatch({
            type: statusAction.auth.SIGN_IN,
            payload: data.profile,
        });
        dispatch({
            type: statusAction.cart.CART_FETCH,
            payload: data.cart,
        });
    } else {
        dispatch({
            type: statusAction.auth.SIGN_IN,
            payload: { message: 'Chưa đăng nhập' },
        });

    }

}

export const logoutAction = () => async (dispatch, getState) => {
    dispatch({
        type: statusAction.spinner.CHANGE_STATUS,
        payload: true,
    });
    const data = await signOut();

    if (data.error !== false) {
        dispatch({
            type: statusAction.auth.SIGN_OUT,
        });
        dispatch({
            type: statusAction.cart.CART_FETCH,
            payload: { items: [], amount: 0 },
        });
    }

    dispatch({
        type: statusAction.spinner.CHANGE_STATUS,
        payload: false,
    });
}