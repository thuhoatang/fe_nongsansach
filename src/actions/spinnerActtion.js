import statusAction from "../constants/statusAction";

export const changeStatusSpinner = (data) => async (dispatch, getState) => {
    dispatch({
        type: statusAction.spinner.CHANGE_STATUS,
        payload: data,
    });
}
