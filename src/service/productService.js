import * as httpRequest from '../utils/httpRequest';
export const getProduct = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getProductSpecified = async (product_id) => {
    try {
        const res = await httpRequest.get('products/' + product_id, {
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};