import * as httpRequest from '../utils/httpRequest';
export const checkReview = async (id) => {
    try {
        const res = await httpRequest.get('reviews/check', {
            params: { id: id }
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const postReview = async (invoice_item_id, rating, content) => {
    try {
        const res = await httpRequest.post('reviews', {
            data: {
                invoice_item_id: invoice_item_id,
                rating: rating,
                content: content
            }
        })
        return res;
    } catch (error) {
        console.log(error);

    }
}

export const getReviewByProduct = async (data = {}) => {
    try {
        const res = await httpRequest.get('reviews/search', {
            params: { ...data }
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}