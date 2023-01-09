import statusAction from "../constants/statusAction";

const initValue = { status: false, message: '' };


const notificationReducer = (state = initValue, action) => {
    switch (action.type) {
        case statusAction.notification.DISPLAY_NOTIFICATION:
            return { status: true, message: action.payload.message }
        case statusAction.notification.HIDDEN_NOTIFICATION:
            return { status: false, message: '' }
        default:
            return state;
    }
}

export default notificationReducer;