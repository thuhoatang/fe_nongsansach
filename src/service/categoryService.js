import * as httpRequest from '../utils/httpRequest';

export const fetch = async () => {
    try {
        const res = await httpRequest.get('categories', {

        });
        return res;
    } catch (error) {
        console.log(error);
    }
};