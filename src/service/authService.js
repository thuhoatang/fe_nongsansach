import * as httpRequest from '../utils/httpRequest';
export const signIn = async (data = {}) => {
    try {
        const res = await httpRequest.post('sign_in', {
            data: data
        });
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);

    }
};

export const checkAuth = async (data = {}) => {
    try {
        const res = await httpRequest.get('check',);
        console.log(res);
        return res;

    } catch (error) {
        console.log(error);

    }
};