import statusAction from "../constants/statusAction";

const initValue = [];


const categoriesReducer = (state = initValue, action) => {
    switch (action.type) {
        case statusAction.category.CATEGORY_FETCH:
            return action.payload

        default:
            return state;
    }
}

export default categoriesReducer;