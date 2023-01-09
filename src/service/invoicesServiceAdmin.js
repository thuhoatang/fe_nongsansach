import * as httpRequest from "../utils/httpRequest";

export const getInvoicesAdmin = async () => {
    try {
        const res = await httpRequest.get('admin/invoices', {
            params: {
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const chanStatusInvoice = async (id, data) => {
    try {
        const res = await httpRequest.post('admin/invoices/' + id, { data })
        return res;
    } catch (error) {
        console.log(error);

    }
}