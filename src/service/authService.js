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

export const checkAuth = async (data = {}) => {
    try {
        const res = await httpRequest.get('check',);
        return res;

    } catch (error) {
        console.log(error);

    }
};

export const signOut = async (data = {}) => {
    try {
        const res = await httpRequest.post('log_out', {
            data: data
        });
        return res;
    } catch (error) {
        console.log(error);

    }
};