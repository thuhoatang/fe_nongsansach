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
    if (data !== false) {

        dispatch({
            type: statusAction.auth.SIGN_IN,
            payload: data,
        });

    }
    console.log(data);

}