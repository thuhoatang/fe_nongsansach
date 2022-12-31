import * as httpRequest from '../utils/httpRequest';
export const signIn = async (data = {}) => {
    try {
        const res = await httpRequest.post('sign_in', {
            data: data
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};