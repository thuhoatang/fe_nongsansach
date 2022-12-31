import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    validateStatus: function (status) {
        if (status === 401 && '/signin' !== window.location.pathname)
            window.location.href = "/signin";
        if (status < 500) return true;

    }
});

export const get = async (path, options = {}) => {
    const api_token = localStorage.getItem('api_token');
    let parmsPro = { ...options.params, api_token };
    let optionsPro = { ...options, params: parmsPro };

    const response = await httpRequest.get(path, optionsPro);
    return response.data;
};

export const post = async (path, options = {}) => {
    const api_token = localStorage.getItem('api_token');
    let data = { ...options.data, api_token, '_method': 'post' };
    let optionsPro = { ...options, data: data };


    const response = await httpRequest.post(path, data);
    return response.data;
};

export default httpRequest;
