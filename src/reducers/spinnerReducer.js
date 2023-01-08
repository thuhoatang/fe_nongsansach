import statusAction from "../constants/statusAction";

const initValue = { status: false };


const spinnerReducer = (state = initValue, action) => {
    switch (action.type) {
        case statusAction.spinner.CHANGE_STATUS:
            console.log(action.payload);
            return { status: action.payload }

        default:
            return state;
    }
}

export default spinnerReducer;