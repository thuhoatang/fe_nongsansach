import statusAction from '../constants/statusAction';
import { fetch } from '../service/categoryService'
export const fetchCategories = () => async (dispatch, getState) => {
    const data = await fetch();
    console.log(data);

    dispatch({
        type: statusAction.category.CATEGORY_FETCH,
        payload: data,
    });
}
