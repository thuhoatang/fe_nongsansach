import * as httpRequest from '../utils/httpRequest';
export const searchProduct = async (params = {}) => {
    try {
        const res = await httpRequest.get('search', {
            params: params
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};