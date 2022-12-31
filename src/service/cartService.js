import * as httpRequest from '../utils/httpRequest';


export const patchCartItem = async (id = 0, amountChange) => {
    try {
        const res = await httpRequest.patch(`cart_item/${id}`, {
            data: { quantity: amountChange }
        });
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);

    }
}