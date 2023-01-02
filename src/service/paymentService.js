import * as httpRequest from "../utils/httpRequest";

export const payment = async (data) => {
    try {
        const res = await httpRequest.post('invoices', { data })
        return res;
    } catch (error) {
        console.log(error);

    }
}