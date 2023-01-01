import statusAction from "../constants/statusAction";

const initValue = null;


const authReducer = (state = initValue, action) => {
    switch (action.type) {
        case statusAction.auth.SIGN_IN:
            localStorage.setItem('api_token', action.payload.api_token);

            const { api_token, ...data } = action.payload;
            return data;
        default:
            return state;
    }
}

export default authReducer;