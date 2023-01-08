import * as httpRequest from "../utils/httpRequest";

export const payment = async (data) => {
    try {
        const res = await httpRequest.post('invoices', { data })
        return res;
    } catch (error) {
        console.log(error);

    }
}

export const getInvoices = async () => {
    try {
        const res = await httpRequest.get('invoices', {
            params: {
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getInvoiceSpecified = async (id) => {
    try {
        const res = await httpRequest.get('invoices/' + id, {
            params: {
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};