import statusAction from '../constants/statusAction';
export const displayNoticationAction = (message, timeout = 500) => async (dispatch, getState) => {
    dispatch({
        type: statusAction.notification.DISPLAY_NOTIFICATION,
        payload: { message: message },
    });

    setTimeout(() => {
        dispatch({
            type: statusAction.notification.HIDDEN_NOTIFICATION,
        });
    }, timeout)
}
